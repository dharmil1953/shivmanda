"use client"
import React from 'react'
import icon1 from '../../../../public/images/icon1.svg'
import icon2 from '../../../../public/images/icon2.svg'
import Image from 'next/image';

const Industriedata = [
    {
        image: icon1,
        title: "Residential",
        desc: "The construction industry plays a vital role in shaping the physical and economic landscape of our world. It involves the planning, design, development. The construction industry plays a vital role in shaping the physical and economic landscape of our world. ",
    },
    {
        image: icon2,
        title: "Infrastructure",
        desc: "The construction industry plays a vital role in shaping the physical and economic landscape of our world. It involves the planning, design, development. The construction industry plays a vital role in shaping the physical and economic landscape of our world. ",
    },
    {
        image: icon1,
        title: "Top Quality",
        desc: "The construction industry plays a vital role in shaping the physical and economic landscape of our world. It involves the planning, design, development. The construction industry plays a vital role in shaping the physical and economic landscape of our world. ",
    },
    {
        image: icon2,
        title: "24/7 Support",
        desc: "The construction industry plays a vital role in shaping the physical and economic landscape of our world. It involves the planning, design, development. The construction industry plays a vital role in shaping the physical and economic landscape of our world. ",
    },
];

const Industrie = () => {
    return (
        <section className='py-12 sm:py-14 md:py-16 lg:py-20'>
            <div className="container mx-auto px-4 md:px-8 ">

                <div className='mb-12 text-center'>
                    <h3 className='text-primaryColor text-lg leading-6 mb-2 font-medium'>Our Industries</h3>
                    <h1 className="mb-5 text-Dark text-2xl sm:text-3xl  leading-8 sm:leading-10 font-medium">
                        <span className="font-bold text-primaryColor uppercase">Industries</span> We Serve
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {Industriedata.map((industries, index) => (
                        <div key={index} className='w-full rounded-[20px] px-10 py-8 text-Dark bg-[#EFEFEF]'>
                            <div className="flex gap-0 md:gap-3 lg:gap-0 items-center">
                                <div className='w-4/12 lg:w-3/12 xl:w-2/12'>
                                    <div className='flex items-center justify-center size-20 rounded-full bg-primaryColor'>
                                        <Image src={industries.image} alt={`Industry Image ${index + 1}`} className='w-auto' width={100} height={100} />
                                    </div>
                                </div>
                                <div className="w-8/12 lg:w-9/12 xl:w-10/12">
                                    <h2 className='text-2xl md:text-xl lg:text-2xl font-semibold'>{industries.title}</h2>
                                </div>
                            </div>

                            <div className="w-full mt-3">
                                <p className='text-lg font-medium md:text-base lg:text-lg'>{industries.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Industrie
