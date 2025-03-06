'use client';

import React from 'react';
import ExpertiseCard from '@/components/ExpertiseCard';
import { Comfortaa, Bricolage_Grotesque } from 'next/font/google';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  style: 'normal',
});

const expertiseData = [
  {
    title: "Landing Pages",
    description: "Conversion-focused landing pages designed to turn visitors into customers. Our landing pages are optimized for speed, mobile responsiveness, and user engagement.",
    videoSrc: "/expertise/landing.mp4",
    thumbnailSrc: "/expertise/mobile.png",
    href: "/expertise/landing-pages"
  },
  {
    title: "Business Websites",
    description: "Professional business websites that establish credibility and showcase your services. Built with scalability in mind to grow alongside your business needs.",
    videoSrc: "/expertise/business.mp4",
    thumbnailSrc: "/expertise/tab.png",
    href: "/expertise/business-pages"
  },
  {
    title: "Custom Websites",
    description: "Feature-rich online stores with seamless checkout experiences. Our e-commerce solutions include inventory management, payment processing, and customer analytics.",
    videoSrc: "/expertise/ecommerce.mp4",
    thumbnailSrc: "/expertise/laptop.png",
    href: "/expertise/ecommerce"
  }
];

const Expertise = () => {
  return (
    <section className=" py-10 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className={`${bricolage.className} border border-gray-500 bg-[#F3E6C7] rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium tracking-tighter`}>
            Expertise
          </div>
        </div>
        
        {/* Section heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className={`${comfortaa.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 max-w-3xl mx-auto leading-tight px-2`}>
            A legacy of success delivering impactful results
          </h2>
        </div>
        
        {/* Expertise cards with shadow */}
        <div className="relative">
          {/* Shadow element */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-black/10 blur-2xl rounded-[100px]"></div>
          </div>
          
          {/* Cards grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {expertiseData.map((expertise, index) => (
              <ExpertiseCard
                key={index}
                title={expertise.title}
                description={expertise.description}
                videoSrc={expertise.videoSrc}
                thumbnailSrc={expertise.thumbnailSrc}
                href={expertise.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise; 