'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  style: 'normal',
});

interface ExpertiseCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  className?: string;
}

const ExpertiseCard = ({ 
  title, 
  description, 
  imageSrc,
  href,
  className = '' 
}: ExpertiseCardProps) => {
  return (
    <Link href={href}>
      <div className={`bg-white rounded-xl overflow-hidden transition-all duration-300 max-w-sm w-full cursor-pointer group transform hover:-translate-y-2 ${className}`}>
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

export default ExpertiseCard; 