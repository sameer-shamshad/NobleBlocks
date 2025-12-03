import React from 'react';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Brand + Links */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand & Contact */}
          <div className="flex flex-col gap-5 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold tracking-tight text-lg">
                Nb
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900">NobleBlocks</span>
            </div>
            <a href="mailto:info@nobleblocks.com" className="text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center gap-2 transition-colors">
              <Mail className="w-4 h-4" /> info@nobleblocks.com
            </a>
          </div>

          {/* Navigation Links (Headerless Grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
            <Link href="#" className="hover:text-slate-900 transition-colors">About</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Community Guideline</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Token Disclaimer</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Peer Review Policy</Link>
          </div>
        </div>

        {/* Bottom Section: Token + Copyright */}
        <div className="border-t border-slate-100 pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Technical Detail */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide shrink-0">NOBL Contract:</span>
            <div className="group flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 w-full sm:w-auto transition-colors hover:border-slate-300 cursor-pointer max-w-full">
              <code className="text-[11px] font-mono text-slate-600 truncate flex-1 sm:flex-none">0xe3e72Ae23dd5bb0EFd7dfE733A58bF6aD57C3945</code>
              <span className="flex items-center gap-1 text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 shrink-0">
                Copied
              </span>
            </div>
          </div>

          {/* Actions & Copyright */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full lg:w-auto justify-between lg:justify-end">
            <span className="text-xs text-slate-400 font-medium order-2 sm:order-1">© 2025 NobleBlocks Ltd.</span>
            <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2.5 px-5 rounded-lg transition-all order-1 sm:order-2">
              Get NOBL
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

