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
    <motion.section className="p-5 bg-blue-500 text-white rounded-lg" initial="hidden" animate="visible" variants={variants} transition={{ duration: 0.5 }}>
      Hola soy una seccion animada!
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Pulsa me
      </motion.button>
    </motion.section>

  );
}