'use client';

import React from 'react';
import { ShieldAlert, XCircle, AlertTriangle } from 'lucide-react';

export default function ValidationCard() {
  return (
    <div className="hero-card">
      {/* Header */}
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center border border-red-200 shrink-0">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Validation Scan</div>
            <div className="text-sm font-bold text-slate-900 truncate">analysis_final_v2.pdf</div>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-semibold text-slate-500 hidden sm:inline">Score:</span>
          <span className="text-sm font-bold text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded">B-</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-0 flex flex-col h-full overflow-hidden bg-white">
        {/* Stats Row */}
        <div className="flex border-b border-slate-100 divide-x divide-slate-100">
          <div className="flex-1 p-3 text-center hover:bg-slate-50 transition-colors">
            <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Critical Errors</div>
            <div className="text-base sm:text-lg font-bold text-red-600">2</div>
          </div>
          <div className="flex-1 p-3 text-center hover:bg-slate-50 transition-colors">
            <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Warnings</div>
            <div className="text-base sm:text-lg font-bold text-amber-500">5</div>
          </div>
          <div className="flex-1 p-3 text-center hover:bg-slate-50 transition-colors">
            <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Formatting</div>
            <div className="text-base sm:text-lg font-bold text-emerald-600">100%</div>
          </div>
        </div>

        {/* Issue List */}
        <div className="flex-1 overflow-hidden p-4 space-y-3 relative">
          <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          
          {/* Issue 1 (Expanded) */}
          <div className="border border-red-100 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-red-50 p-3 flex gap-3 items-start">
              <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start flex-wrap gap-1">
                  <h4 className="text-xs font-bold text-slate-900">Broken Reference Link</h4>
                  <span className="text-[10px] font-mono text-red-600 bg-white/50 px-1.5 rounded whitespace-nowrap">Line 142</span>
                </div>
                <p className="text-[10px] text-slate-600 mt-1 truncate">Citation [12] points to a DOI that returns 404.</p>
              </div>
            </div>
            {/* Context Snippet */}
            <div className="bg-slate-900 p-3 overflow-x-auto">
              <code className="font-mono text-[10px] text-slate-300 whitespace-nowrap">
                <div className="opacity-50">141 &nbsp; previous studies [10, 11]. However,</div>
                <div className="bg-red-500/20 text-red-200 -mx-3 px-3 border-l-2 border-red-500">142 &nbsp; Smith et al. <span className="bg-red-500/40 text-white px-1 rounded">[12]</span> argued that quantum</div>
                <div className="opacity-50">143 &nbsp; tunneling effects are negligible at</div>
              </code>
            </div>
          </div>

          {/* Issue 2 */}
          <div className="border border-amber-100 rounded-xl bg-white p-3 flex gap-3 items-start hover:shadow-md transition-shadow">
            <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
            <div>
              <div className="flex justify-between w-full gap-2">
                <h4 className="text-xs font-bold text-slate-900">Low Resolution Figure</h4>
              </div>
              <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">Figure 3 is 150dpi. Journals typically require 300dpi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

