import { Dispatch, SetStateAction } from "react";

interface FetchAgainProps {
  setFetchAgain: Dispatch<SetStateAction<boolean>>;
}
export const FetchAgain = ({ setFetchAgain }: FetchAgainProps) => {
  return (
    <div className="center">
      <h2>Something went wrong.</h2>
      <button type="button" onClick={() => setFetchAgain(true)}>
        Try again
      </button>
    </div>
  );
};
