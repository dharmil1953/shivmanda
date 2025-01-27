'use client'
import React from 'react'
import blog1 from '../../../../public/images/image (6).png'
import blog2 from '../../../../public/images/image (7).png'
import blog3 from '../../../../public/images/image (8).png'
import Image from 'next/image'
import Link from 'next/link'

const BlogsData = [
    {
        BlogLink: '/',
        BlogImg: blog1,
        BlogTitle: 'Real estate listings',
        BlogDate: '19th July 2023',
        BlogDesc: "It seems you're looking for some sample texts related to residential properties or settings. Here are a few types of text.",
        BlogBtn: 'Read More'
    },
    {
        BlogLink: '/',
        BlogImg: blog2,
        BlogTitle: 'Real estate listings',
        BlogDate: '19th July 2023',
        BlogDesc: "It seems you're looking for some sample texts related to residential properties or settings. Here are a few types of text.",
        BlogBtn: 'Read More'
    },
    {
        BlogLink: '/',
        BlogImg: blog3,
        BlogTitle: 'Real estate listings',
        BlogDate: '19th July 2023',
        BlogDesc: "It seems you're looking for some sample texts related to residential properties or settings. Here are a few types of text.",
        BlogBtn: 'Read More'
    },
]

const OurBlogs = () => {
    return (
        <section className='py-12 sm:py-14 md:py-16 lg:py-20'>
            <div className="container mx-auto px-4 md:px-8 ">

                <div className='mb-12 text-center'>
                    <h3 className='text-primaryColor text-lg leading-6 mb-3 font-semibold'>Blog</h3>
                    <h1 className="mb-5 text-Dark text-2xl sm:text-3xl  leading-8 sm:leading-10 font-medium">
                        Latest Resources
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {BlogsData.map((BlogItems, index) => (
                        <div key={index} className='rounded-[20px] p-5 pb-9 bg-[#EFEFEF]'>
                            <div className='w-full pb-5'>
                                <Link href={BlogItems.BlogLink}>
                                    <Image src={BlogItems.BlogImg} alt={`${BlogItems.BlogTitle}`} className='w-full h-full object-cover' />
                                </Link>
                            </div>
                            <div className='text-Dark'>
                                <div className="text-lg font-normal mb-1">{BlogItems.BlogDate}</div>
                                <Link href={BlogItems.BlogLink}>
                                    <h2 className='text-2xl md:text-xl line-clamp-2 text-ellipsis font-semibold mb-3'>{BlogItems.BlogTitle}</h2>
                                </Link>
                                <p className='text-base line-clamp-3 text-ellipsis'>{BlogItems.BlogDesc}</p>

                                <Link href={BlogItems.BlogLink} className='py-2 block mt-3 w-fit px-6 bg-transparent  hover:bg-Light border-2 hover:border-Light border-primaryColor font-semibold text-primaryColor duration-300 rounded-full'>{BlogItems.BlogBtn}</Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='w-full text-center'>
                    <button className="mt-10 h-10 px-6 bg-primaryColor mx-auto hover:bg-transparent border-2  border-transparent hover:border-primaryColor font-semibold text-Light hover:text-primaryColor  duration-300 rounded-full">
                        View More
                    </button>
                </div>

            </div>
        </section>
    )
}

export default OurBlogs
