import Link from "next/link";

export default function Contact() {
  return (
    <section className="lg:flex lg:flex-col lg:items-center lg:pl-5 lg:pr-5 lg:pt-20 lg:pb-20 lg:gap-16 lg:w-full flex flex-col gap-10 pt-16 w-screen bg-gradient-to-b from-[#345b87] to-[#010817]" data-aos="fade-up">
      <div className="lg:flex lg:flex-col flex flex-col items-center pb-16 gap-10 lg:border-2 lg:border-[#273950] lg:rounded-2xl lg:items-center lg:justify-center lg:gap-12 lg:p-16 bg-[url(../public/mundi.png)] bg-cover bg-no-repeat bg-center">
        <h4 className="text-5xl text-center font-bold text-white rounded-2xl">Hungry for more?</h4>
        <p className="text-3xl text-center text-white rounded-2xl">Book a call with our experts and let us guide you through the new era of Automation!</p>
        <Link href="/contact">
          <button className="bg-[#5ca9b1] text-white w-[200px] h-auto text-2xl transition duration-300 hover:scale-110 hover:easy-in-out p-5 flex justify-center items-center gap-3 rounded-2xl">Contact</button>
        </Link>
      </div>

    </section>
  );
}