'use client';

import React from 'react';
import Link from 'next/link';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
});

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  className?: string;
  href?: string;
  onClick?: () => void;
  fullWidthMobile?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  href, 
  onClick,
  fullWidthMobile = true,
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const baseStyles = `${dmSans.className} px-4 sm:px-6 py-2.5 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${fullWidthMobile ? 'w-full sm:w-auto' : ''} relative overflow-hidden`;

  const variantStyles = {
    primary: `bg-[#FF0000] text-white 
      hover:bg-[#e87f2d] active:bg-[#d97626] 
      shadow-md hover:shadow-lg active:shadow-none 
      transform hover:scale-[1.03] active:scale-[0.98]`,
    
    outline: `border border-[#000000] text-[#000000] 
      hover:bg-[#FFF8E7] hover:border-[#e87f2d] hover:text-[#e87f2d] 
      active:bg-[#FFF8E7]/50 shadow-sm hover:shadow-md 
      transform hover:scale-[1.03] active:scale-[0.98]`,

      white: `border border-[#ffffff] text-[#ffffff] 
      hover:bg-[#FF913B] hover:border-[#ffffff] hover:text-[#ffffff] 
      active:bg-[#ffffff]/50 shadow-sm hover:shadow-md 
      transform hover:scale-[1.03] active:scale-[0.98]`
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100 hover:bg-[#FF913B] hover:shadow-md' : '';
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={buttonStyles}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
