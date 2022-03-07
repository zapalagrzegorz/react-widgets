export type FunctionComponent<Props extends {}> = (
  props: Props
) => JSX.Element | JSX.Element[];

type Title = "Miss" | "Mrs" | "Ms" | "Mr";

export interface User {
  login: {
    uuid: string;
  };
  picture: {
    thumbnail: string;
  };
  gender: string;
  name: {
    title: Title;
    first: string;
    last: string;
  };
  email: string;
  location: {
    city: string;
  };
}
