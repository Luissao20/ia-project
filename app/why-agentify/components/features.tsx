export default function Features() {

  return (
    <section className="py-20 px-5 flex flex-col items-center">
      <div className="flex flex-col items-center gap-20 p-20" data-aos="zoom-in-up">
        <div className="flex gap-10 items-center">
          <div className="flex flex-col gap-5 lg:flex lg:flex-col lg:gap-10 lg:w-[800px] p-3 items-start justifify-center">
            <h2 className="text-xl font-bold text-white bg-[#03a7b3] w-full text-center rounded-2xl p-2">Personalized and Scalable Solutions</h2>
            <ul className="text-lg text-[#010817] list-inside list-disc space-y-2 pl-10">
              <li data-aos="fade-up">Tailored to meet the unique needs of your business.</li>
              <li data-aos="fade-up" data-aos-delay="100">Scalable to grow alongside your operations.</li>
              <li data-aos="fade-up" data-aos-delay="100">Flexible integration with your existing tools and workflows.</li>
            </ul>
            <p className="text-lg text-[#010817] pl-5">&quot;Whether you&apos;re automating customer support or optimizing internal processes, our AI solutions adapt to your business needs.&quot;</p>
          </div>
          <div className="flex flex-col gap-5 lg:flex lg:flex-col lg:gap-10 lg:w-[800px] p-3 items-start justifify-center">
            <h2 className="text-xl font-bold text-white bg-[#03a7b3] w-full text-center rounded-2xl p-2">Proven Results Backed by Data</h2>
            <ul className="text-lg text-[#010817] list-inside list-disc space-y-2 pl-10">
              <li data-aos="fade-up"><span className="font-bold ">Time Savings: </span>Clients report saving over 20+ hours weekly</li>
              <li data-aos="fade-up" data-aos-delay="100"><span className="font-bold">Cost Reduction: </span>Decrease operational costs by up to 30%.</li>
              <li data-aos="fade-up" data-aos-delay="100"><span className="font-bold">Improved Efficiency: </span>Streamline workflows and reduce response times by 60%.</li>
            </ul>
            <p className="text-lg text-[#010817] pl-5">
              &quot;Agentify implemented AI chatbots for Elagri.Farm, reducing response times by 60% and increasing customer satisfaction scores by 35%.&quot;</p>
          </div>
        </div>

        <div className="flex gap-10 items-center">
          <div className="flex flex-col gap-5 lg:flex lg:flex-col lg:gap-10 lg:w-[800px] p-3 items-start justifify-center">
            <h2 className="text-xl font-bold text-white bg-[#03a7b3] w-full text-center rounded-2xl p-2">Industry Expertise You Can Trust</h2>
            <ul className="text-lg text-[#010817] list-inside list-disc space-y-2 pl-10">
              <li data-aos="fade-up">Years of experience delivering AI automation solutions.</li>
              <li data-aos="fade-up" data-aos-delay="100">Successful implementations in operations, insurance and customer service.</li>
              <li data-aos="fade-up" data-aos-delay="100">Expertise in cutting-edge tools like AI agents and chatbots.</li>
            </ul>
            <p className="text-lg text-[#010817] pl-5">&quot;From startups to enterprises, Agentify has the expertise to handle complex automation needs.&quot;</p>
          </div>
          <div className="flex flex-col gap-5 lg:flex lg:flex-col lg:gap-10 lg:w-[800px] p-3 items-start justifify-center">
            <h2 className="text-xl font-bold text-white bg-[#03a7b3] w-full text-center rounded-2xl p-2">Cutting-Edge AI Technology</h2>
            <ul className="text-lg text-[#010817] list-inside list-disc space-y-2 pl-10">
              <li data-aos="fade-up">Advanced machine learning algorithms.</li>
              <li data-aos="fade-up" data-aos-delay="100">AI agents for seamless integration with CRMs and other tools.</li>
              <li data-aos="fade-up" data-aos-delay="100">Flexible integration with your existing tools and workflows.</li>
            </ul>
            <p className="text-lg text-[#010817] pl-5">&quot;Our AI-powered solutions stay at the forefront of innovation to give you a competitive edge.&quot;</p>
          </div>
        </div>
      </div>
    </section>
  );
}