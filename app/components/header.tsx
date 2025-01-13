import Image from "next/image";
import ParticlesBackground from "./ParticlesBg"

export default function Header() {

  return (

    <section className="relative text-white lg:h-svh flex flex-col items-center bg-[url(../public/new-bg.png)] bg-cover bg-no-repeat h-[86vh] lg:flex lg:flex-col lg:items-center border-2 border-[#293750]">
      <ParticlesBackground />
      <div className="flex flex-col gap-10 p-10 z-8 pt-10 lg:flex lg:flex-col lg:gap-24 lg:p-10 lg:pt-56 lg:w-[900px] lg:items-center" data-aos="flip-up">
        <h1 className="text-4xl font-bold lg:text-7xl lg:text-center">AI-Powered Workflow Automation for Growing Businesses</h1>
        <h2 className="text-2xl lg:text-3xl lg:text-center">Agentify&apos;s AI automation solutions, including AI agents and chatbots, help businesses streamline workflows, reduce costs, and improve team productivity—all tailored to fit your growth strategy.</h2>
        <button className="text-3xl bg-[#1c5a6c] lg:transition lg:easy-in-out border border-[#273950] lg:duration-300 lg:hover:scale-110 text-white p-5 rounded-2xl">Book a free Consultation</button>
      </div>
    </section>
  );
}
