import React from 'react'
import BannerBg from '../../../../public/images/infobanner.png'
import Link from 'next/link'

const MoreInfo = () => {
  return (
    <section className="h-full py-16 bg-primaryColor bg-bottom xl:bg-center flex items-center "
      style={{ backgroundImage: `url(${BannerBg.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} >
      <div className='container px-4 md:px-8'>
        <div className='w-full md:w-1/2 h-full'>
          <h1 className="mb-5 text-2xl text-Light sm:text-3xl leading-8 sm:leading-10 font-medium">
            Pioneering Excellence in
            <span className="block">
              <span className="font-bold">Construction</span>
            </span>
          </h1>

          <p className='text-lg'>The construction industry plays a vital role in shaping the physical and economic landscape of our world. It involves the planning, design, development. </p>

          <button className="mt-6 h-10 px-6 bg-Light hover:bg-transparent border-2 hover:border-Light border-transparent  font-semibold text-primaryColor hover:text-Light duration-300 rounded-full">
            Learn More
          </button>
        </div>

        <div className="w-1/2 h-full">
        </div>
      </div>
    </section >
  )
}

export default MoreInfo
