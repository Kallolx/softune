'use client';

import React from 'react';
import Image from 'next/image';
import { Comfortaa } from 'next/font/google';
import Button from '@/components/Button';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});

const CallToAction = () => {
  return (
    <section className="py-6 sm:py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Card */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full">
            <Image
              src="/branding/cta.jpg"
              alt="Call to action background"
              fill
              priority
              className="object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 sm:p-6 md:p-8">
            <h2 className={`${comfortaa.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center max-w-2xl mx-auto leading-tight mb-6 sm:mb-8`}>
                Let's turn your ideas into digital success stories
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
              <Button variant="primary" href="/contact" className="w-full sm:w-auto text-center">
                Start with us
              </Button>
              <Button variant="white" href="/services" className="w-full sm:w-auto text-center">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 