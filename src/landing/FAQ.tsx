'use client';

import React, { useState } from 'react';
import { Comfortaa, Bricolage_Grotesque } from 'next/font/google';
import { CaretDown, Clock, Shield, Gear, Headset, CreditCard } from '@phosphor-icons/react';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  style: 'normal',
});

type Detail = {
  text: string;
  duration?: string;
  frequency?: string;
  type?: string;
  level?: string;
  amount?: string;
};

const faqs = [
  {
    question: "How long does it typically take to build a custom website?",
    answer: "The timeline varies depending on the project's complexity and requirements. A typical custom website can take 4-8 weeks from initial design to launch.",
    icon: <Clock weight="fill" className="w-6 h-6" />,
    details: [
      { text: "Planning & Design", duration: "1-2 weeks" },
      { text: "Development", duration: "2-4 weeks" },
      { text: "Testing & Revisions", duration: "1-2 weeks" },
      { text: "Launch & Training", duration: "1 week" }
    ] as Detail[]
  },
  {
    question: "What's included in your website maintenance service?",
    answer: "Our maintenance service is comprehensive and includes regular updates, security patches, performance optimization, and technical support.",
    icon: <Gear weight="fill" className="w-6 h-6" />,
    details: [
      { text: "Weekly security updates", frequency: "Every week" },
      { text: "Monthly performance optimization", frequency: "Monthly" },
      { text: "24/7 monitoring & support", frequency: "Always" },
      { text: "Regular backups", frequency: "Daily" }
    ] as Detail[]
  },
  {
    question: "Do you provide ongoing support after the website launch?",
    answer: "Yes, we offer comprehensive post-launch support to ensure your website continues to perform optimally.",
    icon: <Headset weight="fill" className="w-6 h-6" />,
    details: [
      { text: "Technical support", type: "Email & phone" },
      { text: "Regular maintenance", type: "Scheduled" },
      { text: "Performance monitoring", type: "24/7" },
      { text: "Security updates", type: "Automated" }
    ] as Detail[]
  },
  {
    question: "How do you ensure my website is secure and protected?",
    answer: "We implement multiple layers of security measures to protect your website, including SSL encryption, regular security audits, and advanced firewall protection.",
    icon: <Shield weight="fill" className="w-6 h-6" />,
    details: [
      { text: "SSL encryption", level: "Enterprise-grade" },
      { text: "Regular security audits", level: "Weekly" },
      { text: "Firewall protection", level: "Advanced" },
      { text: "DDoS protection", level: "24/7" }
    ] as Detail[]
  },
  {
    question: "What payment terms do you offer for website projects?",
    answer: "We offer flexible payment terms to accommodate different budgets. Typically, we require a deposit to start the project, with milestone payments throughout the development process.",
    icon: <CreditCard weight="fill" className="w-6 h-6" />,
    details: [
      { text: "Initial deposit", amount: "30%" },
      { text: "Mid-project payment", amount: "40%" },
      { text: "Final payment", amount: "30%" },
      { text: "Monthly payment plans", amount: "Available" }
    ] as Detail[]
  }
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className={`${bricolage.className} border border-black bg-[#F3E6C7] rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium tracking-tighter`}>
            frequently asked questions
          </div>
        </div>

        {/* Section heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={`${comfortaa.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 max-w-3xl mx-auto leading-tight px-2`}>
            Common Questions About Our Services
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#FFF8E7] border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left transition-colors duration-200"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[#FF913B]">
                    {faq.icon}
                  </div>
                  <span className={`${bricolage.className} text-base sm:text-lg font-bold text-gray-900`}>
                    {faq.question}
                  </span>
                </div>
                <CaretDown
                  weight="bold"
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-[#FF913B] transform transition-transform duration-200 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  expandedIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className={`px-4 sm:px-6 pb-3 sm:pb-4 transition-opacity duration-300 ${
                  expandedIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <p className={`${bricolage.className} text-sm sm:text-base text-gray-600 mb-3 sm:mb-4`}>
                    {faq.answer}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {faq.details.map((detail, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF913B]" />
                        <div>
                          <span className={`${bricolage.className} text-xs sm:text-sm text-gray-700 font-medium`}>
                            {detail.text}
                          </span>
                          {(detail.duration || detail.frequency || detail.type || detail.level || detail.amount) && (
                            <span className={`${bricolage.className} text-[10px] sm:text-xs text-gray-500 ml-1`}>
                              {detail.duration && `(${detail.duration})`}
                              {detail.frequency && `(${detail.frequency})`}
                              {detail.type && `(${detail.type})`}
                              {detail.level && `(${detail.level})`}
                              {detail.amount && `(${detail.amount})`}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 