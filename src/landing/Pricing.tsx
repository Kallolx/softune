'use client';

import React, { useState, useEffect } from 'react';
import { Comfortaa, Bricolage_Grotesque, DM_Sans } from 'next/font/google';
import { CheckCircle, Sparkle, CaretDown } from '@phosphor-icons/react';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { useRouter } from 'next/navigation';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
});

type SubItem = {
  name: string;
  price: number;
  description: string;
};

type PricingTier = {
  name: string;
  description: string;
  subItems: SubItem[];
  features: string[];
  isPopular?: boolean;
};

const pricingTiers: PricingTier[] = [
  {
    name: "Landing Page",
    description: "Custom, high-converting landing pages for businesses and brands.",
    isPopular: true,
    subItems: [
      {
        name: "Basic Landing Page",
        price: 99,
        description: "Custom, single-page site with essential sections."
      },
      {
        name: "Advanced Landing Page",
        price: 199,
        description: "Custom branding, Beautiful animations, Multi-page site"
      },
      {
        name: "Premium Landing Page",
        price: 299,
        description: "Complex, multi-page site with advanced features."
      }
    ],
    features: [
      "Figma to Website Conversion",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Social Media Links",
      "Basic Analytics Setup",
      "Email Support",
      "1 Month Free Maintenance"
    ]
  },
  {
    name: "Custom Website",
    description: "Professional, custom-built websites designed to grow with your business.",
    subItems: [
      {
        name: "Business Website",
        price: 299,
        description: "A professional site with multiple pages and branding."
      },
      {
        name: "E-commerce Website",
        price: 499,
        description: "Online store with product pages, cart, and payment integration."
      },
      {
        name: "Web Application",
        price: 799,
        description: "Custom-built platform for business operations or automation."
      }
    ],
    features: [
      "Custom UI/UX Design",
      "Mobile Responsive Design",
      "Advanced SEO Setup",
      "Custom Contact Forms",
      "Social Media Integration",
      "Advanced Analytics",
      "Priority Email Support",
      "3 Months Free Maintenance",
      "Content Management System",
      "Basic E-commerce Features"
    ]
  }
];

const Pricing = () => {
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: number }>({});
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [additionalPages, setAdditionalPages] = useState<{ [key: string]: number }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{
    tierName: string;
    subItemName: string;
    subItemDescription: string;
    price: number;
    pages: number;
    features: string[];
  } | null>(null);

  // Price per page based on tier
  const getPricePerPage = (tierName: string, subItemIndex: number) => {
    if (tierName !== "Landing Page") return 0;
    
    switch (subItemIndex) {
      case 0: return 20; // Basic Landing Page
      case 1: return 30; // Advanced Landing Page
      case 2: return 50; // Premium Landing Page
      default: return 0;
    }
  };

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const handleSubItemSelect = (tierName: string, subItemIndex: number) => {
    setSelectedItems(prev => ({
      ...prev,
      [tierName]: subItemIndex
    }));
  };

  const handlePageChange = (tierName: string, subItemIndex: number, increment: boolean) => {
    const currentPages = additionalPages[`${tierName}-${subItemIndex}`] || 1;
    const newPages = increment ? currentPages + 1 : Math.max(1, currentPages - 1);
    
    setAdditionalPages(prev => ({
      ...prev,
      [`${tierName}-${subItemIndex}`]: newPages
    }));
  };

  const toggleCard = (tierName: string) => {
    setExpandedCard(expandedCard === tierName ? null : tierName);
  };

  const getSelectedPrice = (tier: PricingTier) => {
    const selectedIndex = selectedItems[tier.name] ?? 0;
    const selectedSubItem = tier.subItems[selectedIndex];
    let price = selectedSubItem.price;

    // Calculate additional pages price for all landing pages
    if (tier.name === "Landing Page") {
      const additionalPagesCount = additionalPages[`${tier.name}-${selectedIndex}`] || 1;
      const pricePerPage = getPricePerPage(tier.name, selectedIndex);
      price += (additionalPagesCount - 1) * pricePerPage;
    }

    return price;
  };

  const handleGetStarted = (tier: PricingTier) => {
    const selectedIndex = selectedItems[tier.name] ?? 0;
    const selectedSubItem = tier.subItems[selectedIndex];
    const pages = additionalPages[`${tier.name}-${selectedIndex}`] || 1;
    
    // Create package details object
    const packageDetails = {
      tierName: tier.name,
      subItemName: selectedSubItem.name,
      subItemDescription: selectedSubItem.description,
      price: getSelectedPrice(tier),
      pages: pages,
      features: tier.features
    };
    
    // Set the selected package and open the modal
    setSelectedPackage(packageDetails);
    setIsModalOpen(true);
  };

  const handleProceedToOrder = () => {
    if (!selectedPackage) return;
    
    // Encode the package details for the URL
    const encodedPackage = encodeURIComponent(JSON.stringify(selectedPackage));
    
    // Close the modal
    setIsModalOpen(false);
    
    // Navigate to the order page with the package details
    router.push(`/order/${encodedPackage}`);
  };

  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className={`${bricolage.className} border border-black bg-[#F3E6C7] rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium tracking-tighter`}>
            pricing plans
          </div>
        </div>

        {/* Section heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={`${comfortaa.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 max-w-3xl mx-auto leading-tight px-2`}>
            Choose Your Perfect Website Package
          </h2>
          <p className={`${bricolage.className} text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto`}>
            Select the package that best fits your needs. All packages include our core features with additional benefits for higher tiers.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-[#FFF8E7] rounded-xl border ${
                tier.isPopular ? 'border-[#FF913B]' : 'border-gray-200'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className={`${bricolage.className} bg-[#FF913B] text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-2`}>
                    <Sparkle weight="fill" className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              {/* Card Header */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`${comfortaa.className} text-2xl font-bold text-gray-900`}>
                        {tier.name}
                      </h3>
                      <p className={`${bricolage.className} text-sm text-gray-600 mt-1`}>
                        {tier.description}
                      </p>
                    </div>
                    {/* Mobile expand button - Arrow only */}
                    <button
                      onClick={() => toggleCard(tier.name)}
                      className="lg:hidden p-2 rounded-full hover:bg-[#FF913B]/10 transition-colors"
                    >
                      <CaretDown
                        weight="bold"
                        className={`w-5 h-5 text-[#FF913B] transition-transform ${
                          expandedCard === tier.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <span className={`${comfortaa.className} text-3xl font-bold text-gray-900`}>
                      ${getSelectedPrice(tier)}
                    </span>
                    <span className={`${bricolage.className} text-sm text-gray-600`}>
                      one-time
                    </span>
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              <div
                className={`${
                  expandedCard === tier.name || isDesktop
                    ? 'max-h-[2000px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-6">
                  {/* Sub-items selection */}
                  <div className="space-y-2 mb-6">
                    {tier.subItems.map((subItem, index) => (
                      <div
                        key={subItem.name}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          selectedItems[tier.name] === index
                            ? 'border-[#FF913B] bg-[#FF913B]/5'
                            : 'border-gray-200 hover:border-[#FF913B]/50'
                        }`}
                        onClick={() => handleSubItemSelect(tier.name, index)}
                      >
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className={`${bricolage.className} font-medium text-gray-900 truncate`}>
                                {subItem.name}
                              </h4>
                              <p className={`${bricolage.className} text-xs text-gray-600 mt-0.5 line-clamp-2`}>
                                {subItem.description}
                              </p>
                            </div>
                            <div className="flex-shrink-0 flex items-center">
                              <span className={`${comfortaa.className} text-lg font-bold text-[#FF913B] whitespace-nowrap`}>
                                ${subItem.price}
                              </span>
                            </div>
                          </div>
                          
                          {/* Page counter for all landing pages */}
                          {tier.name === "Landing Page" && selectedItems[tier.name] === index && (
                            <div className="flex items-center gap-3 mt-2 pt-2 border-t border-gray-100">
                              <span className={`${bricolage.className} text-sm text-gray-600`}>
                                Additional Pages:
                              </span>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handlePageChange(tier.name, index, false);
                                  }}
                                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#FF913B]/10 transition-colors"
                                >
                                  -
                                </button>
                                <span className={`${comfortaa.className} w-8 text-center font-bold text-gray-900`}>
                                  {additionalPages[`${tier.name}-${index}`] || 1}
                                </span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handlePageChange(tier.name, index, true);
                                  }}
                                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#FF913B]/10 transition-colors"
                                >
                                  +
                                </button>
                              </div>
                              <span className={`${bricolage.className} text-sm text-gray-600 ml-auto`}>
                                +${((additionalPages[`${tier.name}-${index}`] || 1) - 1) * getPricePerPage(tier.name, index)}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className={`${bricolage.className} font-medium text-gray-900 mb-3`}>
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {tier.features.slice(0, 5).map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle weight="fill" className="w-4 h-4 text-[#FF913B] flex-shrink-0" />
                          <span className={`${bricolage.className} text-sm text-gray-600`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className={`w-full ${tier.isPopular ? 'bg-[#FF913B] hover:bg-[#e87f2d]' : ''}`}
                    onClick={() => handleGetStarted(tier)}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ link */}
        <div className="text-center mt-12">
          <p className={`${bricolage.className} text-sm text-gray-600`}>
            Have questions? Check out our{' '}
            <a href="#faq" className="text-[#FF913B] hover:underline">
              FAQ section
            </a>
          </p>
        </div>
      </div>

      {/* Package Summary Modal */}
      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageDetails={selectedPackage}
        onProceed={handleProceedToOrder}
      />
    </section>
  );
};

export default Pricing; 