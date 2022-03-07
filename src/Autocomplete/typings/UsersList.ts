import { User } from "./types";

export interface IUsersRows {
  usersToDisplay: User[];
}

export interface UsersListProps {
  users: User[];
  searchName: string;
}

export interface FilterUsersArg {
  users: User[];
  search: string;
}

export type FilterUsers = ({ users, search }: FilterUsersArg) => User[] | [];
