import React from 'react';
import HeroContent from './HeroContent';
import HeroCardStack from './HeroCardStack';

export default function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <HeroContent />
        <HeroCardStack />
      </div>
    </section>
  );
}

