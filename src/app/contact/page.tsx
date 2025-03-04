'use client';

import React, { useState } from 'react';
import { Comfortaa, Bricolage_Grotesque } from 'next/font/google';
import ServiceCard from '@/components/ui/ServiceCard';
import Button from '@/components/Button';
import Image from 'next/image';

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

const serviceData = [
  {
    title: "UI/UX Design",
    description: "Create intuitive, user-centered designs that delight your audience.",
    icon: <img src="/icons/1.png" alt="UI/UX" />,
    fields: ['designStyle', 'colorPreference', 'targetAudience', 'references'],
    templates: ['Modern Minimal', 'Bold Creative', 'Corporate Professional', 'Playful Interactive'],
  },
  {
    title: "Web Development",
    description: "Build robust, scalable web applications using modern technologies.",
    icon: <img src="/icons/2.png" alt="Web Development" />,
    fields: ['projectType', 'features', 'techStack', 'timeline'],
    templates: ['E-commerce Store', 'Business Website', 'Portfolio Site', 'Web Application'],
  },
  {
    title: "Digital Marketing",
    description: "Amplify your brand's reach with data-driven marketing strategies.",
    icon: <img src="/icons/3.png" alt="Marketing" />,
    fields: ['marketingGoals', 'targetPlatforms', 'budget', 'campaignDuration'],
    templates: ['Social Media Campaign', 'Email Marketing', 'Content Strategy', 'PPC Campaign'],
  },
  {
    title: "SEO Optimization",
    description: "Boost your visibility in search results with comprehensive SEO.",
    icon: <img src="/icons/4.png" alt="SEO Optimized" />,
    fields: ['currentRankings', 'targetKeywords', 'competitors', 'goals'],
    templates: ['Local SEO Package', 'E-commerce SEO', 'Content Optimization', 'Technical SEO'],
  },
  {
    title: "Management",
    description: "Streamline your digital operations with our management solutions.",
    icon: <img src="/icons/5.png" alt="Managements" />,
    fields: ['businessType', 'teamSize', 'currentTools', 'painPoints'],
    templates: ['Project Management', 'Team Collaboration', 'Resource Planning', 'Process Automation'],
  },
  {
    title: "Custom",
    description: "Need something unique? Our custom solutions are tailored to you.",
    icon: <img src="/icons/6.png" alt="Custom" />,
    fields: ['projectScope', 'specialRequirements', 'budget', 'timeline'],
    templates: ['Custom Integration', 'Unique Platform', 'Specialized Tool', 'Bespoke Solution'],
  },
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity. Simple websites typically take 2-4 weeks, while complex applications may take 2-3 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "How do you handle project communication?",
    answer: "We maintain regular communication through scheduled updates, a project management system, and direct contact via WhatsApp for urgent matters. You'll always know the status of your project."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing is project-based and depends on your specific requirements. We provide detailed quotes after understanding your needs through the contact form or consultation."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer various maintenance and support packages to keep your website running smoothly after launch. This includes updates, security monitoring, and technical support."
  }
];

export default function Contact() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    timeline: '',
    description: '',
    designStyle: '',
    colorPreference: '',
    targetAudience: '',
    projectType: '',
    features: [],
    techStack: [],
    marketingGoals: [],
    targetPlatforms: [],
    currentRankings: '',
    targetKeywords: [],
    competitors: [],
    businessType: '',
    teamSize: '',
    currentTools: [],
    painPoints: [],
    projectScope: '',
    specialRequirements: '',
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, selectedService, selectedTemplate, files });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi, I'm interested in your ${selectedService || 'services'}. Can we discuss more?`);
    window.open(`https://wa.me/8801831624571?text=${message}`, '_blank');
  };

  const selectedServiceData = serviceData.find(service => service.title === selectedService);

  return (
    <main className="bg-[#FFF8E7] min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`${comfortaa.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}>
            Let's Work Together
          </h1>
          <p className={`${bricolage.className} text-lg md:text-xl text-gray-600 max-w-2xl mx-auto`}>
            Choose a service below and tell us about your project. We'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Services Selection */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(service.title)}
                className={`cursor-pointer transform transition-all duration-300 hover:-translate-y-2 ${
                  selectedService === service.title ? 'bg-[#FF913B]/10' : ''
                }`}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Form Section */}
      {selectedService && (
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/50 rounded-3xl p-8 shadow-lg border border-white/20">
              <h2 className={`${comfortaa.className} text-2xl font-bold mb-8 text-center`}>
                {selectedService} Project Details
              </h2>

              {/* Templates Section */}
              {selectedServiceData?.templates && (
                <div className="mb-8">
                  <h3 className={`${bricolage.className} text-lg font-semibold mb-4`}>
                    Choose a Starting Template
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedServiceData.templates.map((template, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedTemplate(template)}
                        className={`p-4 rounded-xl cursor-pointer transition-all duration-300 group ${
                          selectedTemplate === template
                            ? 'bg-gradient-to-r from-[#FF913B] to-[#FF913B]/80 text-white shadow-md'
                            : 'bg-white hover:bg-[#FF913B]/5'
                        }`}
                      >
                        <p className={`${bricolage.className} font-medium group-hover:text-[#FF913B] ${
                          selectedTemplate === template ? 'text-white' : ''
                        }`}>{template}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      type="text"
                      required
                      className="peer w-full h-12 px-4 pt-4 bg-white/70 rounded-xl border-2 border-transparent
                               transition-all duration-300
                               focus:border-[#FF913B] focus:outline-none focus:bg-white
                               hover:bg-white"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder=" "
                    />
                    <label className={`${bricolage.className} absolute left-4 top-3.5 text-gray-500 text-sm transition-all duration-300
                                     peer-focus:text-[#FF913B] peer-focus:text-xs peer-focus:-translate-y-3
                                     peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-3
                                     group-hover:text-[#FF913B]`}>
                      Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      required
                      className="peer w-full h-12 px-4 pt-4 bg-white/70 rounded-xl border-2 border-transparent
                               transition-all duration-300
                               focus:border-[#FF913B] focus:outline-none focus:bg-white
                               hover:bg-white"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder=" "
                    />
                    <label className={`${bricolage.className} absolute left-4 top-3.5 text-gray-500 text-sm transition-all duration-300
                                     peer-focus:text-[#FF913B] peer-focus:text-xs peer-focus:-translate-y-3
                                     peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-3
                                     group-hover:text-[#FF913B]`}>
                      Email
                    </label>
                  </div>
                </div>

                {/* Service Specific Fields */}
                {selectedServiceData?.fields.includes('designStyle') && (
                  <div className="relative group">
                    <select
                      className={`${bricolage.className} peer w-full h-12 px-4 pt-4 bg-white rounded-xl border-2 border-transparent
                               transition-all duration-300
                               focus:border-[#FF913B] focus:outline-none
                               hover:border-[#FF913B]
                               appearance-none text-gray-700 font-medium cursor-pointer
                               [&>*]:py-3 [&>*]:px-4
                               [&>option]:bg-white
                               [&>option]:border-none
                               [&>option]:outline-none
                               [&>option]:cursor-pointer
                               [&>option]:font-medium 
                               [&>option]:text-gray-700
                               [&>option:hover]:bg-[#FF913B]
                               [&>option:hover]:text-white
                               [&>option:checked]:bg-[#FF913B]
                               [&>option:checked]:text-white
                               [&>option:focus]:bg-[#FF913B]
                               [&>option:focus]:text-white
                               [-webkit-appearance:none]
                               [-moz-appearance:none]
                               select::-ms-expand { display: none; }`}
                      value={formData.designStyle}
                      onChange={(e) => setFormData({ ...formData, designStyle: e.target.value })}
                      style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                    >
                      <option value="" disabled className={`${bricolage.className} text-gray-400 bg-white`}>Select Design Style</option>
                      <option value="minimal" className={`${bricolage.className} bg-white`}>Minimal</option>
                      <option value="modern" className={`${bricolage.className} bg-white`}>Modern</option>
                      <option value="classic" className={`${bricolage.className} bg-white`}>Classic</option>
                      <option value="bold" className={`${bricolage.className} bg-white`}>Bold</option>
                    </select>
                    <label className={`${bricolage.className} absolute left-4 top-1.5 text-xs text-[#FF913B] font-medium
                                     transition-all duration-300 group-hover:text-[#FF913B]`}>
                      Design Style
                    </label>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none
                                  text-[#FF913B] transition-transform duration-300
                                  group-hover:text-[#FF913B]">
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180"
                           viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}

                {selectedServiceData?.fields.includes('projectType') && (
                  <div className="relative group">
                    <select
                      className={`${bricolage.className} peer w-full h-12 px-4 pt-4 bg-white rounded-xl border-2 border-transparent
                               transition-all duration-300
                               focus:border-[#FF913B] focus:outline-none
                               hover:border-[#FF913B]
                               appearance-none text-gray-700 font-medium cursor-pointer
                               [&>*]:py-3 [&>*]:px-4
                               [&>option]:bg-white
                               [&>option]:border-none
                               [&>option]:outline-none
                               [&>option]:cursor-pointer
                               [&>option]:font-medium 
                               [&>option]:text-gray-700
                               [&>option:hover]:bg-[#FF913B]
                               [&>option:hover]:text-white
                               [&>option:checked]:bg-[#FF913B]
                               [&>option:checked]:text-white
                               [&>option:focus]:bg-[#FF913B]
                               [&>option:focus]:text-white
                               [-webkit-appearance:none]
                               [-moz-appearance:none]
                               select::-ms-expand { display: none; }`}
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                    >
                      <option value="" disabled className={`${bricolage.className} text-gray-400 bg-white`}>Select Project Type</option>
                      <option value="website" className={`${bricolage.className} bg-white`}>Website</option>
                      <option value="webapp" className={`${bricolage.className} bg-white`}>Web Application</option>
                      <option value="ecommerce" className={`${bricolage.className} bg-white`}>E-commerce</option>
                      <option value="mobile" className={`${bricolage.className} bg-white`}>Mobile App</option>
                    </select>
                    <label className={`${bricolage.className} absolute left-4 top-1.5 text-xs text-[#FF913B] font-medium
                                     transition-all duration-300 group-hover:text-[#FF913B]`}>
                      Project Type
                    </label>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none
                                  text-[#FF913B] transition-transform duration-300
                                  group-hover:text-[#FF913B]">
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180"
                           viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* File Upload */}
                <div className="group">
                  <label className={`${bricolage.className} block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#FF913B] transition-colors`}>
                    Upload References or Requirements
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-xl
                                bg-white/70 hover:bg-white transition-colors duration-300">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400 group-hover:text-[#FF913B] transition-colors duration-300"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md font-medium text-[#FF913B] hover:text-[#FF913B]/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#FF913B]"
                        >
                          <span>Upload files</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            multiple
                            onChange={handleFileChange}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div className="relative group">
                  <textarea
                    rows={4}
                    className="peer w-full px-4 pt-6 bg-white/70 rounded-xl border-2 border-transparent
                             transition-all duration-300
                             focus:border-[#FF913B] focus:outline-none focus:bg-white
                             hover:bg-white"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder=" "
                  />
                  <label className={`${bricolage.className} absolute left-4 top-2 text-xs text-[#FF913B]`}>
                    Project Description
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button onClick={() => handleSubmit} className="flex-1 bg-gradient-to-r from-[#FF913B] to-[#FF913B]/80 hover:from-[#FF913B]/90 hover:to-[#FF913B]/70">
                    Send Message
                  </Button>
                  <Button onClick={handleWhatsApp} variant="outline" className="flex-1 border-[#FF913B] text-[#FF913B] hover:bg-[#FF913B]/10">
                    Contact on WhatsApp
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${comfortaa.className} text-2xl sm:text-3xl font-bold text-center mb-8`}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className={`${bricolage.className} w-full px-4 py-3 text-left font-medium flex justify-between items-center hover:bg-gray-50`}
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  {faq.question}
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      activeFaq === index ? 'rotate-180' : ''
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
                {activeFaq === index && (
                  <div className={`${bricolage.className} px-4 py-3 bg-gray-50 text-gray-600`}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 