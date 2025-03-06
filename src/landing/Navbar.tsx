'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import { Comfortaa, Bricolage_Grotesque, DM_Sans } from 'next/font/google';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed navbar plus some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF8E7] py-2 sm:py-4 rounded-bl-3xl rounded-br-3xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Logo with responsive sizing */}
            <div className="w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center">
              <img 
                src="/branding/logo.svg" 
                alt="logo" 
                className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] object-contain" 
              />
            </div>
            <span className={`${comfortaa.className} ml-1 text-xl sm:text-2xl font-bold`}>Softune</span>
          </Link>
          
          {/* Desktop navigation - centered */}
          <div className={`${bricolage.className} hidden text-lg md:flex md:items-center md:space-x-8 absolute left-1/2 transform -translate-x-1/2`}>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-800 hover:text-[#FF913B] transition-colors"
            >
              about us
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-800 hover:text-[#FF913B] transition-colors"
            >
              our work
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-800 hover:text-[#FF913B] transition-colors"
            >
              pricing
            </button>
          </div>
          
          {/* Buttons - right aligned */}
          <div className={`${dmSans.className} hidden md:flex md:items-center space-x-3`}>
            <Link href="https://wa.me/8801831624571">
              <Button variant="outline">book a call</Button>
            </Link>
            <Link href="/contact">
              <Button>work with us</Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#FF913B] focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon for closing menu */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className={`${bricolage.className} px-4 pt-4 pb-4 space-y-3 text-center`}>
          <button 
            onClick={() => scrollToSection('about')}
            className="block w-full text-gray-800 hover:text-[#FF913B] transition-colors py-2"
          >
            about us
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="block w-full text-gray-800 hover:text-[#FF913B] transition-colors py-2"
          >
            our work
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="block w-full text-gray-800 hover:text-[#FF913B] transition-colors py-2"
          >
            our services
          </button>
          <div className={`${dmSans.className} pt-4 flex flex-col space-y-3`}>
            <Link href="https://wa.me/8801831624571" className="w-full">
              <Button variant="outline" className="w-full">book a call</Button>
            </Link>
            <Link href="/contact" className="w-full">
              <Button className="w-full">work with us</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 