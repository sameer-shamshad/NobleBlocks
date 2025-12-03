import React from 'react';
import { Search } from 'lucide-react';
import Badge from '../ui/Badge';
import FeatureSection from './FeatureSection';

export default function SearchSection() {
  return (
    <FeatureSection bgColor="white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Block */}
        <div className="space-y-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-1">
          <div className="space-y-4">
            <Badge variant="amber">
              <Search className="w-3 h-3" /> Global Database
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Search <span className="text-amber-600 block sm:inline">Millions.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Quickly find studies to include in your work from our massive database. Filter by citation count, date, and methodology.
            </p>
          </div>
        </div>

        {/* Image Block */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-none mt-2 lg:mt-0 order-2 mb-28 lg:mb-0">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 pb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border text-slate-900 border-slate-200 rounded-lg leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-amber-200 transition-all shadow-sm"
                placeholder="Search for 'Optogenetics'..."
                defaultValue="Optogene"
              />
              
              <div className="absolute top-14 w-full bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden z-20">
                <div className="px-4 py-2 bg-slate-50 text-xs font-bold text-slate-400 uppercase tracking-wider">Top Results</div>
                <div className="p-3 hover:bg-amber-50 cursor-pointer border-b border-slate-50">
                  <div className="font-bold text-slate-900 text-sm">Optogenetics in Neural Systems</div>
                  <div className="text-xs text-slate-500 flex justify-between mt-1">
                    <span>Boyden et al. (2015)</span>
                    <span className="text-amber-600 font-medium">12.5k Citations</span>
                  </div>
                </div>
                <div className="p-3 hover:bg-amber-50 cursor-pointer">
                  <div className="font-bold text-slate-900 text-sm">Optogenetic Control of Behavior</div>
                  <div className="text-xs text-slate-500 flex justify-between mt-1">
                    <span>Deisseroth (2011)</span>
                    <span className="text-amber-600 font-medium">8.2k Citations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeatureSection>
  );
}

