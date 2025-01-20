import { Suspense } from "react";
import Contenido from "./components/contenido";
import Cta from "./components/cta";

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