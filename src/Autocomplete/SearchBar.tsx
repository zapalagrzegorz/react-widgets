import { SearchBarProps } from "./typings/SearchBar";
export const SearchBar = ({
  searchName,
  onChangeSearch,
} : SearchBarProps) => {
  return (
    <form>
      <label>
        <span>Search user by name</span>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onChangeSearch(e.target.value)}
          value={searchName}
        />
      </label>
    </form>
  );
};
