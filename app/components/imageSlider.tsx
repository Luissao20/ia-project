'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

const listItems = [
  <li key={1} className="flex flex-col gap-3 lg:relative">
    <Image
      src='/casestudy1.png'
      layout='responsive'
      width={400}
      height={200}
      alt="Case 1"
    />
    <h4 className="text-2xl">Company 1</h4>
    <h5 className="text-xl">Optimizing the Loan Approval Process for a Financial Institution</h5>
    <button className="bg-[#000386] text-white text-xl p-5 flex justify-center items-center gap-3">Keep Reading</button>
  </li>,
  <li key={2} className="flex flex-col gap-3 lg:relative">
    <Image
      src='/casestudy1.png'
      layout='responsive'
      width={400}
      height={200}
      alt="Case 2"
    />
    <h4 className="text-2xl">Company 2</h4>
    <h5 className="text-xl">Optimizing the Loan Approval Process for a Financial Institution</h5>
    <button className="bg-[#000386] text-white text-xl p-5 flex justify-center items-center gap-3">Keep Reading</button>
  </li>,
  <li key={3} className="flex flex-col gap-3 lg:relative">
    <Image
      src='/casestudy2.png'
      layout='responsive'
      width={400}
      height={200}
      alt="Case 3"
    />
    <h4 className="text-2xl">Company 3</h4>
    <h5 className="text-xl">Optimizing the Loan Approval Process for a Financial Institution</h5>
    <button className="bg-[#000386] text-white text-xl p-5 flex justify-center items-center gap-3">Keep Reading</button>
  </li>,
  <li key={4} className="flex flex-col gap-3 lg:relative">
    <Image
      src='/casestudy3.png'
      layout='responsive'
      width={400}
      height={200}
      alt="Case 4"
    />
    <h4 className="text-2xl">Company 4</h4>
    <h5 className="text-xl">Optimizing the Loan Approval Process for a Financial Institution</h5>
    <button className="bg-[#000386] text-white text-xl p-5 flex justify-center items-center gap-3">Keep Reading</button>
  </li>,
  <li key={5} className="flex flex-col gap-3 lg:relative">
    <Image
      src='/casestudy1.png'
      layout='responsive'
      width={400}
      height={200}
      alt="Case 5"
    />
    <h4 className="text-2xl">Company 5</h4>
    <h5 className="text-xl">Optimizing the Loan Approval Process for a Financial Institution</h5>
    <button className="bg-[#000386] text-white text-xl p-5 flex justify-center items-center gap-3">Keep Reading</button>
  </li>,
];


export default function ImageSlider() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
    >
      {listItems.map((item, index) => (
        <SwiperSlide key={index} className='p-5'>
          <ul className="p-4 bg-white rounded-lg shadow">
            {item}
          </ul>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}