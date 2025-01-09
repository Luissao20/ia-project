import Link from "next/link";

export default function Contact() {
  return (
    <section className="flex flex-col items-center pl-5 pr-5 pt-20 pb-20 gap-10 border-2 border-[#594A28]" data-aos="fade-up">
      <div className="flex flex-col border-2 border-[#594A28] rounded-2xl items-center justify-center gap-12 p-16 bg-[url(../public/rb_7510.png)] bg-cover bg-no-repeat bg-center text-white">
        <span className="text-5xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 select-none h-[60px] backdrop-blur-xl backdrop-brightness-150 rounded-2xl">Hungry for more?</span>
        <h3 className="text-3xl text-center select-none text-black backdrop-blur-xl backdrop-brightness-150 rounded-2xl">Book a call with our experts and let us guide you through the new era of automation</h3>
        <Link href="/contact"> 
        <button className="bg-sky-800 text-white w-[200px] h-auto text-2xl transition duration-300 hover:scale-110 hover:easy-in-out p-5 flex justify-center items-center gap-3 lg:rounded-2xl">Contact</button>
        </Link>
      </div>

    </section>
  );
}