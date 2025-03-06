"use client";

import React from "react";
import ServiceCard from "@/components/ServiceCard";
import { Comfortaa, Bricolage_Grotesque } from "next/font/google";

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

const serviceData = [
  {
    title: "UI/UX Design",
    description:
      "Create intuitive, user-centered designs that delight your audience. Our UI/UX services focus on research-driven interfaces that boost engagement and conversion rates.",
    icon: <img src="/icons/1.png" alt="UI/UX" />,
  },
  {
    title: "Web Development",
    description:
      "Build robust, scalable web applications using modern technologies. Our development team delivers clean code, responsive designs, and seamless functionality across all devices.",
    icon: <img src="/icons/2.png" alt="Web Development" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Amplify your brand's reach with data-driven marketing strategies. We create targeted campaigns that connect with your audience and drive measurable business growth.",
    icon: <img src="/icons/3.png" alt="Marketing" />,
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your visibility in search results with our comprehensive SEO services. We optimize your content and structure to attract more organic traffic and improve rankings.",
    icon: <img src="/icons/4.png" alt="SEO Optimized" />,
  },
  {
    title: "Management",
    description:
      "Streamline your digital operations with our management solutions. We handle the technical details so you can focus on growing your business and serving your customers.",
    icon: <img src="/icons/5.png" alt="Managements" />,
  },
  {
    title: "Custom",
    description:
      "Need something unique? Our custom solutions are tailored to your specific business challenges. We work closely with you to develop bespoke digital strategies and tools.",
    icon: <img src="/icons/6.png" alt="Custom" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-10 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div
            className={`${bricolage.className} border border-gray-500 bg-[#F3E6C7] rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium`}
          >
            Services
          </div>
        </div>

        {/* Section heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            className={`${comfortaa.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 max-w-3xl mx-auto leading-tight px-2`}
          >
            Redefining success in the digital space
          </h2>
        </div>

        {/* Service cards with single shadow */}
        <div className="relative max-w-5xl mx-auto">
          {/* Shadow element */}
          <div className="absolute  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] h-90 bg-black/10 blur-xl rounded-full"></div>

          {/* Cards container */}
          <div className="relative flex flex-wrap justify-center gap-y-3 sm:gap-y-4 -mx-1.5">
            {serviceData.map((service, index) => (
              <div
                key={index}
                className="w-[calc(50%-4px)] sm:w-[calc(33.333%-6px)] px-1.5 mb-1"
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
