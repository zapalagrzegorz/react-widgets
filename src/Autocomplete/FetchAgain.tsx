import { Dispatch, SetStateAction } from "react";

interface FetchAgainProps {
  onFetchAgain: Dispatch<SetStateAction<boolean>>;
}
export const FetchAgain = ({ onFetchAgain }: FetchAgainProps) => {
  return (
    <div className="center">
      <h2>Something went wrong.</h2>
      <button type="button" onClick={() => onFetchAgain(true)}>
        Try again
      </button>
    </div>
  );
};
