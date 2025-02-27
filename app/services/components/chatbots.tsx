import Image from "next/image";
export default function Chatbots() {
    return (
        <section className="flex flex-col items-center w-full gap-10 pt-10" data-aos="fade-up">
            <h3 className="font-bold text-3xl text-[#03a7b3]">Chatbots</h3>
            <p className="w-[900px] text-center text-lg">At AgentifyNow.Ai, we design interactive chatbots that provide an exceptional <span className="bg-gradient-to-r from-[#03a7b3] to-[#345d87] bg-clip-text text-transparent font-bold">User
                Experience</span> and improve communication with your clients.</p>
            <div className="grid grid-cols-3 gap-20 p-20">
                <div className="flex flex-col items-center gap-2 w-[400px] border-2 border-[#3c4442] rounded-lg p-5 hover:transform hover:-translate-y-2 hover:shadow-xl transition duration-300">
                    <Image
                        alt="24-hours"
                        src="/24-hours.svg"
                        width={75}
                        height={75}
                        className="m-3"
                    />
                    <h4 className="font-bold bg-gradient-to-b from-[#03a7b3] to-[#010817] bg-clip-text text-transparent text-lg">24/7 Customer Service:</h4>
                    <p className="text-center">Our chatbots are available 24 hours a day, 7 days a week, to resolve questions and provide information instantly.</p>
                </div>
                <div className="flex flex-col items-center gap-2 w-[400px] border-2 border-[#3c4442] rounded-lg p-5 hover:transform hover:-translate-y-2 hover:shadow-xl transition duration-300">
                    <Image
                        alt="personal"
                        src="/personal.svg"
                        width={75}
                        height={75}
                        className="m-3"
                    />
                    <h4 className="font-bold bg-gradient-to-b from-[#03a7b3] to-[#010817] bg-clip-text text-transparent text-lg">Personalized Responses:</h4>
                    <p className="text-center">We implement chatbots that can adapt to individual user preferences and behaviors, offering a personalized experience.</p>
                </div>
                <div className="flex flex-col items-center gap-2 w-[400px] border-2 border-[#3c4442] rounded-lg p-5 hover:transform hover:-translate-y-2 hover:shadow-xl transition duration-300">
                <Image
                        alt="multi-platform"
                        src="/multi-platform.svg"
                        width={75}
                        height={75}
                        className="m-3"
                    />
                    <h4 className="font-bold bg-gradient-to-b from-[#03a7b3] to-[#010817] bg-clip-text text-transparent text-lg">Multichannel Support:</h4>
                    <p className="text-center">Integrate our chatbots into various platforms (web, social networks, mobile applications) to reach your customers wherever they are.</p>
                </div>
            </div>
            Insert demo here!
        </section>
    );
}