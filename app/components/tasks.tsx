import Image from "next/image";
import AnimatedList from "./animatedList";

export default function Tasks() {
    return (
        <section className="lg:h-full bg-white lg:flex lg:flex-col lg:items-center bg-cover bg-no-repeat bg-fixed pt-20 pb-20 border border-y-cyan-800" >
            <div className="lg:border border-[#594A28] lg:w-[1600px] lg:h-[800px] bg-white lg:rounded-2xl lg:bg-cyan-700 shadow-[20px_35px_35px_rgba(8,8,8,0.9)]">
                <div className="lg:flex lg:relative ">
                    <div className="flex flex-col justify-center p-16 items-center gap-10">
                        <h2 className="p-10 text-center text-5xl text-white pb-10 font-bold select-none" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0">Do you have repititive tasks?<br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 select-none">Let's Automate!</span>
                        </h2>
                        <h3 className="text-xl text-white max-w-3xl text-justify select-none">Don't waste your time preparing documents, completing spreadsheets, copying data or writing the same emails every day. You are in the business of providing exceptional results to your clients and continually improving the experience you offer them.</h3>
                        <div>
                            <AnimatedList />
                        </div>
                        <button className="bg-sky-800 transition duration-300 hover:scale-110 hover:easy-in-out hover:border hover:border-[#594A28] text-white text-xl p-5 lg:rounded-2xl w-[200px]">Book a call</button>
                    </div>
                    <div className="lg:absolute lg:right-0 lg:inset-y-12">
                        <Image
                            src='/task-automation.jpg'
                            width={700}
                            height={700}
                            alt="Chatbot"
                            quality={100}
                            className="rounded-l-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}