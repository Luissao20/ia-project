import { motion } from "framer-motion";

export default function Header() {
    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      };
      
    return(
        <motion.div className="flex justify-center group relative border-2 border-[#594A28] w-full h-[600px] bg-[url(../public/bg-lines.jpg)] bg-cover" whileHover={{ boxShadow: '0 0 50px rgb(0, 204, 255)' }}
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="absolute top-10 text-8xl items-start pt-8 m-10 -ml-32 text-white font-bold select-none backdrop-blur-sm rounded-2xl w-auto h-40">Innovate, Automate, Dominate.</h2>
        <p className="absolute bottom-20 select-none text-5xl text-white text-justify text-center font-bold box-content p-2 backdrop-blur-sm  rounded-2xl w-[1100px]">Agentify.ai is more than just an automation tool. It is the perfect ally for your business and the guide to efficiency and the future.</p>
      </motion.div>
    );
}