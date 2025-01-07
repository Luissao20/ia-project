'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';

const caseStudies = [{
  id: 1,
  title: "Caso de Estudio 1",
  content: "Contenido del caso de estudio 1."
},
{
  id: 2,
  title: "Caso de Estudio 2",
  content: "Contenido del caso de estudio 2."
}, // Agrega más casos de estudio según sea necesario 
];

export default function Home() {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    tap: { scale: 0.8 },
    hover: { scale: 1.1 }
  };

  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    if (id) {
      setActiveId(parseInt(id));
    }
  }, [id]);

  const toggleContent = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="p-5 flex flex-col items-center">
      <motion.div className="text-black w-[1200px] p-10"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}>
        <h2 className="text-5xl text-center font-bold">Discover how our automations have reduced our clients' labor costs, optimized their processes to excellence, and boosted their income.</h2>
      </motion.div>
      <div className="container mx-auto">
        {caseStudies.map(study => (
          <div key={study.id}>
            <h2 className="text-xl font-bold cursor-pointer"
              onClick={() => toggleContent(study.id)}
            >
              {study.title}
            </h2>
            {activeId === study.id && (
              <p className="mt-2 select-none">{study.content}</p>)}
          </div>
        ))}
      </div>
    </section>
  );
}