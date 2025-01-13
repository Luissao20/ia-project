"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import GridCarousel from "./gridcarousel";

export default function AutomationEnd() {
    return (
        <motion.div>
            <div className="flex p-10 justify-center items-center gap-10 w-full bg-[#1c5a6c] z-3">
                <div className="flex flex-col gap-5 p-10">
                    <h3 className="text-3xl text-white">We connect all your apps</h3>
                    <p className="text-xl text-white">Plus thousands more through APIs, custom code and web hooks.</p>
                </div>
                <div>
                    <GridCarousel />
                </div>
            </div>
            <div className="flex p-32 items-center justify-center gap-20">
                <h3 className="text-3xl pl-32 w-[500px] font-bold">Let our consultants get your job done right</h3>
                <div className="flex flex-col gap-10 p-10">
                    <p className="text-xl w-[500px]">Whether you need help with a one-off project, or you need custom coding for highly complex automations involving several apps, we&apos;ll get it done.</p>
                    <Link href="/contact">
                        <button className="bg-[#5ca9b1] border border-transparent transition easy-in-out duration-300 hover:scale-110 text-white text-xl p-5 lg:rounded-2xl w-[200px]">Book a call</button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}