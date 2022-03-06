import { Dispatch, SetStateAction } from "react";
import { TabItem } from "./Tabs";

interface TabListProps {
  tabItems: TabItem[];
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}
export function TabList({
  tabItems,
  setActiveIndex,
  activeIndex,
}: TabListProps) {
  return (
    <ul role="tablist">
      {tabItems.map((tab, index) => {
        return (
          <li key={index}>
            <button
              type="button"
              role="tab"
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? "active" : ""}
            >
              {tab.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
