import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { User } from "./typings/types";
import { UsersList } from "./UsersList";

interface UsersSearchProps {
  users: User[];
  onFetchNextPeople: () => void;
  isLoading: boolean;
}
export const UsersSearch = ({
  users,
  onFetchNextPeople,
  isLoading,
}: UsersSearchProps) => {
  const [searchName, setSearch] = useState("");
  return (
    <>
      <SearchBar
        searchName={searchName}
        onChangeSearch={(search: string) => {
          setSearch(search);
        }}
      />
      <UsersList users={users} searchName={searchName} />
      <button
        type="button"
        onClick={onFetchNextPeople}
        disabled={isLoading}
      >
        Load more people
      </button>
    </>
  );
};
