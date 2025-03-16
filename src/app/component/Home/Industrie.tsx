"use client"
import React from 'react'
import icon1 from '../../../../public/images/icon1.svg'
import icon2 from '../../../../public/images/icon2.svg'
import Image from 'next/image';
import { useRouter } from "next/navigation";


const Industriedata = [
    {
        image: icon1,
        title: "Building",
        desc: "For residential, commercial and industrial projects",
        href:"#",
    },
    {
        image: icon2,
        title: "Infrastructure",
        desc: "Performance and Durability enhancing solutions for infrastructure projects",
        href:"#",
    },
    {
        image: icon1,
        title: "Coating and Masterbatch Solutions",
        desc: "Innovative Solutions for Masterbatches, Paints, Inks and all types of Coatings",
        href:"#",
    },
    {
        image: icon1,
        title: "Paper",
        desc: "For Printing, Packaging and Hygiene Segments",
        href:"https://indiapaper.com/",
    }
];

const Industrie = () => {
    const router = useRouter();
    return (
        <section className='py-12 sm:py-14 md:py-16 lg:py-20'>
            <div className="container mx-auto px-4 md:px-8">
                {/* Section Heading */}
                <div className='mb-11 md:mb-12 text-center'>
                    <h3 className='text-primaryColor text-lg leading-6 mb-2 font-medium'>Our Industries</h3>
                    <h1 className="mb-5 text-Dark text-2xl sm:text-3xl leading-8 sm:leading-10 font-medium">
                        <span className="font-bold text-primaryColor uppercase">Industries</span> We Serve
                    </h1>
                </div>

                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Industriedata.map((industries, index) => (
                        
                        <div key={index} 
                        onClick={() => router.push(industries.href)}
                        className='w-full cursor-pointer bg-[#EFEFEF] rounded-xl px-6 py-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300'>
                            {/* Icon */}
                            <div className='flex items-center justify-center size-20 lg:size-[91px] rounded-full bg-primaryColor mx-auto mb-4'>
                                <Image src={industries.image} alt={`Industry Image ${index + 1}`} className='w-auto' />
                            </div>

                            {/* Title */}
                            <h2 className='text-xl md:text-2xl font-semibold mb-2'>{industries.title}</h2>

                            {/* Description */}
                            <p className='text-base md:text-lg text-gray-700'>{industries.desc}</p>
                        </div>
                        
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Industrie
