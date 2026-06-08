/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  iconOnly?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'dark',
  iconOnly = false,
}) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Logo */}
      <div className="relative flex-shrink-0 w-12 h-12">
        <img
          src="/brandlogo.png"
          alt="Future Gates logo" 
          className="w-full h-full object-contain"
        />
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1 flex-wrap">
            <span
              className={`font-display font-extrabold leading-none tracking-tight text-base uppercase ${
                isLight ? 'text-white' : 'text-slate-900'
              }`}
            >
              Future Gates
            </span>
            <span
              className={`font-display font-light leading-none tracking-tight text-base uppercase ${
                isLight ? 'text-brand-orange' : 'text-[#E35E14]'
              }`}
            >
              IT Center
            </span>
          </div>

          <span
            className={`font-sans font-bold tracking-wider text-[8px] md:text-[9px] uppercase mt-0.5 ${
              isLight ? 'text-brand-orange opacity-95' : 'text-[#E35E14]'
            }`}
          >
            Where Skills Become Your Income
          </span>

          <span
            className={`text-[7.5px] leading-tight ${
              isLight ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            Accredited IT Training & Professional Certifications Validation
          </span>
        </div>
      )}
    </div>
  );
};