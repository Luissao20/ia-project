"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import CaseHeader from "./case-header";


export default function Contenido() {
    const caseStudies = [{
        id: 1,
        title: "Digital Transformation for Elagri Farm",
        content: (
            <div className="flex flex-col items-center justify-center gap-10 text-justify w-[1300px]">
                <p>Elagri Farm is a company dedicated to the export of bananas, mangoes, dragon fruit, and passion fruit. Despite having been in the market for three years, its growth was limited by the lack of structured processes and a digital strategy, as its business model relied exclusively on word-of-mouth and lacked a website. This created challenges in customer management, sales, and shipment tracking, making expansion difficult. To address these issues, a solution was needed to optimize time and improve activities. For this reason, they decided to use artificial intelligence tools, specifically Make.com, to enhance operational efficiency.</p>
                <p>The lack of a digital platform and automated processes caused difficulties in customer management, order handling, and inventory control. As the company grew, tracking customers, purchases, sales, and shipments became increasingly complex, increasing the risk of operational errors and lost business opportunities. To tackle these problems, all operational processes were documented, and automation opportunities were identified. AI-based solutions were implemented using Make.com, improving efficiency in customer management and optimizing repetitive tasks.</p>
                <Image
                    alt="ElagriFarm"
                    src="/ElagriFarm.png"
                    quality={100}
                    width={800}
                    height={500}
                />
                <p>Additionally, a website with an automated chatbot was designed and implemented to handle inquiries and capture potential clients. Billing and accounting were automated, reducing errors and optimizing work times. The implemented solution included the creation of a website with an integrated automated chatbot to answer inquiries and capture prospects, automation of billing and accounting to reduce errors and improve operational efficiency, implementation of Make.com to optimize workflow and enhance customer and order management, and integration of digital tools that improved shipment tracking and customer database management. As a result, operational efficiency increased, administrative task time was reduced, customer management was optimized, client acquisition and retention improved through a digitized system, billing and accounting errors were reduced, income and expense control was optimized, and logistics management was enhanced with tools that facilitated tracking and shipment control.</p>
                <p>Elagri Farm has reported significant improvements in business management and has successfully optimized time across key activities. Automation has enabled better internal organization and more efficient customer service.  The implemented solutions will allow Elagri Farm to continue scaling its business efficiently and structurally, with greater responsiveness to market demands and a solid foundation for future expansions. This project has demonstrated the importance of digitization in the agricultural industry and how artificial intelligence can be a key tool for improving operational efficiency. As the next step, the impact of the implemented solutions will continue to be monitored, and new digitization opportunities will be explored to further strengthen the company. If you want to optimize your business processes and improve efficiency with artificial intelligence, contact us for a personalized consultation.</p>
            </div>
        ),
    },
    {
        id: 2,
        title: "Ecuabet - Innovation and Entertainment in Sports Betting and Online Casino",
        content: (
            <div className="flex flex-col items-center text-justify w-[1300px]">
                <p>Ecuabet is an Ecuadorian sports betting and online casino platform that has revolutionized the digital entertainment market in Ecuador. With a wide range of betting options and casino games, Ecuabet has established itself as one of the top choices for online betting enthusiasts. Before Ecuabet&apos;s launch, bettors in Ecuador had limited options and lacked a reliable and locally optimized platform. The available alternatives did not offer a fully customized experience tailored to Ecuadorian users&apos; preferences, creating the need for an innovative and personalized solution.</p>
                <p><br />Ecuabet developed an intuitive and secure platform that allows users to place sports bets on disciplines such as soccer, basketball, tennis, baseball, UFC, and many more. Additionally, it offers a complete online casino experience with games such as slots, blackjack, poker, bingo, and roulette. The combination of a user-friendly interface, secure payment options, and efficient customer service has positioned Ecuabet as a benchmark in the industry.</p>
                <Image
                    alt="Ecuabet"
                    src="/ecuabet.png"
                    quality={100}
                    width={500}
                    height={300}
                    className="p-20"
                />
                <p><br />To enhance the user experience and optimize payment processes, Ecuabet implemented an automated payment solution that enables fast and secure transactions. Additionally, an AI-powered chatbot was integrated to handle inquiries and resolve issues related to payments, betting, and casino rules in real time. These improvements have significantly reduced wait times and increased user satisfaction.<br />
                    Since its launch, Ecuabet has experienced exponential growth in its user base, establishing itself as one of the most reliable and popular platforms in Ecuador. The implementation of digital marketing strategies, attractive bonuses, and special promotions has contributed to customer loyalty and the continuous increase in active players.<br />
                    <br />Ecuabet has successfully transformed the sports betting and online casino industry in Ecuador by offering a secure, diverse, and high-quality experience. Its success lies in its commitment to innovation, user satisfaction, and adaptation to the local market&apos;s needs. With a promising future, Ecuabet continues to evolve and expand its services to solidify itself as the preferred betting platform in the region.
                </p>
            </div>
        ),
    },
    {
        id: 3,
        title: "ListoBet - Innovation and Security in Online Gaming",
        content: (
            <div className="flex flex-col items-center text-justify w-[1300px]">
                <p>ListoBet is a leading platform in the online gaming industry, combining sports betting, casino, and virtual sports into a unique and exciting experience. With a strong commitment to transparency, security, and customer satisfaction, ListoBet has distinguished itself in a highly competitive market by embracing automation and digital transformation to optimize operations and enhance user experience.</p>
                <p>The online betting sector faces numerous challenges, including data security for players, gaming regulation compliance, and the constant need for innovation to retain users&apos; attention. In this context, ListoBet has developed a robust platform that prioritizes information protection, an optimized user experience, and high service standards.</p>
                <p><br/>Automation has been instrumental in driving the company&apos;s growth. By integrating Make.com for payment processing and electronic invoicing, financial operations have been streamlined. Transactions are now handled in real time, minimizing delays and reducing the likelihood of human errors. This has led to greater efficiency in financial processes, ensuring faster deposits and withdrawals while maintaining accurate and transparent invoicing for regulatory compliance.</p>
                <Image
                    src="/listobet.png"
                    alt="ListoBet"
                    width={800}
                    height={900}
                    className="bg-black p-10 m-10"
                />
                <p>To stay ahead in a competitive industry, ListoBet has focused on several key strategic areas. The company has leveraged cutting-edge technology to create a secure and dynamic platform that meets the high demands of the gaming industry. By integrating advanced security measures, including data encryption, multi-factor authentication, and fraud detection systems, ListoBet ensures a safe environment for its users. This commitment to security not only protects players but also reinforces trust in the platform.</p>
                <p><br/>ListoBet has successfully established itself as a secure, innovative, and automated platform for online gaming enthusiasts. Its strategic focus on technology, automation, responsible gaming, and customer satisfaction has allowed the company to differentiate itself in a highly competitive market. By continuously optimizing financial transactions, enhancing security measures, and leveraging automation, ListoBet has set a new standard of excellence in the online gaming industry. Moving forward, the company remains committed to further innovation, ensuring that users enjoy a seamless and engaging gaming experience with the highest levels of efficiency and security.</p>
            </div>
        ),
    },
    {
        id: 4,
        title: "Case Study 4",
        content: (
            <div className="flex flex-col items center">
                <h3>Contenido del caso de estudio 4</h3>
                <Image
                    src="/connect.png"
                    alt="connect_case-study1"
                    width={100}
                    height={100}
                />
            </div>
        ),
    },
    {
        id: 5,
        title: "Case Study 5",
        content: (
            <div className="flex flex-col items center">
                <h3>Contenido del caso de estudio 5</h3>
                <Image
                    src="/connect.png"
                    alt="connect_case-study1"
                    width={100}
                    height={100}
                />
            </div>
        ),
    },
    {
        id: 6,
        title: "Case Study 6",
        content: (
            <div className="flex flex-col items center">
                <h3>Contenido del caso de estudio 5</h3>
                <Image
                    src="/connect.png"
                    alt="connect_case-study1"
                    width={100}
                    height={100}
                />
            </div>
        ),
    },
        // Agrega más casos de estudio según sea necesario 
    ];

    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [activeId, setActiveId] = useState<number | null>(null);

    useEffect(() => {
        if (id) {
            setActiveId(parseInt(id));
        }
    }, [id]);

    const toggleContent = (id: number) => {
        setActiveId(activeId === id ? null : id);
    };

    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="flex flex-col items-center">
            <CaseHeader />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5 }}>
                <h3 className="text-5xl font-bold text-transparent m-10 p-10 bg-clip-text bg-gradient-to-r from-[#1c5a6c] to-[#5ca9b1]">Case Studies</h3>
            </motion.div>
            <div className="w-full lg:p-10">
                {caseStudies.map(study => (
                    <div key={study.id} className="mb-4 p-5">
                        <div className="flex items-center" onClick={() => toggleContent(study.id)}>
                            <h2 className="text-2xl font-bold cursor-pointer text-[#1c5a6c] select-none">
                                {study.title}
                            </h2>
                            <span className="ml-2 transform transition-transform duration-300">
                                {activeId === study.id ? (<Image src="/arrow_up.svg" alt="arrow_up_case" width={20} height={20} />) : (<Image src="/arrow_down.svg" alt="arrow_down_case" width={20} height={20} />)}
                            </span>
                        </div>
                        {activeId === study.id && (
                            <motion.div className="mt-2 p-10 text-xl flex flex-col items-center"
                                key={study.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: study.id ? 1 : 0 }}
                                transition={{ duration: 0.75 }}
                            >
                                {study.content}
                            </motion.div>)}
                    </div>
                ))}
            </div>
        </section>
    );
}