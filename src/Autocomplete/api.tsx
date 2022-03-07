import { useState, useEffect, useReducer } from "react";
import { FetchUsers, UseAPIUsersGet, UsersFetchReducer } from "./typings/api";
import { User } from "./typings/types";

export const baseUrl = `https://randomuser.me/api/`;
export const useAPIUsersGet: UseAPIUsersGet = () => {
  const [pageNum, setPageNum] = useState(1);

  const [fetchAgain, setFetchAgain] = useState(false);

  const usersFetchReducer: UsersFetchReducer = (state, action) => {
    switch (action.type) {
      case "REQUEST":
        return { ...state, isLoading: true, isError: false };
      case "SUCCESS":
        return {
          ...state,
          isLoading: false,
          users: [...state.users, ...action.payload],
        };
      case "FAILURE":
        return { ...state, isLoading: false, isError: true };
    }
  };

  const initialUseReducerState = {
    users: [],
    isError: false,
    isLoading: false,
  };

  const [useAPIstate, dispatch] = useReducer(
    usersFetchReducer,
    initialUseReducerState
  );

  useEffect(() => {
    const fetchUsers: FetchUsers = async ({ signal, isActive, pageNum }) => {
      setFetchAgain(false);
      dispatch({ type: "REQUEST" });

      const api = `${baseUrl}?page=${pageNum}&results=20&seed=masterhub`;

      try {
        const resp = await fetch(api, { signal });

        if (resp.ok) {
          const data: { results: User[] } = await resp.json();
          if (isActive) {
            dispatch({
              type: "SUCCESS",
              payload: data.results,
            });
          }
        } else {
          throw new Error(resp.statusText);
        }
      } catch (error) {
        if (!signal.aborted) {
          dispatch({ type: "FAILURE" });
        }
      }
    };
    const abortController = new AbortController();
    const signal = abortController.signal;
    let isActive = true;
    fetchUsers({ signal, isActive, pageNum });

    return () => {
      isActive = false;
      abortController.abort();
    };
  }, [pageNum, fetchAgain]);

  return {
    useAPIstate,
    setFetchAgain,
    pageNum,
    setPageNum,
  };
};
