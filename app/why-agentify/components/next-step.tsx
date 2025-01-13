import Image from "next/image";

export default function NextStep() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center pb-16 text-[#1c5a6c]" data-aos="fade-up" data-aos-delay="100">
          Take the Next Step
        </h2>
        <p className="text-2xl text-center" data-aos="fade-up" data-aos-delay="100">
          Discover how Agentify can transform your business with AI automation.
        </p>
        <div className="text-center mt-10 flex flex-col items-center">
          <div className="inline-block animate-bounce">
            <Image
              src="/arrow_down2.svg"
              alt="arrow_cta"
              width={70}
              height={70}
              quality={100}
            />
          </div>
          <button className="text-2xl font-bold bg-[#93c3c7] text-[#1c5a6c] mt-4 p-3 rounded-2xl transition duration-200 easy-in-out hover:scale-[1.05]">Schedule a Free Demo</button>
          <button className="text-2xl font-bold bg-[#93c3c7] text-[#1c5a6c] mt-4 p-3 rounded-2xl transition duration-200 easy-in-out hover:scale-[1.05]">Request a Consultation Today!</button>
        </div>
      </div>
    </section>
  );
}