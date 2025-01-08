'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section className="pl-5 pr-5 pt-20 flex flex-col gap-10 items-center pb-20 lg:h-full bg-white text-black border-2 border-[#594A28]">
      <div className="p-10 flex flex-col gap-10 items-center">
        <h2 className="text-4xl font-bold" data-aos="fade-up">Our Automations:</h2>
        <h3 className="text-3xl text-center" data-aos="fade-up">If you can imagine it, we can achieve it</h3>
      </div>

      <ul className="flex grid grid-cols-5 text-cyan-700" data-aos="zoom-in-down">
        <li className="flex gap-3 w-[300px] h-[100px] lg:flex lg:items-center lg:justify-center">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl text-cyan-800 font-bold select-none">AI Agents</h4>
            <Link href="/services#automation">
              <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 lg:rounded-full transition duration-300 hover:scale-[1.05] hover:easy-in-out">
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
        <li className="flex gap-3 w-[300px] h-[100px] lg:flex lg:items-center lg:justify-center">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl text-cyan-800 font-bold select-none">Chatbots</h4>
            <Link href="/services#automation">
              <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 lg:rounded-full transition duration-300 hover:scale-[1.05] hover:easy-in-out">
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
            <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 lg:rounded-full transition duration-300 hover:scale-[1.05] hover:easy-in-out">
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
            <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 lg:rounded-full transition duration-300 hover:scale-[1.05] hover:easy-in-out ">
              <Image
                src='/arrow-right-large-svgrepo-com.svg'
                alt="Arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
        </li>
        <li className="flex gap-3 lg:flex lg:items-center lg:justify-center lg:w-[300px] lg:h-[100px]">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl font-bold select-none">Payment & Contracts</h4>
            <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 lg:rounded-full transition duration-300 hover:scale-[1.05] hover:easy-in-out">
              <Image
                src='/arrow-right-large-svgrepo-com.svg'
                alt="Arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
        </li>
        <li className="flex gap-3 lg:flex lg:items-center lg:justify-center lg:w-[300px] lg:h-[100px]">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl font-bold select-none">Project Management</h4>
            <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 lg:rounded-full transition duration-300 hover:scale-[1.05] hover:easy-in-out">
              <Image
                src='/arrow-right-large-svgrepo-com.svg'
                alt="Arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
        </li>
        <li className="flex gap-3 lg:flex lg:items-center lg:justify-center lg:w-[300px] lg:h-[100px]">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl font-bold select-none">CRM</h4>
            <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 lg:rounded-full transition duration-300 hover:scale-[1.05] hover:easy-in-out">
              <Image
                src='/arrow-right-large-svgrepo-com.svg'
                alt="Arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
        </li>
        <li className="flex gap-3 lg:flex lg:items-center lg:justify-center lg:w-[305px] lg:h-[100px]">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl font-bold select-none">Client Communications</h4>
            <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 lg:rounded-full transition duration-300 hover:scale-[1.05] hover:easy-in-out">
              <Image
                src='/arrow-right-large-svgrepo-com.svg'
                alt="Arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
        </li>
        <li className="flex gap-3 lg:flex lg:items-center lg:justify-center lg:w-[300px] lg:h-[100px]">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl font-bold select-none">Client Reporting</h4>
            <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 lg:rounded-full transition duration-300 hover:scale-[1.05] hover:easy-in-out">
              <Image
                src='/arrow-right-large-svgrepo-com.svg'
                alt="Arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
        </li>
        <li className="flex gap-3 lg:flex lg:items-center lg:justify-center lg:w-[300px] lg:h-[100px]">
          <div className="flex gap-2 items-center">
            <h4 className="text-2xl font-bold select-none">Operations</h4>
            <button className="bg-sky-800 text-cyan-700 p-2 flex justify-center items-center gap-3 lg:rounded-full transition duration-300 hover:scale-[1.05] hover:easy-in-out">
              <Image
                src='/arrow-right-large-svgrepo-com.svg'
                alt="Arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
        </li>
      </ul>
      <div className="flex gap-5 items-center border border-[#594A28] p-10 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
        <span className="text-3xl text-white">Need an Automation?</span>
        <motion.div animate={{ x: [0, 10, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <Image src="/arrow_r.svg" alt="arrow_right" width={30} height={20} />
        </motion.div>
        <button className="bg-sky-800 border border-cyan-500 transition duration-300 hover:scale-110 hover:easy-in-out hover:border hover:border-[#594A28] text-white text-xl p-2 lg:rounded-2xl w-[150px] h-[60px]">Book a call</button>
      </div>
    </section>
  );
}