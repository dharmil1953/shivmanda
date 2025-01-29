import React from 'react'
import BannerBg from '../../../../public/images/infobanner.png'
import Hammer from '../../../../public/images/hammer 1.svg'
import Cap from '../../../../public/images/helmet 1.svg'
import Image from 'next/image'

const MoreInfo = () => {
  return (
    <section className=" bg-primaryColor  ">
      <div className='container px-4 md:px-8 h-full py-16 mx-auto bg-bottom xl:bg-center flex items-center' style={{ backgroundImage: `url(${BannerBg.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
        <div className='w-full md:w-1/2 h-full'>
          <h1 className="mb-5 text-2xl text-Light sm:text-3xl leading-8 sm:leading-10 font-medium">
            Pioneering Excellence in
            <span className="block">
              <span className="font-bold uppercase">Construction</span>
            </span>
          </h1>

          <p className='text-lg text-Light'>The construction industry plays a vital role in shaping the physical and economic landscape of our world. It involves the planning, design, development. </p>

          <button className="mt-6 h-10 px-6 bg-Light hover:bg-transparent border-2 hover:border-Light border-transparent  font-semibold text-primaryColor hover:text-Light duration-300 rounded-full">
            Learn More
          </button>
        </div>

        <div className="w-2/5 h-full relative">
          <div className='size-[68px] bg-Light sm:flex items-center justify-center hidden lg:-top-12 lg:left-5 md:top-14 relative rounded-full'>
            <Image src={Hammer} alt='hammer' className='size-auto' />
          </div>
          <div className='size-[53px] bg-Light sm:flex items-center justify-center hidden absolute md:right-8 md:-bottom-16 lg:right-40 rounded-full '>
            <Image src={Cap} alt='hammer' className='size-auto' />
          </div>
        </div>
      </div>
    </section >
  )
}

export default MoreInfo
