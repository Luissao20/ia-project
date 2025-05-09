import ParticlesBackground from "./ParticlesBg"
import Link from 'next/link';

export default function Header() {

  return (

    <section className="relative text-white flex flex-col items-center bg-[url(../public/bgcolor.png)] bg-cover bg-no-repeat h-svh">
      <ParticlesBackground />
      <div className="flex flex-col gap-12 z-8 pt-28 lg:gap-15 lg:p-10 lg:pt-56 items-center" data-aos="flip-up">
        <h1 className="text-3xl font-bold lg:text-7xl text-center w-[300px] lg:w-[900px]">AI-Powered Workflow Automation for Growing Businesses</h1>
        <h2 className="text-xl lg:text-3xl text-center w-[290px] lg:w-[900px]">Agentify&apos;s Now AI automation solutions, including AI agents and chatbots, help businesses streamline workflows, reduce costs, and improve team productivity—all tailored to fit your growth strategy.</h2>
        <Link href="https://calendly.com/agentifynowai/agentify-book-a-meeting" target="_blank">
          <button className="text-xl lg:text-3xl bg-[#03A7B3] lg:transition lg:easy-in-out border border-[#273950] lg:duration-300 lg:hover:scale-110 text-white p-5 rounded-2xl">Book a Discovery Call</button>
        </Link>
      </div>
    </section>
  );
}
