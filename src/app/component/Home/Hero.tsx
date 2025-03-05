"use client";
import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="relative w-full h-[600px] ">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden ">
          <video
            className="w-full h-full object-cover "
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://videos.pexels.com/video-files/14054981/14054981-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="container h-full mx-auto relative z-10 text-white">
          <div className="w-full md:w-8/12 lg:w-6/12 mx-auto text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl xl:text-[56px]  xl:leading-[60px] pb-8">
              Transforming Spaces
              <span className="font-semibold block"> Shaping Futures.</span>
            </h1>
            <div className="text-lg">
              <p>
              Inspiring People to Build Better. The world needs new solutions for the way we live and move,  making it a better place for generations to come.

              </p>
              {/* <ul className="flex flex-wrap items-center gap-5 justify-center sm:justify-between pt-5">
                {listItems.map((item, index) => (
                  <li key={index} className="flex items-center m-0">
                    <Image
                      src={item.image}
                      alt="Marker"
                      className="w-6 h-6 mr-3"
                      width={12}
                      height={12}
                    />
                    <span className="text-lg font-medium">{item.title}</span>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
