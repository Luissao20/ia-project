"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import GridCarousel from "./gridcarousel";

export default function AutomationEnd() {
    return (
        <motion.div>
            <div className="flex lg:p-10 p-5 pb-10 justify-center items-center gap-10 lg:w-full bg-[#1c5a6c] lg:z-3 column-on-small-screen">
                <div className="flex flex-col lg:gap-5 gap-10 lg:p-10">
                    <h3 className="text-xl lg:text-3xl text-white text-center">We connect all your apps</h3>
                    <p className="text-md lg:text-xl text-white text-center lg:text-left">Plus thousands more through APIs, custom code and web hooks.</p>
                </div>
                <div>
                    <GridCarousel />
                </div>
            </div>
            <div className="flex lg:p-32 p-8 items-center justify-center lg:gap-20 gap-10 column-on-small-screen">
                <h3 className="lg:text-3xl text-xl lg:pl-32 lg:w-[500px] text-center font-bold text-[#273950]">Let our consultants get your job done right</h3>
                <div className="flex flex-col gap-10 lg:p-10">
                    <p className="lg:text-xl text-md lg:w-[500px] w-full">Whether you need help with a one-off project, or you need custom coding for highly complex automations involving several apps, we&apos;ll get it done.</p>
                    <Link href="/contact">
                        <button className="bg-[#5ca9b1] lg:border lg:border-transparent lg:transition lg:easy-in-out lg:duration-300 lg:hover:scale-110 text-white text-xl p-5 rounded-2xl w-[200px]">Book a call</button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}