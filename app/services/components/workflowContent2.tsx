import Image from "next/image";

export default function WorkflowContent() {
    return (
        <div className="grid grid-cols-4 z-2 gap-10 p-10 absolute lg:top-40 flex gap-10 -ml-44">
            <div className="flex flex-col items-center gap-3">
                <Image src="/search.svg" alt="process" width={100} height={100} className="bg-white" />
                <span className="pl-4 text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">Step 1</span>
                <h4 className="text-lg font-bold select-none">Consult</h4>
                <p className="select-none text-center w-[300px]">Here we scope out your inefficiencies, workflows, tech stack and goals.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
                <Image src="/workflow.svg" alt="process" width={100} height={100} className="bg-white" />
                <span className="pl-4 text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">Step 2</span>
                <h4 className="text-lg font-bold select-none">Workflow mapping</h4>
                <p className="select-none text-center w-[300px]">We map out every process A-Z that can be automated, then let you prioritize.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
                <Image src="/check.svg" alt="process" width={100} height={100} className="bg-white" />
                <span className="pl-4 text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">Step 3</span>
                <h4 className="text-lg font-bold select-none">Done-for-you builds</h4>
                <p className="select-none text-center w-[300px]">We execute and quality check until everything works without bugs.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
                <Image src="/headset.svg" alt="process" width={100} height={100} className="bg-white" />
                <span className="pl-4 text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700">Step 4</span>
                <h4 className="text-lg font-bold select-none">Ongoing support</h4>
                <p className="select-none text-center w-[300px]">While we start with a simple project, we often unearth new opportunities.</p>
            </div>
        </div>
    );
}