
export default function Intro() {
  return (
    <section className="pt-52 pb-20 px-5 xl:pt-64 flex flex-col gap-10 bg-[url(../public/rb_4182.png)] bg-fixed bg-center">
      <h2 className="text-5xl font-bold text-center text-[#1c5a6c] mb-8 select-none" data-aos="fade-up" data-aos-delay="100">
        Why Choose Agentify?
      </h2>
      <div className="max-w-3xl mx-auto flex flex-col gap-16 lg:flex lg:flex-col lg:gap-16" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-4xl font-bold text-center text-[#1c5a6c] select-none">
          Transforming Businesses with Tailored AI Solutions
        </h2>
        <p className="text-xl text-gray-700 text-center leading-relaxed select-none">
          Agentify provides custom AI automation solutions, including AI agents and chatbots,
          that save time, reduce costs, and drive measurable growth for businesses of all sizes.
          Whether you&apos;re a startup or an enterprise, our solutions are built to scale alongside your business.
        </p>
      </div>
    </section>
  );
}