import Image from "next/image";

export default function WorkflowContent() {
    return (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 z-2 flex justify-center lg:gap-5 lg:-mt-24">
            <div className="flex flex-col items-center gap-3">
                <Image src="/process.svg" alt="process" width={100} height={100} className="bg-white hidden lg:block" />
                <Image src="/process.svg" alt="process" width={50} height={50} className="bg-white lg:hidden" />
                <span className="text-sm lg:text-lg bg-clip-text text-transparent bg-gradient-to-b from-[#03a7b3] to-[#345b87]">Step 1</span>
                <h4 className="text-sm lg:text-lg font-bold text-center text-[#010817]">Comprehensive Process Mapping</h4>
                <p className="lg:text-sm text-center w-[300px] text-justify">We create a detailed visual blueprint of your existing systems, manual workflows, and apps to identify inefficiencies, save time, and reduce operational costs. This process helps uncover automation opportunities that boost productivity.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
                <Image src="/find.svg" alt="process" width={100} height={100} className="bg-white hidden lg:block" />
                <Image src="/find.svg" alt="process" width={50} height={50} className="bg-white lg:hidden" />
                <span className="text-sm lg:text-lg bg-clip-text text-transparent bg-gradient-to-b from-[#03a7b3] to-[#345b87]">Step 2</span>
                <h4 className="text-sm lg:text-lg font-bold text-center text-[#010817]">AI Opportunity Identification</h4>
                <p className="lg:text-sm text-center w-[300px] text-justify">Our team evaluates your workflows to identify repetitive tasks in areas like marketing, customer service, or operations. We focus on high-impact AI automation opportunities that deliver measurable ROI and improve efficiency.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
                <Image src="/test.svg" alt="process" width={120} height={120} className="bg-white lg:block hidden -mt-5" />
                <Image src="/test.svg" alt="process" width={50} height={50} className="bg-white lg:hidden" />
                <span className="text-sm lg:text-lg bg-clip-text text-transparent bg-gradient-to-b from-[#03a7b3] to-[#345b87]">Step 3</span>
                <h4 className="text-sm lg:text-lg font-bold text-center text-[#010817]">Custom AI and Automation Development</h4>
                <p className="lg:text-sm text-center w-[300px] text-justify">We develop and test custom AI automation solutions using advanced tools like Zapier, Make.com, and your existing tech stack. These scalable solutions are tailored to your unique needs, ensuring seamless integration and adaptability as your business evolves.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
                <Image src="/manage.svg" alt="process" width={120} height={120} className="bg-white hidden lg:block -mt-5" />
                <Image src="/manage.svg" alt="process" width={50} height={50} className="bg-white lg:hidden" />
                <span className="text-sm lg:text-lg bg-clip-text text-transparent bg-gradient-to-b from-[#03a7b3] to-[#345b87]">Step 4</span>
                <h4 className="text-sm lg:text-lg font-bold text-center text-[#010817]">Continuous Management and Iteration</h4>
                <p className="lg:text-sm text-center w-[300px] text-justify">We provide ongoing automation management and optimization, ensuring your workflows evolve with your business. By uncovering new automation opportunities, we help reduce costs, enhance efficiency, and drive continuous business growth.</p>
            </div>
        </div>
    );
}