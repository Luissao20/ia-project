import Image from "next/image";
import { motion } from "framer-motion";

export default function Tech() {
    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section>
            <motion.div initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5 }} 
                className="grid grid-cols-1 lg:grid-cols-3 p-2 gap-5 lg:gap-10 lg:p-16 -mt-10 group">
                <div className="flex flex-col items-center text-center justify-center p-5 pt-10 lg:-m-5 border border-[#273950] rounded-2xl lg:border-none" data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                    <div className="flex items-center justify-center -ml-10 pb-10 lg:pt-5">
                        <Image
                            src="/logos/ChatGPT-Logo.png"
                            alt="Chatgpt-logo2"
                            width={100}
                            height={100}
                        />
                        <p className="text-4xl font-extrabold -ml-5">ChatGTP</p>
                    </div>
                    <p>ChatGPT is a state-of-the-art conversational AI developed by OpenAI. We deploy it for customer service, automating inquiries, support tickets, and dynamic content generation for improved efficiency and user engagement.</p>
                </div>
                <div className="flex flex-col items-center text-center justify-center gap-2 p-5 lg:-m-5 border border-[#273950] rounded-2xl lg:border-none" data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                    <Image
                        src="/logos/OpenAI-Logo.png"
                        alt="OpenAi-logo"
                        width={200}
                        height={200}
                    />
                    <p>OpenAI powers cutting-edge tools like ChatGPT and Codex. We use OpenAI to build custom AI models for applications such as workflow automation, content creation, and code generation.</p>
                </div>
                <div className="flex flex-col items-center text-center justify-center gap-5 p-5 lg:-m-5 border border-[#273950] rounded-2xl lg:border-none" data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                    <Image
                        src="/logos/HubSpot-Logo.png"
                        alt="Hubspot"
                        width={200}
                        height={200}
                    />
                    <p>HubSpot implementation and customizing experts help to maximize customer relationship management, automate marketing, link tools, and produce thorough reports supporting data-driven decision-making.</p>
                </div>
                <div className="flex flex-col items-center text-center justify-center gap-5 p-5 lg:-m-5 border border-[#273950] rounded-2xl lg:border-none" data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                    <Image
                        src="/logos/Zapier-Logo.png"
                        alt="Zapier-logo"
                        width={200}
                        height={200}
                    />
                    <p>We use Zapier to connect applications and automate repetitive tasks, improving operational efficiency. With Zapier, we create customized workflows that allow your team to focus on strategic tasks and increase productivity.</p>
                </div>
                <div className="flex flex-col items-center text-center justify-center gap-10 p-5 lg:-m-5 border border-[#273950] rounded-2xl lg:border-none" data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                    <Image
                        src="/logos/make-logo.svg"
                        alt="Make-logo"
                        width={200}
                        height={200}
                        className="pb-5 pt-6"
                    />
                    <p>Specialized in creating and automating workflows with Make.com, facilitating application integration, optimizing processes, and personalizing solutions to enhance operational efficiency and meet your business&apos;s specific needs.</p>
                </div>
                <div className="flex flex-col items-center text-center justify-center gap-5 p-5 lg:-m-5 border border-[#273950] rounded-2xl lg:border-none" data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                    <Image
                        src="/logos/Airtable-Logo.png"
                        alt="Airtable"
                        width={200}
                        height={200}
                    />
                    <p>Focused in creating and setting databases in Airtable for effective project management, process automation, application integration, and customised solutions to fit your particular requirements.</p>
                </div>
            </motion.div>
        </section>
    );
}