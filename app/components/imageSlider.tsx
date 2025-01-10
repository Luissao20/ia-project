'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

const caseStudies = [
  {
    id: 1,
    title: "Company 1",
    image: "/casestudy1.png",
    description: "Optimizing the Loan Approval Process for a Financial Institution"
  },
  {
    id: 2,
    title: "Company 2",
    image: "/casestudy2.png",
    description: "Optimizing the Loan Approval Process for a Financial Institution"
  },
  {
    id: 3,
    title: "Company 3",
    image: "/casestudy2.png",
    description: "Optimizing the Loan Approval Process for a Financial Institution"
  },
  {
    id: 4,
    title: "Company 4",
    image: "/casestudy3.png",
    description: "Optimizing the Loan Approval Process for a Financial Institution"
  },
  {
    id: 5,
    title: "Company 5",
    image: "/casestudy2.png",
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
          <div className="p-5 bg-cyan-700 rounded-lg shadow text-white flex flex-col gap-5">
            <Image
              src={study.image}
              width={400}
              height={200}
              alt={study.title}
              className="w-full" // Ajusta el ancho para que sea responsivo
            />
            <h4 className="text-2xl select-none">{study.title}</h4>
            <h5 className="text-xl select-none">{study.description}</h5>
            <button className="bg-sky-800 rounded-lg text-white text-xl p-3 flex justify-center items-center gap-3 transition duration-300 hover:scale-[0.9] hover:ease-in-out"
              onClick={() => goToCaseStudy(study.id)}
            > Keep Reading
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}