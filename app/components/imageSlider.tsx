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
  }, // Agrega más casos de estudio según sea necesario 
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
      slidesPerView={3}
      loop
      navigation
    >
      {caseStudies.map(study => (
        <SwiperSlide
          key={study.id}
          className='p-5'>
          <div className="p-5 bg-cyan-700 rounded-lg shadow text-white">
            <Image
              src={study.image}
              layout='responsive'
              width={400}
              height={200}
              alt={study.title}
            />
            <h4 className="text-2xl select-none">{study.title}</h4>
            <h5 className="text-xl select-none">{study.description}</h5>
            <button className="bg-sky-800 lg:rounded-2xl text-white text-xl p-5 flex justify-center items-center gap-3 transition duration-300 hover:scale-[0.9] hover:easy-in-out"
              onClick={() => goToCaseStudy(study.id)}
            > Keep Reading
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}