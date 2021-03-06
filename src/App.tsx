import React from "react";
import "./App.css";
import Autocomplete from "./Autocomplete/Autocomplete";
import { Container } from "./Container";
import Clock from "./widgets/Clock";
import Tabs from "./widgets/Tabs";

const TAB_ITEMS = [
  { title: "one", content: "I am the first" },
  { title: "second", content: "second" },
  { title: "third", content: "third" },
];


function App() {
  return (
    <Container>
      <Clock />
      <Tabs tabItems={TAB_ITEMS} />
      <Autocomplete />
    </Container>
  );
}

export default App;
