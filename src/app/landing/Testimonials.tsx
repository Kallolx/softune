"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Comfortaa, Bricolage_Grotesque, Caveat } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  style: "normal",
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
});

const testimonials = [
  {
    message:
      "Softune crafted a stunning landing page that perfectly represents our brand. It's sleek, modern, and incredibly user-friendly. The design is engaging, and the whole process was smooth. We're beyond happy with the result and the seamless collaboration!",
    name: "Quiel Patrick",
    position: "CEO, Qourin",
    image: "/user/user-1.jpg",
  },
  {
    message:
      "Softune delivered an exceptional e-commerce site! It's visually appealing, easy to navigate, and enhances the customer experience. Since launch, our sales have increased, and feedback has been amazing. The team understood our needs and exceeded our expectations!",
    name: "Sarah Chen",
    position: "CTO, TechFlow",
    image: "/user/user-2.jpg",
  },
  {
    message:
      "Thanks to Softune, our website's SEO performance has skyrocketed! Traffic and search rankings have improved dramatically. Their strategy was tailored to our needs, and the results speak for themselves. We're thrilled with the growth they've helped us achieve!",
    name: "James Wilson",
    position: "Founder, InnovateLab",
    image: "/user/user-3.jpg",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-[#FFF8E7] py-10 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div
            className={`${bricolage.className} border border-gray-500 bg-[#F3E6C7] rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium tracking-tighter`}
          >
            about us
          </div>
        </div>

        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`${comfortaa.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 max-w-3xl mx-auto leading-tight px-2`}
          >
            Stories of impact and growth
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Shadow element */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-black/5 blur-2xl rounded-[100px]"></div>
          </div>

          {/* Card */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-10 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Message and Navigation */}
              <div className="flex-1 space-y-6">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`${caveat.className} text-xl sm:text-2xl text-gray-600 leading-relaxed mb-8`}
                  >
                    {testimonials[currentSlide].message}
                  </motion.p>
                </AnimatePresence>
                {/* Author info and navigation in a row */}
                <div className="flex items-center justify-between">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-1"
                    >
                      <h4 className={`${bricolage.className} text-xl font-bold`}>
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className={`${bricolage.className} text-gray-600`}>
                        {testimonials[currentSlide].position}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                  {/* Navigation Buttons */}
                  <div className="flex space-x-2">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center transition-colors hover:bg-[#FF913B] hover:border-[#FF913B] group"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transform rotate-180 transition-colors text-gray-400 group-hover:text-white"
                      >
                        <path
                          d="M9 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center transition-colors hover:bg-[#FF913B] hover:border-[#FF913B] group"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-colors text-gray-400 group-hover:text-white"
                      >
                        <path
                          d="M9 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="w-full md:w-80 h-80 relative rounded-2xl overflow-hidden"
                >
                  <Image
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
