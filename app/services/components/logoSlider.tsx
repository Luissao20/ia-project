'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

const listItems = [
  <li key={1} className="flex justify-center items-center h-full">
    <Image
      src='/logos/nextjs-13.svg'
      width={100}
      height={100}
      alt="NextJS"
    />
  </li>,
  <li key={2} className="flex justify-center items-center h-full">
    <Image
      src='/logos/Render_logo.png'
      width={100}
      height={100}
      alt="Render"
    />
  </li>,
  <li key={3} className="flex justify-center items-center h-full">
    <Image
      src='/logos/astro-logo-dark.png'
      width={100}
      height={100}
      alt="Astro"
    />
  </li>,
  <li key={4} className="flex justify-center items-center h-full">
    <Image
      src='/logos/Vercel-Logo.png'
      width={100}
      height={100}
      alt="Vercel"
    />
  </li>,
  <li key={5} className="flex justify-center items-center h-full">
    <Image
      src='/logos/Squarespace-Logo.png'
      width={100}
      height={100}
      alt="Squarespace"
    />
  </li>,
  <li key={6} className="flex justify-center items-center h-full">
    <Image
      src='/logos/WordPress-logo.png'
      width={100}
      height={100}
      alt="Wordpress"
    />
  </li>,
  <li key={7} className="flex justify-center items-center h-full">
  <Image
    src='/logos/HubSpot-Logo.png'
    width={100}
    height={100}
    alt="HubSpot"
  />
</li>,
<li key={8} className="flex justify-center items-center h-full">
    <Image
      src='/logos/Calendly.png'
      width={100}
      height={100}
      alt="Calendly"
    />
  </li>,
];

export default function ImageSlider() {
  return (
    <div className='container lg:mx-auto mx-auto my-3 lg:my-10 lg:p-5 p-5 lg:w-[700px] w-[300px]'>
      <Swiper
        modules={[Navigation, Autoplay]}
        breakpoints={{
          320: { // para pantallas muy pequeñas
            slidesPerView: 2,
            spaceBetween: 5,
          },
          480: { // para teléfonos
            slidesPerView: 3,
            spaceBetween: 5,
          },
          640: { // para tabletas pequeñas
            slidesPerView: 4,
            spaceBetween: 5,
          },
          768: { // para tabletas grandes
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1024: { // para pantallas de computadora
            slidesPerView: 4,
            spaceBetween: 6,
          },
        }}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {listItems.map((item, index) => (
          <SwiperSlide key={index}>
            <ul className="p-2 w-[130px] lg:w-[200px] h-[100px] flex justify-center items-center">
              {item}
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}