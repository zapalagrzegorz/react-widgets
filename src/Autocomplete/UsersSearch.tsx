import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { User } from "./typings/types";
import { UsersList } from "./UsersList";

interface UsersSearchProps {
  users: User[];
  fetchNextPeople: () => void;
  isLoading: boolean;
}
export const UsersSearch = ({
  users,
  fetchNextPeople,
  isLoading,
}: UsersSearchProps) => {
  const [searchName, setSearch] = useState("");
  const onChangeSearch = (search: string) => {
    setSearch(search);
  };
  return (
    <>
      <SearchBar searchName={searchName} onChangeSearch={onChangeSearch} />
      <UsersList users={users} searchName={searchName} />
      <button type="button" onClick={fetchNextPeople} disabled={isLoading}>
        Load more people
      </button>
    </>
  );
};
