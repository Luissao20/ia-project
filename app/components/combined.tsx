import Image from "next/image";

export default function Combined(){
    return(
        <ul className="z-2 lg:-ml-20 p-2 pt-16 flex flex-col gap-10">
          <li className="flex items-start gap-5">
            <Image src="/x-icon.svg" alt="x-icon" width={50} height={50} className="bg-white pt-2" />
            <div className="flex flex-col gap-2 items-start justify-center border-2 border-transparent lg:hover:border-2 lg:hover:border-[#b0a9cb] lg:hover:shadow-md lg:hover:rounded-2xl p-2">
              <h3 className="text-xl font-bold text-[#010817]">You Can&apos;t Automate Everything</h3>
              <p className="w-[260px] lg:w-[650px]">AI enhances automation by analyzing data, making predictions, and providing insights. However, certain decisions, particularly those requiring creativity or human intuition, still benefit from manual oversight.</p>
            </div>
          </li>
          <li className="flex items-start gap-5">
            <Image src="/x-icon.svg" alt="x-icon" width={50} height={50} className="bg-white pt-2" />
            <div className="flex flex-col gap-2 items-start justify-center border-2 border-transparent lg:hover:border-2 lg:hover:border-[#b0a9cb] lg:hover:shadow-md lg:hover:rounded-2xl p-2">
              <h3 className="text-xl font-bold text-[#010817]">AI Isn&apos;t Helpful in All Scenarios</h3>
              <p className="w-[260px] lg:w-[650px]">Some tasks require a human touch—whether it&apos;s creative problem-solving, building relationships, or adapting to highly nuanced situations that AI isn&apos;t equipped to handle.</p>
            </div>
          </li>
          <li className="flex items-start gap-5">
            <Image src="/x-icon.svg" alt="x-icon" width={50} height={50} className="bg-white pt-2" />
            <div className="flex flex-col gap-2 items-start justify-center border-2 border-transparent lg:hover:border-2 lg:hover:border-[#b0a9cb] lg:hover:shadow-md lg:hover:rounded-2xl p-2">
              <h3 className="text-xl font-bold text-[#010817]">AI Requires Manual Commands</h3>
              <p className="w-[260px] lg:w-[650px]">AI tools like ChatGPT depend on prompts and inputs to function. Automation complements AI by eliminating the need for repetitive manual commands, streamlining processes before and after AI usage.</p>
            </div>
          </li>
          <li className="flex items-start gap-5">
            <Image src="/x-icon.svg" alt="x-icon" width={50} height={50} className="bg-white pt-2" />
            <div className="flex flex-col gap-2 items-start justify-center border-2 border-transparent lg:hover:border-2 lg:hover:border-[#b0a9cb] lg:hover:shadow-md lg:hover:rounded-2xl p-2">
              <h3 className="text-xl font-bold text-[#010817]">Manual Commands Require People and Skills</h3>
              <p className="w-[260px] lg:w-[650px]">Without automation, manual processes can lead to bottlenecks, delays, and errors. Automation supports AI by ensuring consistent quality, faster task execution, and fewer dependencies on human intervention.</p>
            </div>
          </li>
          <li className="flex items-start gap-5">
            <Image src="/x-icon.svg" alt="x-icon" width={50} height={50} className="bg-white pt-2" />
            <div className="flex flex-col gap-2 items-start justify-center border-2 border-transparent lg:hover:border-2 lg:hover:border-[#b0a9cb] lg:hover:shadow-md lg:hover:rounded-2xl p-2">
              <h3 className="text-xl font-bold text-[#010817]">AI Lacks Real-Time Adaptability Without Automation</h3>
              <p className="w-[260px] lg:w-[650px]">While AI excels in decision-making, it isn&apos;t always equipped to respond to real-time changes. Automation systems ensure adaptive responses by managing dynamic workflows.</p>
            </div>
          </li>
          <li className="flex items-start gap-5">
            <Image src="/check-icon.svg" alt="x-icon" width={50} height={50} className="bg-white pt-2" />
            <div className="flex flex-col gap-2 items-start justify-center border-2 border-transparent lg:hover:border-2 lg:hover:border-[#b0a9cb] lg:hover:shadow-md lg:hover:rounded-2xl p-2">
              <h3 className="text-xl font-bold text-[#010817]">Automation Amplifies AI Scalability</h3>
              <p className="w-[260px] lg:w-[650px]">AI models can handle large datasets, but automation ensures these processes scale effectively across departments or systems.</p>
            </div>
          </li>
          <li className="flex items-start gap-5">
            <Image src="/check-icon.svg" alt="x-icon" width={50} height={50} className="bg-white pt-2" />
            <div className="flex flex-col gap-2 items-start justify-center border-2 border-transparent lg:hover:border-2 lg:hover:border-[#b0a9cb] lg:hover:shadow-md lg:hover:rounded-2xl p-2">
              <h3 className="text-xl font-bold text-[#010817]">AI Provides Insights, Automation Takes Action</h3>
              <p className="w-[260px] lg:w-[650px]">AI identifies patterns and insights, while automation acts on them to create measurable outcomes. This combination turns data into tangible results.</p>
            </div>
          </li>
          <li className="flex items-start gap-5">
            <Image src="/check-icon.svg" alt="x-icon" width={50} height={50} className="bg-white pt-2" />
            <div className="flex flex-col gap-2 items-start justify-center border-2 border-transparent lg:hover:border-2 lg:hover:border-[#b0a9cb] lg:hover:shadow-md lg:hover:rounded-2xl p-2">
              <h3 className="text-xl font-bold text-[#010817]">Automation Fills AI Gaps in Compliance</h3>
              <p className="w-[260px] lg:w-[650px]">AI tools often lack the rules-based rigor required for compliance tasks. Automation ensures adherence to regulations by enforcing standards and generating audit trails.</p>
            </div>
          </li>
        </ul>
    );
}