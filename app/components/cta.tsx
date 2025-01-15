import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Cta() {
    return (
        <div className="flex gap-5 items-center border border-[#273950] lg:p-10 p-5 m-3 rounded-2xl bg-[#1c5a6c]">
            <span className="lg:text-3xl text-lg text-white">Need an Automation?</span>
            <motion.div animate={{ x: [0, 10, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Image src="/arrow_r.svg" alt="arrow_right" width={30} height={20} />
            </motion.div>
            <Link href="/contact">
                <button className="bg-[#5ca9b1] border border-[#1c5a6c] lg:transition lg:duration-300 lg:hover:scale-110 lg:hover:easy-in-out lg:hover:border lg:hover:border-[#273950] text-white lg:text-xl text-lg lg:p-2 rounded-2xl lg:w-[150px] lg:h-[60px] w-[110px] h-[50px]">Book a call</button>
            </Link>
        </div>
    );
}