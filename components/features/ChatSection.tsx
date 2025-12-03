'use client';

import React from 'react';
import { Bot, Mic, ArrowUp, Image as ImageIcon, MessageSquareDashed } from 'lucide-react';
import Badge from '../ui/Badge';
import FeatureSection from './FeatureSection';

export default function ChatSection() {
  return (
    <FeatureSection bgColor="slate-50">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Block */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-none order-2 lg:order-1">
          <div className="relative bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold">Paper Assistant</div>
              </div>
            </div>
            <div className="p-6 space-y-5 h-80 bg-slate-50/30 flex flex-col justify-end">
              <div className="flex justify-end items-end gap-2">
                <span className="text-xs text-slate-400 mb-2">You</span>
                <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm py-3 px-4 shadow-md flex items-center gap-3 min-w-[140px]">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                    <Mic className="w-3 h-3 text-white" />
                  </div>
                  <div className="flex items-center gap-0.5 h-4">
                    <div className="w-1 bg-white/70 rounded-full animate-wave-1"></div>
                    <div className="w-1 bg-white/90 rounded-full animate-wave-2"></div>
                    <div className="w-1 bg-white/60 rounded-full animate-wave-3"></div>
                    <div className="w-1 bg-white/80 rounded-full animate-wave-4"></div>
                    <div className="w-1 bg-white/70 rounded-full animate-wave-2"></div>
                  </div>
                  <span className="text-xs font-medium ml-auto">0:04</span>
                </div>
              </div>
              <div className="flex justify-start gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 mt-2">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm py-4 px-5 max-w-[90%] text-sm shadow-sm space-y-3">
                  <p className="text-slate-700">Figure 2 indicates a <strong>logarithmic growth</strong> pattern in neuron density over time.</p>
                  <div className="bg-slate-100 rounded-lg p-2 flex gap-2 items-center cursor-pointer hover:bg-slate-200 transition-colors">
                    <div className="bg-white p-1 rounded border border-slate-200 shrink-0">
                      <ImageIcon className="w-4 h-4 text-slate-500" />
                    </div>
                    <span className="text-xs font-semibold text-slate-600 truncate">View Source: Figure 2 (Page 4)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-slate-100 bg-white">
              <div className="relative flex gap-2">
                <button className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors shrink-0">
                  <Mic className="w-5 h-5" />
                </button>
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Ask a follow-up question..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-full py-2.5 pl-4 pr-12 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                  <button className="absolute right-2 top-1.5 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <ArrowUp className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Block */}
        <div className="space-y-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-1 lg:order-2">
          <div className="space-y-4">
            <Badge variant="blue">
              <MessageSquareDashed className="w-3 h-3" /> Interactive Reading
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Chat with <span className="text-blue-600 block sm:inline">Papers.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Ask questions directly to figures and tables via text or voice. Get cited answers instantly. Stop scrolling back and forth—just ask.
            </p>
          </div>
        </div>
      </div>
    </FeatureSection>
  );
}

