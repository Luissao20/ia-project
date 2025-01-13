'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

const listItems = [
  <li key={1}>
    <Image
      src='/logos/Airtable-Logo.png'
      width={100}
      height={100}
      alt="Airtable"
    />
  </li>,
  <li key={2}>
    <Image
      src='/logos/Asana-Logo.png'
      width={100}
      height={100}
      alt="Asana"
    />
  </li>,
  <li key={3}>
    <Image
      src='/logos/Dynamics-Logo.png'
      width={100}
      height={100}
      alt="Dynamics"
    />
  </li>,
  <li key={4}>
    <Image
      src='/logos/HubSpot-Logo.png'
      width={100}
      height={100}
      alt="HubSpot"
    />
  </li>,
  <li key={5}>
    <Image
      src='/logos/Jira-logo.png'
      width={100}
      height={100}
      alt="Jira"
    />
  </li>,
  <li key={6}>
    <Image
      src='/logos/NetSuite-Logo.png'
      width={100}
      height={100}
      alt="NetSuite"
    />
  </li>,
  <li key={7}>
    <Image
      src='/logos/Trello-Logo-.png'
      width={100}
      height={100}
      alt="Trello"
    />
  </li>,
];


export default function ImageSlider() {
  return (
    <div className='container lg:mx-auto my-10 lg:p-5 p-5 lg:w-[600px] w-[300px]'>
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
            spaceBetween: 5,
          },
        }}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {listItems.map((item, index) => (
          <SwiperSlide key={index}>
            <ul className="p-4 w-[130px] lg:w-[300px] h-auto lg:grayscale lg:hover:grayscale-0">
              {item}
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}