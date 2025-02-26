"use client"

import { motion } from "framer-motion";
import Carousel from "./carousel";
import LogoSlider from "./logoSlider";
import { useEffect, useRef, useState } from "react";
import AutomationList from "./automationList";
import ConsultingList from "./consultingList";
import DevelopmentList from "./developmentList";
import Header from "./header";
import Image from "next/image";
import Automations from "./automations";
import AutomationEnd from "./automationEnd";
import AiAgents from "./ai-agents";
import Chatbots from "./chatbots";
import Workflows from "./workflows";

type Section = "section1" | "section2" | "section3" | null;

export default function Service() {
    const [showMoreSection, setShowMoreSection] = useState<Section>(null);
    const sectionRefs = {
        section1: useRef<HTMLDivElement>(null),
        section2: useRef<HTMLDivElement>(null),
        section3: useRef<HTMLDivElement>(null),
    };

    const toggleShowMore = (section: Section) => {
        if (showMoreSection === section) {
            setShowMoreSection(null);
        } else {
            setShowMoreSection(section);
        }
    };

    const handleGoBack = () => {
        setShowMoreSection(null);
        setTimeout(() => {
            window.scrollTo({ top: 800, behavior: "smooth" });
        }, 300); // Asegura que la animación se complete antes de desplazar
    };

    useEffect(() => {
        if (showMoreSection && sectionRefs[showMoreSection].current) {
            setTimeout(() => {
                if (sectionRefs[showMoreSection].current) {
                    sectionRefs[showMoreSection].current.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }, 500); // Asegura que la animación se complete antes de desplazar 
        }
    }, [showMoreSection, sectionRefs]);

    return (
        <section className="flex flex-col items-center h-full w-full">
            <Header />
            <div className="p-1 lg:p-20 flex flex-col items-center justify-center w-full h-full bg-white overflow-hidden lg:gap-5">
                <div id="automation" className="lg:w-[1200px] lg:h-[700px] rounded-[10px] overflow-hidden 
                    before:absolute lg:before:top-[-50%] lg:before:bottom-[-50%] lg:before:right-[-50%] lg:before:left-[-50%]
                    before:top-[-80%] before:bottom-[-80%] before:right-[-80%] before:left-[-80%] 
                    before:bg-[conic-gradient(transparent,#273950,#5ca9b1)]
                    before:animate-spin-slow group relative w-[355px] h-[820px] md:w-[450px]" data-aos="fade-up-right">
                    <div className="lg:absolute absolute text-center lg:flex flex lg:flex-col flex-col lg:gap-10 gap-5 items-center top-[5px] bottom-[5px] left-[5px] right-[5px] rounded-[10px] bg-white bg-[url(../public/rb_23189.png)] bg-cover bg-no-repeat">
                        <h3 className="text-4xl pt-20 text-[#03a9bc] font-bold">Automations</h3>
                        <p className="text-2xl text-justify p-10 backdrop-blur-2xl w-full">Agentify offers modern artificial intelligence automation, thereby arming businesses with intelligent AI agents and chatbots meant to streamline processes, improve customer service, and hasten corporate development.</p>
                        <div className="lg:flex lg:gap-40 lg:pt-5">
                            <AutomationList />
                            <div className="pt-14 lg:-mt-14">
                                <Carousel />
                            </div>
                        </div>
                        <motion.button
                            className="flex gap-2 absolute bottom-3 left-10 text-[#273950] px-2 py-1 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300"
                            whileHover={{ scale: 1.3 }}
                            onClick={() => toggleShowMore('section1')}
                        >
                            <Image src="/arrow_down.svg" alt="arrow_down" width={30} height={40} />
                            Show more
                        </motion.button>
                    </div>
                </div>
                <div id="consulting" className="lg:w-[1200px] lg:h-[700px] rounded-[10px] overflow-hidden 
                    before:absolute lg:before:top-[-50%] lg:before:bottom-[-50%] lg:before:right-[-50%] lg:before:left-[-50%]
                    before:top-[-80%] before:bottom-[-80%] before:right-[-80%] before:left-[-80%] 
                    before:bg-[conic-gradient(transparent,#273950,#5ca9b1)]
                    before:animate-spin-slow group relative w-[355px] h-[830px] md:w-[450px]" data-aos="fade-up">
                    <div className="absolute flex flex-col items-center gap-10 top-[5px] bottom-[5px] left-[5px] right-[5px] rounded-[10px] bg-white bg-[url(../public/673.png)] bg-no-repeat">
                        <h3 className="text-4xl pt-20 text-[#03a9bc] font-bold">Consulting</h3>
                        <p className="text-2xl text-justify p-10 backdrop-blur-2xl">Software and technology to execute repetitive and routine tasks that save time, reduce errors and increase operational efficiency in various areas, from business management to software development</p>
                        <div>
                            <ConsultingList />
                        </div>
                        <motion.button
                            className="flex gap-2 absolute bottom-3 left-10 text-[#273950] px-2 py-1 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300"
                            whileHover={{ scale: 1.3 }}
                            onClick={() => toggleShowMore('section2')}
                        >
                            <Image src="/arrow_down.svg" alt="arrow_down" width={30} height={40} />
                            Show more
                        </motion.button>
                    </div>
                </div>
                <div id="development" className="lg:w-[1200px] lg:h-[700px] rounded-[10px] overflow-hidden 
                    before:absolute lg:before:top-[-50%] lg:before:bottom-[-50%] lg:before:right-[-50%] lg:before:left-[-50%]
                    before:top-[-80%] before:bottom-[-80%] before:right-[-80%] before:left-[-80%] 
                    before:bg-[conic-gradient(transparent,#273950,#5ca9b1)]
                    before:animate-spin-slow group relative w-[355px] h-[830px] md:w-[450px]" data-aos="fade-up-left">
                    <div className="lg:absolute absolute lg:flex lg:flex-col lg:items-center lg:gap-5 top-[5px] bottom-[5px] left-[5px] right-[5px] rounded-[10px] bg-white bg-[url(../public/rb_5102.png)] bg-cover bg-no-repeat">
                        <h3 className="text-4xl pt-20 pb-5 text-center text-[#03a9bc] font-bold">Development</h3>
                        <p className="text-2xl pl-10 pr-10 text-justify text-center backdrop-blur-2xl">Maximize your team&apos;s efficiency and productivity with our integration solution that effortlessly connects with the most popular tools on the market. Our platform makes your workflow easier by uniting your favorite tools in one place</p>
                        <div className="flex flex-col">
                            <div className="pt-10 pl-10">
                                <DevelopmentList />
                            </div>
                            <LogoSlider />
                        </div>
                        <motion.button
                            className="flex gap-2 absolute bottom-3 left-10 text-[#273950] px-2 py-1 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300"
                            whileHover={{ scale: 1.3 }}
                            onClick={() => toggleShowMore('section3')}
                        >
                            <Image src="/arrow_down.svg" alt="arrow_down" width={30} height={40} />
                            Show more
                        </motion.button>
                    </div>
                </div>
            </div>
            {showMoreSection === "section1" && (
                <motion.div ref={sectionRefs.section1}
                    className="flex flex-col gap-5 text-justify border-2 border-[#273950] bg-white"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.5 }} >
                    <div className="w-full bg-[#03a7b3] lg:p-10 p-5 flex flex-col gap-10 items-center">
                        <h2 className="lg:text-4xl text-xl text-center text-[#010817]">The AI and Automation Agency You Need</h2>
                        <p className="lg:text-2xl text-md text-white lg:p-10 text-center ">Agentify guarantees that automation exactly fits your industry, operations, 
                            and goals by customizing AI agent capabilities to meet your particular demands. Whether your needs are for real-time decision-making, 
                            automated task management, or customer service driven by artificial intelligence, our solutions are designed to maximize operations 
                            while preserving scalability and adaptability.</p>
                    </div>
                    <AiAgents />
                    <Chatbots />
                    <Workflows />
                    <AutomationEnd />
                    <div className="flex jusify-center z-4">
                        <motion.button className="relative flex gap-2 items-center text-[#273950] px-4 py-2"
                            onClick={handleGoBack}
                            whileHover={{ scale: 1.3 }}
                            style={{ transformOrigin: 'center center' }}
                        >
                            <Image src="/arrow_up.svg" alt="arrow_up" width={30} height={40} />
                            Go back
                        </motion.button>
                    </div>
                </motion.div>)}
            {showMoreSection === "section2" && (
                <motion.div ref={sectionRefs.section2}
                    className="flex flex-col gap-5 text-justify border-2 border-[#273950] bg-white"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.5 }} >
                    <div className="w-full bg-[#1c5a6c] p-10 flex flex-col gap-10 items-center">
                        <h2 className="lg:text-4xl text-xl text-white">Consulting</h2>
                        <p className="lg:text-3xl text-md text-white">We combine artificial intelligence with automation to create incredibly efficient processes that connect your apps and automate actions between them, which replaces manual work for massive gains in your team&apos;s bandwidth, quality, speed and customer experience. Fully custom and done-for-you</p>
                    </div>
                    <div className="lg:pt-48 pt-10 flex flex-col p-5 items-center gap-5">
                        <h4 className="lg:pt-24 lg:text-2xl text-lg font-bold pb-5">Consulting for endless use cases</h4>
                        <p className="lg:text-xl text-md w-full pb-10 text-center">Our experts have built hundreds of processes for dozens of industries, with millions of automated actions.</p>
                        <Automations />
                    </div>
                    <div>
                        <AutomationEnd />
                    </div>
                    <div className="flex jusify-center">
                        <motion.button className="relative flex gap-2 items-center mt-4 text-[#273950] px-4 py-2"
                            onClick={handleGoBack}
                            whileHover={{ scale: 1.3 }}
                            style={{ transformOrigin: "center center" }}
                        >
                            <Image src="/arrow_up.svg" alt="arrow_up" width={30} height={40} />
                            Go back
                        </motion.button>
                    </div>
                </motion.div>)}
            {showMoreSection === "section3" && (
                <motion.div ref={sectionRefs.section3}
                    className="flex flex-col gap-5 text-justify border-2 border-[#273950] bg-white"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.5 }} >
                    <div className="w-full bg-[#1c5a6c] p-10 flex flex-col gap-10 items-center">
                        <h2 className="lg:text-4xl text-xl text-white">Development</h2>
                        <p className="lg:text-3xl text-lg text-white">We combine artificial intelligence with automation to create incredibly efficient processes that connect your apps and automate actions between them, which replaces manual work for massive gains in your team&apos;s bandwidth, quality, speed and customer experience. Fully custom and done-for-you</p>
                    </div>
                    <div className="lg:pt-48 pt-10 flex flex-col p-5 items-center gap-5">
                        <h4 className="lg:pt-24 lg:text-2xl text-xl font-bold pb-5">Consulting for endless use cases</h4>
                        <p className="lg:text-xl text-md pb-10">Our experts have built hundreds of processes for dozens of industries, with millions of automated actions.</p>
                        <Automations />
                    </div>
                    <div>
                        <AutomationEnd />
                    </div>
                    <div className="flex jusify-center">
                        <motion.button className="relative flex gap-2 items-center mt-4 text-[#273950] px-4 py-2"
                            onClick={handleGoBack}
                            whileHover={{ scale: 1.3 }}
                            style={{ transformOrigin: "center center" }}
                        >
                            <Image src="/arrow_up.svg" alt="arrow_up" width={30} height={40} />
                            Go back
                        </motion.button>
                    </div>
                </motion.div>)}
        </section>
    );
}