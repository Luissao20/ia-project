import React from "react";
import AnimatedListItem from "./animatedListItem";

const list = [
  "Greater emphasis on strategic work rather than manual work.",
  "Complete elimination of bottlenecks and delays, guaranteeing a more efficient and agile workflow.",
  "Significant increase in productivity per employee, optimizing results and maximizing efficiency."
];

const AnimatedList: React.FC = () => {
  return (
    <ul className="space-y-4 select-none">
      {list.map((item, index) => (
        <AnimatedListItem key={index} item={item} index={index} />
      ))}
    </ul>
  );
};

export default AnimatedList;
