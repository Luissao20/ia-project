import ParticlesBackground from "./ParticlesBg"

export default function Header() {

  return (

    <section className="relative text-white flex flex-col items-center bg-[url(../public/new-bg.png)] bg-cover bg-no-repeat h-svh">
      <ParticlesBackground />
      <div className="flex flex-col gap-12 z-8 pt-28 lg:gap-15 lg:p-10 lg:pt-56 items-center" data-aos="flip-up">
        <h1 className="text-3xl font-bold lg:text-7xl text-center select-none w-[300px] lg:w-[900px]">AI-Powered Workflow Automation for Growing Businesses</h1>
        <h2 className="text-xl lg:text-3xl text-center select-none w-[290px] lg:w-[900px]">Agentify&apos;s AI automation solutions, including AI agents and chatbots, help businesses streamline workflows, reduce costs, and improve team productivity—all tailored to fit your growth strategy.</h2>
        <button className="text-xl lg:text-3xl bg-[#1c5a6c] lg:transition lg:easy-in-out border border-[#273950] lg:duration-300 lg:hover:scale-110 text-white p-5 rounded-2xl">Book a free Consultation</button>
      </div>
    </section>
  );
}
