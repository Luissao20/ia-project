"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import CaseHeader from "./case-header";
import Gallery from "./gallery";
import { title } from "process";

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

                <Gallery images={["/graphics/Elagri 3.png"]} />

                <p>Elagri Farm achieved a total monthly time savings of <span className="font-bold">251 hours</span>, which translated into <span className="font-bold">$6,275 </span>
                    in cost reductions per month. Over the course of a year, this resulted in <span className="font-bold">$75,307</span> in total savings, allowing the company to reinvest
                    resources into expanding its business operations. These efficiencies not only reduced labor costs but also minimized operational errors,
                    improving the overall reliability and scalability of the business.</p>

                <Gallery images={["/graphics/Elagri 2.png"]} />

                <p>With automation handling repetitive tasks, employees could focus on strategic activities that drive growth, such as market expansion and customer
                    relationship management. Additionally, streamlined financial processes improved cash flow stability, ensuring the company could scale operations
                    without financial bottlenecks. Elagri Farm&apos;s case demonstrates how automation is not just a tool for efficiency but a key driver of sustainable
                    business growth in the agricultural export industry.</p>
            </div>
        ),
    },
    {
        id: 2,
        title: "Ecuabet's Digital Evolution: How Automation Transformed Efficiency and Profitability",
        content: (
            <div className="flex flex-col items-center text-justify w-[1300px]">
                <Image
                    alt="Ecuabet"
                    src="/ecuabet.png"
                    quality={100}
                    width={500}
                    height={300}
                    className="p-20"
                />
                <p>To remain a leader in Ecuador&apos;s online betting industry, Ecuabet, along with its franchisee AgentifyNow,
                    turned to intelligent automation as a catalyst for growth. Automating key processes such as payment verification,
                    customer inquiries, and user data analysis allowed the company to scale efficiently,
                    improve service speed, and attract a growing customer base without increasing operational overhead.</p>

                <p>In an industry where speed, security, and customer experience are critical, Ecuabet and AgentifyNow have positioned
                    themselves as market leaders through innovation. By leveraging intelligent automation, AI-driven customer support,
                    and fast payment processing, they have accelerated growth and transformed the online betting experience in Ecuador.</p>

                <p><br />Ecuabet faced several key challenges before implementing intelligent automation, which hindered its efficiency,
                    customer satisfaction, and overall growth. Here are the main challenges:</p>

                <ul className="list-decimal flex flex-col gap-5 pt-10">
                    <li><span className="font-bold">Slow and Inefficient Payment Processing:</span>
                        <ul className="list-disc list-inside">
                            <li>Transactions were processed manually, taking 10-15 minutes per transaction.</li>
                            <li>High risk of errors, payment delays, and customer frustration.</li>
                            <li>Increased operational costs due to the need for multiple employees handling payments.</li>
                        </ul>
                    </li>
                    <li><span className="font-bold">High Customer Support Workload</span>
                        <ul className="list-disc list-inside">
                            <li>The company received thousands of customer inquiries daily, overwhelming the support team.</li>
                            <li>Response times were 5-10 minutes per request, leading to delays and poor user experience.</li>
                            <li>High labor costs as 50+ agents were required to handle queries manually.</li>
                        </ul>
                    </li>
                    <li><span className="font-bold">Lack of Scalability</span>
                        <ul className="list-disc list-inside">
                            <li>As Ecuabet&apos;s user base grew, manual processes became a bottleneck.</li>
                            <li>Scaling operations meant hiring more staff, increasing costs instead of optimizing efficiency.</li>
                            <li>The company needed an automated solution to handle increasing demand without escalating expenses.</li>
                        </ul>
                    </li>
                    <li><span className="font-bold">Limited Customer Engagement & Retention</span>
                        <ul className="list-disc list-inside">
                            <li>Inefficient customer support and slow payment processing led to frustration and potential churn.</li>
                            <li>The lack of personalized experiences made it difficult to retain users in a competitive market.</li>
                        </ul>
                    </li>
                    <li><span className="font-bold">Competitive Market Pressure</span>
                        <ul className="list-disc list-inside">
                            <li>Ecuabet had to compete with international betting platforms that already had advanced automation.</li>
                            <li>To stay ahead, the company needed a more efficient, automated system to improve user experience and operational efficiency.</li>
                        </ul>
                    </li>
                </ul>

                <div className="overflow-x-auto no-scrollbar pb-10 pt-10">
                    <table className="lg:w-[1200px] bg-white overflow-hidden table-auto">
                        <thead className="text-[#1c5a6c] font-bold lg:text-xl text-md">
                            <tr>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="100">Inefficient Operation</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="200">Cost & Impact - Before Automation</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="300">Cost & Impact - After Automation</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="300">Benefits</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#273950] lg:text-lg text-md">
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Slow Payment Processing</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">
                                    <ul className="list-disc list-inside">
                                        <li>Manual transaction took 10-15 minutes each.</li>
                                        <li>Higher level cost for payment verification.</li>
                                        <li>$100,000/month in operational inefficiencies</li>
                                    </ul>
                                </td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">
                                    <ul className="list-disc list-inside">
                                        <li>Automated system processes payment in 1-2 minutes.</li>
                                        <li>Reduced manual workload by 90%.</li>
                                        <li>$10,000/month post-automation.</li>
                                    </ul>
                                </td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">
                                    <ul className="list-disc list-inside">
                                        <li>$90,000/month saving.</li>
                                        <li>$1.08 million/year saving.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">High Customer Support Workload</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">
                                    <ul className="list-disc list-inside">
                                        <li>50+ agents required to handle inquiries.</li>
                                        <li>Response times: 5-10 minutes per inquiry.</li>
                                        <li>$100,000/month in labor costs.</li>
                                    </ul>
                                </td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">
                                    <ul className="list-disc list-inside">
                                        <li>AI Chatbot handles: 80-90% of inquiries instantly.</li>
                                        <li>Reduced staff requirement by 70%.</li>
                                        <li>$40,000/month post-automation.</li>
                                    </ul>
                                </td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">
                                    <ul className="list-disc list-inside">
                                        <li>$60,000/month saving.</li>
                                        <li>$720,000/year saving.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Scalability Challenges</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">Increased operational costs as the user grew.</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">AI and automation handle higher volumens efficiently.</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">Cost-effective scaling.</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Customer Experience and Retention Issues</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">Delays in payments and support caused frustration</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">Faster payments and instant support improved retention</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">Higher user satisfaction</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Gallery images={["/graphics/Ecuabet 3.png", "/graphics/Ecuabet 1.png"]} />
                <p className="pt-10">Before automation, Ecuabet faced significant inefficiencies, with an estimated monthly cost of <span className="font-bold">$45,000</span> due to delays in payment processing,
                    high labor costs for customer support, inefficiencies in fraud detection, and slow bet verification. After implementing AI-driven automation,
                    these inefficiencies were significantly reduced, leading to monthly savings of <span className="font-bold">$36,500</span>. As a result, the platform has achieved annual savings
                    of <span className="font-bold">$438,000</span>, improving financial efficiency, optimizing operational workflows, and enhancing overall user satisfaction.</p>
            </div>
        ),
    },
    {
        id: 3,
        title: "ListoBet - Innovation, Automation and Security in Online Gaming",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center text-justify w-[1300px]">
                <Image
                    src="/logos/listobet3.png"
                    alt="ListoBet"
                    width={500}
                    height={500}
                />
                <p>ListoBet is a leading platform in the online gaming industry, combining sports betting, casino, and virtual sports into a unique and exciting experience.
                    With a strong commitment to transparency, security, and customer satisfaction, ListoBet has distinguished itself in a highly competitive market by embracing
                    automation and digital transformation to optimize operations and enhance user experience. The online betting sector faces numerous challenges, including data
                    security for players, gaming regulation compliance, and the constant need for innovation to retain users&apos; attention. In this context, ListoBet has developed
                    a robust platform that prioritizes information protection, an optimized user experience, and high service standards.</p>
                <p>Automation has been instrumental in driving the company&apos;s growth. By integrating Make.com for payment processing and electronic invoicing, financial
                    operations have been streamlined. Transactions are now handled in real time, minimizing delays and reducing the likelihood of human errors. This has led
                    to greater efficiency in financial processes, ensuring faster deposits and withdrawals while maintaining accurate and transparent invoicing for regulatory compliance.</p>

                <p>Before the implementation of automation, financial operations were time-consuming and required significant manual input. The following breakdown illustrates the impact of automation on efficiency:</p>
                <div className="overflow-x-auto no-scrollbar pb-10 pt-10">
                    <table className="lg:w-[1200px] bg-white overflow-hidden table-fixed">
                        <thead className="text-[#1c5a6c] font-bold lg:text-xl text-md">
                            <tr>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="100">Operations</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="200">Before Automation</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="300">After Automation</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="300">Improvement</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#273950] lg:text-lg text-md">
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Payment Processing</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">
                                    <ul className="list-disc list-inside">
                                        <li>Payments required manual verification, taking 5-10 minutes per transaction.</li>
                                        <li>High transaction volumes led to delays, especially during peak hours.</li>
                                        <li>Human errors in processing caused disputes and reconciliation issues.</li>
                                        <li>Fraud detection was slow and reactive, increasing security risks.</li>
                                    </ul>
                                </td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">
                                    <ul className="list-disc list-inside">
                                        <li>Payments are processed in real time (&lt;30 seconds per transaction).</li>
                                        <li>AI-driven fraud detection instantly flags suspicious transactions.</li>
                                        <li>Automated reconciliation reduces errors and speeds up financial reporting.</li>
                                    </ul>
                                </td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">
                                    <ul className="list-disc list-inside">
                                        <li>Transaction processing time reduced by up to 90%, improving user experience.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Invoicing & Regulatory Compliance</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">
                                    <ul className="list-disc list-inside">
                                        <li>Manual invoice generation took 15-20 minutes per transaction.</li>
                                        <li>Errors in calculations and missing records caused compliance risks.</li>
                                        <li>Delays in sending invoices led to payment collection issues.</li>
                                        <li>Regulatory reporting required significant manual effort, increasing labor costs.</li>
                                    </ul>
                                </td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">
                                    <ul className="list-disc list-inside">
                                        <li>AI automatically generates, verifies, and sends invoices within 1-2 minutes.</li>
                                        <li>Compliance audits are streamlined with automated record-keeping.</li>
                                        <li>Faster invoicing improves cash flow and eliminates compliance fines.</li>                                    </ul>
                                </td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">
                                    <ul className="list-disc list-inside">
                                        <li>Invoice errors reduced by up to 95%, ensuring accuracy.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Customer Support & Query Handling</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">
                                    <ul className="list-disc list-inside">
                                        <li>Customers had to contact support for transaction status updates.</li>
                                        <li>Support response times ranged from 24-48 hours, leading to customer frustration.</li>
                                        <li>High call volumes overwhelmed staff, increasing labor costs.</li>
                                        <li>Manual account verification slowed down issue resolution.</li>
                                    </ul>
                                </td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">
                                    <ul className="list-disc list-inside">
                                        <li>AI-powered chatbots provide instant responses to customer inquiries.</li>
                                        <li>Customers can check transaction statuses in real time without contacting support.</li>
                                        <li>AI automates account verification, reducing fraud risk.</li>
                                    </ul>
                                </td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">
                                    <ul className="list-disc list-inside">
                                        <li>Customer support workload reduced by up to 60%, improving efficiency.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Security & Fraud Prevention</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">
                                    <ul className="list-disc list-inside">
                                        <li>Fraud detection was reactive, relying on manual monitoring.</li>
                                        <li>Data security risks increased due to human errors and slow response times.</li>
                                        <li>Multi-step authentication was manual, delaying account verification.</li>
                                    </ul>
                                </td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">
                                    <ul className="list-disc list-inside">
                                        <li>AI scans transactions in real time, identifying fraud instantly.</li>
                                        <li>Automated data encryption enhances user security and regulatory compliance.</li>
                                        <li>AI-driven multi-factor authentication improves login security without delays.</li>
                                    </ul>
                                </td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">
                                    <ul className="list-disc list-inside">
                                        <li>Security breach risks reduced by up to 80%, boosting platform trust.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Gallery images={["/graphics/ListoBet 1.png", "/graphics/ListoBet 2.png"]} />

                <h4>A detailed cost analysis before and after automation shows a significant reduction in operational expenses:</h4>
                <div className="overflow-x-auto no-scrollbar pb-10 pt-10">
                    <table className="lg:w-[1200px] bg-white overflow-hidden table-auto">
                        <thead className="text-[#1c5a6c] font-bold lg:text-xl text-md">
                            <tr>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="100">Pre-Automation</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="200">Costs</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="300">Post-Automation</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="300">Costs</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#273950] lg:text-lg text-md">
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Labor costs for manual processing</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">$50,000 per year</td>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-up" data-aos-delay="300">Automation software and integration</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">$15,000 per year</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Compliance risk-related fines</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">$10,000 per year</td>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-up" data-aos-delay="300">Minimal labor costs for supervision</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">$10,000 per year</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Delayed transaction losses</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">$15,000 per year</td>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-up" data-aos-delay="300">Improved compliance, eliminating fines</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">$0 per year</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Total Estimated </td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">$75,000 per year</td>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-up" data-aos-delay="300">Total Estimated</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">$25,000 per year</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>Total Annual Savings: <span className="font-bold">$50,000</span> per year, representing a <span className="font-bold">66% reduction</span> in operational costs while improving efficiency and security.</p>

                <p>To stay ahead in a competitive industry, ListoBet has focused on several key strategic areas. The company has
                    leveraged cutting-edge technology to create a secure and dynamic platform that meets the high demands of the
                    gaming industry. By integrating advanced security measures, including data encryption, multi-factor authentication,
                    and fraud detection systems, ListoBet ensures a safe environment for its users. This commitment to security not
                    only protects players but also reinforces trust in the platform.</p>
                <p>ListoBet has successfully established itself as a secure, innovative, and automated platform for online gaming
                    enthusiasts. Its strategic focus on technology, automation, responsible gaming, and customer satisfaction has
                    allowed the company to differentiate itself in a highly competitive market. By continuously optimizing financial transactions,
                    enhancing security measures, and leveraging automation, ListoBet has set a new standard of excellence in the online
                    gaming industry. Moving forward, the company remains committed to further innovation, ensuring that users enjoy a
                    seamless and engaging gaming experience with the highest levels of efficiency and security.</p>
            </div>
        ),
    },
    {
        id: 4,
        title: "Revolutionizing Healthcare: How Automation Transformed FINO PT",
        content: (
            <div className="flex flex-col items-center text-justify w-[1300px] gap-10">
                <Image 
                    alt="Fino PT"
                    src="/logos/FinoPT.png"
                    width={400}
                    height={300}
                />
                <p>In the fast-evolving healthcare industry, efficiency and precision are essential for delivering quality patient care. 
                However, as demand for physical therapy and acupuncture treatments grew, FINO PT faced mounting operational challenges 
                that hindered its ability to scale. Managing patient inquiries, processing documents, and tracking appointments became 
                increasingly time-consuming, pulling valuable resources away from patient care. </p>
                <p>To overcome these inefficiencies and accelerate growth, FINO PT turned to intelligent automation, leveraging AI-driven 
                solutions to streamline lead generation, automate document processing, and enhance overall workflow efficiency. 
                The result was a significant transformation that not only optimized daily operations but also positioned the clinic for 
                long-term success in a competitive healthcare market.</p>

                <div className="flex gap-10 items-center justify-center">
                    <h4>FINO PT faced several key difficulties before implementing AI automation:</h4>
                    <Gallery images={["/graphics/FINO 4.png"]} />
                </div>

                <ul className="list-decimal flex flex-col gap-5">
                    <h4 className="font-bold">After Automation</h4>
                    <li>Automated lead management
                        <ul className="list-disc list-inside">
                            <li>HubSpot CRM connection with social media tracks and arranges searches automatically.</li>
                            <li>Automated follow-ups and replies motivated by artificial intelligence raise conversion rates.</li>
                            <li>Instant appointment confirmations from patients help to lower no-shows.</li>
                        </ul>
                    </li>
                    <li>Document Processing Powered by Artificial Intelligence 
                        <ul className="list-disc list-inside">
                            <li>Make.com automates patient paperwork and insurance validation in real-time.</li>
                            <li>Digital records created automatically lower mistakes and increase accessibility.</li>
                            <li>Instant document retrieval replaces labor-intensive searches.</li>
                        </ul>
                    </li>
                    <li>Scheduling Appointments & Following Up
                        <ul className="list-disc list-inside">
                            <li>Automated SMS and email alerts generated by artificial intelligence remember appointments.</li>
                            <li>Personalized follow-ups given to patients increase involvement.</li>
                            <li>Less paperwork will free employees to concentrate on patient care.</li>
                        </ul>
                    </li>
                    <li>Automated Payment Processing & Billing
                        <ul>
                            <li>Electronic invoicing systems driven by artificial intelligence create and transmit invoices automatically.</li>
                            <li>Online payments and reminders of payments help to simplify the procedure.</li>
                            <li>40% less billing mistakes help to increase financial accuracy.</li>
                        </ul>
                    </li>
                    <li>AI Chatbots for Customer Support
                        <ul>
                            <li>AI chatbots instantly respond to patient questions on treatments, insurance, and payments.</li>
                            <li>Virtual support available 24/7 helps administrative workers to be under less burden.</li>
                            <li>Higher patient involvement with real-time help and satisfaction.</li>
                        </ul>
                    </li>
                </ul>
                <Gallery images={["/graphics/FINO 1.png"]} />
                
                <ul className="list-disc list-inside flex flex-col gap-5 pt-10 pb-10">
                    <h4 className="font-bold">What does Automation do?</h4>
                    <li>A 70% decrease in document processing time frees personnel to concentrate on patient care.</li>
                    <li>Faster response times for new patient questions — 62.5% — which drives more appointment reservations.</li>
                    <li>50% less hand-made administrative work will liberate resources for company expansion.</li>
                    <li>Improved clinic cash flow and financial stability by higher rates of payment collecting.</li>
                </ul>

                <Gallery images={["/graphics/FINO 3.png"]} />

                <p className="pt-10">By integrating AI automation, FINO PT achieved a total monthly time savings of 
                    <span className="font-bold"> 198 hours</span>, leading to an estimated cost reduction of 
                    <span className="font-bold"> $4,950</span> per month. Annually, this translated into 
                    <span className="font-bold"> $59,400</span> in savings, funds that 
                    could be reinvested into expanding clinic services and improving patient engagement initiatives. The adoption 
                    of automation not only reduced operational costs but also significantly enhanced the patient experience by 
                    ensuring faster, more accurate service delivery. </p>
                <p>The ability to process leads efficiently, verify documents seamlessly, and maintain consistent communication 
                    with patients positioned FINO PT as a leader in tech-driven healthcare. This case highlights how automation 
                    is not just a convenience but a necessity for sustainable growth in the modern healthcare industry.</p>
            </div>
        ),
    },
    {
        id: 5,
        title: "How Automation Transformed Operations at uBreakiFix",
        content: (
            <div className="flex flex-col items-center text-justify w-[1300px] gap-10">
                <p>uBreakiFix struggled to handle rising service requests, inventory complexity, and customer contacts 
                    across several sites as demand for quick and dependable electronics repair expanded. Scaling a repair 
                    company calls for efficiency, accuracy, and flawless operations—not only for knowledgeable professionals. 
                    AgentifyNow, an uBreakiFix franchisee, used intelligent automation to change its workflow in order to 
                    keep ahead in a crowded industry. The organization improved customer interaction, inventory control, 
                    and repair monitoring by using AI-driven solutions, thereby accelerating service delivery and increasing 
                    operational efficiency.</p>
                
                <ul className="list-decimal list-inside flex flex-col gap-5">
                    <p>Before implementing AI-powered automation, AgentifyNow, a uBreakiFix franchisee, faced several challenges 
                        that impacted operational efficiency and customer satisfaction:</p>
                    <li><span className="font-bold">Repair Tracking & Diagnostics</span>
                        <ul className="list-disc list-inside">
                            <li>Technicians manually checked devices and documented repairs on paper or spreadsheets.</li>
                            <li>Customers had to call for updates, leading to high call volumes and slow responses.</li>
                            <li>Diagnosing reports took 2-4 hours per device as technicians had to do it manually.</li>
                            <li>Delays in communication between front desk and technicians slowed repair turnaround times.</li>
                        </ul>
                    </li>
                    <li><span className="font-bold">Inventory Management & Ordering</span>
                        <ul className="list-disc list-inside">
                            <li>Inventory was tracked manually using spreadsheets and physical stock counts.</li>
                            <li>Employees spent 3-5 hours per location daily verifying available stock.</li>
                            <li>Parts frequently went out of stock due to mismanagement and human error.</li>
                            <li>Ordering new stock was reactive, leading to delays in repairs.</li>
                        </ul>
                    </li>
                    <li><span className="font-bold">Customer Inquiries & Scheduling</span>
                        <ul className="list-disc list-inside">
                            <li>Customers had to call or visit the store for repair status updates.</li>
                            <li>Support staff manually scheduled appointments and repair requests.</li>
                            <li>Response times to customer inquiries were 24-48 hours due to backlog.</li>
                            <li>High call volumes overwhelmed staff, leading to poor customer experience.</li>
                        </ul>
                    </li>
                    <li><span className="font-bold">Payment Processing & Invoicing</span>
                        <ul className="list-disc list-inside">
                            <li>Staff manually created invoices, processed payments, and tracked pending balances.</li>
                            <li>Payment processing took 2-3 hours per transaction, leading to delays.</li>
                            <li>Late payments and human errors in invoices created cash flow issues.</li>
                        </ul>
                    </li>
                </ul>
                <Gallery images={["/graphics/ubif 4.png"]} />
                
                <ul className="list-decimal list-inside flex flex-col gap-5 pt-10">
                    <h4 className="font-bold">After Automation:</h4>
                    <li><span className="font-bold">Repair Tracking & Diagnostics</span>
                        <ul className="list-disc list-inside">
                            <li>AI-driven repair tracking system provides real-time updates to customers.</li>
                            <li>AI-assisted diagnostics analyze issues instantly, suggesting the best solutions.</li>
                            <li>The improvement with AI is through a WhatsApp audio; an AI agent converts the audio into a report, making the service faster.</li>
                            <li>Service completion time reduced by up to 40%, leading to faster repairs.</li>
                        </ul>
                    </li>
                    <li><span className="font-bold">Inventory Management & Ordering</span>
                        <ul className="list-disc list-inside">
                            <li>AI-powered real-time inventory tracking ensures stock is always updated.</li>
                            <li>AI predicts demand and automates reordering, preventing stock shortages.</li>
                            <li>Employees no longer need to manually check inventory daily.</li>
                            <li>Repair turnaround time improves as parts are always available when needed.</li>
                        </ul>
                    </li>
                    <li><span className="font-bold">Customer Inquiries & Scheduling</span>
                        <ul className="list-disc list-inside">
                            <li>AI-powered chatbots provide instant repair status updates, reducing call volumes.</li>
                            <li>Customers can self-schedule repairs online, reducing manual scheduling tasks.</li>
                            <li>AI-powered virtual assistants handle common inquiries, ensuring instant responses.</li>
                            <li>Customer engagement increased by 30% due to faster service and real-time updates.</li>
                        </ul>
                    </li>
                    <li><span className="font-bold">Payment Processing & Invoicing</span>
                        <ul className="list-disc list-inside">
                            <li>AI automatically generates invoices when repairs are completed.</li>
                            <li>Customers receive automated payment reminders, reducing overdue balances.</li>
                            <li>AI-powered chatbots handle billing inquiries and payment confirmations.</li>
                            <li>Cash flow improved as payments are processed instantly with fewer errors.</li>
                        </ul>
                    </li>
                </ul>
                <Gallery images={["/graphics/ubif 2.png"]} />
                <p>Before and after implementing AI-driven automation, uBreakIfix saw dramatic
                    improvements in efficiency, productivity and cost savings:</p>

                <div className="overflow-x-auto no-scrollbar pb-10">
                    <table className="lg:w-[1200px] bg-white overflow-hidden table-auto">
                        <thead className="text-[#1c5a6c] font-bold lg:text-xl text-md">
                            <tr>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="100">Process</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="200">Time Before AI</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="300">Time After AI</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="300">Time Saved Per Task</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#273950] lg:text-lg text-md">
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Repair Tracking & Diagnostics</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">2-4 hours per device</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">30 minutes per device</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">Up to 3.5 hours saved</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Inventory Management & Ordering</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">3-5 hours per location daily</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">Real-time updates</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">Up to 5 hours saved daily</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Customer Inquiries & Scheduling</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">24-48 hours response time</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">Instant AI chatbot replies</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">Up to 48 hours saved per inquiry</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Payment Processing & Invoicing</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">2-3 hours per transaction</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">Instant processing</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">Up to 3 hours saved per payment</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="overflow-x-auto no-scrollbar pb-10">
                    <table className="lg:w-[1200px] bg-white overflow-hidden table-fixed">
                        <thead className="text-[#1c5a6c] font-bold lg:text-xl text-md">
                            <tr>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="100">Metric</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="200">Before Automation</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="300">After Automation</th>
                                <th className="px-4 py-2" data-aos="fade-down" data-aos-delay="300">Saving</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#273950] lg:text-lg text-md">
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Monthly Inefficiency Cost</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">$49,000</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">$9,500</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">$39,500</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold" data-aos="fade-right" data-aos-delay="100">Annual Inefficiency Cost</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="200">$588,000</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">$114,000</td>
                                <td className="border px-4 py-2" data-aos="fade-up" data-aos-delay="300">$474,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>The AI-driven automation at AgentifyNow (a uBreakiFix franchisee) significantly reduced time spent on manual tasks, 
                    improved operational efficiency, and optimized financial workflows. By automating repair tracking, inventory management, 
                    customer engagement, and payment processing, the company experienced:</p>

                <Gallery images={["/graphics/ubif 3.png"]} />

                <p>By automating repair tracking, inventory management, customer service, and payment processing, AgentifyNow 
                    <span className="font-bold"> (a uBreakiFix franchisee)</span> saved <span className="font-bold">$39,500</span> per 
                    month ($474,000 annually) while enhancing operational efficiency, 
                    customer engagement, and cash flow.</p>
            </div>

            
        ),
    }
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
                <h3 className="text-5xl font-bold text-transparent m-10 p-10 bg-clip-text bg-gradient-to-r from-[#03a7b3] 
                to-[#345d87]">Case Studies</h3>
            </motion.div>
            <div className="w-full lg:p-10">
                {caseStudies.map(study => (
                    <div key={study.id} className="mb-4 p-5">
                        <div className="flex items-center" onClick={() => toggleContent(study.id)}>
                            <h2 className="text-2xl font-bold cursor-pointer text-[#345d87] select-none">
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