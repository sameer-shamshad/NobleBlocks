'use client';

import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-panel" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold tracking-tight text-lg shadow-lg shadow-slate-900/20">
            Nb
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">NobleBlocks</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <Link href="#features" className="hover:text-slate-900 transition-colors">Tools</Link>
          <Link href="#community" className="hover:text-slate-900 transition-colors">Community</Link>
          <Link href="#plans" className="hover:text-slate-900 transition-colors">Plans</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-semibold text-slate-500 hover:text-slate-900">Log in</button>
          <button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold py-2 px-4 rounded-full transition-all hover:shadow-lg whitespace-nowrap">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

