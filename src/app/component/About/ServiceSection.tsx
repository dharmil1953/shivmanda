"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: "🏢",
    title: "Building",
    description:
      "From preconstruction to virtual design and construction, we offer a wide range of services to meet your building needs.",
  },
  {
    icon: "🔧",
    title: "Civil",
    description:
      "From engineering to preconstruction, we offer a variety of services and delivery methods.",
  },
  {
    icon: "🛠️",
    title: "Construction",
    description:
      "Providing top-tier construction management and site development services for diverse projects.",
  },
  {
    icon: "🏗️",
    title: "Infrastructure",
    description:
      "Specialized in roads, bridges, and urban infrastructure to support growing communities.",
  },
];

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [scrollComplete, setScrollComplete] = useState<boolean>(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top } = sectionRef.current.getBoundingClientRect();
      if (top < window.innerHeight * 0.5 && !scrollComplete) {
        setScrollComplete(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollComplete]);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[500px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/your-background-image.jpg')" }}
    >
      {/* Left Content */}
      <div className="w-1/3 p-10 md:p-16 text-white bg-black/60 rounded-lg scale-110">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          We Provide Strong Services For You
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Our suite of trusted construction services ensures the highest degree
          of quality, safety, efficiency, and innovation on your project.
        </p>
        <button className="bg-white text-black px-6 py-3 text-lg rounded-md hover:bg-gray-200 transition-all">
          Explore All Services
        </button>
      </div>

      {/* Scrollable Services Section */}
      <div className="relative w-2/3 overflow-hidden">
        <motion.div
          style={{ x: scrollComplete ? "-100%" : xTransform }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          className="flex gap-6 p-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-[320px] md:min-w-[400px] bg-white/90 border border-gray-300 rounded-lg p-6 shadow-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700 text-lg mb-4">{service.description}</p>
              <button className="flex items-center text-black hover:text-gray-800 transition-all">
                Read More
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
