'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

interface PortfolioCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  className?: string;
}

const portfolioData = [
  {
    title: "Landing Pages",
    description: "Passionately Full Stack Developer specializing in React and Node.js",
    imageSrc: "/expertise/mobile.png",
    href: "/portfolio/landing-pages"
  },
  {
    title: "Business Pages",
    description: "Passionately Full Stack Developer specializing in React and Node.js",
    imageSrc: "/expertise/tab.png",
    href: "/portfolio/business-pages"
  },
  {
    title: "e-Commerce",
    description: "Passionately Full Stack Developer specializing in React and Node.js",
    imageSrc: "/expertise/laptop.png",
    href: "/portfolio/ecommerce"
  },
  {
    title: "Landing Pages",
    description: "Passionately Full Stack Developer specializing in React and Node.js",
    imageSrc: "/expertise/tab.png",
    href: "/portfolio/landing-pages"
  },
  {
    title: "Business Pages",
    description: "Passionately Full Stack Developer specializing in React and Node.js",
    imageSrc: "/expertise/laptop.png",
    href: "/portfolio/business-pages"
  },
  {
    title: "e-Commerce",
    description: "Passionately Full Stack Developer specializing in React and Node.js",
    imageSrc: "/expertise/mobile.png",
    href: "/portfolio/ecommerce"
  }
];

const PortfolioCard = ({ 
  title, 
  description, 
  imageSrc,
  href,
  className = '' 
}: PortfolioCardProps) => {
  return (
    <Link href={href}>
      <div className={`bg-white rounded-xl overflow-hidden transition-all duration-300 max-w-sm w-full cursor-pointer hover:shadow-lg group transform hover:-translate-y-2 ${className}`}>
        {/* Image container with relative positioning for the arrow */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className="object-cover"
          />
          
          {/* Arrow button positioned at top right - always visible */}
          <div className="absolute top-4 right-4 z-10">
            <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#FF913B] group-hover:border-[#FF913B]">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-300 text-black group-hover:text-white"
              >
                <path 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="p-5">
          <h3 className={`${bricolage.className} text-xl font-bold mb-2 tracking-tighter`}>{title}</h3>
          <p className={`${bricolage.className} text-gray-600 text-sm tracking-tighter`}>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#FFF8E7] py-10 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className={`${bricolage.className} border border-gray-500 bg-[#F3E6C7] rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium tracking-tighter`}>
            Portfolio
          </div>
        </div>
        
        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`${comfortaa.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 max-w-3xl mx-auto leading-tight px-2`}>
            Our latest works you might be interested in
          </h2>
        </div>

        {/* Portfolio grid with shadow */}
        <div className="relative">
          {/* Shadow element */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-black/5 blur-2xl rounded-[100px]"></div>
          </div>
          
          {/* Cards grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {portfolioData.map((item, index) => (
              <PortfolioCard
                key={index}
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                href={item.href}
              />
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <Link href="/portfolio" className="group">
            <div className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#FF913B] group-hover:border-[#FF913B]">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-300 text-gray-400 group-hover:text-white"
              >
                <path 
                  d="M19 12L5 12M19 12L13 6M19 12L13 18" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 