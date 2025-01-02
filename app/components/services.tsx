import Image from "next/image";

export default function Services() {
  return (
    <section className="pl-5 pr-5 pt-20 flex flex-col items-center gap-10 pb-20">
      <h2 className="text-4xl font-bold" data-aos="fade-up">Features</h2>
      <h3 className="text-3xl text-center" data-aos="fade-up">If you can imagine it, we can achieve it</h3>
      <div data-aos="flip-up">
        <ul className="flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:gap-10 lg:p-10">
          <li className="bg-cyan-800 p-5 flex flex-col gap-3 lg:flex lg:flex-col lg:items-center lg:p-4 lg:justify-center lg:w-fit lg:h-auto lg:gap-10">
            <div className="lg:flex lg:relative lg:w-full lg:h-64">
              <Image
                src='/chatbot.png'
                layout="responsive"
                width={400}
                height={100}
                alt="Chatbot"
              />
            </div>
            <div className="flex flex-col gap-2 lg:gap-10 lg:p-5 items-start">
              <h4 className="text-2xl">Customizable AI Agents</h4>
              <p className="text-xl lg:text-justify">Automate tasks and free up time with our smart chatbots. Let them do the hard work.</p>
              <button className="bg-[#000386] text-white text-xl p-5 flex justify-center items-center gap-3">
                Explore
                <Image
                  src='/arrow-right-large-svgrepo-com.svg'
                  alt="Arrow"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </li>
          <li className="bg-cyan-800 p-5 flex flex-col gap-3 lg:flex lg:flex-col lg:items-center lg:p-4 lg:justify-center lg:w-fit lg:h-auto lg:gap-10">
            <div className="lg:flex lg:relative lg:w-full lg:h-64">
              <Image
                src='/metrics.png'
                layout="responsive"
                width={400}
                height={100}
                alt="Metrics"
              />
            </div>
            <div className="flex flex-col gap-2 lg:gap-10 lg:p-5 items-start">
              <h4 className="text-2xl">Advanced Analytics</h4>
              <p className="text-xl lg:text-justify">Harness the power of AI to gain deep insights from your financial data and make strategic decisions.</p>
              <button className="bg-[#000386] text-white text-xl p-5 flex justify-center items-center gap-3">
                Explore
                <Image
                  src='/arrow-right-large-svgrepo-com.svg'
                  alt="Arrow"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </li>
          <li className="bg-cyan-800 p-5 flex flex-col gap-3 lg:flex lg:flex-col lg:items-center lg:p-4 lg:justify-center lg:w-fit lg:h-auto lg:gap-10">
            <div className="lg:flex lg:relative lg:w-full lg:h-64">
              <Image
                src='/robotic-bg2.jpg'
                layout="responsive"
                width={400}
                height={100}
                alt="Connect"

              />
            </div>
            <div className="flex flex-col gap-2 lg:gap-10 lg:p-5 items-start">
              <h4 className="text-2xl">Seamless Integrations</h4>
              <p className="text-xl lg:text-justify">Simplify communication, improve customer experience with innovative solutions.</p>
              <button className="bg-[#000386] text-white text-xl p-5 flex justify-center items-center gap-3">
                Explore
                <Image
                  src='/arrow-right-large-svgrepo-com.svg'
                  alt="Arrow"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <button className="bg-[#000386] transition duration-300 hover:scale-110 hover:easy-in-out text-white text-xl p-5">See more</button>
    </section>
  );
}