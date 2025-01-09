import Image from "next/image";
import ParticlesBackground from "./ParticlesBg"

export default function Header() {

  return (

    <section className="relative text-white lg:h-[86vh] lg:flex lg:flex-col lg:items-center border-2 border-[#594A28]">
      <ParticlesBackground />
      <Image
        src="/bg.jpg"
        fill
        alt="Header"
        className="-z-10 lg:-z-10"
        quality={100}
      />
      <div className="flex flex-col gap-5 lg:flex lg:flex-col lg:gap-10 lg:p-10 lg:pt-40 lg:w-[900px] lg:items-center" data-aos="flip-up">
        <h1 className="text-4xl font-bold lg:text-7xl lg:backdrop-blur-lg lg:rounded-2xl lg:text-center">Empowering Your Business with Smarter AI Agents</h1>
        <h2 className="text-2xl lg:text-3xl lg:backdrop-blur-lg lg:rounded-xl lg:text-center">Automate repetitive tasks, minimize errors, and scale your business efficiently.</h2>
        <button className="text-3xl bg-cyan-800 transition duration-300 hover:scale-110 hover:border hover:border-[#594A28] hover:easy-in-out text-white p-5 rounded-2xl">Try for free</button>
      </div>
    </section>
  );


}
