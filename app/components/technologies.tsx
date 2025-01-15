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
                className="grid grid-cols-3 gap-10 p-16 -mt-10 group"
                >
                <div className="flex flex-col items-center text-center justify-center" data-aos="zoom-in">
                    <div className="flex items-center justify-center pb-10 pt-5">
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
                <div className="flex flex-col items-center text-center justify-center gap-2" data-aos="zoom-in">
                    <Image
                        src="/logos/OpenAI-Logo.png"
                        alt="OpenAi-logo"
                        width={200}
                        height={200}
                    />
                    <p>OpenAI powers cutting-edge tools like ChatGPT and Codex. We use OpenAI to build custom AI models for applications such as workflow automation, content creation, and code generation.</p>
                </div>
                <div className="flex flex-col items-center text-center justify-center gap-5" data-aos="zoom-in">
                    <Image
                        src="/logos/Gemini-Logo.png"
                        alt="Gemini-logo"
                        width={200}
                        height={200}
                    />
                    <p>Gemini, Google&apos;s AI platform, specializes in natural language understanding and machine learning. We integrate Gemini for applications like customer insights, advanced sentiment analysis, and data-driven marketing strategies.</p>
                </div>
                <div className="flex flex-col items-center text-center justify-center gap-5" data-aos="zoom-in">
                    <Image
                        src="/logos/Zapier-Logo.png"
                        alt="Zapier-logo"
                        width={200}
                        height={200}
                    />
                    <p>Zapier connects your favorite tools and apps to create seamless workflows, eliminating repetitive tasks and saving hours every week. Whether it&apos;s automating lead routing between your CRM and email marketing tools or syncing project management platforms, Zapier ensures efficiency and accuracy. Perfect for small businesses and enterprises alike.</p>
                </div>
                <div className="flex flex-col items-center text-center justify-center gap-10" data-aos="zoom-in">
                    <Image
                        src="/logos/make-logo.svg"
                        alt="Make-logo"
                        width={200}
                        height={200}
                        className="pb-5 pt-6"
                    />
                    <p>Make.com provides a visual and flexible platform for automating complex, large-scale workflows. With its intuitive drag-and-drop interface and advanced conditional logic, it&apos;s ideal for connecting e-commerce platforms with inventory systems or managing intricate marketing campaigns. Make.com is perfect for businesses needing advanced integrations and scalability.</p>
                </div>
                <div className="flex flex-col items-center text-center justify-center gap-5" data-aos="zoom-in">
                    <Image
                        src="/logos/Python-Logo.png"
                        alt="Python-logo"
                        width={200}
                        height={200}
                    />
                    <p>Python&apos;s versatility makes it a powerful tool for creating advanced automation and data manipulation scripts. From automating financial data analysis to building custom APIs for seamless app integration, Python enables businesses to streamline operations and reduce manual workload. Its compatibility with AI models also makes it a top choice for cutting-edge automation solutions.</p>
                </div>
            </motion.div>
        </section>
    );
}