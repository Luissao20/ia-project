'use client'

import ImageSlider from "./imageSlider";

export default function Results() {
  return (
    <section className="lg:h-full bg-white pt-20 pb-20" >
      <h2 className="text-center text-4xl text-[#3c4442] pb-10 font-bold" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0">Let our work talk for us</h2>
      <h3 className="text-center text-2xl text-[#3c4442] pb-20" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0">Case Studies</h3>
      <ImageSlider />
    </section>
  );
}