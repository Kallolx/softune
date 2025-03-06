'use client';

import React, { useEffect, useRef, useState } from 'react';
import { X, WhatsappLogo, ShoppingCart } from '@phosphor-icons/react';
import { Comfortaa, Bricolage_Grotesque, DM_Sans } from 'next/font/google';
import Button from './Button';

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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageDetails: {
    tierName: string;
    subItemName: string;
    subItemDescription: string;
    price: number;
    pages: number;
    features: string[];
  } | null;
  onProceed: () => void;
}

const Modal = ({ isOpen, onClose, packageDetails, onProceed }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isValidPromo, setIsValidPromo] = useState(false);
  const [orderMethod, setOrderMethod] = useState<'whatsapp' | 'admin'>('whatsapp');

  // Promo code validation
  const validatePromoCode = (code: string) => {
    // Example promo codes - replace with your actual promo codes
    const validPromos: { [key: string]: number } = {
      'WELCOME10': 10,
      'SPECIAL20': 20,
      'SAVE30': 30
    };
    
    const discount = validPromos[code.toUpperCase()] || 0;
    setDiscount(discount);
    setIsValidPromo(discount > 0);
  };

  const handlePromoCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value;
    setPromoCode(code);
    validatePromoCode(code);
  };

  const calculateFinalPrice = () => {
    if (!packageDetails) return 0;
    const originalPrice = packageDetails.price;
    const discountedPrice = originalPrice - (originalPrice * (discount / 100));
    return Math.round(discountedPrice);
  };

  const handleProceedToWhatsApp = () => {
    if (!packageDetails) return;
    
    const finalPrice = calculateFinalPrice();
    const message = `🎯 *New Website Development Inquiry*\n\n` +
      `*Project Details:*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `📦 Package: ${packageDetails.tierName}\n` +
      `📄 Pages: ${packageDetails.pages} ${packageDetails.pages > 1 ? 'pages' : 'page'}\n` +
      `📝 Service: ${packageDetails.subItemName}\n` +
      `📋 Description: ${packageDetails.subItemDescription}\n\n` +
      `*Pricing Information:*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `💰 Original Price: $${packageDetails.price}\n` +
      `💵 Final Price: $${finalPrice}${discount > 0 ? ` (${discount}% OFF)` : ''}\n` +
      `🎫 Promo Code: ${promoCode || 'None'}\n\n` +
      `*Next Steps:*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `1️⃣ Please provide your website requirements\n` +
      `2️⃣ Share any reference websites (if any)\n` +
      `3️⃣ Confirm your preferred timeline\n\n` +
      `I'm ready to help bring your website vision to life! 🚀`;
    
    const whatsappUrl = `https://wa.me/8801831624571?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !packageDetails) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div 
        ref={modalRef}
        className="bg-[#FFF8E7] rounded-xl w-full max-w-lg max-h-[90vh] overflow-auto"
        style={{ 
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Modal Header */}
        <div className="relative p-5 border-b border-gray-100">
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-[#FF913B]/10"
            aria-label="Close modal"
          >
            <X weight="bold" className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex items-center gap-3 mb-3">
            <div className={`${bricolage.className} bg-[#FF913B] text-white px-3 py-1 rounded-full text-sm font-medium`}>
              {packageDetails.tierName}
            </div>
            <div className={`${bricolage.className} border border-black bg-[#F3E6C7] rounded-full px-3 py-1 text-sm font-medium`}>
              {packageDetails.pages} {packageDetails.pages > 1 ? 'pages' : 'page'}
            </div>
          </div>
          
          <h3 className={`${comfortaa.className} text-2xl font-bold text-gray-900`}>
            Package Summary
          </h3>
        </div>
        
        {/* Modal Content */}
        <div className="p-5">
          <div className="space-y-4">
            {/* Package Details */}
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <div className="flex flex-col gap-3">
                {/* Price Section */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
                  <div className="flex flex-col">
                    {discount > 0 && (
                      <span className={`${bricolage.className} text-sm text-gray-500 line-through`}>
                        ${packageDetails.price}
                      </span>
                    )}
                    <div className="flex items-baseline gap-2">
                      <span className={`${comfortaa.className} text-4xl font-bold text-[#FF913B]`}>
                        ${calculateFinalPrice()}
                      </span>
                      {discount > 0 && (
                        <span className={`${bricolage.className} text-sm text-green-600`}>
                          {discount}% OFF
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Promo Code Field */}
                  <div className="flex flex-col w-full sm:w-auto sm:items-end gap-1">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={handlePromoCodeChange}
                      className={`${bricolage.className} w-full sm:w-48 px-4 py-2 rounded-lg border-2 bg-white ${
                        isValidPromo ? 'border-green-500' : 'border-gray-300'
                      } focus:outline-none focus:border-[#FF913B] text-sm placeholder-gray-400`}
                    />
                    {isValidPromo && (
                      <span className={`${bricolage.className} text-xs text-green-600 text-center sm:text-right`}>
                        Promo code applied successfully!
                      </span>
                    )}
                  </div>
                </div>

                {/* Name and Description */}
                <div className="pt-3 border-t border-gray-100">
                  <h4 className={`${bricolage.className} font-bold text-lg text-gray-900 mb-1`}>
                    {packageDetails.subItemName}
                  </h4>
                  <p className={`${bricolage.className} text-sm text-gray-600`}>
                    {packageDetails.subItemDescription}
                  </p>
                </div>
              </div>
              
              <div className="pt-3 border-t border-gray-100">
                <h5 className={`${bricolage.className} font-medium text-base text-gray-900 mb-3`}>
                  Included Features
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {packageDetails.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#FF913B] mt-0.5">•</span>
                      <span className={`${bricolage.className} text-sm text-gray-600`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Order Method Selection */}
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <h5 className={`${bricolage.className} font-medium text-base text-gray-900 mb-3`}>
                Select Order Method
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setOrderMethod('whatsapp')}
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${
                    orderMethod === 'whatsapp'
                      ? 'border-[#FF913B] bg-[#FF913B]/5'
                      : 'border-gray-200 hover:border-[#FF913B]/50'
                  }`}
                >
                  <WhatsappLogo weight="fill" className="w-6 h-6 text-[#FF913B]" />
                  <span className={`${bricolage.className} text-sm font-medium`}>
                    Order via WhatsApp
                  </span>
                </button>
                <button
                  onClick={() => setOrderMethod('admin')}
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${
                    orderMethod === 'admin'
                      ? 'border-[#FF913B] bg-[#FF913B]/5'
                      : 'border-gray-200 hover:border-[#FF913B]/50'
                  }`}
                >
                  <ShoppingCart weight="fill" className="w-6 h-6 text-[#FF913B]" />
                  <span className={`${bricolage.className} text-sm font-medium`}>
                    Order via Website
                  </span>
                </button>
              </div>
              {orderMethod === 'admin' && (
                <p className={`${bricolage.className} text-xs text-gray-500 mt-2 text-center`}>
                  Coming soon! Track your order progress of your project through our website.
                </p>
              )}
            </div>
            
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button 
                onClick={orderMethod === 'whatsapp' ? handleProceedToWhatsApp : () => {}}
                className={`flex-1 flex items-center justify-center gap-2 ${
                  orderMethod === 'whatsapp' ? 'bg-[#FF913B]' : 'bg-gray-400 cursor-not-allowed'
                }`}
                disabled={orderMethod === 'admin'}
              >
                {orderMethod === 'whatsapp' ? (
                  <>
                    <WhatsappLogo weight="fill" className="w-5 h-5" />
                    WhatsApp
                  </>
                ) : (
                  <>
                    <ShoppingCart weight="fill" className="w-5 h-5" />
                    Coming Soon
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal; 