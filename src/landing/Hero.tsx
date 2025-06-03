"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { Comfortaa, Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { Sparkle } from "@phosphor-icons/react";
import Link from 'next/link';

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const Hero = () => {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Client badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#F3E6C7] backdrop-blur-sm rounded-full px-4 py-2 flex items-center border border-gray-300 gap-2">
            <div className="flex -space-x-2">
              {/* Client images from user folder */}
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative"
                >
                  <Image
                    src={`/user/${i}.jpg`}
                    alt={`Client ${i}`}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <span
              className={`${dmSans.className} text-xs sm:text-sm font-medium`}
            >
              100+ Happy clients
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div className="text-center mb-6">
          <h1
            className={`${comfortaa.className} text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 max-w-4xl mx-auto leading-tight`}
          >
            Building Fast, Modern & Scalable Websites
          </h1>
        </div>

        {/* Subheadline */}
        <div className="text-center mb-6">
          <p
            className={`${bricolage.className} text-base sm:text-lg max-w-2xl mx-auto text-gray-700 px-2`}
          >
            At <span className="text-[#FF0000]">Infinity</span>, we create stunning landing pages, custom websites, and
            web applications that are fast, scalable, and designed to grow your
            business. Let's bring your ideas to life!
          </p>
        </div>

        {/* CTA button */}
        <div className={`${dmSans.className} flex justify-center mb-8 sm:mb-12 px-4 sm:px-0`}>
          <Link href="/website-planning">
            <button className={`${dmSans.className} bg-[#FF0000] text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#FF913B]/90 transition-colors group relative overflow-hidden`}>
              <span className="relative z-10">Create Your Website</span>
              <Sparkle 
                className="w-5 h-5 relative z-10 animate-sparkle" 
                weight="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </button>
          </Link>
        </div>

        {/* Hero image */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden">
          <Image
            src="/branding/hero.jpg"
            alt="Modern office space"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 80vw"
            priority
          />
          <div className="absolute inset-0 bg-[#FF913B]/10 mix-blend-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
