import React from 'react';
import { Share2, Eye, Download } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import FeatureSection from './FeatureSection';

export default function PublishSection() {
  return (
    <FeatureSection bgColor="white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Block */}
        <div className="space-y-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-1">
          <div className="space-y-4">
            <Badge variant="indigo">
              <Share2 className="w-3 h-3" /> Open Access
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Publish <span className="text-indigo-600 block sm:inline">Preprints.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Get your manuscripts into the world with a permanent public record. Assign DOIs and get feedback before peer review.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start">
            <Button className="bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-900/20">
              Upload Manuscript
            </Button>
          </div>
        </div>

        {/* Image Block */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-none mt-2 lg:mt-0 order-2">
          <div className="bg-white rounded-xl border border-slate-200 shadow-2xl p-6 relative rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-mono">doi:10.1109/NB.2023.01</div>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">Published</span>
            </div>
            <h3 className="font-bold text-slate-900 text-xl mb-2">A Novel Approach to Quantum Error Correction in Low-Temperature Systems</h3>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
              </div>
              <span className="text-sm text-slate-500">Dr. Kline et al.</span>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-500 italic mb-4 border border-slate-100">
              &quot;We propose a new error correction code that achieves 99.9% fidelity...&quot;
            </div>
            <div className="flex gap-3 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> 1.2k Views</span>
              <span className="flex items-center gap-1"><Download className="w-4 h-4" /> 340 Downloads</span>
            </div>
          </div>
        </div>
      </div>
    </FeatureSection>
  );
}

