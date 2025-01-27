'use client'
import React from 'react'
import Project1 from '../../../../public/images/image (3).png'
import Project2 from '../../../../public/images/image (4).png'
import Project3 from '../../../../public/images/image (5).png'
import Image from 'next/image'
import Link from 'next/link'


const OurProjects = [
    {
        ProjectLink: '/',
        ProjectImg: Project1,
        ProjectTitle: 'Real estate listings',
    },
    {
        ProjectLink: '/',
        ProjectImg: Project2,
        ProjectTitle: 'Residential leasing agreement',
    },
    {
        ProjectLink: '/',
        ProjectImg: Project3,
        ProjectTitle: 'Residential architecture'
    },
];

const OurProject = () => {
    return (
        <section className='py-12 sm:py-14 md:py-16 lg:py-20 bg-primaryColor'>
            <div className="container mx-auto px-4 md:px-8 ">

                <div className='mb-12 text-center'>
                    <h1 className="mb-5 text-Light text-2xl sm:text-3xl  leading-8 sm:leading-10 font-medium">
                        Our <span className="font-bold uppercase">PROJECTS</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {OurProjects.map((OurProjectItems, index) => (
                        <div key={index} className='group'>
                            <div className='w-full overflow-hidden rounded-[20px]'>
                                <Image src={OurProjectItems.ProjectImg} alt={`${OurProjectItems.ProjectTitle}`} className='w-full h-[380px] group-hover:scale-110 duration-300 object-cover' />
                            </div>
                            <Link href={OurProjectItems.ProjectLink} className='mt-4 font-medium text-xl text-Light text-center group-hover:text-[#EFEFEF] duration-300 block'>
                                    {OurProjectItems.ProjectTitle}
                            </Link>
                        </div>
                    ))}
                </div>

                <div className='w-full text-center'>
                    <button className="mt-10 h-10 px-6 bg-Light mx-auto hover:bg-transparent border-2 hover:border-Light border-transparent  font-semibold text-primaryColor hover:text-Light duration-300 rounded-full">
                        View More
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OurProject
