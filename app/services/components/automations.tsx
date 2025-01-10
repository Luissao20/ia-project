import { motion } from "framer-motion";
import Image from "next/image";

export default function Automations() {
    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      };
    
    return (
        <motion.div 
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-3 p-16 gap-10"
        >
            <div className="flex flex-col p-5 gap-5 items-center justify-center w-[400px] transition duration-300 hover:scale-[1.05] hover:rounded-2xl hover:border hover:border-[#594A28] hover:shadow-xl">
                <Image 
                    src="/sales.svg"
                    alt="sales"
                    width={70}
                    height={70}
                />
                <h4 className="pt-5 text-lg font-bold">Sales and Marketing automation</h4>
                <p className="text-md">Content creation, full-funnel automation, lead routing, CRM, outbound, payments, contracts and much more.</p>
            </div>
            <div className="flex flex-col p-5 gap-5 items-center justify-center w-[400px] transition duration-300 hover:scale-[1.05] hover:rounded-2xl hover:border hover:border-[#594A28] hover:shadow-xl">
                <Image 
                    src="/pc.svg"
                    alt="pc"
                    width={70}
                    height={70}
                />
                <h4 className="pt-5 text-lg font-bold">Image, voice, text recognition and analysis</h4>
                <p className="text-md">Analyze and parse documents, biometrics, emotion, facial, products, videos and more to summarize or automate actions based off keywords, identity, sentiment, etc.</p>
            </div>
            <div className="flex flex-col p-5 gap-5 items-center justify-center w-[400px] transition duration-300 hover:scale-[1.05] hover:rounded-2xl hover:border hover:border-[#594A28] hover:shadow-xl">
                <Image 
                    src="/analytics.svg"
                    alt="analytics"
                    width={70}
                    height={70}
                />
                <h4 className="pt-5 text-lg font-bold">Predictive analytics</h4>
                <p className="text-md">Data-driven decision making through risk analytics, demand or inventory forecasting and other future planning tasks.</p>
            </div>
            <div className="flex flex-col p-5 gap-5 items-center justify-center w-[400px] transition duration-300 hover:scale-[1.05] hover:rounded-2xl hover:border hover:border-[#594A28] hover:shadow-xl">
                <Image 
                    src="/conversational.svg"
                    alt="conversational"
                    width={70}
                    height={70}
                />
                <h4 className="pt-5 text-lg font-bold">Conversational AI</h4>
                <p className="text-md">Prompt engineering, automatic replies and more for customer service, sales, chat bots, front-office and marketing.</p>
            </div>
            <div className="flex flex-col p-5 gap-5 items-center justify-center w-[400px] transition duration-300 hover:scale-[1.05] hover:rounded-2xl hover:border hover:border-[#594A28] hover:shadow-xl">
                <Image 
                    src="/management.svg"
                    alt="management"
                    width={70}
                    height={70}
                />
                <h4 className="pt-5 text-lg font-bold">Project management</h4>
                <p className="text-md">We connect all manual, repetitive steps in a process, from task handoff to completion. Such as onboarding, admin, accounting, invoicing.</p>
            </div>
            <div className="flex flex-col p-5 gap-5 items-center justify-center w-[400px] transition duration-300 hover:scale-[1.05] hover:rounded-2xl hover:border hover:border-[#594A28] hover:shadow-xl">
                <Image 
                    src="/energy.svg"
                    alt="energy"
                    width={70}
                    height={70}
                />
                <h4 className="pt-5 text-lg font-bold">Staff augmentation</h4>
                <p className="text-md">Save employees hours a day by automating their most tedious daily tasks. We&apos;ve even replaced entire teams of virtual assistants.</p>
            </div>
            <div className="flex flex-col p-5 gap-5 items-center justify-center w-[400px] transition duration-300 hover:scale-[1.05] hover:rounded-2xl hover:border hover:border-[#594A28] hover:shadow-xl">
                <Image 
                    src="/data.svg"
                    alt="data"
                    width={70}
                    height={70}
                />
                <h4 className="pt-5 text-lg font-bold">Data silos</h4>
                <p className="text-md">Content creation, full-funnel automation, lead routing, CRM, outbound, payments, contracts and much moreWe automate data entry, collection, cleansing and reporting from nuanced and silo&apos;d locations, for fast and accurate decision making.</p>
            </div>
            <div className="flex flex-col p-5 gap-5 items-center justify-center w-[400px] transition duration-300 hover:scale-[1.05] hover:rounded-2xl hover:border hover:border-[#594A28] hover:shadow-xl">
                <Image 
                    src="/customer.svg"
                    alt="customer"
                    width={70}
                    height={70}
                />
                <h4 className="pt-5 text-lg font-bold">Customer service</h4>
                <p className="text-md">Most customer service questions and responses are similar and repetitive. As a result, most CS tasks can be automated.</p>
            </div>
            <div className="flex flex-col p-5 gap-5 items-center justify-center w-[400px] transition duration-300 hover:scale-[1.05] hover:rounded-2xl hover:border hover:border-[#594A28] hover:shadow-xl">
                <Image 
                    src="/connect.svg"
                    alt="connect"
                    width={70}
                    height={70}
                />
                <h4 className="pt-5 text-lg font-bold">Connect apps</h4>
                <p className="text-md">Most of your apps can be integrated with each-other for instant handoffs of data and consolidation of information.</p>
            </div>
        </motion.div>
    );
}