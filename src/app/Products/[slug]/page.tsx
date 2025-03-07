// import React from 'react';
// import Image from 'next/image';

//  export default async function ProductDetail() {

//   return (
//     <main className="min-h-screen bg-[var(--background)]">
//       <section className="relative h-[60vh] w-full">
//         <Image
//           src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
//           alt="Product Image"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//           <div className="container mx-auto px-4">
//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//             Synthetic Fibre
//             </h1>
//             <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
//             Micro Polyester and Polyproplene Fibre
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="container mx-auto px-4 py-16">
//         <div className="grid md:grid-cols-2 gap-12">
//           <div>
//             <h2 className="text-3xl font-bold mb-6 text-[var(--foreground)]">Overview</h2>
//             <p className="text-[var(--text-body)] mb-6">
//             Concrete tends to become brittle, lacking tension and developing cracks in certain construction projects which are faced with repeated stress, temperature variation and corrosion. Recron 3s adds toughness and tensile strength to concrete while helping resist shrinkage and cracking. It also bonds better to the mix, thanks to its unique triangular cross section and dimensional stability. Developed after extensive research by Reliance Industries Limited, Recron 3s has been widely used in a variety of applications
//             </p>

//           </div>

//           <div>
//             <h2 className="text-3xl font-bold mb-6 text-[var(--foreground)]">Specifications</h2>
//             <div className="space-y-4">
//               <div className="border-b border-[var(--text-body)]/10 pb-4">
//                 <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">Project Type</h3>
//                 <p className="text-[var(--text-body)]"> Polyester and Polypropolene (Mono filament)</p>
//               </div>
//               <div className="border-b border-[var(--text-body)]/10 pb-4">
//                 <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">Length</h3>
//                 <p className="text-[var(--text-body)]">1mm, 3mm. 6mm, 12mm, 18mm</p>
//               </div>
//               <div className="border-b border-[var(--text-body)]/10 pb-4">
//                 <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">Compliance</h3>
//                 <p className="text-[var(--text-body)]"> Complies with IS 16481:2022, EN 14889-2:2006 of EU
//                 </p>
//               </div>
//               <div className="border-b border-[var(--text-body)]/10 pb-4">
//                 <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">Tested by</h3>
//                 <p className="text-[var(--text-body)]"> IIT Madras, CBRI Roorkee, CRRI, SVNIT Surat, UBC Canada</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-16">
//           <h2 className="text-3xl font-bold mb-8 text-[var(--foreground)]">Key Features</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[1, 2, 3].map((item) => (
//               <div
//                 key={item}
//                 className="bg-[var(--background)] border border-[var(--text-body)]/10 rounded-lg p-6 shadow-lg"
//               >
//                 <h3 className="text-xl font-semibold mb-4 text-[var(--foreground)]">
//                   Feature {item}
//                 </h3>
//                 <p className="text-[var(--text-body)]">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//                   eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-16">
//           <h2 className="text-3xl font-bold mb-8 text-[var(--foreground)]">Gallery</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[1, 2, 3].map((item) => (
//               <div key={item} className="relative h-64 rounded-lg overflow-hidden">
//                 <Image
//                   src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
//                   alt={`Gallery image ${item}`}
//                   fill
//                   className="object-cover hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="relative mt-32 mb-16">

//           <div className="bg-primaryColor rounded-2xl px-4 py-16 md:p-16">
//             <div className="max-w-4xl mx-auto text-center">
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-dark)] mb-6">
//                 Want to Create Your Dream Project?
//               </h2>

//               <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
//                 <button className="w-full md:w-auto bg-[var(--text-dark)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all">
//                   CONTACT US
//                 </button>

//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import React from "react";
import Image from "next/image";
import fs from "fs/promises";
import path from "path";

interface Project {
  slug: string;
  name: string;
  bgImage: string;
  description: string;
  image: string;
  overview: string;
  specifications: Specification[];
  images: string[];
}

interface Specification {
  title: string;
  value: string;
}

async function getProjectData(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "public", "projects.json");
    const jsonData = await fs.readFile(filePath, "utf-8"); // Use async read
    const projects = JSON.parse(jsonData); // Parse JSON safely

    return projects.find((project: Project) => project.slug === slug) || null;
  } catch (error) {
    console.error("Error reading projects.json:", error);
    return null;
  }
}

type tParams = Promise<{ slug: string }>;
  export default async function ProductDetail({ params }: { params: tParams }) {
    const { slug } = await params;

    console.log(slug)

  const project = await getProjectData(slug);

  console.log("Project Details:", project); 

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">Project Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="relative h-[60vh] w-full">
        <Image
          src={
            project.bgImage ||
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
          }
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {project.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[var(--foreground)]">
              Overview
            </h2>
            <p className="text-[var(--text-body)] mb-6">{project.overview}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-[var(--foreground)]">
              Specifications
            </h2>
            <div className="space-y-4">
              {project.specifications.map((spec: Specification, index: number) => (
                <div
                  key={index}
                  className="border-b border-[var(--text-body)]/10 pb-4"
                >
                  <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">
                    {spec.title}
                  </h3>
                  <p className="text-[var(--text-body)]">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-[var(--foreground)]">
            Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project?.images?.map((img: string, index: number) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`Gallery image ${index + 1}`}
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
