'use client'
import Link from 'next/link'
import React from 'react'

const ProductList = [
    { productLink: '#', productTitle: 'Bath' },
    { productLink: '#', productTitle: 'Bedding' },
    { productLink: '#', productTitle: 'Electronics & Appliances' },
    { productLink: '#', productTitle: 'Guest Room Amenities' },
    { productLink: '#', productTitle: 'Bath' },
    { productLink: '#', productTitle: 'Bedding' },
    { productLink: '#', productTitle: 'Electronics & Appliances' },
    { productLink: '#', productTitle: 'Guest Room Amenities' }
]

const Footer = () => {
    const firstHalf = ProductList.slice(0, ProductList.length / 2);
    const secondHalf = ProductList.slice(ProductList.length / 2);

    return (
        <footer className='pt-12 md:pt-14 lg:pt-16 pb-16 md:pb-18 lg:pb-20 bg-gray-100'>
            <div className="container mx-auto px-4 md:px-8">
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

                    {/* Contact Us */}
                    <div>
                        <h2 className='text-lg lg:text-xl font-semibold text-primaryColor uppercase mb-4'>
                            Contact Us
                        </h2>
                        <p className='text-sm text-Dark mb-2'>Call us: 9AM - 6 PM</p>
                        <Link href='tel:+919873173214' className='text-primaryColor text-lg sm:text-xl font-semibold block mb-3'>
                            +91 9873173214 / +91 9205992676
                        </Link>
                        <Link href='mailto:smpl@narsinghdass.com' className='text-base text-Dark font-medium block mb-3 hover:text-primaryColor duration-300'>
                            smpl@narsinghdass.com / material@narsinghdass.com
                        </Link>
                    </div>

                    {/* Help & Support */}
                    <div>
                        <h2 className='text-lg lg:text-xl font-semibold text-primaryColor uppercase mb-4'>
                            Help & Support
                        </h2>
                        <Link href="#" className='text-base md:text-lg text-Dark block mb-2 hover:text-primaryColor'>
                            Contact Us
                        </Link>
                        <Link href="#" className='text-base md:text-lg text-Dark block mb-2 hover:text-primaryColor'>
                            Our Services
                        </Link>
                    </div>

                    {/* Product Categories */}
                    <div>
                        <h2 className='text-lg lg:text-xl font-semibold text-primaryColor uppercase mb-4'>
                            Product Categories
                        </h2>
                        <div className="grid grid-cols-2 gap-x-6">
                            <ul>
                                {firstHalf.map((product, index) => (
                                    <li key={index}>
                                        <Link href={product.productLink} className='block text-base md:text-lg text-Dark mb-2 hover:text-primaryColor'>
                                            {product.productTitle}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <ul>
                                {secondHalf.map((product, index) => (
                                    <li key={index}>
                                        <Link href={product.productLink} className='block text-base md:text-lg text-Dark mb-2 hover:text-primaryColor'>
                                            {product.productTitle}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Company Information */}
                    <div>
                        <h2 className='text-lg lg:text-xl font-semibold text-primaryColor uppercase mb-4'>
                            Company Information
                        </h2>
                        <Link href="#" className='text-base md:text-lg text-Dark block mb-2 hover:text-primaryColor'>
                            Blog
                        </Link>
                        <Link href="#" className='text-base md:text-lg text-Dark block mb-2 hover:text-primaryColor'>
                            About
                        </Link>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-300 mt-8 pt-6 text-center">
                    <p className='text-base text-Dark'>
                        &copy; {new Date().getFullYear()} SHIVANANDA MARKETING. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
