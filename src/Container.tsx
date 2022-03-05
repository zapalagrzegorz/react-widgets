import { ReactNode } from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./Container.css";
export function Container(props: { children: ReactNode }): JSX.Element {
  return (
    <div className="container">
      <ErrorBoundary>{props.children}</ErrorBoundary>
    </div>
  );
}
