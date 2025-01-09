import { motion } from "framer-motion";

export default function CaseHeader() {
    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="flex flex-col items-center w-full">
            <motion.div className="flex justify-center group relative box-content border-2 w-full h-[600px] bg-[url(../public/edr5.jpg)] bg-cover" whileHover={{ boxShadow: "0 0 50px rgb(0, 204, 255)" }}
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5 }}
            >
                <h2 className="absolute text-6xl text-center box-content w-[1200px] p-3 top-48 text-white font-bold backdrop-blur-sm rounded-2xl">Discover how our automations have reduced our clients' labor costs, optimized their processes to excellence, and boosted their income.</h2>
            </motion.div>
            <motion.div initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5 }}>
                <h3 className="text-5xl font-bold text-transparent m-10 p-10 bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700">Case Studies</h3>
            </motion.div>
        </div>
    );
}   