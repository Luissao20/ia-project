"use client"

import Workflow from "./workflow";
import WorkflowContent from "./workflowContent";
import Cta from "./cta";
import Automations from "./automations";
import Tech from "./technologies";
import VerticalLine from "./vertical-line";
import Combined from "./combined";

export default function Services() {
  return (
    <section className="lg:pl-5 lg:pr-5 lg:pt-20 pt-10 flex flex-col gap-10 items-center pb-20 lg:h-full lg:w-full bg-white text-black group">
      <div className="p-10 flex flex-col gap-10 items-center">
        <h2 className="lg:text-4xl lg:font-bold text-2xl text-center text-[#03a7b3]" data-aos="fade-up">How our AI and Automation agency works:</h2>
      </div>
      <div className="relative lg:pb-20 -mt-20" data-aos="zoom-in">
        <Workflow />
        <WorkflowContent />
      </div>
      <div className="flex flex-col items-center gap-20">
        <Cta />
        <h2 className="lg:text-4xl text-2xl text-center font-bold text-[#03a7b3] p-5 lg:pt-20 lg:p-10" data-aos="fade-up">The endless use cases of AI and Automation</h2>
        <div  data-aos="zoom-in"><Automations /></div>
        <Cta />
        <h2 className="lg:text-4xl bg-[#03a7b3] w-full text-2xl text-center font-bold text-[#010817] p-5 lg:p-10">AI and Automation technologies we are experts in</h2>
        <Tech />
      </div>
      <div className="flex flex-col items-center justify-center pt-5 lg:w-full">
        <h2 className="lg:text-4xl text-2xl bg-[#03a7b3] lg:w-full text-center font-bold text-[#010817] p-5 lg:p-10" data-aos="fade-up">Why AI must be combined with Automation</h2>
        <div className="flex" data-aos="zoom-in">
          <VerticalLine />
          <Combined />
        </div>
      </div>
    </section>
  );
}