'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section className="pl-5 pr-5 pt-20 flex flex-col gap-10 items-center pb-20 lg:h-full bg-white text-black border-2 border-[#594A28]">
      <div className="p-10 flex flex-col gap-10 items-center">
        <h2 className="lg:text-4xl lg:font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500" data-aos="fade-up">Our Automations:</h2>
        <h3 className="lg:text-3xl lg:text-center text-3xl" data-aos="fade-up">If you can imagine it, we can achieve it</h3>
      </div>

      <ul className="lg:flex lg:grid lg:grid-cols-3 lg:grid-rows-3 flex flex-col text-cyan-700 gap-5 justify-center relative pb-5" data-aos="zoom-in-down">
        <li className="lg:flex lg:gap-3 lg:w-[300px] lg:h-[100px] lg:items-center lg:justify-center">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl text-cyan-800 font-bold select-none">AI Agents</h4>
            <Link href="/services#automation">
              <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 rounded-full lg:transition lg:duration-300 lg:hover:scale-[1.05] lg:hover:easy-in-out">
                <Image
                  src='/arrow-right-large-svgrepo-com.svg'
                  alt="Arrow"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
          </div>
        </li>
        <li className="lg:flex lg:gap-3 lg:w-[300px] lg:h-[100px] lg:items-center lg:justify-center">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl text-cyan-800 font-bold select-none">Chatbots</h4>
            <Link href="/services#automation">
              <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 rounded-full lg:transition lg:duration-300 lg:hover:scale-[1.05] lg:hover:easy-in-out">
                <Image
                  src='/arrow-right-large-svgrepo-com.svg'
                  alt="Arrow"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
          </div>
        </li>
        <li className="flex gap-3 lg:flex lg:items-center lg:justify-center lg:w-[300px] lg:h-[100px]">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl font-bold select-none">Automation</h4>
            <Link href="/services#automation">
              <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 rounded-full lg:transition lg:duration-300 lg:hover:scale-[1.05] lg:hover:easy-in-out">
                <Image
                  src='/arrow-right-large-svgrepo-com.svg'
                  alt="Arrow"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
          </div>
        </li>
        <li className="flex gap-3 lg:flex lg:items-center lg:justify-center lg:w-[300px] lg:h-[100px]">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl font-bold select-none">Employee Orboarding</h4>
            <Link href="/services#consulting">
              <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 rounded-full lg:transition lg:duration-300 lg:hover:scale-[1.05] lg:hover:easy-in-out ">
                <Image
                  src='/arrow-right-large-svgrepo-com.svg'
                  alt="Arrow"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
          </div>
        </li>
        <li className="flex gap-3 lg:flex lg:items-center lg:justify-center lg:w-[300px] lg:h-[100px]">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl font-bold select-none">Payment & Contracts</h4>
            <Link href="/services#consulting">
              <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 rounded-full lg:transition lg:duration-300 lg:hover:scale-[1.05] lg:hover:easy-in-out">
                <Image
                  src='/arrow-right-large-svgrepo-com.svg'
                  alt="Arrow"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
          </div>
        </li>
        <li className="flex gap-3 lg:flex lg:items-center lg:justify-center lg:w-[300px] lg:h-[100px]">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl font-bold select-none">Project Management</h4>
            <Link href="/services#development">
              <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 rounded-full lg:transition lg:duration-300 lg:hover:scale-[1.05] lg:hover:easy-in-out">
                <Image
                  src='/arrow-right-large-svgrepo-com.svg'
                  alt="Arrow"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
          </div>
        </li>
        <li className="flex gap-3 lg:flex lg:items-center lg:justify-center lg:w-[300px] lg:h-[100px]">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl font-bold select-none">CRM</h4>
            <Link href="/services#development">
              <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 rounded-full lg:transition lg:duration-300 lg:hover:scale-[1.05] lg:hover:easy-in-out">
                <Image
                  src='/arrow-right-large-svgrepo-com.svg'
                  alt="Arrow"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
          </div>
        </li>
        <li className="flex gap-3 lg:flex lg:items-center lg:justify-center lg:w-[305px] lg:h-[100px]">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl font-bold select-none">Client Communications</h4>
            <Link href="/services#consulting">
              <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 rounded-full lg:transition lg:duration-300 lg:hover:scale-[1.05] lg:hover:easy-in-out">
                <Image
                  src='/arrow-right-large-svgrepo-com.svg'
                  alt="Arrow"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
          </div>
        </li>
        <li className="flex gap-3 lg:flex lg:items-center lg:justify-center lg:w-[300px] lg:h-[100px]">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl font-bold select-none">Client Reporting</h4>
            <Link href="/services#consulting">
              <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 rounded-full lg:transition lg:duration-300 lg:hover:scale-[1.05] lg:hover:easy-in-out">
                <Image
                  src='/arrow-right-large-svgrepo-com.svg'
                  alt="Arrow"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
          </div>
        </li>
        <li className="flex gap-3 lg:flex lg:items-center lg:justify-center lg:w-[300px] lg:h-[100px] col-start-2 col-end-2">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl font-bold select-none">Operations</h4>
            <Link href="/services#consulting">
              <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 rounded-full lg:transition lg:duration-300 lg:hover:scale-[1.05] lg:hover:easy-in-out">
                <Image
                  src='/arrow-right-large-svgrepo-com.svg'
                  alt="Arrow"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
          </div>
        </li>
      </ul>
      <div className="flex gap-5 items-center border border-[#594A28] lg:p-10 p-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
        <span className="lg:text-3xl text-lg text-white">Need an Automation?</span>
        <motion.div animate={{ x: [0, 10, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <Image src="/arrow_r.svg" alt="arrow_right" width={30} height={20} />
        </motion.div>
        <Link href="/contact"> 
          <button className="bg-sky-800 border border-cyan-500 lg:transition lg:duration-300 lg:hover:scale-110 lg:hover:easy-in-out lg:hover:border lg:hover:border-[#594A28] text-white lg:text-xl text-lg lg:p-2 rounded-2xl lg:w-[150px] lg:h-[60px] w-[110px] h-[50px]">Book a call</button>
        </Link>
      </div>
    </section>
  );
}