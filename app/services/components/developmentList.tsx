import React from "react";
import DevelopmentListItem from "./developmentListItem";

const list = [
  "Project Management",
  "CRM",
  "Web Development"
];

const DevelopmentList: React.FC = () => {
  return (
    <ul className="space-y-4 select-none">
      {list.map((item, index) => (
        <DevelopmentListItem key={index} item={item} index={index} />
      ))}
    </ul>
  );
};

export default DevelopmentList;
