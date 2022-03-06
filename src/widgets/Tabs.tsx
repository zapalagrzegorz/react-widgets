import { useState } from "react";
import { TabList } from "./TabList";
import "./Tabs.scss";

export interface TabItem {
  title: string;
  content: string;
}
interface TabsProps {
  tabItems: TabItem[];
}

export default function Tabs({ tabItems }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTabContent = tabItems[activeIndex].content;

  return (
    <div>
      <h2>Tabs</h2>
      <div className="tabs">
        <div className="tabs__btns">
          <TabList
            tabItems={tabItems}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>

        <div className="tabs__content">
          <article>{activeTabContent}</article>
        </div>
      </div>
    </div>
  );
}
