import { Metadata } from "next";
import Service from "./components/service";

export const metadata: Metadata = { 
  title: "Services",
  description: "Discover the Agentify's services we offer to help you automate your workflows"
}

export default function Services() {
  return (
    <>
      <Service />
    </>
  );
}