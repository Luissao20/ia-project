import Image from "next/image";

export default function Services() {
  return (
    <section className="pl-5 pr-5 pt-20 flex flex-col items-center gap-10 pb-20 lg:h-full bg-white text-black">
      <h2 className="text-4xl font-bold" data-aos="fade-up">Our Automations:</h2>
      <h3 className="text-3xl text-center" data-aos="fade-up">If you can imagine it, we can achieve it</h3>
      <ul className="flex flex-col gap-10 lg:grid lg:grid-cols-5 lg:p-10 text-white" data-aos="zoom-in-down">
        <li className="bg-cyan-700 p-2 flex flex-col gap-3 lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-[350px] lg:h-[300px] lg:rounded-2xl border border-[#594A28]">
          <div className="lg:flex lg:relative lg:w-[200px] lg:h-[100px]">
            <Image
              src='/chatbot.png'
              layout="responsive"
              width={100}
              height={100}
              alt="Chatbot"
            />
          </div>
          <div className="flex flex-col gap-2 lg:p-5 items-start">
            <h4 className="text-2xl font-bold select-none">Customizable AI Agents</h4>
            {/*<p className="text-xl lg:text-justify">Automate tasks and free up time with our smart chatbots. Let them do the hard work.</p>*/}
            <button className="bg-sky-800 text-white text-xl p-5 flex justify-center items-center gap-3 lg:rounded-2xl transition duration-300 hover:scale-[1.05] hover:easy-in-out">
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
        <li className="bg-cyan-700 p-5 flex flex-col gap-3 lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-[350px] lg:h-[300px] lg:rounded-2xl border border-[#594A28]">
          <div className="lg:flex lg:relative lg:w-[200px] lg:h-[100px]">
            <Image
              src='/metrics.png'
              layout="responsive"
              width={400}
              height={100}
              alt="Metrics"
            />
          </div>
          <div className="flex flex-col gap-2 lg:p-5 items-start">
            <h4 className="text-2xl font-bold select-none">Advanced Analytics</h4>
            {/*<p className="text-xl lg:text-justify">Harness the power of AI to gain deep insights from your financial data and make strategic decisions.</p>*/}
            <button className="bg-sky-800 text-white text-xl p-5 flex justify-center items-center gap-3 lg:rounded-2xl transition duration-300 hover:scale-[1.05] hover:easy-in-out">
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
        <li className="bg-cyan-700 p-5 flex flex-col gap-3 lg:flex lg:flex-col lg:items-center lg:p-4 lg:justify-center lg:w-[350px] lg:h-[300px] lg:rounded-2xl border border-[#594A28]">
          <div className="lg:flex lg:relative lg:w-[200px] lg:h-[100px]">
            <Image
              src='/robotic-bg2.jpg'
              layout="responsive"
              width={400}
              height={100}
              alt="Connect"

            />
          </div>
          <div className="flex flex-col gap-2 lg:p-5 items-start">
            <h4 className="text-2xl font-bold select-none">Seamless Integrations</h4>
            {/*<p className="text-xl lg:text-justify">Simplify communication, improve customer experience with innovative solutions.</p>*/}
            <button className="bg-sky-800 text-white text-xl p-5 flex justify-center items-center gap-3 lg:rounded-2xl transition duration-300 hover:scale-[1.05] hover:easy-in-out">
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
        <li className="bg-cyan-700 p-5 flex flex-col gap-3 lg:flex lg:flex-col lg:items-center lg:p-4 lg:justify-center lg:w-[350px] lg:h-[300px] lg:rounded-2xl border border-[#594A28]">
          <div className="lg:flex lg:relative lg:w-[200px] lg:h-[100px]">
            <Image
              src='/robotic-bg2.jpg'
              layout="responsive"
              width={400}
              height={100}
              alt="Connect"

            />
          </div>
          <div className="flex flex-col gap-2 lg:p-5 items-start">
            <h4 className="text-2xl font-bold select-none">Employee Orboarding</h4>
            {/*<p className="text-xl lg:text-justify">Simplify communication, improve customer experience with innovative solutions.</p>*/}
            <button className="bg-sky-800 text-white text-xl p-5 flex justify-center items-center gap-3 lg:rounded-2xl transition duration-300 hover:scale-[1.05] hover:easy-in-out">
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
        <li className="bg-cyan-700 p-5 flex flex-col gap-3 lg:flex lg:flex-col lg:items-center lg:p-4 lg:justify-center lg:w-[350px] lg:h-[300px] lg:rounded-2xl border border-[#594A28]">
          <div className="lg:flex lg:relative lg:w-[200px] lg:h-[100px]">
            <Image
              src='/robotic-bg2.jpg'
              layout="responsive"
              width={400}
              height={100}
              alt="Connect"

            />
          </div>
          <div className="flex flex-col gap-2 lg:p-5 items-start">
            <h4 className="text-2xl font-bold select-none">Payment & Contracts</h4>
            {/*<p className="text-xl lg:text-justify">Simplify communication, improve customer experience with innovative solutions.</p>*/}
            <button className="bg-sky-800 text-white text-xl p-5 flex justify-center items-center gap-3 lg:rounded-2xl transition duration-300 hover:scale-[1.05] hover:easy-in-out">
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
        <li className="bg-cyan-700 p-5 flex flex-col gap-3 lg:flex lg:flex-col lg:items-center lg:p-4 lg:justify-center lg:w-[350px] lg:h-[300px] lg:rounded-2xl border border-[#594A28]">
          <div className="lg:flex lg:relative lg:w-[200px] lg:h-[100px]">
            <Image
              src='/robotic-bg2.jpg'
              layout="responsive"
              width={400}
              height={100}
              alt="Connect"

            />
          </div>
          <div className="flex flex-col gap-2 lg:p-5 items-start">
            <h4 className="text-2xl font-bold select-none">Project Management</h4>
            {/*<p className="text-xl lg:text-justify">Simplify communication, improve customer experience with innovative solutions.</p>*/}
            <button className="bg-sky-800 text-white text-xl p-5 flex justify-center items-center gap-3 lg:rounded-2xl transition duration-300 hover:scale-[1.05] hover:easy-in-out">
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
        <li className="bg-cyan-700 p-5 flex flex-col gap-3 lg:flex lg:flex-col lg:items-center lg:p-4 lg:justify-center lg:w-[350px] lg:h-[300px] lg:rounded-2xl border border-[#594A28]">
          <div className="lg:flex lg:relative lg:w-[200px] lg:h-[100px]">
            <Image
              src='/robotic-bg2.jpg'
              layout="responsive"
              width={400}
              height={100}
              alt="Connect"

            />
          </div>
          <div className="flex flex-col gap-2 lg:p-5 items-start">
            <h4 className="text-2xl font-bold select-none">CRM</h4>
            {/*<p className="text-xl lg:text-justify">Simplify communication, improve customer experience with innovative solutions.</p>*/}
            <button className="bg-sky-800 text-white text-xl p-5 flex justify-center items-center gap-3 lg:rounded-2xl transition duration-300 hover:scale-[1.05] hover:easy-in-out">
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
        <li className="bg-cyan-700 p-5 flex flex-col gap-3 lg:flex lg:flex-col lg:items-center lg:p-4 lg:justify-center lg:w-[350px] lg:h-[300px] lg:rounded-2xl border border-[#594A28]">
          <div className="lg:flex lg:relative lg:w-[200px] lg:h-[100px]">
            <Image
              src='/robotic-bg2.jpg'
              layout="responsive"
              width={400}
              height={100}
              alt="Connect"

            />
          </div>
          <div className="flex flex-col gap-2 lg:p-5 items-start">
            <h4 className="text-2xl font-bold select-none">Client Communications</h4>
            {/*<p className="text-xl lg:text-justify">Simplify communication, improve customer experience with innovative solutions.</p>*/}
            <button className="bg-sky-800 text-white text-xl p-5 flex justify-center items-center gap-3 lg:rounded-2xl transition duration-300 hover:scale-[1.05] hover:easy-in-out">
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
        <li className="bg-cyan-700 p-5 flex flex-col gap-3 lg:flex lg:flex-col lg:items-center lg:p-4 lg:justify-center lg:w-[350px] lg:h-[300px] lg:rounded-2xl border border-[#594A28]">
          <div className="lg:flex lg:relative lg:w-[200px] lg:h-[100px]">
            <Image
              src='/robotic-bg2.jpg'
              layout="responsive"
              width={400}
              height={100}
              alt="Connect"

            />
          </div>
          <div className="flex flex-col gap-2 lg:p-5 items-start">
            <h4 className="text-2xl font-bold select-none">Client Reporting</h4>
            {/*<p className="text-xl lg:text-justify">Simplify communication, improve customer experience with innovative solutions.</p>*/}
            <button className="bg-sky-800 text-white text-xl p-5 flex justify-center items-center gap-3 lg:rounded-2xl transition duration-300 hover:scale-[1.05] hover:easy-in-out">
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
        <li className="bg-cyan-700 p-5 flex flex-col gap-3 lg:flex lg:flex-col lg:items-center lg:p-4 lg:justify-center lg:w-[350px] lg:h-[300px] lg:rounded-2xl border border-[#594A28]">
          <div className="lg:flex lg:relative lg:w-[200px] lg:h-[100px]">
            <Image
              src='/robotic-bg2.jpg'
              layout="responsive"
              width={400}
              height={100}
              alt="Connect"

            />
          </div>
          <div className="flex flex-col gap-2 lg:p-5 items-start">
            <h4 className="text-2xl font-bold select-none">Operations</h4>
            {/*<p className="text-xl lg:text-justify">Simplify communication, improve customer experience with innovative solutions.</p>*/}
            <button className="bg-sky-800 text-white text-xl p-5 flex justify-center items-center gap-3 lg:rounded-2xl transition duration-300 hover:scale-[1.05] hover:easy-in-out">
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
      {/*<button className="bg-sky-800 transition duration-300 hover:scale-110 hover:easy-in-out text-white text-xl p-5 lg:rounded-2xl">See more</button>*/}
    </section>
  );
}