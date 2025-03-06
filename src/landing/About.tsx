"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Comfortaa, Bricolage_Grotesque } from "next/font/google";
import {
  Devices,
  Sparkle,
  ChartPieSlice,
  CrownSimple,
  CheckCircle,
} from "@phosphor-icons/react";

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

const stats = [
  {
    number: "150+",
    label: "Customer Served",
  },
  {
    number: "50+",
    label: "Custom Websites",
  },
  {
    number: "120+",
    label: "SEO Success",
  },
];

const goals = [
  {
    question: "What makes our website modern and scalable?",
    answer:
      "We create modern, scalable web solutions for startups and enterprises using cutting-edge technologies and best practices. Our solutions are built to grow with your business, ensuring long-term success and adaptability.",
    icon: <Devices weight="fill" className="w-6 h-6 text-[#FF913B]" />,
    details: [
      "Latest web technologies",
      "Cloud-native architecture",
      "Microservices design",
      "Automated scaling solutions",
    ],
  },
  {
    question: "How do we transform outdated websites?",
    answer:
      "We solve slow, outdated websites with fast, secure, and optimized designs. Our team implements performance optimizations, modern security measures, and responsive design principles to bring your website up to current standards.",
    icon: <Sparkle weight="fill" className="w-6 h-6 text-[#FF913B]" />,
    details: [
      "Performance optimization",
      "Security hardening",
      "Mobile-first design",
      "SEO improvements",
    ],
  },
  {
    question: "What comprehensive services do we offer?",
    answer:
      "We provide complete web solutions that include design, development, and maintenance. From initial concept to final deployment, we handle every aspect of your web presence with expertise and dedication.",
    icon: <CrownSimple weight="fill" className="w-6 h-6 text-[#FF913B]" />,
    details: [
      "Custom web design",
      "Frontend development",
      "Backend integration",
      "Database management",
    ],
  },
  {
    question: "How do we ensure long-term success?",
    answer:
      "We offer ongoing support and updates to ensure your website remains up-to-date and performs optimally. Our maintenance services include regular updates, security patches, and performance monitoring to keep your site running smoothly.",
    icon: <ChartPieSlice weight="fill" className="w-6 h-6 text-[#FF913B]" />,
    details: [
      "24/7 monitoring",
      "Regular maintenance",
      "Security updates",
      "Performance optimization",
    ],
  },
];

const About = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="about" className="py-10 sm:py-16 md:py-24">
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
            Let's know about our main goal
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left side - Image */}
          <div className="lg:sticky lg:top-8 lg:self-start order-1">
            <div className="relative h-[250px] sm:h-[400px] lg:h-[650px] rounded-3xl overflow-hidden">
              <Image
                src="/branding/about.jpg"
                alt="Modern office interior"
                fill
                className="object-cover rounded-3xl"
                priority
              />
            </div>
          </div>

          {/* Right side - Stats and Goals */}
          <div className="space-y-6 sm:space-y-8 order-2">
            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`rounded-xl sm:rounded-2xl p-2 sm:p-4 text-center transform transition-all duration-300 hover:-translate-y-2 cursor-pointer
                    ${
                      selectedCard === index
                        ? "bg-[#FF913B]"
                        : "bg-white hover:bg-[#FF913B]"
                    }`}
                  onMouseEnter={() => setSelectedCard(index)}
                >
                  <div
                    className={`${
                      bricolage.className
                    } text-lg sm:text-2xl lg:text-3xl font-bold transition-colors duration-300
                      ${
                        selectedCard === index
                          ? "text-white"
                          : "text-[#FF913B] hover:text-white"
                      }`}
                  >
                    {stat.number}
                  </div>
                  <div
                    className={`${
                      bricolage.className
                    } text-[10px] sm:text-sm mt-0.5 sm:mt-1 transition-colors duration-300
                      ${
                        selectedCard === index
                          ? "text-white"
                          : "text-gray-600 hover:text-white"
                      }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Expandable Goals cards */}
            <div className="space-y-3 sm:space-y-4">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white">
                        {goal.icon}
                      </div>
                      <span
                        className={`${bricolage.className} text-base sm:text-lg font-bold text-gray-900`}
                      >
                        {goal.question}
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-200 text-gray-400 ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      expandedIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div
                      className={`px-4 sm:px-6 pb-4 sm:pb-6 transition-opacity duration-300 ${
                        expandedIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <p
                        className={`${bricolage.className} text-sm sm:text-base text-gray-600 mb-3 sm:mb-4`}
                      >
                        {goal.answer}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {goal.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle
                              weight="fill"
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF913B]"
                            />
                            <span
                              className={`${bricolage.className} text-xs sm:text-sm text-gray-600`}
                            >
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
