'use client';

import React from 'react';

interface FeatureSectionProps {
  children: React.ReactNode;
  bgColor?: 'white' | 'slate-50';
  className?: string;
}

export default function FeatureSection({ children, bgColor = 'white', className = '' }: FeatureSectionProps) {
  const bgClass = bgColor === 'white' ? 'bg-white' : 'bg-slate-50';
  return (
    <section className={`w-full py-16 md:py-24 border-b border-slate-100 overflow-hidden relative ${bgClass} ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {children}
      </div>
    </section>
  );
}

