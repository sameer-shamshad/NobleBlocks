import React from 'react';
import { Mic2, AudioLines, PlayCircle, Music2 } from 'lucide-react';
import Badge from '../ui/Badge';
import FeatureSection from './FeatureSection';

export default function PodcastSection() {
  return (
    <FeatureSection bgColor="slate-50">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Block */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-none mt-2 lg:mt-0 order-2 lg:order-1">
          <div className="relative w-full z-10">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-visible">
              {/* Player Header */}
              <div className="border-b border-slate-100 p-4 bg-slate-50/50 flex items-center justify-between rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-300"></span>
                    <span className="text-xs font-semibold tracking-wide text-slate-400 uppercase">Paused</span>
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-300"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-300"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-300"></div>
                </div>
              </div>
              {/* Player Body */}
              <div className="p-6 space-y-6">
                <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
                  <div className="h-20 w-20 shrink-0 rounded-xl bg-gradient-to-br from-slate-800 to-black flex items-center justify-center shadow-md mx-auto sm:mx-0 text-white">
                    <Music2 className="w-8 h-8 opacity-80" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1 w-full">
                    <h3 className="text-lg font-semibold text-slate-900 tracking-tight leading-snug">Neural Network Perturbation Theory: Residual Corrections</h3>
                    <div className="space-y-1">
                      <p className="text-sm text-slate-500 font-medium">Generated from: arXiv:10919945-38c</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {/* Waveform Simulation */}
                  <div className="flex items-end justify-between gap-1 h-10 w-full px-1 opacity-80 overflow-hidden">
                    <div className="w-1.5 rounded-full shrink-0 bg-purple-200 h-3"></div>
                    <div className="w-1.5 rounded-full shrink-0 bg-purple-400 h-5"></div>
                    <div className="w-1.5 rounded-full shrink-0 bg-purple-600 h-7"></div>
                    <div className="w-1.5 rounded-full shrink-0 bg-purple-500 h-6"></div>
                    <div className="w-1.5 rounded-full shrink-0 bg-purple-300 h-4"></div>
                    <div className="w-1.5 rounded-full shrink-0 bg-purple-200 h-3"></div>
                    <div className="w-1.5 rounded-full shrink-0 bg-purple-400 h-5"></div>
                    <div className="w-1.5 rounded-full shrink-0 bg-purple-600 h-8"></div>
                    <div className="w-1.5 bg-slate-200 rounded-full h-5 shrink-0"></div>
                    <div className="w-1.5 bg-slate-200 rounded-full h-4 shrink-0"></div>
                    <div className="w-1.5 bg-slate-200 rounded-full h-6 shrink-0"></div>
                    <div className="w-1.5 bg-slate-200 rounded-full h-3 shrink-0"></div>
                    <div className="w-1.5 bg-slate-200 rounded-full h-5 shrink-0"></div>
                    <div className="w-1.5 bg-slate-200 rounded-full h-8 shrink-0"></div>
                  </div>
                  {/* Progress Bar */}
                  <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-[65%] bg-purple-600 rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-xs font-medium text-slate-400 font-mono">
                    <span>00:00:00</span><span>00:02:49</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Block */}
        <div className="space-y-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-1 lg:order-2">
          <div className="space-y-4">
            <Badge variant="purple">
              <Mic2 className="w-3 h-3" /> Podcast Studio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Turn research into <span className="text-purple-600 block sm:inline">conversations.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Turn any paper into a two-voice podcast. Shareable audio for students and colleagues. Upload your paper. We generate a two-voice podcast episode instantly.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start">
            <button className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-base font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-purple-900/20 transition-all active:scale-95">
              <AudioLines className="w-5 h-5" />
              Generate PaperCast
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 text-base font-medium px-6 py-3.5 rounded-full transition-colors">
              <PlayCircle className="w-5 h-5" />
              Hear Examples
            </button>
          </div>
        </div>
      </div>
    </FeatureSection>
  );
}

