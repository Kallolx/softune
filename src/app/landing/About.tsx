'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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

const stats = [
  {
    number: "150+",
    label: "Customer Served"
  },
  {
    number: "50+",
    label: "Custom Websites"
  },
  {
    number: "120+",
    label: "SEO Success"
  }
];

const goals = [
  "We create modern, scalable web solutions for startups and enterprises.",
  "We solve slow, outdated websites with fast, secure, and optimized designs.",
  "We provide complete web solutions that include design, development, and maintenance.",
  "We offer ongoing support and updates to ensure your website remains up-to-date and performs optimally.",
];

const About = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  return (
    <section id="about" className="py-10 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className={`${bricolage.className} border border-gray-500 bg-[#F3E6C7] rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium tracking-tighter`}>
            about us
          </div>
        </div>
        
        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`${comfortaa.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 max-w-3xl mx-auto leading-tight px-2`}>
            Let's know about our main goal
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left side - Image */}
          <div className="relative aspect-square lg:aspect-auto rounded-3xl overflow-hidden">
            <Image
              src="/branding/about.jpg"
              alt="Modern office interior"
              fill
              className="object-cover rounded-3xl"
            />
          </div>

          {/* Right side - Stats and Goals */}
          <div className="space-y-8">
            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-4 text-center transform transition-all duration-300 hover:-translate-y-2 cursor-pointer
                    ${selectedCard === index ? 'bg-[#FF913B]' : 'bg-white hover:bg-[#FF913B]'}`}
                  onMouseEnter={() => setSelectedCard(index)}
                >
                  <div 
                    className={`${bricolage.className} text-2xl sm:text-3xl font-bold transition-colors duration-300
                      ${selectedCard === index ? 'text-white' : 'text-[#FF913B] hover:text-white'}`}
                  >
                    {stat.number}
                  </div>
                  <div 
                    className={`${bricolage.className} text-sm mt-1 transition-colors duration-300
                      ${selectedCard === index ? 'text-white' : 'text-gray-600 hover:text-white'}`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Goals list */}
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#FF913B] flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 6L5 9L10 3" stroke="#FF913B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className={`${bricolage.className} text-md sm:text-lg font-normal`}>
                    {goal}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 