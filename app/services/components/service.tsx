"use client"

import { motion } from "framer-motion";
import Carousel from "./carousel";
import LogoSlider from "./logoSlider";
import { useEffect, useRef, useState } from "react";
import AutomationList from "./automationList";
import ConsultingList from "./consultingList";
import DevelopmentList from "./developmentList";
import Workflow from "./workflow";
import Header from "./header";
import Image from "next/image";

type Section = "section1" | "section2" | "section3" | null;

export default function Service() {
    const [showMoreSection, setShowMoreSection] = useState<Section>(null);
    const sectionRefs = {
        section1: useRef<HTMLDivElement>(null),
        section2: useRef<HTMLDivElement>(null),
        section3: useRef<HTMLDivElement>(null),

    }

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
            window.scrollTo({ top: 600, behavior: "smooth" });
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
    }, [showMoreSection]);

    return (
        <section className="lg:flex lg:flex-col lg:items-center lg:h-full lg:w-full">
            <Header />
            <div className="grid items-center grid-cols-3 p-10 flex w-full h-full bg-sky-950">
                <div id="automation" className="relative w-[600px] h-[700px] rounded-[10px] overflow-hidden 
                    before:absolute before:top-[-50%] before:bottom-[-50%] before:right-[-50%] before:left-[-50%] 
                    before:bg-[conic-gradient(transparent,#594A28,#00a6ff)]
                    before:animate-spin-slow group" data-aos="fade-up-right">
                    <div className="absolute flex flex-col gap-10 items-center top-[5px] bottom-[5px] left-[5px] right-[5px] rounded-[10px] bg-white bg-[url(../public/rb_23189.png)] bg-cover bg-no-repeat">
                        <h3 className="text-4xl pt-20 select-none text-left">Automation</h3>
                        <p className="text-2xl select-none text-justify p-10 backdrop-blur-2xl">Adjust and adapt AI agent features to meet your company's specific needs and preferences</p>
                        <div className="flex gap-40 pt-5">
                            <AutomationList />
                            <Carousel />
                        </div>
                        <motion.button
                            className="flex gap-2 absolute bottom-3 left-10 text-[#594A28] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ scale: 1.3 }}
                            onClick={() => toggleShowMore('section1')}
                        >
                            <Image src="/arrow_down.svg" alt="arrow_down" width={30} height={40} />
                            Show more
                        </motion.button>
                    </div>
                </div>
                <div id="consulting" className="relative w-[600px] h-[700px] rounded-[10px] overflow-hidden 
                    before:absolute before:top-[-50%] before:bottom-[-50%] before:right-[-50%] before:left-[-50%] 
                    before:bg-[conic-gradient(transparent,#594A28,#00a6ff)]
                    before:animate-spin-slow group" data-aos="fade-up">
                    <div className="absolute flex flex-col items-center gap-10 top-[5px] bottom-[5px] left-[5px] right-[5px] rounded-[10px] bg-white bg-[url(../public/673.png)] bg-cover bg-no-repeat">
                        <h3 className="text-4xl pt-20 select-none">Consulting</h3>
                        <p className="text-2xl text-justify p-10 select-none backdrop-blur-2xl">Software and technology to execute repetitive and routine tasks that save time, reduce errors and increase operational efficiency in various areas, from business management to software development</p>
                        <div>
                            <ConsultingList />
                        </div>
                        <motion.button
                            className="flex gap-2 absolute bottom-3 left-10 text-[#594A28] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ scale: 1.3 }}
                            onClick={() => toggleShowMore('section2')}
                        >
                            <Image src="/arrow_down.svg" alt="arrow_down" width={30} height={40} />
                            Show more
                        </motion.button>
                    </div>
                </div>
                <div id="development" className="relative w-[600px] h-[700px] rounded-[10px] overflow-hidden 
                    before:absolute before:top-[-50%] before:bottom-[-50%] before:right-[-50%] before:left-[-50%] 
                    before:bg-[conic-gradient(transparent,#594A28,#00a6ff)]
                    before:animate-spin-slow group" data-aos="fade-up-left">
                    <div className="absolute flex flex-col items-center gap-5 top-[5px] bottom-[5px] left-[5px] right-[5px] rounded-[10px] bg-white bg-[url(../public/rb_5102.png)] bg-cover bg-no-repeat">
                        <h3 className="text-4xl pt-20 pb-5 select-none text-center select-none">Development</h3>
                        <p className="text-2xl pl-10 pr-10 text-justify text-center select-none backdrop-blur-2xl">Maximize your team's efficiency and productivity with our integration solution that effortlessly connects with the most popular tools on the market. Our platform makes your workflow easier by uniting your favorite tools in one place</p>
                        <div className="flex flex-col">
                            <div className="pt-10 pl-48">
                                <DevelopmentList />
                            </div>
                            <LogoSlider />
                        </div>
                        <motion.button
                            className="flex gap-2 absolute bottom-3 left-10 text-[#594A28] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                    className="flex flex-col gap-5 text-justify p-20 border-2 border-[#594A28] bg-white"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.5 }} >
                    <h2 className="text-4xl select-none">The #1 AI and Automation Agency</h2>
                    <p className="text-3xl select-none">We combine artificial intelligence with automation to create incredibly efficient processes that connect your apps and automate actions between them, which replaces manual work for massive gains in your team’s bandwidth, quality, speed and customer experience. Fully custom and done-for-you</p>
                    <div className="relative flex items-center justify-center">
                        <div>
                            <Workflow />
                        </div>
                        <div className="grid grid-cols-4 z-2 gap-10 p-10 absolute lg:top-40 flex gap-10">
                            <div className="flex flex-col items-center gap-3">
                                <Image src="/process.svg" alt="process" width={100} height={100} className="bg-white" />
                                <span className="pl-4 text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">Step 1</span>
                                <h4 className="text-lg font-bold select-none">We map out your processes</h4>
                                <p className="select-none text-center w-[300px]">We’ll create a visual map of all your systems, manual tasks and apps.</p>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <Image src="/find.svg" alt="process" width={100} height={100} className="bg-white" />
                                <span className="pl-4 text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">Step 2</span>
                                <h4 className="text-lg font-bold select-none">We find areas to add AI and automate</h4>
                                <p className="select-none text-center w-[300px]">We audit your workflows to pinpoint opportunities with the highest ROI.</p>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <Image src="/test.svg" alt="process" width={100} height={100} className="bg-white" />
                                <span className="pl-4 text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">Step 3</span>
                                <h4 className="text-lg font-bold select-none">We build and test</h4>
                                <p className="select-none text-center w-[300px]">We use a mix of custom code, AI tools, Zapier, Make.com and your tech stack.</p>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <Image src="/manage.svg" alt="process" width={100} height={100} className="bg-white" />
                                <span className="pl-4 text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">Step 4</span>
                                <h4 className="text-lg font-bold select-none">We manage and iterate</h4>
                                <p className="select-none text-center w-[300px]">Every client we work with grows, so there’s always new things to automate.</p>
                            </div>
                        </div>
                        <h3>Chatbots</h3>
                    </div>
                    <div className="flex jusify-center pt-24">
                        <motion.button className="relative flex gap-2 items-center mt-4 text-[#594A28] px-4 py-2"
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
                    className="flex flex-col gap-5 text-justify p-20 border-2 border-[#594A28] bg-white"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.5 }} >
                    <h2 className="text-4xl">Consulting</h2>
                    <p className="text-3xl">We combine artificial intelligence with automation to create incredibly efficient processes that connect your apps and automate actions between them, which replaces manual work for massive gains in your team’s bandwidth, quality, speed and customer experience. Fully custom and done-for-you</p>
                    {/*En esta parte
                        Se puede agregar calquier contenido
                        Preferible utilizar otros componentes*/}
                    <div className="flex jusify-center">
                        <motion.button className="relative flex gap-2 items-center mt-4 text-[#594A28] px-4 py-2"
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
                <motion.div ref={sectionRefs.section1}
                    className="flex flex-col gap-5 text-justify p-20 border-2 border-[#594A28] bg-white"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.5 }} >
                    <h2 className="text-4xl">The #1 Development Agency</h2>
                    <p className="text-3xl">We combine artificial intelligence with automation to create incredibly efficient processes that connect your apps and automate actions between them, which replaces manual work for massive gains in your team’s bandwidth, quality, speed and customer experience. Fully custom and done-for-you</p>
                    {/*En esta parte
                        Se puede agregar calquier contenido
                        Preferible utilizar otros componentes*/}
                    <div className="flex jusify-center">
                        <motion.button className="relative flex gap-2 items-center mt-4 text-[#594A28] px-4 py-2"
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