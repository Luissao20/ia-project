import Image from "next/image";
import Link from "next/link";

export default function NextStep() {
  return (
    <section className="py-20 px-5 bg-gradient-to-b from-[#345d87] to-[#010817]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center pb-16 text-[#03a7b3]" data-aos="fade-up" data-aos-delay="100">
          Take the Next Step
        </h2>
        <p className="text-2xl text-center text-white" data-aos="fade-up" data-aos-delay="100">
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
          <Link href={"/contact"}>
            <button className="text-2xl font-bold bg-[#03a7b3] text-white mt-4 p-5 rounded-2xl transition duration-200 
              easy-in-out hover:scale-[1.05]">Request a Consultation Today!</button>
          </Link>

        </div>
      </div>
    </section>
  );
}