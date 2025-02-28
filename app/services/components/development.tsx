import Image from "next/image";

export default function Development() {
    return (
        <section className="flex flex-col items-center w-full gap-10 p-20" data-aos="fade-up">
            <h4 className="font-bold text-3xl text-[#03a7b3]">Web Page Development</h4>
            <p className="w-[900px] text-center text-lg">Transform your online presence with personalized and optimized
                websites. From attractive design to advanced functionality, our experts create pages that reflect your
                brand and capture your customer&apos;s attention.</p>
            <div className="flex flex-col items-center gap-8 p-10">
                <h3 className="text-lg text-center">Main <span className="bg-gradient-to-r from-[#03a7b3] to-[#345d87] bg-clip-text text-transparent font-bold">Technologies</span> We Use To Develop Landing Pages</h3>
                <div className="flex gap-20 items-center rounded-full border-2 border-[#3c4442] pr-20 pl-20">
                    <h4 className="text-lg font-bold text-[#03a7b3]">Frameworks</h4>
                    <div className="flex gap-3 items-center">
                        <Image
                            alt="nextjs"
                            src="/logos/nextjs-13.svg"
                            width={100}
                            height={100}
                        />
                        <Image
                            alt="astro"
                            src="/logos/astro-logo-dark.png"
                            width={130}
                            height={130}
                        />
                    </div>
                </div>

                <div className="flex gap-52 items-center rounded-full border-2 border-[#3c4442] pr-20 pl-20">
                    <h4 className="text-lg font-bold text-[#03a7b3]">Style</h4>
                    <Image
                        alt="tailwind"
                        src="/logos/tailwind.png"
                        width={175}
                        height={175}
                        className="-mt-16 -mb-16"
                    />
                </div>
                <div className="flex gap-20 items-center rounded-full border-2 border-[#3c4442] pr-20 pl-20">
                    <h4 className="text-lg font-bold text-[#03a7b3]">Deployment</h4>
                    <div className="flex gap-11 items-center">
                        <Image
                            alt="cursor"
                            src="/logos/Vercel-Logo.png"
                            width={100}
                            height={100}
                            className="-mt-1 -mb-1"
                        />
                        <Image
                            alt="render"
                            src="/logos/Render_logo.png"
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <div className="flex gap-24 items-center rounded-full border-2 border-[#3c4442] pr-20 pl-20">
                    <h4 className="text-lg font-bold text-[#03a7b3]">Platforms</h4>
                    <div className="flex gap-11 items-center">
                        <Image
                            alt="wordpress"
                            src="/logos/WordPress-logo.png"
                            width={100}
                            height={100}
                        />
                        <Image
                            alt="squarespace"
                            src="/logos/Squarespace-logo.png"
                            width={100}
                            height={100}
                            className="-mt-1 -mb-1 p-2"
                        />
                    </div>
                </div>
                <div className="flex gap-60 items-center rounded-full border-2 border-[#3c4442] pr-20 pl-20">
                    <h4 className="text-lg font-bold text-[#03a7b3]">Specialized IDE</h4>
                    <Image
                        alt="cursor"
                        src="/logos/cursor.svg"
                        width={50}
                        height={50}
                        className="p-1"
                    />
                </div>
            </div>

            <h4 className="font-bold text-3xl text-[#03a7b3]">CRM and Pipeline Management</h4>
            <p className="w-[900px] text-center text-lg">Improve the efficiency of your sales team with CRM and pipeline 
                management solutions. We implement and customize tools that allow you to manage customer relationships, 
                track sales opportunities and optimize your business processes.</p>

            <div className="flex flex-col items-center gap-8 p-10">
                <h3 className="text-lg text-center">Main <span className="bg-gradient-to-r from-[#03a7b3] to-[#345d87] bg-clip-text text-transparent font-bold">Features</span> Of Our CRM Solutions</h3>
                <div className="flex gap-20 items-center rounded-full border-2 border-[#3c4442] pr-10 pl-10">
                    <h4 className="text-lg font-bold text-[#03a7b3]">Customer Management</h4>
                    <div className="flex gap-11 items-center">
                        <Image
                        alt="hubspot"
                        src="/logos/HubSpot-Logo.png"
                        width={100}
                        height={100}
                    />
                    <Image
                        alt="clickup"
                        src="/logos/ClickUp-Logo2.png"
                        width={100}
                        height={100}
                    />
                    </div>
                    
                </div>
                <div className="flex gap-32 items-center rounded-full border-2 border-[#3c4442] pr-20 pl-20">
                    <h4 className="text-lg font-bold text-[#03a7b3]">Pipeline Management</h4>
                    <Image
                        alt="make"
                        src="/logos/make-logo.svg"
                        width={100}
                        height={100}
                        className="m-4"
                    />
                </div>
            </div>
            <h4 className="font-bold text-3xl text-[#03a7b3]">Scheduling Integration</h4>
            <p className="w-[900px] text-center text-lg">Simplify your time and resource management with our scheduling 
                integration solutions. We integrate calendars and reservation systems so you can coordinate appointments, 
                meetings and events effectively, saving time and avoiding errors.</p>
        </section>
    );
}