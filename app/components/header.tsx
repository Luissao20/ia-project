import Image from "next/image";
import ParticlesBackground from "./ParticlesBg"

export default function Header() {

  return (

    <section className="relative text-white lg:h-[86vh] lg:p-20">
      <ParticlesBackground />
      <Image
        src='/bg.jpg'
        fill
        alt="Header"
        className="-z-10 lg:-z-10"
        quality={100}
      />
      <div className="flex flex-col gap-5 lg:flex lg:flex-col lg:gap-20 lg:items-center lg:p-10 lg:pt-32" data-aos="flip-up">
        <h1 className="text-4xl font-bold lg:text-6xl lg:backdrop-blur-2xl lg:rounded-2xl">Empowering Your Business with Smarter AI Agents</h1>
        <h2 className="text-2xl lg:text-3xl lg:backdrop-blur-2xl lg:rounded-xl">Automate repetitive tasks, minimize errors, and scale your business efficiently.</h2>
        <button className="text-3xl bg-[#000386] transition duration-300 hover:scale-110 hover:easy-in-out text-white p-5">Try for free</button>
      </div>
    </section>
  );


}
