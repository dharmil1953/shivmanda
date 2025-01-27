import React from 'react'

const About = () => {
    return (
        <section className='py-12 sm:py-14 md:py-16 lg:py-20'>
            <div className='container mx-auto px-4 md:px-8 '>
                <div className='flex flex-wrap gap-8 xl:gap-0'>
                    <div className='w-full xl:w-6/12'>
                        <h3 className='text-primaryColor text-lg leading-6 mb-3 font-medium'>About Us</h3>
                        <div className=''>
                            <h1 className='mb-2.5 w-full xl:w-7/12  text-4xl leading-10 text-black font-medium'>Pioneering Excellence
                                <span className='block'> in <span className='text-primaryColor font-bold'>Construction</span> </span>
                            </h1>
                            <div className='xl:w-9/12'>
                                <p className='text-Body text-lg font-medium mb-3'>The construction industry plays a vital role in shaping the physical and economic landscape of our world. It involves the planning, design, development</p>
                                <p className='text-Body text-lg font-medium'>The construction industry plays a vital role in shaping the physical and economic landscape of our world. It involves the planning, design, development</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-6/12 lg:pl-10'>
                        <div className="grid gap-4 grid-cols-2">
                            <div className='bg-primaryColor rounded-[20px] px-5 py-5 xl:px-11 md:pt-[60px] xl:pb-[50px] col-span-2 md:col-span-1 row-span-2 text-center'>
                                <h1 className='text-6xl md:text-7xl pb-6 text-Light font-bold'>500+</h1>
                                <p className='text-base md:text-lg text-Light font-semibold leading-[25px]'>The construction industry plays a vital role in shaping the physical and economic landscape of our world. It involves the planning, design, development</p>
                            </div>
                            <div className='bg-secondaryColor text-accentColor rounded-[20px] py-5 px-5 xl:px-11'>
                                <h1 className='text-6xl md:text-7xl pb-[15px] font-bold'>120+</h1>
                                <p className='text-base md:text-lg font-semibold md:leading-[25px]'>Businesses guided over thirty years</p>
                            </div>
                            <div className='bg-[#EFEFEF] text-accentColor rounded-[20px] py-5 px-5 xl:px-11'>
                                <h1 className='text-6xl md:text-7xl pb-[15px] font-bold'>30+</h1>
                                <p className='text-base md:text-lg font-semibold md:leading-[25px]'>Business Excellence awards achieved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
