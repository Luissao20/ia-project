'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

const caseStudies = [
  {
    id: 1,
    title: "ElagriFarm",
    image: "/ElagriFarm.png",
    description: "The Power of Automation: How AI Transformed Elagri Farm's Operations"
  },
  {
    id: 2,
    title: "EcuaBet",
    image: "/ecuabet.png",
    description: "Ecuabet's Digital Evolution: How Automation Transformed Efficiency and Profitability"
  },
  {
    id: 3,
    title: "ListoBet",
    image: "/listobet.png",
    description: "Innovation and Security in Online Gaming"
  },
  {
    id: 4,
    title: "FINO TP",
    image: "/casestudy4.png",
    description: "Optimizing the Loan Approval Process for a Financial Institution"
  },
  {
    id: 5,
    title: "Company 5",
    image: "/casestudy5.png",
    description: "Optimizing the Loan Approval Process for a Financial Institution"
  },
];

export default function ImageSlider() {
  const goToCaseStudy = (id: number) => {
    window.location.href = `/case-studies?id=${id}`;
  };

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      loop
      navigation
      breakpoints={{
        320: { // para pantallas muy pequeñas
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: { // para teléfonos
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: { // para tabletas pequeñas
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: { // para tabletas grandes
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: { // para pantallas de computadora
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {caseStudies.map(study => (
        <SwiperSlide
          key={study.id}
          className="p-5">
          <div className="p-5 bg-[#1c5a6c] rounded-lg shadow text-white flex flex-col gap-3">
            <div className="w-full h-[250px] flex items-center justify-center rounded-lg overflow-hidden">
              <Image
                src={study.image}
                width={400}
                height={200}
                alt={study.title}
                className="object-contain w-full h-full"
              />
            </div>
            <h4 className="text-2xl">{study.title}</h4>
            <div className="h-20 overflow-hidden">
              <h5 className="text-lg">{study.description}</h5>
            </div>
            <button className="bg-[#5ca9b1] rounded-lg text-white text-xl p-3 flex justify-center items-center gap-3 transition duration-300 hover:scale-[0.9] hover:ease-in-out"
              onClick={() => goToCaseStudy(study.id)}
            > Keep Reading
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}