"use client";

import { useState } from "react";
import { Comfortaa, Bricolage_Grotesque } from "next/font/google";
import { CheckCircle, House, Info, ShoppingCart, Envelope, Article, ImageSquare, Users, Gear, Bell, ChartLine, Camera, ChatCircle, CurrencyDollar, Question, Newspaper, Briefcase, Calendar, Storefront } from "@phosphor-icons/react";
import Button from "@/components/Button";

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

// Mock data for options
const websiteTypes = [
  {
    id: "landing",
    name: "Landing Page",
    description: "Single-page website focused on converting visitors",
    price: "From $99",
    features: ["Mobile Responsive", "Contact Form", "Social Media Links", "Basic SEO"],
  },
  {
    id: "business",
    name: "Business Website",
    description: "Multi-page website for your business",
    price: "From $299",
    features: ["Multiple Pages", "Content Management", "Custom Forms", "Advanced SEO"],
  },
  {
    id: "ecommerce",
    name: "E-commerce Website",
    description: "Online store with product management",
    price: "From $499",
    features: ["Product Pages", "Shopping Cart", "Payment Integration", "Inventory Management"],
  },
];

const designStyles = [
  { id: "modern", name: "Modern & Clean", description: "Minimalist design with focus on typography" },
  { id: "creative", name: "Creative & Bold", description: "Eye-catching design with animations" },
  { id: "professional", name: "Professional", description: "Corporate and trustworthy look" },
  { id: "minimal", name: "Minimal", description: "Simple and focused design" },
];

const colorSchemes = [
  { id: "warm", name: "Warm", colors: ["#FF913B", "#FFB74D", "#FFE0B2"] },
  { id: "cool", name: "Cool", colors: ["#2563EB", "#60A5FA", "#BFDBFE"] },
  { id: "neutral", name: "Neutral", colors: ["#1F2937", "#4B5563", "#9CA3AF"] },
  { id: "vibrant", name: "Vibrant", colors: ["#10B981", "#34D399", "#6EE7B7"] },
  { id: "purple", name: "Purple", colors: ["#7C3AED", "#A78BFA", "#DDD6FE"] },
  { id: "pink", name: "Pink", colors: ["#EC4899", "#F472B6", "#FBCFE8"] },
  { id: "red", name: "Red", colors: ["#EF4444", "#F87171", "#FECACA"] },
  { id: "yellow", name: "Yellow", colors: ["#EAB308", "#FACC15", "#FEF08A"] },
];

const requiredPages = [
  {
    id: "home",
    name: "Home",
    icon: House,
  },
  {
    id: "about",
    name: "About Us",
    icon: Info,
  },
  {
    id: "services",
    name: "Services",
    icon: ShoppingCart,
  },
  {
    id: "contact",
    name: "Contact",
    icon: Envelope,
  },
  {
    id: "blog",
    name: "Blog",
    icon: Article,
  },
  {
    id: "portfolio",
    name: "Portfolio",
    icon: ImageSquare,
  },
  {
    id: "team",
    name: "Our Team",
    icon: Users,
  },
  {
    id: "testimonials",
    name: "Testimonials",
    icon: ChatCircle,
  },
  {
    id: "pricing",
    name: "Pricing",
    icon: CurrencyDollar,
  },
  {
    id: "faq",
    name: "FAQ",
    icon: Question,
  },
  {
    id: "gallery",
    name: "Gallery",
    icon: Camera,
  },
  {
    id: "news",
    name: "News",
    icon: Newspaper,
  },
  {
    id: "careers",
    name: "Careers",
    icon: Briefcase,
  },
  {
    id: "events",
    name: "Events",
    icon: Calendar,
  },
  {
    id: "shop",
    name: "Shop",
    icon: Storefront,
  }
];

export default function WebsitePlanning() {
  const [formData, setFormData] = useState({
    websiteType: "",
    designStyle: "",
    colorScheme: "",
    pages: [] as string[],
    description: "",
    targetAudience: "",
    features: [] as string[],
  });

  const handleTypeSelect = (type: string) => {
    setFormData({ ...formData, websiteType: type });
  };

  const handleStyleSelect = (style: string) => {
    setFormData({ ...formData, designStyle: style });
  };

  const handleColorSelect = (scheme: string) => {
    setFormData({ ...formData, colorScheme: scheme });
  };

  const handlePageToggle = (page: string) => {
    setFormData({
      ...formData,
      pages: formData.pages.includes(page)
        ? formData.pages.filter((p) => p !== page)
        : [...formData.pages, page],
    });
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mt-32 mb-12">
          <h1 className={`${comfortaa.className} text-4xl sm:text-5xl font-bold text-gray-900 mb-4`}>
            Create Your Dream Website
          </h1>
          <p className={`${bricolage.className} text-lg text-gray-600 max-w-2xl mx-auto`}>
            Let's build a stunning website that perfectly represents your brand and engages your audience.
          </p>
        </div>

        <div className="space-y-8">
          {/* Design Style Section */}
          <div>
            <div className="mb-6">
              <h2 className={`${comfortaa.className} text-xl sm:text-2xl font-bold text-gray-900 mb-2`}>
                Choose your design style
              </h2>
              <p className={`${bricolage.className} text-gray-600`}>
                Select a style that matches your brand personality
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {designStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => handleStyleSelect(style.id)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    formData.designStyle === style.id
                      ? "border-[#FF913B] bg-white"
                      : "border-gray-200 hover:border-[#FF913B]/50"
                  }`}
                >
                  <h3 className={`${comfortaa.className} text-lg font-bold mb-1`}>{style.name}</h3>
                  <p className={`${bricolage.className} text-sm text-gray-600`}>{style.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Color Scheme Section */}
          <div>
            <div className="mb-4">
              <h2 className={`${comfortaa.className} text-xl sm:text-2xl font-bold text-gray-900 mb-2`}>
                Select your color scheme
              </h2>
              <p className={`${bricolage.className} text-sm text-gray-600`}>
                Choose a color palette that represents your brand
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {colorSchemes.map((scheme) => (
                <div key={scheme.id} className="space-y-2">
                  <h3 className={`${comfortaa.className} text-sm font-bold text-gray-700`}>
                    {scheme.name}
                  </h3>
                  <button
                    onClick={() => handleColorSelect(scheme.id)}
                    className={`w-full rounded-lg border-2 transition-all overflow-hidden ${
                      formData.colorScheme === scheme.id
                        ? "border-[#FF913B]"
                        : "border-gray-200 hover:border-[#FF913B]/50"
                    }`}
                  >
                    <div className="flex h-12">
                      {scheme.colors.map((color, index) => (
                        <div
                          key={color}
                          className="flex-1 relative group"
                          style={{ backgroundColor: color }}
                        >
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                          {formData.colorScheme === scheme.id && index === 0 && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-white" weight="fill" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Required Pages Section */}
          <div>
            <h2 className={`${comfortaa.className} text-xl sm:text-2xl font-bold text-gray-900 mb-6`}>
              Select Your Pages
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {requiredPages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => handlePageToggle(page.id)}
                  className={`p-4 rounded-lg border-2 transition-all text-left flex items-center gap-4 ${
                    formData.pages.includes(page.id)
                      ? "border-[#FF913B] bg-white"
                      : "border-gray-200 hover:border-[#FF913B]/50"
                  }`}
                >
                  <page.icon className={`w-8 h-8 ${
                    formData.pages.includes(page.id)
                      ? "text-[#FF913B]"
                      : "text-[#FF913B]/70"
                  }`} weight="fill" />
                  <h4 className={`${comfortaa.className} font-bold text-base`}>{page.name}</h4>
                  {formData.pages.includes(page.id) && (
                    <CheckCircle className="w-5 h-5 text-[#FF913B] ml-auto" weight="fill" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Project Details Section */}
          <div>
            <div className="mb-6">
              <h2 className={`${comfortaa.className} text-xl sm:text-2xl font-bold text-gray-900 mb-2`}>
                Tell us about your project
              </h2>
              <p className={`${bricolage.className} text-gray-600`}>
                Provide additional details about your website requirements
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <label className={`${bricolage.className} block text-sm font-medium text-gray-700 mb-1`}>
                  Project Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#FF913B] focus:ring-0 min-h-[100px]"
                  placeholder="Describe your website project..."
                />
              </div>
              <div>
                <label className={`${bricolage.className} block text-sm font-medium text-gray-700 mb-1`}>
                  Target Audience
                </label>
                <input
                  type="text"
                  value={formData.targetAudience}
                  onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#FF913B] focus:ring-0"
                  placeholder="Who is your target audience?"
                />
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mt-12">
            <div className="mb-6">
              <h2 className={`${comfortaa.className} text-xl sm:text-2xl font-bold text-gray-900 mb-2`}>
                Choose Your Website Type
              </h2>
              <p className={`${bricolage.className} text-gray-600`}>
                Select the perfect plan for your website
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {websiteTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleTypeSelect(type.id)}
                  className={`p-6 rounded-lg border-2 transition-all text-left ${
                    formData.websiteType === type.id
                      ? "border-[#FF913B] bg-[#FF913B]/5"
                      : "border-gray-200 hover:border-[#FF913B]/50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`${comfortaa.className} text-xl font-bold`}>{type.name}</h3>
                    {formData.websiteType === type.id && (
                      <CheckCircle className="w-6 h-6 text-[#FF913B]" weight="fill" />
                    )}
                  </div>
                  <div className="mb-6">
                    <span className={`${bricolage.className} text-3xl font-bold text-[#FF913B]`}>
                      {type.price}
                    </span>
                  </div>
                  <p className={`${bricolage.className} text-sm text-gray-600 mb-4`}>{type.description}</p>
                  <ul className="space-y-3">
                    {type.features.map((feature) => (
                      <li key={feature} className={`${bricolage.className} text-sm text-gray-600 flex items-center gap-2`}>
                        <CheckCircle className="w-4 h-4 text-[#FF913B]" weight="fill" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <Button variant="primary" className="px-8">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 