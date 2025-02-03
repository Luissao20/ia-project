import Image from "next/image";
import AnimatedList from "./animatedList";
import Link from "next/link";

export default function Tasks() {
    return (
        <section className="h-full bg-white lg:flex lg:flex-col items-center pt-20 pb-20">
            <div className="lg:border lg:border-[#273950] lg:w-[1300px] lg:h-[800px] w-screen lg:rounded-2xl bg-[#1c5a6c] lg:shadow-[20px_35px_35px_rgba(8,8,8,0.9)]">
                <div className="lg:flex lg:relative">
                    <div className="lg:flex lg:flex-col lg:justify-center lg:p-16 lg:items-center lg:gap-10 lg:-ml-10 flex flex-col p-5 gap-10 items-center">
                        <h2 className="p-10 text-center text-5xl text-white pb-10 font-bold select-none" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0">Do you have repititive tasks?<br />
                            <span className="text-[#5ca9b1] select-none">Let&apos;s Automate!</span>
                        </h2>
                        <h3 className="text-lg text-white max-w-2xl text-justify select-none">Don&apos;t waste your time preparing documents, completing spreadsheets, copying data or writing the same emails every day. You are in the business of providing exceptional results to your clients and continually improving the experience you offer them.</h3>
                        <div>
                            <AnimatedList />
                        </div>
                        <Link href="/contact">
                            <button className="bg-[#5ca9b1] border border-[#273950] lg:transition lg:duration-300 lg:hover:scale-110 lg:hover:easy-in-out text-white text-xl p-5 rounded-2xl w-[200px]">Book a call</button>
                        </Link>
                    </div>
                    <div>
                        <Image
                            src="/task-automation.png"
                            width={500}
                            height={700}
                            alt="Chatbot"
                            quality={100}
                            className="lg:rounded-l-2xl lg:absolute lg:right-0 lg:inset-y-32"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}