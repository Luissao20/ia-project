import Link from "next/link";

export default function Cta() {
    return (
        <div className="flex flex-col items-center gap-10 pb-20 pt-20 bg-gradient-to-b from-[#345d87] to-[#010817]">
            <div className="flex flex-col items-center gap-5">
                <h2 className="lg:text-4xl text-2xl text-center font-bold text-[#03a7b3]">Ready to start your AI journey?</h2>
                <p className="text-center text-lg text-white">We can help you implement AI and Automation in your business</p>
            </div>
            <Link href={{ pathname: "/contact" }}>
                <button className="bg-[#03a7b3] text-xl text-white p-3 rounded-2xl transform easy-in-out duration-200 hover:scale-[1.1] hover:shadow-lg ">Get in touch</button>
            </Link>
        </div>
    );
}