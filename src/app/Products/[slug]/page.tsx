import React from 'react';
import Image from 'next/image';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetail({ params }: PageProps) {
  const productName = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
          alt={productName}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {productName}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              Innovative solutions for modern construction challenges
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[var(--foreground)]">Overview</h2>
            <p className="text-[var(--text-body)] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-[var(--text-body)] mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-[var(--foreground)]">Specifications</h2>
            <div className="space-y-4">
              <div className="border-b border-[var(--text-body)]/10 pb-4">
                <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">Project Type</h3>
                <p className="text-[var(--text-body)]">Commercial Construction</p>
              </div>
              <div className="border-b border-[var(--text-body)]/10 pb-4">
                <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">Location</h3>
                <p className="text-[var(--text-body)]">Downtown Metropolitan Area</p>
              </div>
              <div className="border-b border-[var(--text-body)]/10 pb-4">
                <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">Size</h3>
                <p className="text-[var(--text-body)]">50,000 sq ft</p>
              </div>
              <div className="border-b border-[var(--text-body)]/10 pb-4">
                <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">Timeline</h3>
                <p className="text-[var(--text-body)]">18 months</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-[var(--foreground)]">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-[var(--background)] border border-[var(--text-body)]/10 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-[var(--foreground)]">
                  Feature {item}
                </h3>
                <p className="text-[var(--text-body)]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-[var(--foreground)]">Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
                  alt={`Gallery image ${item}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-32 mb-16">
                    
          <div className="bg-primaryColor rounded-2xl px-4 py-16 md:p-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-dark)] mb-6">
                Want to Create Your Dream Project?
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                <button className="w-full md:w-auto bg-[var(--text-dark)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all">
                  CONTACT US
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
