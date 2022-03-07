import { UsersList } from "./UsersList";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { useAPIUsersGet } from "./api";
import "./Autocomplete.scss";

function App(): JSX.Element {
  const [searchName, setSearch] = useState("");

  const { useAPIstate, setFetchAgain, pageNum, setPageNum } = useAPIUsersGet();

  const { users, isLoading, isError } = useAPIstate;

  const fetchNextPeople = (): void => {
    setPageNum(pageNum + 1);
  };

  const onChangeSearch = (search: string) => {
    setSearch(search);
  };

  const renderFetchAgain = () => (
    <div className="center">
      <h2>Something went wrong.</h2>
      <button type="button" onClick={() => setFetchAgain(true)}>
        Try again
      </button>
    </div>
  );

  return (
    <div>
      <h2>Autocomplete users API</h2>
      <div className="autocomplete">
        {isError && renderFetchAgain()}
        {isLoading && <p className="center">Loading...</p>}
        {users.length > 0 && (
          <>
            <SearchBar
              searchName={searchName}
              onChangeSearch={onChangeSearch}
            />
            <UsersList users={users} searchName={searchName} />
            <button
              type="button"
              onClick={fetchNextPeople}
              disabled={useAPIstate.isLoading}
            >
              Load more people
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
