import Image from 'next/image'
import React from 'react'
import CallGirl from '../../../../public/images/image (9).png'


const Contacts = () => {
    return (
        <section className='py-12 sm:py-14 md:py-16 lg:py-20 bg-[#EFEFEF]'>
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-5 gap-8 items-center">
                    <div className='col-span-12 md:col-span-2  relative'>
                        <div className='relative  w-1/2 md:w-4/5 lg:w-1/2 text-center mx-auto'>
                            <span className=' size-40 md:size-48 xl:size-52 absolute -top-2 -right-2 md:-top-3 lg:-top-4 xl:-top-5 md:-right-3 lg:-right-4 xl:-right-5 bg-primaryColor rounded-[20px]'></span>
                            <Image src={CallGirl} alt='Contact' className='h-full mx-auto relative z-10' />
                            <span className='size-40 md:size-48 lg:size-52 absolute md:-bottom-3 lg:-bottom-5  -bottom-2 -left-2 md:-left-3 lg:-left-5 bg-primaryColor rounded-[20px]'></span>
                        </div>
                    </div>
                    <div className='col-span-12 sm:col-span-3'>
                        <div className='mb-11 text-center'>
                            <h3 className='text-primaryColor text-lg leading-6 mb-3 font-semibold'>Contact</h3>
                            <h1 className="mb-5 text-Dark text-2xl sm:text-3xl leading-8 sm:leading-10 font-medium">
                                Get in Touch With <span className='font-bold'> Our Team </span>
                            </h1>
                        </div>

                        <form className=''>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5'>
                                <div>
                                    <input type="text" name="" id="" placeholder='First Name' className='py-3 px-5 block w-full rounded-full bg-transparent border border-[#3C3C3C] focus:border-primaryColor outline-none sm:text-sm text-[#25252A] placeholder:text-[#25252A]' />
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder='Last Name' className='py-3 px-5 block w-full rounded-full bg-transparent border border-[#3C3C3C] focus:border-primaryColor outline-none sm:text-sm text-[#25252A] placeholder:text-[#25252A]' />
                                </div>
                            </div>

                            <div className='mb-5'>
                                <input type="email" name="" id="" placeholder='Email' className='py-3 px-5 block w-full rounded-full bg-transparent border border-[#3C3C3C] focus:border-primaryColor outline-none sm:text-sm text-[#25252A] placeholder:text-[#25252A]' />
                            </div>

                            <div className="mb-5">
                                <input type="tel" name="" id="" placeholder='Phone Number' className='py-3 px-5 block w-full rounded-full bg-transparent border border-[#3C3C3C] focus:border-primaryColor outline-none sm:text-sm text-[#25252A] placeholder:text-[#25252A]' />
                            </div>

                            <div className='mb-8'>
                                <textarea name="" id="" rows={3} placeholder='Message' className='py-3 px-5 block w-full rounded-xl bg-transparent border border-[#3C3C3C] focus:border-primaryColor outline-none sm:text-sm text-[#25252A] placeholder:text-[#25252A]'></textarea>
                            </div>

                            <div className='w-full text-center'>
                                <input type="button" value="Submit" className='mx-auto px-8 py-2 rounded-full bg-primaryColor hover:bg-transparent border-2 border-transparent hover:border-primaryColor hover:text-primaryColor font-semibold text-lg duration-300' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts
