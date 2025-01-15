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
        className="grid grid-cols-1 lg:grid-cols-3 p-1 gap-2 lg:p-16 lg:gap-16"
        >
            <div className="flex flex-col p-1 lg:p-3 gap-3 items-center justify-center w-[350px] lg:w-[400px] border border-[#273950] lg:border-transparent rounded-2xl lg:transition lg:duration-300 lg:hover:scale-[1.03] lg:hover:rounded-2xl lg:hover:border lg:hover:border-[#273950] lg:hover:shadow-xl">
                <Image 
                    src="/sales.svg"
                    alt="sales"
                    width={70}
                    height={70}
                />
                <h4 className="pt-5 text-lg font-bold text-center">Sales and Marketing Automation</h4>
                <p className="text-md text-center">Streamline content creation and automate every stage of your sales funnel. From lead routing and CRM management to outbound campaigns, payments, and contract automation, AI ensures faster conversions and scalable growth.</p>
            </div>
            <div className="flex flex-col p-1 lg:p-3 gap-3 items-center justify-center w-[350px] lg:w-[400px] border border-[#273950] lg:border-transparent rounded-2xl lg:transition lg:duration-300 lg:hover:scale-[1.03] lg:hover:rounded-2xl lg:hover:border lg:hover:border-[#273950] lg:hover:shadow-xl">
                <Image 
                    src="/pc.svg"
                    alt="pc"
                    width={70}
                    height={70}
                />
                <h4 className="pt-5 text-lg font-bold text-center">Image, Voice, Text Recognition and Analysis</h4>
                <p className="text-md text-center">Use advanced AI to automate document parsing, facial recognition, emotion detection, and keyword extraction. Whether in retail, healthcare, or customer service, AI enables actionable insights through image, voice, and text analysis.</p>
            </div>
            <div className="flex flex-col p-1 lg:p-3 gap-3 items-center justify-center w-[350px] lg:w-[400px] border border-[#273950] lg:border-transparent rounded-2xl lg:transition lg:duration-300 lg:hover:scale-[1.03] lg:hover:rounded-2xl lg:hover:border lg:hover:border-[#273950] lg:hover:shadow-xl">
                <Image 
                    src="/analytics.svg"
                    alt="analytics"
                    width={70}
                    height={70}
                />
                <h4 className="pt-5 text-lg font-bold text-center">Predictive Analytics</h4>
                <p className="text-md text-center">Leverage AI-powered predictive analytics to optimize risk management, demand forecasting, and inventory planning. With smarter strategies, businesses can reduce costs, improve efficiency, and stay competitive.</p>
            </div>
            <div className="flex flex-col p-1 lg:p-3 gap-3 items-center justify-center w-[350px] lg:w-[400px] border border-[#273950] lg:border-transparent rounded-2xl lg:transition lg:duration-300 lg:hover:scale-[1.03] lg:hover:rounded-2xl lg:hover:border lg:hover:border-[#273950] lg:hover:shadow-xl">
                <Image 
                    src="/conversational.svg"
                    alt="conversational"
                    width={70}
                    height={70}
                />
                <h4 className="pt-5 text-lg font-bold text-center">Conversational AI</h4>
                <p className="text-md text-center">Transform customer interactions with AI-driven chatbots and prompt engineering. Automate replies and support for customer service, sales, and marketing, ensuring 24/7 availability and improved satisfaction.</p>
            </div>
            <div className="flex flex-col p-1 lg:p-3 gap-3 items-center justify-center w-[350px] lg:w-[400px] border border-[#273950] lg:border-transparent rounded-2xl lg:transition lg:duration-300 lg:hover:scale-[1.03] lg:hover:rounded-2xl lg:hover:border lg:hover:border-[#273950] lg:hover:shadow-xl">
                <Image 
                    src="/management.svg"
                    alt="management"
                    width={70}
                    height={70}
                />
                <h4 className="pt-5 text-lg font-bold text-center">Management Automation</h4>
                <p className="text-md text-center">Simplify project workflows with AI-powered automation. From onboarding and task handoffs to invoicing and admin tasks, AI streamlines operations for faster completion.</p>
            </div>
            <div className="flex flex-col p-1 lg:p-3 gap-3 items-center justify-center w-[350px] lg:w-[400px] border border-[#273950] lg:border-transparent rounded-2xl lg:transition lg:duration-300 lg:hover:scale-[1.03] lg:hover:rounded-2xl lg:hover:border lg:hover:border-[#273950] lg:hover:shadow-xl">
                <Image 
                    src="/energy.svg"
                    alt="energy"
                    width={70}
                    height={70}
                />
                <h4 className="pt-5 text-lg font-bold text-center">Staff Augmentation</h4>
                <p className="text-md text-center">Save hours of manual work by automating tedious tasks with AI. Replace virtual assistant teams with scalable, efficient automation to focus your workforce on strategic priorities.</p>
            </div>
            <div className="flex flex-col p-1 lg:p-3 gap-3 items-center justify-center w-[350px] lg:w-[400px] border border-[#273950] lg:border-transparent rounded-2xl lg:transition lg:duration-300 lg:hover:scale-[1.03] lg:hover:rounded-2xl lg:hover:border lg:hover:border-[#273950] lg:hover:shadow-xl">
                <Image 
                    src="/data.svg"
                    alt="data"
                    width={70}
                    height={70}
                />
                <h4 className="pt-5 text-lg font-bold text-center">Data Silos Management</h4>
                <p className="text-md text-center">Eliminate data silos by automating entry, cleansing, and reporting. AI ensures seamless data flow across departments for faster, more accurate decision-making in industries like finance and healthcare.</p>
            </div>
            <div className="flex flex-col p-1 lg:p-3 gap-3 items-center justify-center w-[350px] lg:w-[400px] border border-[#273950] lg:border-transparent rounded-2xl lg:transition lg:duration-300 lg:hover:scale-[1.03] lg:hover:rounded-2xl lg:hover:border lg:hover:border-[#273950] lg:hover:shadow-xl">
                <Image 
                    src="/customer.svg"
                    alt="customer"
                    width={70}
                    height={70}
                />
                <h4 className="pt-5 text-lg font-bold text-center">Customer Service Automation</h4>
                <p className="text-md text-center">Automate repetitive customer service inquiries with AI-powered chatbots and ticketing systems. Resolve issues faster, reduce response times, and improve overall satisfaction.</p>
            </div>
            <div className="flex flex-col p-1 lg:p-3 gap-3 items-center justify-center w-[350px] lg:w-[400px] border border-[#273950] lg:border-transparent rounded-2xl lg:transition lg:duration-300 lg:hover:scale-[1.03] lg:hover:rounded-2xl lg:hover:border lg:hover:border-[#273950] lg:hover:shadow-xl">
                <Image 
                    src="/connect.svg"
                    alt="connect"
                    width={70}
                    height={70}
                />
                <h4 className="pt-5 text-lg font-bold text-center">App Integration</h4>
                <p className="text-md text-center">Connect your business apps seamlessly with AI-powered integration tools like Zapier or Make.com. Ensure real-time data synchronization and smooth workflows across all systems.</p>
            </div>
        </motion.div>
    );
}