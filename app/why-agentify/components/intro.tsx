
export default function Intro() {
  return (
    <section className="pt-52 pb-20 px-5 xl:pt-64 flex flex-col gap-10">
      <h2 className="text-5xl font-bold text-center mb-8" data-aos="fade-up" data-aos-delay="100">
        Why Choose Agentify?
      </h2>
      <div className="max-w-3xl mx-auto flex flex-col gap-16 lg:flex-row lg:gap-5">
        {/* Mission Section */}
        <div className="md:px-20 lg:px-0" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#1c5a6c]">
            Transforming Businesses with Tailored AI Solutions
          </h2>
          <div className="p-5 flex flex-col items-center border-2 border-[#273950] rounded-lg">
            <p className="text-xl text-gray-700 text-center leading-relaxed">
              Agentify provides custom AI automation solutions, including AI agents and chatbots,
              that save time, reduce costs, and drive measurable growth for businesses of all sizes.
              Whether you're a startup or an enterprise, our solutions are built to scale alongside your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}