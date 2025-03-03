import React from "react";
import DevelopmentListItem from "./developmentListItem";

const list = [
  "Web Development",
  "CRM & Workflow Management",
  "Scheduling Integration",
];

const DevelopmentList: React.FC = () => {
  return (
    <ul className="space-y-4">
      {list.map((item, index) => (
        <DevelopmentListItem key={index} item={item} index={index} />
      ))}
    </ul>
  );
};

export default DevelopmentList;
