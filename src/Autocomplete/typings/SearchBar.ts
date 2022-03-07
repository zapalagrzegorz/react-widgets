import { FormEvent, ChangeEvent } from "react";

export interface SearchBarProps {
  searchName: string;
  onChangeSearch: (searchName: string) => void;
}

export type handleInputChange = (e: ChangeEvent<HTMLInputElement>) => void;

export type handleFormSubmit = (e: FormEvent<HTMLFormElement>) => void;