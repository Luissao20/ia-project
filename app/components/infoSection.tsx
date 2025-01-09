"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"

const InfoSection: React.FC = () => {
    const [selectedTitle, setSelectedTitle] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const infoData = [
        {
            title: "Driven by strategy",
            content: "We may work with robots all day, but we&apos;re very human. We&apos;ll tailor our strategy around your industry, needs, and goals. Copy-paste? No thanks."
        },
        {
            title: "Part of your team",
            content: "We&apos;re all in. Add us to your slack channels, email us with concerns, and have your vendors reach out directly. We&apos;ll be your Chief Automation Officer."
        },
        {
            title: "Innovators to the core",
            content: "We&apos;ll solve your bottlenecks—whether we need to go over, under, or through. We combine expertise + creativity to work out your knots."
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
        <div className="flex flex-col p-20 items-center border-2 border-[#594A28]">
            <div className="text-black flex flex-col items-center p-10 gap-10 pb-32" data-aos="fade-up">
                <h2 className="text-4xl font-bold select-none">Take a look into how we work</h2>
                <p className="text-3xl select-none">Automate your processes to increase productivity and regain control of your time.</p>
            </div>
            <div className="flex items-center justify-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className="w-[400px] h-[400px] relative flex flex-col items-start gap-5">
                    {infoData.map((item, index) => (
                        <button
                            key={index}
                            className={`block w-[450px] text-2xl text-left p-10 rounded-2xl ${selectedTitle === index ? "bg-gradient-to-r from-cyan-500 to-blue-500 select-none transition duration-300 scale-110 easy-in-out border border-[#594A28] text-white" : "bg-gray-100"}`}
                            onClick={() => handleTitleClick(index)}
                        >
                            {item.title}
                            <div className="flex -mt-6 absolute right-0">
                                <Image
                                    src="/arrow.svg"
                                    alt="Arrow"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </button>
                    ))}
                </div>
                <div className="w-[1200px] p-10 ml-20">
                    {selectedTitle === null && (
                        <div className="flex items-center justify-center h-full gap-5">
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
                            <h2 className="text-3xl font-bold select-none"> {infoData[selectedTitle].title} </h2>
                            <p className="mt-5 text-2xl select-none">{infoData[selectedTitle].content}</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
