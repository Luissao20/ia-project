import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
      <motion.div className="lg:flex lg:justify-center group lg:relative border-2 border-[#594A28] lg:w-full lg:h-[600px] flex relative justify-center w-screen h-[650px]" whileHover={{ boxShadow: '0 0 50px rgb(0, 204, 255)' }}
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div>
          <Image
            src="/bg-lines.png"
            alt="bg_services"
            fill
            priority
            quality={100}
          />
        </div>
        <h2 className="lg:absolute lg:top-10 lg:text-8xl lg:items-start lg:pt-8 lg:m-10 lg:-ml-32 lg:text-white lg:font-bold select-none lg:backdrop-blur-sm lg:rounded-2xl lg:w-auto lg:h-40 text-6xl pt-10 text-white w-[300px] absolute">Innovate, Automate, Dominate.</h2>
        <p className="lg:absolute lg:bottom-20 select-none lg:text-5xl text-white text-justify text-center font-bold box-content lg:p-2 lg:backdrop-blur-sm  lg:rounded-2xl lg:w-[1100px] text-2xl absolute bottom-5 w-[300px]">Agentify.ai is more than just an automation tool. It is the perfect ally for your business and the guide to efficiency and the future.</p>
      </motion.div>
  );
}