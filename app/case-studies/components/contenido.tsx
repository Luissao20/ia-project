"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import CaseHeader from "./case-header";
import Gallery from "./gallery";

export default function Contenido() {
    const caseStudies = [{
        id: 1,
        title: "The Power of Automation: How AI Transformed Elagri Farm's Operations",
        content: (
            <div className="flex flex-col items-center justify-center gap-10 text-justify w-[1300px]">
                <Image
                    alt="ElagriFarm"
                    src="/ElagriFarm.png"
                    quality={100}
                    width={800}
                    height={500}
                />
                <p>In the competitive world of agricultural exports, efficiency and
                    precision are key to scaling operations and maximizing profitability.
                    However, Elagri Farm struggled with outdated manual processes that
                    created bottlenecks in customer management, order tracking, and
                    shipment coordination. As demand grew, these inefficiencies led to missed opportunities,
                    increased operational costs, and a limited ability to expand. To
                    overcome these challenges, the company turned to intelligent
                    automation, integrating AI-driven solutions that streamlined
                    workflows, optimized inventory management, and enhanced financial
                    processes. This strategic transformation not only improved day-to-day efficiency
                    but also positioned Elagri Farm for sustained growth in the global
                    market.</p>

                <ul className="flex flex-col justify-center gap-5">
                    <h3>Additionally, the company faced key difficulties before implementing AI automation:</h3>
                    <li><span className="font-bold">Lack of Structured Processes & Digital Tools:</span> The company
                        relied solely on manual operations and word-of-mouth marketing,
                        making it difficult to track customer interactions, manage orders, and
                        scale operations.</li>
                    <li><span className="font-bold">Inefficiencies in Customer Management: </span>Without a centralized
                        system, tracking customer inquiries, managing relationships, and ensuring timely follow-ups were inconsistent and time-consuming.</li>
                    <li><span className="font-bold">Manual Sales Tracking: </span>Sales processes were not automated,
                        leading to inefficiencies in order management, delays in processing transactions, and missed revenue opportunities.</li>
                    <li><span className="font-bold">Shipment Coordination Challenges: </span>Managing logistics manually
                        increased the risk of errors, delays, and miscommunications, leading to late deliveries and dissatisfied customers.</li>
                    <li><span className="font-bold">Inventory Management Issues: </span>Without real-time tracking, the company struggled
                        with overstocking or running out of stock, affecting order fulfillment and profitability.</li>
                    <li><span className="font-bold">High Administrative Workload: </span>Employees had to spend long hours on repetitive tasks
                        like verifying orders, tracking shipments, and processing payments, reducing their ability to focus on growth and customer service.</li>
                    <li><span className="font-bold">Delayed Payments & Cash Flow Problems: </span>Invoicing and payment
                        tracking were done manually, leading to late payments, inefficiencies in financial management, and cash flow issues.</li>
                </ul>
                <Gallery images={["/graphics/Elagri 4.png"]} />
                <p>By implementing AI-driven automation solutions, Elagri Farm was able to
                    transform its operations and achieve significant improvements in key areas:</p>

                <div className="overflow-x-auto no-scrollbar">
                    <table className="lg:w-[1200px] bg-white overflow-hidden">
                        <thead className="text-[#1c5a6c] font-bold lg:text-xl text-md">
                            <tr>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="100">Operations</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="200">Before Automations</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="300">After Automations</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#273950] lg:text-lg text-md">
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Customer Handling and Sales</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">It took 5 hours a day, indicating that it was done daily.</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">It is reduced to 2 hours a day.</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Inventory Management</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">Was done daily, taking 4 hours per day.</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="400">Reducing to 1.5 hours per day.</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Shipment tracking</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">This was done daily, requiring 3 hours a day.</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="400">Reduced to 45 minutes a day.</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Payment processing</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">This was done weekly, consuming 6 hours per week.</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="400">Reducing to 1.5 hours per week.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="overflow-x-auto no-scrollbar pb-10">
                    <table className="lg:w-[1200px] bg-white overflow-hidden table-fixed">
                        <thead className="text-[#1c5a6c] font-bold lg:text-xl text-md">
                            <tr>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="100">Operations</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="200">Manual Time</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="300">Automated Time</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="300">Time Saved</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="300">Porcentage Reduction</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="300">Hours/Years Saved</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#273950] lg:text-lg text-md">
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Customer Handling and Sales</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">100 hours/week</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">40 hours/week</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">60 hours/week</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">60%</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">720</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Inventory Management</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">80 hours/week</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">30 hours/week</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">50 hours/week</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">62.5%</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">600</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Shipment tracking</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">60 hours/week</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">9 hours/week</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">51 hours/week</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">85%</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">612</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Payment processing</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">120 hours/week</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">30 hours/week</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">90 hours/week</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">75%</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">1080</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Gallery images={["/graphics/Elagri 3.png"]}/>

                <p>Elagri Farm achieved a total monthly time savings of <span className="font-bold">251 hours</span>, which translated into <span className="font-bold">$6,275 </span> 
                    in cost reductions per month. Over the course of a year, this resulted in <span className="font-bold">$75,307</span> in total savings, allowing the company to reinvest 
                    resources into expanding its business operations. These efficiencies not only reduced labor costs but also minimized operational errors, 
                    improving the overall reliability and scalability of the business.</p>

                <Gallery images={["/graphics/Elagri 2.png"]}/>

                <p>With automation handling repetitive tasks, employees could focus on strategic activities that drive growth, such as market expansion and customer 
                    relationship management. Additionally, streamlined financial processes improved cash flow stability, ensuring the company could scale operations 
                    without financial bottlenecks. Elagri Farm&apos;s case demonstrates how automation is not just a tool for efficiency but a key driver of sustainable 
                    business growth in the agricultural export industry.</p>


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
                <p><br />Automation has been instrumental in driving the company&apos;s growth. By integrating Make.com for payment processing and electronic invoicing, financial operations have been streamlined. Transactions are now handled in real time, minimizing delays and reducing the likelihood of human errors. This has led to greater efficiency in financial processes, ensuring faster deposits and withdrawals while maintaining accurate and transparent invoicing for regulatory compliance.</p>
                <Image
                    src="/listobet.png"
                    alt="ListoBet"
                    width={800}
                    height={900}
                    className="bg-black p-10 m-10"
                />
                <p>To stay ahead in a competitive industry, ListoBet has focused on several key strategic areas. The company has leveraged cutting-edge technology to create a secure and dynamic platform that meets the high demands of the gaming industry. By integrating advanced security measures, including data encryption, multi-factor authentication, and fraud detection systems, ListoBet ensures a safe environment for its users. This commitment to security not only protects players but also reinforces trust in the platform.</p>
                <p><br />ListoBet has successfully established itself as a secure, innovative, and automated platform for online gaming enthusiasts. Its strategic focus on technology, automation, responsible gaming, and customer satisfaction has allowed the company to differentiate itself in a highly competitive market. By continuously optimizing financial transactions, enhancing security measures, and leveraging automation, ListoBet has set a new standard of excellence in the online gaming industry. Moving forward, the company remains committed to further innovation, ensuring that users enjoy a seamless and engaging gaming experience with the highest levels of efficiency and security.</p>
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