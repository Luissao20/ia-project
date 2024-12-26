import Image from "next/image";

export default function Results() {
  return (
    <section className="bg-[#B0BBC0] p-5 flex flex-col items-center gap-5 pt-20 pb-20">
      <h2 className="text-4xl text-center">Let our work talk for us</h2>
      <h3 className="text-3xl">Case Studies</h3>
      <ul className="flex flex-col gap-5">
        <li className="border-4 border-[#333333] p-5 flex flex-col gap-3">
          <Image
            src='/casestudy1.png'
            width={400}
            height={200}
            alt="Case 1"
          />
          <h4 className="text-2xl">Company 1</h4>
          <h5 className="text-xl">Optimizing the Loan Approval Process for a Financial Institution</h5>
          <button className="bg-[#000386] text-white text-xl p-5 flex justify-center items-center gap-3">Keep Reading</button>
        </li>
        <li className="border-4 border-[#333333] p-5 flex flex-col gap-3">
          <Image
            src='/casestudy2.png'
            width={400}
            height={200}
            alt="Case 2"
          />
          <h4 className="text-2xl">Company 2</h4>
          <h5 className="text-xl">Customer Service Automation for a Telecommunications Company</h5>
          <button className="bg-[#000386] text-white text-xl p-5 flex justify-center items-center gap-3">Keep Reading</button>
        </li>
        <li className="border-4 border-[#333333] p-5 flex flex-col gap-3">
          <Image
            src='/casestudy3.png'
            width={400}
            height={200}
            alt="Case 3"
          />
          <h4 className="text-2xl">Company 3</h4>
          <h5 className="text-xl">Supply Chain Optimization for a Logistics Company</h5>
          <button className="bg-[#000386] text-white text-xl p-5 flex justify-center items-center gap-3">Keep Reading</button>
        </li>
      </ul>
    </section>
  );
}