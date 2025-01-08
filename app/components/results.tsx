'use client'

import ImageSlider from "./imageSlider";

export default function Results() {
  return (
    <section className="lg:h-full bg-white pt-20 pb-20 border-2 border-[#594A28]" >
      <h2 className="text-center text-4xl text-black pb-10 font-bold select-none" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0">Let our work talk for us</h2>
      <h3 className="text-center text-3xl text-black font-bold pb-20 select-none" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0">Case Studies</h3>
      <ImageSlider />
    </section>
  );
}