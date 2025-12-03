'use client';

import React from 'react';
import { ScanLine, AlertTriangle, Link2Off } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import FeatureSection from './FeatureSection';

export default function ScanSection() {
  return (
    <FeatureSection bgColor="white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Block */}
        <div className="space-y-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-1">
          <div className="space-y-4">
            <Badge variant="red">
              <ScanLine className="w-3 h-3" /> Automated Validation
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Scan for <span className="text-red-600 block sm:inline">Errors.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Automatically flag issues in methodology, logic, and citations before you submit. Don&apos;t let a simple mistake trigger a rejection.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start">
            <Button className="shadow-lg shadow-slate-900/20">
              Start Free Scan
            </Button>
          </div>
        </div>

        {/* Image Block */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-none order-2">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-400/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden relative">
            {/* Header */}
            <div className="bg-white border-b border-slate-100 p-4 flex justify-between items-center">
              <span className="font-bold text-slate-800 text-sm">Validation Report</span>
              <span className="bg-red-50 text-red-600 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider border border-red-100">2 Critical</span>
            </div>
            {/* Content */}
            <div className="p-6 bg-slate-50/50">
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-xl shadow-sm flex gap-4 items-start group hover:shadow-md transition-shadow">
                  <div className="bg-red-100 p-2 rounded-lg text-red-600 shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Statistical Inconsistency</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">The reported p-value (0.04) does not match the confidence interval provided in Table 2.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm flex gap-4 items-start group hover:shadow-md transition-shadow">
                  <div className="bg-amber-100 p-2 rounded-lg text-amber-600 shrink-0">
                    <Link2Off className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Retracted Citation</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Reference [12] &quot;Smith et al.&quot; was retracted in 2021. Please verify.</p>
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

