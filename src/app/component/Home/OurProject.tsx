'use client'
import React from 'react'
import Project1 from '../../../../public/images/synthetic-fibre-p.png'
import Project2 from '../../../../public/images/cellulose-fiber-pellet-p.png'
import Project3 from '../../../../public/images/steel-1.jpg'
import Project4 from '../../../../public/images/silica-fume.jpg'
import project5 from "../../../../public/images/anti-stripping-agent-p.png"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OurProjects = [
    {
        ProjectLink: '/Products/synthetic-fibre',
        ProjectImg: Project1,
        ProjectTitle: 'Synthetic Fibre',
    },
    {
        ProjectLink: '/Products/cellulose-fiber-pellets',
        ProjectImg: Project2,
        ProjectTitle: 'Cellulose Fibre Pellets',
    },
    {
        ProjectLink: '/Products/steel-fibre',
        ProjectImg: Project3,
        ProjectTitle: 'Steel Fibre'
    },
    {
        ProjectLink: '/Products/silica-fume',
        ProjectImg: Project4,
        ProjectTitle: 'Silica Fume'
    },
    {
        ProjectLink: '/Products/anti-stripping-agent',
        ProjectImg: project5,
        ProjectTitle: 'Anti Stripping Agent'
    },
];

const OurProject = () => {
    return (
        <section className='py-12 sm:py-14 md:py-16 lg:py-20 bg-primaryColor'>
            <div className="container mx-auto px-4 md:px-8 ">

                <div className='mb-12 text-center'>
                    <h1 className="mb-5 text-Light text-2xl sm:text-3xl leading-8 sm:leading-10 font-medium">
                        Our <span className="font-bold uppercase">PRODUCTS</span>
                    </h1>
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
                        {OurProjects.map((item, index) => (
                            <SwiperSlide key={index} className="group">
                                <div className="w-full flex justify-center">
                                    <div className="w-[250px] h-[250px] overflow-hidden rounded-full shadow-lg border-4 border-gray-200">
                                       <Link href={item.ProjectLink}>
                                        <Image
                                            src={item.ProjectImg}
                                            alt={item.ProjectTitle}
                                            width={250}
                                            height={250}
                                            className="w-full h-full object-cover group-hover:scale-110 duration-300"
                                        />
                                        </Link>
                                    </div>
                                </div>
                                <Link
                                    href={item.ProjectLink}
                                    className="mt-4 font-medium text-xl text-Light text-center group-hover:text-[#EFEFEF] duration-300 block"
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
    )
}

export default OurProject;
