'use client'
import { motion } from "framer-motion";

export default function Home() {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    tap: { scale: 0.8 },
    hover: { scale: 1.1 }
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
    </section>

  );
}