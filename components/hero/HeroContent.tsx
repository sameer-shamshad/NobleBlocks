import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wide mb-6 sm:mb-8">
        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
        Science is social
      </div>
      
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-slate-900">
        Do more with your papers than just <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">reading them.</span>
      </h1>
      
      <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed font-medium px-2 sm:px-0">
        Upload a paper once. NobleBlocks helps you scan for errors, extract data, turn it into audio, publish your preprint, and share it with a community of researchers.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Button className="shadow-xl shadow-slate-900/20 hover:-translate-y-1 flex items-center justify-center gap-2">
          Get Started
          <ArrowRight className="w-4 h-4" />
        </Button>
        <Button variant="secondary" className="flex items-center justify-center gap-2 shadow-sm">
          Browse Papers
        </Button>
      </div>
    </div>
  );
}

