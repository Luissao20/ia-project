import { Suspense } from "react";
import Contenido from "./components/contenido";

export default function CaseStudies() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Contenido />
      </Suspense>
    </>
  );
}