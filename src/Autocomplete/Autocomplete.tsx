import { useAPIUsersGet } from "./api";
import { FetchAgain } from "./FetchAgain";
import { UsersSearch } from "./UsersSearch";
import "./Autocomplete.scss";

function App(): JSX.Element {
  const { useAPIstate, setFetchAgain, pageNum, setPageNum } = useAPIUsersGet();


  const { users, isLoading, isError } = useAPIstate;

  return (
    <div>
      <h2>Autocomplete users API</h2>
      <div className="autocomplete">
        {isError && <FetchAgain setFetchAgain={setFetchAgain} />}
        {isLoading && <p className="center">Loading...</p>}
        {users.length > 0 && (
          <UsersSearch
            users={users}
            fetchNextPeople={() => setPageNum(pageNum + 1)}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
}

export default App;
