'use client'
import Link from 'next/link'
import React from 'react'

const ProductList = [
    {
        productLink: '#',
        productTitle: 'Bath',
    },
    {
        productLink: '#',
        productTitle: 'Bedding',
    }, {
        productLink: '#',
        productTitle: 'Electroncis & Applicances',
    }, {
        productLink: '#',
        productTitle: 'Guest Room Amenities',
    },
    {
        productLink: '#',
        productTitle: 'Bath',
    },
    {
        productLink: '#',
        productTitle: 'Bedding',
    }, {
        productLink: '#',
        productTitle: 'Electroncis & Applicances',
    }, {
        productLink: '#',
        productTitle: 'Guest Room Amenities',
    }
]

const Footer = () => {
    return (
        <footer className='pt-16 pb-20'>
            <div className="container px-4 md:px-8">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4'>
                    <div className='pr-3 text-Dark col-span-4 mb-4 sm:col-span-2 lg:col-span-1'>
                        <div className='mb-3'>
                            <h2 className='text-xl font-semibold text-primaryColor uppercase mb-3'>Contact Us</h2>

                            <p className='text-sm mb-2 text-Dark'>Call us : 8AM - 5PM</p>

                            <Link href={'/'} className='text-primaryColor text-xl font-semibold block mb-3'> 135484511325</Link>
                            <Link href={'/'} className='text-base hover:text-primaryColor text-Dark font-medium block mb-3 duration-300'>email@SHIVANANDA MARKETING.com </Link>
                        </div>
                        <div className='mb-3'>
                            <h2 className='text-xl font-semibold text-primaryColor uppercase mb-3'>
                                Privacy & Terms
                            </h2>

                            <ul className='text-lg font-medium'>
                                <li className='mb-2'>
                                    <Link href='#' className='hover:text-primaryColor duration-300'>Privacy Policy</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href='#' className='hover:text-primaryColor duration-300'>Terms & Conditions</Link>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="pr-3 col-span-4 mb-4 sm:col-span-2 lg:col-span-1">
                        <div className='mb-3'>
                            <h2 className='text-xl font-semibold text-primaryColor uppercase mb-3'>
                                Help & Support
                            </h2>
                            <ul className='text-lg font-medium my-7'>
                                <li className='mb-2'>
                                    <Link href='#' className=' text-Dark hover:text-primaryColor duration-300'>Contact Us</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href='#' className='text-Dark hover:text-primaryColor duration-300'>
                                        Our Service
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-xl font-semibold text-primaryColor uppercase mb-3'>
                                Company Information
                            </h2>

                            <ul className='text-lg font-medium'>
                                <li className='mb-2'>
                                    <Link href='#' className='text-Dark hover:text-primaryColor duration-300'>About Us</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href='#' className='text-Dark hover:text-primaryColor duration-300'>Blog</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pr-3 col-span-2 sm:col-span-4 lg:col-span-2">
                        <h2 className='text-xl font-semibold text-primaryColor uppercase mb-3'>Product Categories</h2>

                        <ul className='text-lg font-medium flex flex-wrap'>
                            {ProductList.map((listItems, index) => (
                                <li key={index} className='w-1/2 mb-2 text-Dark hover:text-primaryColor duration-300'>
                                    <Link href={listItems.productLink}>
                                        {listItems.productTitle}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
