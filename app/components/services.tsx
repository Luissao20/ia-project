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
    <section className="pl-5 pr-5 pt-20 flex flex-col gap-10 items-center pb-20 lg:h-full bg-white text-black border-2 border-[#273950] group">
      <div className="p-10 flex flex-col gap-10 items-center">
        <h2 className="lg:text-4xl lg:font-bold text-4xl text-[#1c5a6c]" data-aos="fade-up">How our AI and Automation agency works:</h2>
      </div>
      <div className="relative pb-20">
        <Workflow />
        <WorkflowContent />
      </div>
      <div className="flex flex-col items-center gap-20">
        <Cta />
        <h2 className="lg:text-4xl font-bold text-[#1c5a6c] lg:pt-20 lg:p-10" data-aos="fade-up">The endless use cases of AI and Automation</h2>
        <Automations />
        <Cta />
        <h2 className="lg:text-4xl font-bold text-[#1c5a6c] lg:pt-20 lg:p-10">AI and Automation technilogies we are experts in</h2>
        <Tech />
      </div>
      <div className="flex flex-col items-center justify-center pl-10 p-20">
        <h2 className="lg:text-4xl font-bold text-[#1c5a6c] lg:pt-20 lg:p-10">Why AI must be combined with Automation</h2>
        <div className="flex">
          <VerticalLine />
          <Combined />
        </div>
        
      </div>
    </section>
  );
}