import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
      <motion.div className="group border-2 border-[#345d87] lg:w-full lg:h-svh flex relative justify-center w-screen h-svh" whileHover={{ boxShadow: '0 0 50px rgb(28, 90, 108)' }}
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div>
          <Image
            src="/bg-lines2.png"
            alt="bg_services"
            fill
            priority
            quality={100}
          />
        </div>
        <h2 className="lg:top-10 lg:text-8xl lg:items-start lg:pt-56 lg:m-10 lg:font-bold lg:w-auto lg:h-40 text-6xl pt-28 text-[#03a9b3] w-[300px] absolute">Innovate, Automate, Dominate.</h2>
        <p className="lg:bottom-16 lg:text-5xl text-[#03a9b3] text-justify text-center font-bold lg:p-2 lg:w-[1100px] text-2xl absolute bottom-5 w-[300px]">Agentify delivers intelligent AI automation with AI agents and chatbots to simplify workflows, improve support, and drive business growth.</p>
      </motion.div>
  );
}