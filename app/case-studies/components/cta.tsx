export default function Cta() {
    return (
        <div className="flex flex-col items-center gap-10 pb-10 pt-10">
            <div className="flex flex-col items-center gap-5">
                <h2 className="lg:text-4xl text-2xl text-center font-bold text-[#1c5a6c]">Ready to start your AI journey?</h2>
                <p className="text-center text-lg">We can help you implement AI and Automation in your business</p>
            </div>
            <button className="bg-[#1c5a6c] text-white p-5 rounded-lg transform easy-in-out duration-200 hover:scale-[1.1] hover:shadow-lg ">Get in touch</button>
        </div>
    );
}