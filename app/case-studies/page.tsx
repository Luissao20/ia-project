import { Suspense } from "react";
import Contenido from "./components/contenido";
import Cta from "./components/cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Learn how Agentify's Now is helping businesses streamline workflows, reduce costs, and improve team productivity" 
}

export default function CaseStudies() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Contenido />
      </Suspense>
      <Cta />
    </>
  );
}