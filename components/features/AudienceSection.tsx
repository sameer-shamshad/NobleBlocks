import React from 'react';
import { Users } from 'lucide-react';
import Badge from '../ui/Badge';
import FeatureSection from './FeatureSection';

export default function AudienceSection() {
  return (
    <FeatureSection bgColor="slate-50">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Block */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-none order-2 lg:order-1">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-400 to-orange-400 p-[2px] shrink-0">
                <div className="w-full h-full bg-white rounded-full p-0.5">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" className="w-full h-full rounded-full object-cover" alt="Profile" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">Sarah Jenning</h3>
                    <p className="text-sm text-slate-500">Molecular Biologist @ MIT</p>
                  </div>
                  <button className="bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-slate-800">Follow</button>
                </div>
                <div className="flex gap-4 mt-3 text-sm">
                  <span><strong className="text-slate-900">1.2k</strong> Followers</span>
                  <span><strong className="text-slate-900">85</strong> Papers</span>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">💬</div>
                <div>
                  <p className="text-sm text-slate-800"><span className="font-bold">Sarah</span> commented on <span className="text-blue-600 font-medium cursor-pointer">CRISPR Editing v2</span></p>
                  <p className="text-sm text-slate-500 mt-1">&quot;The methodology section in this preprint is incredibly detailed. Have you considered...&quot;</p>
                  <div className="flex gap-4 mt-2 text-xs text-slate-400">
                    <span className="hover:text-slate-600 cursor-pointer">Like</span>
                    <span className="hover:text-slate-600 cursor-pointer">Reply</span>
                    <span>2h ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Block */}
        <div className="space-y-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-1 lg:order-2">
          <div className="space-y-4">
            <Badge variant="pink">
              <Users className="w-3 h-3" /> Network
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Build <span className="text-pink-600 block sm:inline">Audience.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Connect with other researchers. Follow profiles, comment, and build a following. Science is better when we talk about it.
            </p>
          </div>
        </div>
      </div>
    </FeatureSection>
  );
}

