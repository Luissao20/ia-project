
export default function Consulting() {
    return (
        <section className="flex flex-col items-center w-full gap-10 pt-10" data-aos="fade-up">
            <h3 className="font-bold text-3xl text-[#03a7b3]">Personalized Consulting</h3>
            <p className="w-[900px] text-center text-lg">Each business is unique, so we offer consulting services tailored 
                to your specific needs and <span className="bg-gradient-to-r from-[#03a7b3] to-[#345d87] bg-clip-text text-transparent font-bold">Objectives</span>. We work with you to understand 
                your challenges and design <span className="bg-gradient-to-r from-[#03a7b3] to-[#345d87] bg-clip-text text-transparent font-bold">Strategies</span> that drive your growth.</p>
            <div className="grid grid-cols-2 gap-20 p-20">
                <div className="flex items-center justify-center gap-10 col-span-2">
                    <h4 className="p-20 rounded-r-lg rounded-full border-2 border-[#b0a9cb] text-xl font-bold"><span className="bg-gradient-to-b from-[#03a7b3] to-[#010817] bg-clip-text text-transparent">Process Automation</span></h4>
                    <p className="text-center w-[500px]">We drive operational efficiency by automating key processes within your organization, reducing the time and costs associated with manual tasks.</p>
                </div>
                <div className="flex items-center justify-center gap-10 col-span-2">
                    <p className="text-center w-[500px]">We help you select and implement customer relationship management (CRM) systems that adapt to the specific needs of your company, improving interaction with your customers and boosting your sales.</p>
                    <h4 className="p-20 rounded-l-lg rounded-full border-2 border-[#010817] text-xl font-bold"><span className="bg-gradient-to-b from-[#03a7b3] to-[#010817] bg-clip-text text-transparent">Implementation of CRMs</span></h4>
                </div>
                <div className="flex items-center justify-center gap-10 col-span-2">
                    <h4 className="p-20 rounded-r-lg rounded-full border-2 border-[#3c4442] text-xl font-bold"><span className="bg-gradient-to-b from-[#03a7b3] to-[#010817] bg-clip-text text-transparent">Lead Generation</span></h4>
                    <p className="text-center w-[500px]">We develop strategies and tools to attract and convert potential clients effectively, optimizing your lead capture process.</p>
                </div>
                <div className="flex items-center justify-center gap-10 col-span-2">
                    <p className="text-center w-[500px]">We implement automation solutions for your sales and payment processes, ensuring a fluid and efficient experience for both your team and your clients.</p>
                    <h4 className="p-20 rounded-l-lg rounded-full border-2 border-[#03a7b3] text-xl font-bold"><span className="bg-gradient-to-b from-[#03a7b3] to-[#010817] bg-clip-text text-transparent">Sales and Payment Automation</span></h4>
                </div>
            </div>
        </section>
    );
}