import React from 'react'
import Image from 'next/image';
import construction from "../../../public/images/construction.jpg"
import Applications from '../component/Home/Application'
import OurProject from '../component/Home/OurProject'
import OurClients from '../component/Home/OurClient'
import ProjectsComponent from "../component/Home/Projects"

const infrastructure = () => {
  return (
    <div>
         <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-[var(--secondary)]/10 to-[var(--background)]">
        <div className="container mx-auto px-6 pt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pioneering Excellence in Construction
              </h1>
              <p className="text-gray-800 text-lg md:text-xl mb-8">
              We specialise in road construction and urban infra technologies. We provide quality knowledge, technical support  and on site assistance to all our clients as they continue to build sustainable infrastructure. Working with us gives you access to proven high-quality products for all asphalt applications, a highly skilled team dedicated to our customers, and technical support based on local specifications and guidelines
              </p>              
            </div>
            <div
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src={construction}
                alt="Modern Construction Project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
        <Applications />
        <OurProject />
        <OurClients />
        <ProjectsComponent />
    </div>
  )
}

export default infrastructure
