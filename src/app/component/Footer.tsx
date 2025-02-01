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

    const firstHalf = ProductList.slice(0, ProductList.length / 2);
    const secondHalf = ProductList.slice(ProductList.length / 2);

    return (
        <footer className='pt-12 md:pt-14 lg:pt-16 pb-16 md:pt-18 lg:pb-20'>
            <div className="container mx-auto px-4 md:px-8">
                <div className='grid grid-cols-10 gap-4'>

                    <div className='col-span-10 col-start-1 sm:col-span-3 row-start-1'>
                        <h2 className='text-lg lg:text-xl font-semibold  text-primaryColor uppercase mb-3 ml-1'>
                            Contact Us
                        </h2>

                        <div className='ml-1'>
                            <p className='text-base text-Dark mb-2'>Call us : 8AM - 5PM</p>
                            <Link href="tel:#" className='block text-xl mb-2 font-semibold text-primaryColor'>
                                135484511325
                            </Link>
                            <Link href="mailto:#" className='block mb-2 text-base text-Dark'>
                                email@SHIVANANDA MARKETING.com
                            </Link>
                        </div>
                    </div>

                    <div className='col-span-10 sm:col-span-3 sm:col-start-4 row-start-2 sm:row-start-1'>
                        <h2 className='text-lg lg:text-xl font-semibold text-primaryColor uppercase mb-3 ml-1'>
                            Help Support
                        </h2>

                        <div className='ml-1 text-Dark'>
                            <Link href="#" className='text-base md:text-lg mb-2 block'>Contact Us</Link>
                            <Link href="#" className='text-base md:text-lg mb-2 block'>Our Service</Link>
                        </div>

                    </div>

                    <div className='col-span-10 col-start-1 row-start-3  sm:col-span-4 md:col-start-7 sm:row-start-1'>
                        <h2 className='text-lg lg:text-xl font-semibold text-primaryColor uppercase mb-3 ml-1'>
                            Product Categories
                        </h2>

                        <div className="flex gap-8 ml-1">
                            <ul className="list-none">
                                {firstHalf.map((product, index) => (
                                    <li key={index}>
                                        <Link href={product.productLink} className='block text-base md:text-lg text-Dark mb-2'>
                                            {product.productTitle}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <ul className="list-none">
                                {secondHalf.map((product, index) => (
                                    <li key={index}>
                                        <Link href={product.productLink} className='block text-base md:text-lg text-Dark mb-2'>
                                            {product.productTitle}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='col-span-10 col-start-1 sm:col-span-3 row-start-4 sm:row-start-2'>
                        <h2 className='text-lg lg:text-xl font-semibold text-primaryColor uppercase mb-3 ml-1'>
                            Privacy  & Terms
                        </h2>

                        <div className='ml-1 text-Dark'>
                            <Link href="#" className='text-base md:text-lg mb-2 block'>Privacy Policy</Link>
                            <Link href="#" className='text-base md:text-lg mb-2 block'>Terms & Condition</Link>
                        </div>
                    </div>

                    <div className='col-span-10 col-start-1 sm:col-span-3 row-start-5 sm:row-start-2'>
                        <h2 className='text-lg lg:text-xl font-semibold text-primaryColor uppercase mb-3 ml-1'>
                            Company Information
                        </h2>

                        <div className='ml-1 text-Dark'>
                            <Link href="#" className='text-base md:text-lg mb-2 block'>Blog</Link>
                            <Link href="#" className='text-base md:text-lg mb-2 block'>About</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
