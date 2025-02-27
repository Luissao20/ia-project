import Image from "next/image";

export default function AiAgents() {
    return (
        <section className="flex flex-col items-center w-full gap-10 pt-10" data-aos="fade-up">
                <h3 className="font-bold text-3xl text-[#03a7b3]">AI Agents</h3>
                <p className="w-[900px] text-center text-lg">Our AI agents are designed to transform the way you interact with technology.
                    We offer <span className="bg-gradient-to-r from-[#03a7b3] to-[#345d87] bg-clip-text text-transparent font-bold">Customized AI</span> solutions that adapt to the specific needs of your business,
                    improving efficiency and reducing operational costs.</p>

                <div className="grid grid-cols-3 gap-20 p-20">
                    <div className="flex flex-col items-center gap-2 w-[400px] border-2 border-[#3c4442] rounded-lg p-5 hover:transform hover:-translate-y-2 hover:shadow-xl transition duration-300">
                        <Image 
                            alt="va"
                            src="/va.svg"
                            width={100}
                            height={100}
                        />
                        <h4 className="font-bold bg-gradient-to-b from-[#03a7b3] to-[#010817] bg-clip-text text-transparent text-lg">Virtual Assistance:</h4>
                        <p className="text-center">Improve customer service with virtual assistants that can handle common queries and free up time for your human team.</p> 
                    </div>
                    <div className="flex flex-col items-center gap-2 w-[400px] border-2 border-[#3c4442] rounded-lg p-5 hover:transform hover:-translate-y-2 hover:shadow-xl transition duration-300">
                        <Image 
                            alt="integration"
                            src="/integration.svg"
                            width={75}
                            height={75}
                            className="m-3"
                        />
                        <h4 className="font-bold bg-gradient-to-b from-[#03a7b3] to-[#010817] bg-clip-text text-transparent text-lg">Seamless Integration:</h4>
                        <p className="text-center">Our AI agents easily integrate with your existing systems to optimize and automate internal processes.</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-[400px] border-2 border-[#3c4442] rounded-lg p-5 hover:transform hover:-translate-y-2 hover:shadow-xl transition duration-300">
                        <Image 
                            alt="analytics"
                            src="/analytics2.svg"
                            width={75}
                            height={75}
                            className="m-3"
                        />
                        <h4 className="font-bold bg-gradient-to-b from-[#03a7b3] to-[#010817] bg-clip-text text-transparent text-lg">Intelligent Analytics:</h4>
                        <p className="text-center">Use the power of our AI agents to analyze data in real time and deliver actionable insights that drive informed business decisions.</p>
                    </div>
                </div>
                <div>
                    Insert demo here!
                </div>
        </section>
    );
}