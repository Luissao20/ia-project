import Image from "next/image";

export default function Workflows() {
    return (
        <section className="flex flex-col items-center w-full gap-10 pt-10" data-aos="fade-up">
            <h3 className="font-bold text-3xl text-[#03a7b3]">Workflows</h3>
            <p className="w-[900px] text-center text-lg">Optimize and automate your repetitive tasks with our advanced workflow solutions, designed to improve your team&apos;s
                <span className="bg-gradient-to-r from-[#03a7b3] to-[#345d87] bg-clip-text text-transparent font-bold">Productivity</span> and <span className="bg-gradient-to-r from-[#03a7b3] to-[#345d87] bg-clip-text text-transparent font-bold">Efficiency</span>.</p>
            <div className="grid grid-cols-3 gap-20 p-20">
                <div className="flex flex-col items-center gap-2 w-[400px] border-2 border-[#3c4442] rounded-lg p-5 hover:transform hover:-translate-y-2 hover:shadow-xl transition duration-300">
                    <Image 
                        alt="tasks"
                        src="/tasks.svg"
                        width={100}
                        height={100}
                        className="m-3"
                    />
                    <h4 className="font-bold bg-gradient-to-b from-[#03a7b3] to-[#010817] bg-clip-text text-transparent text-lg">Automation of Repetitive Tasks:</h4>
                    <p className="text-center">Eliminate manual and repetitive tasks through automation, allowing your team to focus on higher-value activities.</p>
                </div>
                <div className="flex flex-col items-center gap-2 w-[400px] border-2 border-[#3c4442] rounded-lg p-5 hover:transform hover:-translate-y-2 hover:shadow-xl transition duration-300">
                    <Image 
                        alt="workflow"
                        src="/workflows.svg"
                        width={100}
                        height={100}
                        className="m-3"
                    />
                    <h4 className="font-bold bg-gradient-to-b from-[#03a7b3] to-[#010817] bg-clip-text text-transparent text-lg">Customized Workflows:</h4>
                    <p className="text-center">We create workflows adapted to your specific processes, ensuring a fluid and efficient implementation.</p>
                </div>
                <div className="flex flex-col items-center gap-2 w-[400px] border-2 border-[#3c4442] rounded-lg p-5 hover:transform hover:-translate-y-2 hover:shadow-xl transition duration-300">
                    <Image 
                        alt="improve"
                        src="/improve.svg"
                        width={100}
                        height={100}
                        className="m-3"
                    />
                    <h4 className="font-bold bg-gradient-to-b from-[#03a7b3] to-[#010817] bg-clip-text text-transparent text-lg">Monitoring and Continuous Improvement:</h4>
                    <p className="text-center">Our workflows include monitoring and analysis capabilities to identify opportunities for improvement and ensure optimal performance.</p>
                </div>
            </div>
            Insert demo here!
        </section>
    );
}