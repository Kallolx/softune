'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  videoSrc: string;
  thumbnailSrc: string;
  href: string;
  className?: string;
}

const ExpertiseCard = ({ 
  title, 
  description, 
  videoSrc,
  thumbnailSrc,
  href,
  className = '' 
}: ExpertiseCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(error => console.log('Playback failed:', error));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <Link href={href}>
      <div 
        className={`bg-white rounded-xl overflow-hidden transition-all duration-300 max-w-sm w-full cursor-pointer group transform hover:-translate-y-2 ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Media container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          {/* Thumbnail Image */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
            <Image
              src={thumbnailSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>

          {/* Video */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              playsInline
              loop
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
          
          {/* Arrow button */}
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