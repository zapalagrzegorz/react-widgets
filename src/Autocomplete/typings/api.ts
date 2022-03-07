import { User } from "./types";

export interface stateUseReducer {
  users: [] | User[];
  isError: boolean;
  isLoading: boolean;
}

export type Action =
  | { type: "REQUEST" }
  | { type: "SUCCESS"; payload: User[] | [] }
  | { type: "FAILURE" };

export interface FetchUsersArg {
  signal: AbortSignal;
  isActive: boolean;
  pageNum: number;
}

export type FetchUsers = (arg: FetchUsersArg) => Promise<void>;

export type UseAPIUsersGet = () => {
  useAPIstate: stateUseReducer;
  setFetchAgain: React.Dispatch<React.SetStateAction<boolean>>;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  pageNum: number;
};

export type UsersFetchReducer = (
  state: stateUseReducer,
  action: Action
) => stateUseReducer;
