import Link from "next/link";

export default function Contact() {
  return (
    <section className="lg:flex lg:flex-col lg:items-center lg:pl-5 lg:pr-5 lg:pt-20 lg:pb-20 lg:gap-16 lg:border-2 lg:w-full lg:border-[#594A28] flex flex-col gap-10 pt-16 w-screen" data-aos="fade-up">
      <div className="lg:flex lg:flex-col flex flex-col items-center pb-16 gap-10 lg:border-2 lg:border-[#594A28] lg:rounded-2xl lg:items-center lg:justify-center lg:gap-12 lg:p-16 bg-[url(../public/rb_7510.png)] bg-cover bg-no-repeat bg-center">
        <span className="text-5xl text-center font-bold text-[#1c5a6c] select-none lg:h-[60px] lg:backdrop-blur-xl lg:backdrop-brightness-150 rounded-2xl">Hungry for more?</span>
        <h3 className="text-3xl text-center select-none text-black backdrop-blur-xl backdrop-brightness-150 rounded-2xl">Book a call with our experts and let us guide you through the new era of automation</h3>
        <Link href="/contact">
          <button className="bg-[#5ca9b1] text-white w-[200px] h-auto text-2xl transition duration-300 hover:scale-110 hover:easy-in-out p-5 flex justify-center items-center gap-3 rounded-2xl">Contact</button>
        </Link>
      </div>

    </section>
  );
}