"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const InfoSection: React.FC = () => {
    const [selectedTitle, setSelectedTitle] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const infoData = [
        {
            title: "Powered by strategy",
            content: "While we collaborate with robots during the day, we're entirely human. We'll craft a customized strategy for your industry, needs, and goals. Copy-paste? That's not our style."
        },
        {
            title: "Integrated into your team.",
            content: "We are fully committed. Integrate our services into your Slack channels, email us with your concerns, and let your vendors contact us directly. We'll serve as your Chief Automation Officer."
        },
        {
            title: "Innovators in our DNA",
            content: "We'll tackle your blockages, whether we need to go over, under, or directly through. We combine our expertise and creativity to untangle your challenges"
        }
    ];

    const handleTitleClick = (index: number) => {
        if (selectedTitle === index) {
            setIsVisible(false);
            setTimeout(() => setSelectedTitle(null), 300); // Cambia después de la animación de salida 
        } else {
            setIsVisible(false);
            setTimeout(() => {
                setSelectedTitle(index);
                setIsVisible(true);
            }, 100); // Cambia después de la animación de salida 
        }
    };

    return (
        <div className="lg:flex lg:flex-col lg:p-20 lg:items-center lg:overflow-hidden">
            <div className="text-black flex flex-col items-center p-10 gap-10 pb-32" data-aos="fade-up">
                <h2 className="text-4xl font-bold select-none text-[#1c5a6c]">Discover how we work</h2>
                <p className="text-3xl select-none">Optimize your processes through automation to boost productivity and regain control of your time.</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className="lg:w-[400px] lg:h-[400px] lg:relative lg:flex lg:flex-col lg:items-center lg:gap-5 lg:ms-96 lg:pl-10 flex flex-col w-[300px] relative pb-24 gap-5">
                    {infoData.map((item, index) => (
                        <button
                            key={index}
                            className={`lg:w-[450px] text-2xl font-bold text-left p-5 lg:p-10 rounded-2xl lg:flex lg:items-center lg:justify-center ${selectedTitle === index ? "bg-gradient-to-b from-[#1c5a6c] to-[#273950] select-none transition duration-300 scale-110 ease-in-out text-white" : "bg-gray-100"}`}
                            onClick={() => handleTitleClick(index)}
                        >
                            <div className="lg:hidden absolute right-2">
                                <Image
                                    src="/arrow_down2.svg"
                                    alt="Arrow"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            {item.title}
                            <div className="lg:flex lg:absolute lg:right-0 hidden">
                                <Image
                                    src="/arrow.svg"
                                    alt="Arrow"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            {selectedTitle === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.5 }}
                                    className="mt-5 lg:hidden"
                                >
                                    <p className="text-xl">{item.content}</p>
                                </motion.div>
                            )}
                        </button>
                    ))}
                </div>
                <div className="hidden lg:block lg:w-[1200px] lg:p-10 lg:ml-20">
                    {selectedTitle === null && (
                        <div className="flex items-center justify-center h-full gap-5 lg:me-64">
                            <span className="ml-2 text-gray-300 text-4xl">&#8592;</span>
                            <span className="text-gray-300 text-3xl select-none">Click to show more</span>
                        </div>
                    )}
                    {selectedTitle !== null && (
                        <motion.div
                            key={selectedTitle}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible ? 1 : 0 }}
                            transition={{ duration: 0.75 }}
                        >
                            <div>
                                <h2 className="text-3xl font-bold select-none">{infoData[selectedTitle].title}</h2>
                                <p className="lg:mt-5 text-2xl select-none lg:w-[800px]">{infoData[selectedTitle].content}</p>
                            </div>

                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
