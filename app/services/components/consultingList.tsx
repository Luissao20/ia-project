import React from "react";
import ConsultingListItem from "./consultingListItem";

const list = [
  "Employee Onboarding",
  "Payments and Contracts",
  "Client Communications",
  "Client Reporting",
  "Operations"
];

const ConsultingList: React.FC = () => {
  return (
    <ul className="grid grid-cols-2 lg:gap-3 p-1 -mt-10 lg:pt-10">
      {list.map((item, index) => (
        <ConsultingListItem key={index} item={item} index={index} />
      ))}
    </ul>
  );
};

export default ConsultingList;
