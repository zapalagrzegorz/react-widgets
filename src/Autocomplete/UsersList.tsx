import { FunctionComponent, useEffect, useState } from "react";
import { User } from "./typings/types";
import { FilterUsers, UsersListProps } from "./typings/UsersList";

export const UsersList = ({ users, searchName }: UsersListProps) => {
  const [search, setDebouncedSearchName] = useState(searchName);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedSearchName(searchName), 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchName]);

  const filterUsers: FilterUsers = ({ users, search }) => {
    const searchTxt = search.toLowerCase();
    const predicate = (user: User) => {
      const { name } = user;
      const first = name.first.toLowerCase();
      const last = name.last.toLowerCase();
      return first.includes(searchTxt) || last.includes(searchTxt);
    };
    return users.filter(predicate);
  };

  const usersToDisplay = search ? filterUsers({ users, search }) : users;

  const userRows = (usersToDisplay: User[]) => {
    return usersToDisplay?.map((user) => {
      const { picture, name, email, location, login } = user;
      const title = name.title;
      const trClassName = title !== "Mr" ? "bg-blue" : "";
      return (
        <tr data-testid="userRow" className={trClassName} key={login.uuid}>
          <td>
            <img
              className="va-middle"
              src={picture.thumbnail}
              loading="lazy"
              alt=""
            />
          </td>
          <td>{title}</td>
          <td>{name.first}</td>
          <td>{name.last}</td>
          <td>{email}</td>
          <td>{location.city}</td>
        </tr>
      );
    });
  };

  const noResults = <h2>No results</h2>;

  const usersTable = (
    <table>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>{userRows(usersToDisplay)}</tbody>
    </table>
  );
  return usersToDisplay?.length ? usersTable : noResults;
};
