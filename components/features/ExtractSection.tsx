'use client';

import React from 'react';
import { Table2, Download, Copy } from 'lucide-react';
import Badge from '../ui/Badge';
import FeatureSection from './FeatureSection';

export default function ExtractSection() {
  return (
    <FeatureSection bgColor="slate-50">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Block */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-none order-2 lg:order-1">
          <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl -z-10"></div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative border border-slate-200 flex flex-col sm:grid sm:grid-cols-5 sm:h-[340px]">
            {/* Left: Visual Scanning Representation */}
            <div className="sm:col-span-2 bg-slate-50 border-b sm:border-b-0 sm:border-r border-slate-200 relative p-4 flex flex-col items-center justify-center min-h-[200px]">
              {/* Scanner Overlay */}
              <div className="relative z-10 w-full h-32 bg-white rounded-lg border border-slate-200 shadow-sm p-2 flex flex-col justify-end overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/0 via-emerald-500/0 to-emerald-500/10 animate-scan"></div>
                <div className="absolute top-0 w-full h-0.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-scan-line"></div>
                
                <div className="flex items-end gap-1 h-full opacity-60">
                  <div className="w-full bg-slate-300 h-[20%] rounded-t-sm"></div>
                  <div className="w-full bg-slate-300 h-[40%] rounded-t-sm"></div>
                  <div className="w-full bg-slate-300 h-[75%] rounded-t-sm"></div>
                  <div className="w-full bg-emerald-500 h-[90%] rounded-t-sm"></div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Scanning Figure 1A</span>
              </div>
            </div>

            {/* Right: Clean Data Card */}
            <div className="sm:col-span-3 bg-white p-6 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="bg-emerald-100 p-1.5 rounded text-emerald-700">
                    <Table2 className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-slate-800 text-sm">Extracted Data</span>
                </div>
                <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded">JSON / CSV</span>
              </div>

              <div className="space-y-4 mb-auto">
                <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                  <span className="text-xs text-slate-400 font-medium uppercase">Metric</span>
                  <span className="text-xs text-slate-400 font-medium uppercase">Value</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-700">Substrate Velocity</span>
                  <span className="text-sm font-bold text-slate-900">62.3 <span className="text-emerald-500 text-[10px] ml-1">▲</span></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-700">Error Margin</span>
                  <span className="text-sm font-bold text-slate-900">± 1.1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-700">Correlation (r)</span>
                  <span className="text-sm font-bold text-slate-900">0.98</span>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <button className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2.5 rounded-lg transition-colors">
                  <Download className="w-3 h-3" /> Download CSV
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold py-2.5 rounded-lg transition-colors">
                  <Copy className="w-3 h-3" /> Copy JSON
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Text Block */}
        <div className="space-y-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-1 lg:order-2">
          <div className="space-y-4">
            <Badge variant="emerald">
              <Table2 className="w-3 h-3" /> EDDII Engine
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Extract <span className="text-emerald-600 block sm:inline">Data.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Convert static figures and tables into reusable CSVs and JSON code. Stop manually typing out data points from PDFs.
            </p>
          </div>
        </div>
      </div>
    </FeatureSection>
  );
}

