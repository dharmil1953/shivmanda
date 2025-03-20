import React, { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [direction, setDirection] = useState("right"); // for animation direction
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Correcting type for intervalRef

  const videos = [
    {
      src: "https://videos.pexels.com/video-files/2835998/2835998-uhd_2560_1440_24fps.mp4",
      type: "video/mp4"
    },
    {
      src: "https://videos.pexels.com/video-files/14054981/14054981-uhd_2560_1440_25fps.mp4", // Replace with your second video URL
      type: "video/mp4"
    }
  ];

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  });
  

  const startInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setDirection("right");
      setActiveVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    }, 7000);
  };

  const handlePrev = () => {
    setDirection("left");
    setActiveVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    startInterval(); // Reset interval after manual navigation
  };

  const handleNext = () => {
    setDirection("right");
    setActiveVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    startInterval(); // Reset interval after manual navigation
  };

  return (
    <div>
      <section className="relative w-full h-screen">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full overflow-hidden transition-all duration-1000 ${
              activeVideo === index ? "opacity-100" : "opacity-0"
            } ${
              direction === "right"
                ? activeVideo === index
                  ? "translate-x-0"
                  : "translate-x-full"
                : activeVideo === index
                ? "translate-x-0"
                : "-translate-x-full"
            }`}
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={video.src} type={video.type} />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-4 z-20 -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
            aria-label="Previous video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        <div className="absolute top-1/2 right-4 z-20 -translate-y-1/2">
          <button
            onClick={handleNext}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
            aria-label="Next video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="container h-full mx-auto relative z-10 text-white">
          <div className="w-full md:w-8/12 lg:w-6/12 mx-auto text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl xl:text-5xl xl:leading-tight pb-8">
              Transforming Spaces
              <span className="font-semibold block"> Shaping Futures.</span>
            </h1>
            <div className="text-lg">
              <p>
                Inspiring People to Build Better. The world needs new solutions
                for the way we live and move, making it a better place for
                generations to come.
              </p>
            </div>
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeVideo ? "right" : "left");
                setActiveVideo(index);
                startInterval();
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                activeVideo === index ? "bg-white scale-125" : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
