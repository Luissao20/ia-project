import { motion } from "framer-motion";


export default function CaseHeader() {
    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      };
    return (
        <motion.div className="group border-2 border-[#273950] flex justify-center items-center lg:w-full w-screen h-svh bg-[url(../public/bg-case2.png)] bg-fixed bg-no-repeat bg-cover" whileHover={{ boxShadow: '0 0 50px rgb(28, 90, 108)' }}
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
        >
            <h2 className="lg:text-6xl text-4xl w-[600px] text-center relative lg:w-[1200px] p-3 text-[#1c5a6c] font-bold">Discover how our automations have reduced our client&apos;s labor costs, optimized their processes to excellence, and boosted their income.</h2>
        </motion.div>
    );
}   