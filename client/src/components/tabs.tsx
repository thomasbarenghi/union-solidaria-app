import { useState } from "react";

type TabProps = {
  title: string;
  content: React.ReactNode;
};

type TabItemProps = {
  tab: TabProps;
  index: number;
  activeTab: number;
  setActiveTab: (index: number) => void;
};

function TabItem({ tab, index, activeTab, setActiveTab }: TabItemProps) {
  return (
    <div key={index}>
      <button
        onClick={() => setActiveTab(index)}
        className={`${
          activeTab === index ? "font-semibold bodyText" : "font-light bodyText"
        }`}
      >
        {tab.title}
      </button>
    </div>
  );
}

type TabsFn = {
  content: TabProps[];
};

export default function Tabs({ content }: TabsFn) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex gap-4">
        {content.map((tab, index) => (
          <TabItem
            key={index}
            tab={tab}
            index={index}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
      {content[activeTab].content}
    </div>
  );
}
