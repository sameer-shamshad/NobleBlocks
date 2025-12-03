'use client';

import React from 'react';
import { Search, Bookmark, Quote, Star } from 'lucide-react';

export default function SearchCard() {
  return (
    <div className="hero-card">
      {/* Search Header */}
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-white">
        <div className="relative w-full">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input type="text" value="Optogenetics in neural circuits" readOnly className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-100" />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-5 py-2 border-b border-slate-100 flex gap-4 text-[10px] font-bold text-slate-500 overflow-x-auto hide-scroll">
        <span className="text-slate-900 border-b-2 border-slate-900 pb-2 whitespace-nowrap">All Papers</span>
        <span className="hover:text-slate-800 cursor-pointer pb-2 whitespace-nowrap">Preprints</span>
        <span className="hover:text-slate-800 cursor-pointer pb-2 whitespace-nowrap">Data Sets</span>
        <span className="hover:text-slate-800 cursor-pointer pb-2 whitespace-nowrap">Authors</span>
      </div>

      {/* Results List */}
      <div className="flex-1 overflow-y-auto bg-slate-50 p-2 space-y-2">
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors group cursor-pointer">
          <div className="flex justify-between items-start mb-1">
            <span className="bg-green-50 text-green-700 text-[9px] font-bold px-1.5 py-0.5 rounded border border-green-100">PDF Available</span>
            <Bookmark className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500" />
          </div>
          <h4 className="text-sm font-bold text-slate-900 leading-snug mb-1">Optogenetic control of neural activity in genetically targeted cells</h4>
          <div className="text-[10px] text-slate-500 mb-2">Boyden, E.S. et al. • Nature Neuroscience • 2005</div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-600">
              <Quote className="w-3 h-3" /> 4,502
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-600">
              <Star className="w-3 h-3" /> 4.9
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

