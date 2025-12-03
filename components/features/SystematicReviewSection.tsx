import React from 'react';
import { Layers } from 'lucide-react';
import Badge from '../ui/Badge';
import FeatureSection from './FeatureSection';

export default function SystematicReviewSection() {
  return (
    <FeatureSection bgColor="white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Block */}
        <div className="space-y-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-1">
          <div className="space-y-4">
            <Badge variant="cyan">
              <Layers className="w-3 h-3" /> AI Screening
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Systematic <span className="text-cyan-600 block sm:inline">Reviews.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Use AI to screen, summarize, and organize large sets of papers 10x faster. Perfect for meta-analyses and literature reviews.
            </p>
          </div>
        </div>

        {/* Image Block */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-none order-2">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 overflow-hidden">
            <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2 rounded-xl">
              {/* Column 1 */}
              <div className="flex flex-col gap-2">
                <div className="text-[10px] font-bold text-slate-400 uppercase text-center mb-1">Found (842)</div>
                <div className="bg-white p-2 rounded border border-slate-200 shadow-sm h-16 opacity-50"></div>
                <div className="bg-white p-2 rounded border border-slate-200 shadow-sm h-16 opacity-50"></div>
                <div className="bg-white p-2 rounded border border-slate-200 shadow-sm h-16 opacity-50"></div>
              </div>
              {/* Column 2 (Active) */}
              <div className="flex flex-col gap-2 relative">
                <div className="text-[10px] font-bold text-cyan-600 uppercase text-center mb-1">Screening</div>
                <div className="bg-white p-3 rounded-lg border border-cyan-200 shadow-md h-24 relative z-10 flex flex-col justify-between">
                  <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
                  <div className="h-2 w-full bg-slate-100 rounded"></div>
                  <div className="flex gap-1 mt-2">
                    <div className="flex-1 bg-green-100 text-green-700 text-[10px] flex items-center justify-center rounded cursor-pointer font-bold">In</div>
                    <div className="flex-1 bg-red-100 text-red-700 text-[10px] flex items-center justify-center rounded cursor-pointer font-bold">Out</div>
                  </div>
                </div>
                <div className="bg-white p-2 rounded border border-slate-200 shadow-sm h-16 opacity-50"></div>
              </div>
              {/* Column 3 */}
              <div className="flex flex-col gap-2">
                <div className="text-[10px] font-bold text-slate-400 uppercase text-center mb-1">Included (12)</div>
                <div className="bg-white p-2 rounded border border-green-200 shadow-sm h-16 border-l-4 border-l-green-500"></div>
                <div className="bg-white p-2 rounded border border-green-200 shadow-sm h-16 border-l-4 border-l-green-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeatureSection>
  );
}

