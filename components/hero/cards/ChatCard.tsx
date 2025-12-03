import React from 'react';
import { Bot, BarChart2, Play } from 'lucide-react';

export default function ChatCard() {
  return (
    <div className="hero-card">
      {/* Chat Header */}
      <div className="px-5 py-4 border-b border-slate-100 bg-white/95 backdrop-blur flex justify-between items-center z-20">
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Chat with the paper</span>
          </div>
          <h3 className="text-sm font-bold text-slate-900 truncate max-w-[150px] sm:max-w-[200px]">CRISPR-Cas9 Editing Efficiency v4.pdf</h3>
        </div>
        <div className="flex -space-x-2 shrink-0">
          <div className="w-7 h-7 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-600">AI</div>
        </div>
      </div>

      {/* Chat Stream */}
      <div className="flex-1 bg-slate-50 p-4 space-y-5 overflow-hidden flex flex-col relative">
        {/* Top fade */}
        <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-slate-50 to-transparent z-10"></div>
        
        <div className="opacity-40 text-center text-[10px] text-slate-400 my-2">Today, 2:30 PM</div>

        {/* Bot Message 1 */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-md mt-1">
            <Bot className="w-4 h-4" />
          </div>
          <div className="space-y-1 max-w-[85%]">
            <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-3.5 shadow-sm">
              <p className="text-xs text-slate-700 leading-relaxed">
                According to <span className="font-bold text-slate-900">Figure 2A</span>, the editing efficiency peaked at 48 hours post-transfection.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-1.5 pr-3 shadow-sm hover:border-blue-300 transition-colors cursor-pointer group">
              <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center group-hover:bg-blue-50 shrink-0">
                <BarChart2 className="w-4 h-4 text-slate-500 group-hover:text-blue-500" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-slate-900">View Fig 2A</div>
                <div className="text-[9px] text-slate-400">Page 5 • Results</div>
              </div>
            </div>
          </div>
        </div>

        {/* User Message */}
        <div className="flex justify-end gap-3 items-end">
          <div className="space-y-1 max-w-[85%] flex flex-col items-end">
            <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none p-3 shadow-md">
              <div className="flex items-center gap-3">
                <button className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors shrink-0">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </button>
                <div className="h-4 flex items-center gap-0.5">
                  <div className="w-1 bg-white/60 h-2 animate-wave-1"></div>
                  <div className="w-1 bg-white/90 h-4 animate-wave-2"></div>
                  <div className="w-1 bg-white/70 h-3 animate-wave-3"></div>
                  <div className="w-1 bg-white/90 h-4 animate-wave-1"></div>
                  <div className="w-1 bg-white/60 h-2 animate-wave-4"></div>
                </div>
                <span className="text-[10px] font-mono text-blue-100">0:05</span>
              </div>
              <p className="text-xs mt-2 border-t border-white/20 pt-2 font-medium">
                &quot;Does this correlate with the off-target effects mentioned in the discussion?&quot;
              </p>
            </div>
            <span className="text-[10px] text-slate-400 font-medium">Transcribed</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0 overflow-hidden shadow-sm border border-white">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="User" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

