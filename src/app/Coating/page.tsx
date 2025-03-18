'use client'
import React from 'react';
import TitaniumDioxide from ''
// import TiQ from '../../../../public/images/tiq-replacement.jpg';
import SyntheticFibre from '../../../../public/images/synthetic-1.png';
import StyreneButadieneLatex from '../../../../public/images/styrene-butadiene-latex.jpg';
import StyreneAcrylicLatex from '../../../../public/images/styrene-acrylic-latex.jpg';
import EthylCellulose from '../../../../public/images/ethyl-cellulose.jpg';
import MethylCellulose from '../../../../public/images/methyl-cellulose.jpg';
import SodiumAlginate from '../../../../public/images/sodium-alginate.jpg';

import SingleImage from '../../../public/images/steel-1.jpg'; 

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OurProducts = [
  {
    ProjectLink: '/Products/titanium-dioxide',
    ProjectImg: TitaniumDioxide,
    ProjectTitle: 'Titanium Dioxide',
  },
  {
    ProjectLink: '/Products/tiq-replacement',
    ProjectImg: SingleImage, // Using single image for all products
    ProjectTitle: 'TiQ - Replacement of TiO2',
  },
  {
    ProjectLink: '/Products/synthetic-fibre',
    ProjectImg: SyntheticFibre,
    ProjectTitle: 'Synthetic Fibre',
  },
  {
    ProjectLink: '/Products/styrene-butadiene-latex',
    ProjectImg: StyreneButadieneLatex,
    ProjectTitle: 'Styrene Butadiene Latex',
  },
  {
    ProjectLink: '/Products/styrene-acrylic-latex',
    ProjectImg: StyreneAcrylicLatex,
    ProjectTitle: 'Styrene Acrylic Latex',
  },
  {
    ProjectLink: '/Products/ethyl-cellulose',
    ProjectImg: EthylCellulose,
    ProjectTitle: 'Ethyl Cellulose',
  },
  {
    ProjectLink: '/Products/methyl-cellulose',
    ProjectImg: MethylCellulose,
    ProjectTitle: 'Methyl Cellulose (HPMC)',
  },
  {
    ProjectLink: '/Products/sodium-alginate',
    ProjectImg: SodiumAlginate,
    ProjectTitle: 'Sodium Alginate',
  },
];

const CoatingPage = () => {
  return (
    <div className='bg-background text-text-dark'>
      {/* Headline Section with Background Image */}
      <section className="relative bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/your-background-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center text-white flex flex-col justify-center h-full">
          <h1 className="text-3xl sm:text-4xl font-semibold">Advanced Solutions for Masterbatches, Paints, Inks and Coatings</h1>
        </div>
      </section>

      {/* Products Carousel Section */}
      <section className='py-12 sm:py-14 md:py-16 lg:py-20 bg-primary'>
        <div className="container mx-auto px-4 md:px-8">

          <div className='mb-12 text-center'>
            <h2 className="mb-5 text-light text-2xl sm:text-3xl leading-8 sm:leading-10 font-medium">
              Our <span className="font-bold uppercase">PRODUCTS</span>
            </h2>
          </div>

          <div className="overflow-hidden relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }} // Enable Manual Navigation
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="py-5"
            >
              {OurProducts.map((item, index) => (
                <SwiperSlide key={index} className="group">
                  <div className="w-full flex justify-center">
                    <div className="w-[250px] h-[250px] overflow-hidden rounded-full shadow-lg border-4 border-gray-200">
                      <Image
                        src={item.ProjectImg}
                        alt={item.ProjectTitle}
                        width={250}
                        height={250}
                        className="w-full h-full object-cover group-hover:scale-110 duration-300"
                      />
                    </div>
                  </div>
                  <Link
                    href={item.ProjectLink}
                    className="mt-4 font-medium text-xl text-light text-center group-hover:text-[#EFEFEF] duration-300 block"
                  >
                    {item.ProjectTitle}
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Manual Navigation Buttons */}
            <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white w-10 h-10 flex items-center justify-center z-30 rounded-full hover:bg-gray-600 transition">
              <AiOutlineLeft className="text-xl" />
            </button>
            <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-600 transition">
              <AiOutlineRight className="text-xl" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CoatingPage;
