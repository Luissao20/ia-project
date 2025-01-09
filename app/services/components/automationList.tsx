import React from "react";
import AutomationListItem from "./automationListItem";

const list = [
  "Ai Agent",
  "Chatbots",
  "Workflows"
];

const AnimatedList: React.FC = () => {
  return (
    <ul className="space-y-4 select-none">
      {list.map((item, index) => (
        <AutomationListItem key={index} item={item} index={index} />
      ))}
    </ul>
  );
};

export default AnimatedList;
