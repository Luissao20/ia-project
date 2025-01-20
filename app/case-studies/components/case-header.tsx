import { motion } from "framer-motion";
import Image from "next/image";

export default function CaseHeader() {
    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="flex flex-col items-center lg:w-full w-screen">
            <motion.div className="flex items-center justify-center group border-2 w-screen h-svh lg:w-full lg:h-svh" whileHover={{ boxShadow: "0 0 50px rgb(28, 90, 108)" }}
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <Image 
                        src="/bg-case.png"
                        alt="bg_cases"
                        fill
                        priority
                        quality={100}
                    />
                </div>
                <h2 className="lg:text-6xl text-4xl w-[600px] text-center relative lg:w-[1200px] p-3 text-white font-bold">Discover how our automations have reduced our client&apos;s labor costs, optimized their processes to excellence, and boosted their income.</h2>
            </motion.div>
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5 }}>
                <h3 className="text-5xl font-bold text-transparent m-10 p-10 bg-clip-text bg-gradient-to-r from-[#1c5a6c] to-[#5ca9b1]">Case Studies</h3>
            </motion.div>
        </div>
    );
}   