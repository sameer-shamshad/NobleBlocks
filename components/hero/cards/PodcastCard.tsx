'use client';

import React from 'react';
import { Mic2, Rewind, Pause, FastForward, Volume2 } from 'lucide-react';

export default function PodcastCard() {
  return (
    <div className="hero-card !border-0 bg-[#0c0c0e] relative overflow-hidden flex flex-col">
      <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between bg-white/5 backdrop-blur z-20 relative">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30 shrink-0">
            <Mic2 className="w-4 h-4" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Audio Generation</span>
            <span className="text-sm font-bold text-white truncate">Turn your paper into a podcast</span>
          </div>
        </div>
        <div className="hidden sm:block px-2 py-0.5 rounded bg-purple-500 text-white text-[10px] font-bold shadow-lg shadow-purple-500/20">PaperCast™</div>
      </div>

      <div className="flex-1 relative flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-black z-0"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]"></div>
        
        {/* Player Widget */}
        <article className="w-full rounded-2xl border border-zinc-800 bg-[#121214] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] overflow-hidden group ring-1 ring-white/5 relative z-30 transition-all duration-300">
          <div className="p-4 sm:p-6 flex flex-col gap-5 sm:gap-6 relative z-10 pointer-events-none">
            <div className="flex gap-4 items-center">
              <div className="shrink-0 w-20 h-20 sm:w-28 sm:h-28 relative rounded-xl overflow-hidden shadow-lg bg-zinc-900 ring-1 ring-white/10 group-hover:ring-purple-500/30 transition-all pointer-events-auto">
                <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=400&fit=crop&q=80" alt="Magellanic Clouds Nebula" className="absolute inset-0 w-full h-full object-cover" />
              </div>

              <div className="flex-1 flex flex-col justify-center min-w-0 pointer-events-auto">
                <div className="mb-1 transition-all">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest truncate">Astrophysics</span>
                    <span className="text-[10px] text-zinc-600">•</span>
                    <span className="text-[10px] font-medium text-zinc-400 whitespace-nowrap">12k Views</span>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-white truncate leading-tight">Europium Abundances</h2>
                  <p className="text-xs text-zinc-400 line-clamp-1 mb-2">Small Magellanic Cloud • Episode 142</p>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2 overflow-hidden shrink-0">
                      <img className="inline-block h-4 w-4 rounded-full ring-2 ring-[#121214] grayscale" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop" alt="Alex" />
                      <img className="inline-block h-4 w-4 rounded-full ring-2 ring-[#121214] grayscale" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&h=64&fit=crop" alt="Sam" />
                    </div>
                    <span className="text-[10px] font-medium text-zinc-500 truncate">Hosted by Alex & Sam</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full pointer-events-auto">
              <div className="mb-4 group/slider w-full">
                <div className="flex justify-between text-[10px] font-medium text-zinc-500 mb-1.5 font-mono">
                  <span className="text-zinc-300">00:12</span>
                  <span>15:20</span>
                </div>
                <div className="relative w-full h-1 bg-zinc-800 rounded-full cursor-pointer py-1 -my-1">
                  <div className="absolute left-0 top-1 bottom-1 w-[40%] bg-zinc-700 rounded-full opacity-50 pointer-events-none"></div>
                  <div className="absolute left-0 top-1 bottom-1 w-[2%] bg-purple-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.5)] pointer-events-none"></div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 w-full">
                <div className="flex items-center gap-3 sm:gap-5 flex-1 justify-between sm:justify-start">
                  <button className="text-zinc-500 hover:text-white transition-colors active:scale-90 transform">
                    <Rewind className="w-5 h-5 fill-current" />
                  </button>
                  <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-zinc-200 text-black flex items-center justify-center transition-transform active:scale-95 shadow-lg shadow-white/5">
                    <Pause className="w-5 h-5 fill-current" />
                  </button>
                  <button className="text-zinc-500 hover:text-white transition-colors active:scale-90 transform">
                    <FastForward className="w-5 h-5 fill-current" />
                  </button>
                </div>
                <div className="hidden sm:flex items-center gap-4">
                  <div className="flex items-center gap-2 group/vol">
                    <button className="text-zinc-500 hover:text-white transition-colors">
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <div className="w-16 h-4 flex items-center cursor-pointer">
                      <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden relative">
                        <div className="absolute left-0 top-0 bottom-0 w-2/3 bg-zinc-600 group-hover/vol:bg-zinc-400 transition-all"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

