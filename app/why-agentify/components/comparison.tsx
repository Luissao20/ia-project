export default function Comparison() {
    return (
        <section className="py-20 px-5 flex flex-col items-center justify-center">
            <div className="lg:max-w-7xl mx-auto overflow-hidden">
                <h2 className="lg:text-4xl text-xl font-bold text-center pb-16 text-[#1c5a6c] select-none"> Why Agentify? Quick Comparison </h2>
                <div className="overflow-x-auto no-scrollbar">
                    <table className="lg:w-[500px] bg-white overflow-hidden">
                        <thead className="text-[#1c5a6c] font-bold lg:text-xl text-md">
                            <tr>
                                <th className="px-4 py-2 select-none" data-aos="fade-down" data-aos-delay="100">Feature</th>
                                <th className="px-4 py-2 select-none" data-aos="fade-down" data-aos-delay="200">Agentify</th>
                                <th className="px-4 py-2 select-none" data-aos="fade-down" data-aos-delay="300">Competitors</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#273950] lg:text-xl text-md">
                            <tr>
                                <td className="border px-4 py-2 select-none" data-aos="fade-right" data-aos-delay="100">Tailored Solutions</td>
                                <td className="border px-4 py-2 select-none text-center" data-aos="fade-up" data-aos-delay="200">✅</td>
                                <td className="border px-4 py-2 select-none text-center" data-aos="fade-up" data-aos-delay="300">❌</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 select-none" data-aos="fade-right" data-aos-delay="200">Cutting-Edge AI</td>
                                <td className="border px-4 py-2 select-none text-center" data-aos="fade-up" data-aos-delay="300">✅</td>
                                <td className="border px-4 py-2 select-none text-center" data-aos="fade-up" data-aos-delay="400">⚠️</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 select-none" data-aos="fade-right" data-aos-delay="200">Proven Results</td>
                                <td className="border px-4 py-2 select-none text-center" data-aos="fade-up" data-aos-delay="300">✅</td>
                                <td className="border px-4 py-2 select-none text-center" data-aos="fade-up" data-aos-delay="400">⚠️</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 select-none" data-aos="fade-right" data-aos-delay="200">24/7 Support</td>
                                <td className="border px-4 py-2 select-none text-center" data-aos="fade-up" data-aos-delay="300">✅</td>
                                <td className="border px-4 py-2 select-none text-center" data-aos="fade-up" data-aos-delay="400">⚠️</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}