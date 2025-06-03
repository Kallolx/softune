'use client';

import React from 'react';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon,
  className = '' 
}: ServiceCardProps) => {
  return (
    <div className={`bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 transition-all duration-300 hover:translate-y-[-3px] w-full ${className}`}>
      <div className="mb-2 sm:mb-3 md:mb-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#FF0000] flex items-center justify-center text-white">
          <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6">
            {icon}
          </div>
        </div>
      </div>
      
      <h3 className={`${bricolage.className} text-base text-black sm:text-xl font-bold mb-1 sm:mb-2 md:mb-3 line-clamp-1`}>{title}</h3>
      
      <p className={`${bricolage.className} text-gray-600 text-xs md:text-sm line-clamp-4 md:line-clamp-5`}>
        {description}
      </p>
    </div>
  );
};

export default ServiceCard; 