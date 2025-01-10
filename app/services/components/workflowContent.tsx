import Image from "next/image";

export default function WorkflowContent() {
    return (
        <div className="grid grid-cols-4 z-2 gap-10 p-10 absolute lg:top-40 flex gap-10 -ml-44">
            <div className="flex flex-col items-center gap-3">
                <Image src="/process.svg" alt="process" width={100} height={100} className="bg-white" />
                <span className="pl-4 text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">Step 1</span>
                <h4 className="text-lg font-bold select-none">We map out your processes</h4>
                <p className="select-none text-center w-[300px]">We&apos;ll create a visual map of all your systems, manual tasks and apps.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
                <Image src="/find.svg" alt="process" width={100} height={100} className="bg-white" />
                <span className="pl-4 text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">Step 2</span>
                <h4 className="text-lg font-bold select-none">We find areas to add AI and automate</h4>
                <p className="select-none text-center w-[300px]">We audit your workflows to pinpoint opportunities with the highest ROI.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
                <Image src="/test.svg" alt="process" width={100} height={100} className="bg-white" />
                <span className="pl-4 text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">Step 3</span>
                <h4 className="text-lg font-bold select-none">We build and test</h4>
                <p className="select-none text-center w-[300px]">We use a mix of custom code, AI tools, Zapier, Make.com and your tech stack.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
                <Image src="/manage.svg" alt="process" width={100} height={100} className="bg-white" />
                <span className="pl-4 text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">Step 4</span>
                <h4 className="text-lg font-bold select-none">We manage and iterate</h4>
                <p className="select-none text-center w-[300px]">Every client we work with grows, so there&apos;s always new things to automate.</p>
            </div>
        </div>
    );
}