"use client";

import { Comfortaa, Bricolage_Grotesque } from "next/font/google";
import Link from "next/link";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FFF8E7] py-2 sm:py-4 rounded-tl-3xl rounded-tr-3xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center">
              <img
                src="/branding/logo.svg"
                alt="logo"
                className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] object-contain"
              />
            </div>
            <span
              className={`${comfortaa.className} ml-1 text-xl sm:text-2xl font-bold`}
            >
              Softune
            </span>
          </Link>

          {/* Desktop navigation - centered */}
          <div
            className={`${bricolage.className} hidden text-lg md:flex md:items-center md:space-x-8 absolute left-1/2 transform -translate-x-1/2`}
          >
            <Link
              href="/about-us"
              className="text-gray-800 hover:text-[#FF913B] transition-colors"
            >
              about us
            </Link>
            <Link
              href="/our-work"
              className="text-gray-800 hover:text-[#FF913B] transition-colors"
            >
              our work
            </Link>
            <Link
              href="/our-services"
              className="text-gray-800 hover:text-[#FF913B] transition-colors"
            >
              our services
            </Link>
          </div>

          {/* Social Icons - shown on both mobile and desktop */}
          <div className="flex items-center space-x-4">
            {/* WhatsApp Icon */}
            <Link
              href="https://wa.me/8801831624571"
              className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-[#FF913B] hover:border-[#FF913B] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </Link>
            {/* Email Icon */}
            <Link
              href="mailto:your@email.com"
              className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-[#FF913B] hover:border-[#FF913B] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </Link>
            {/* Scroll to Top Icon */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-[#FF913B] hover:border-[#FF913B] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
