'use client';

import React from 'react';
import Button from '../ui/Button';

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Turn your next paper into impact,<br />not just another PDF.
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Join thousands of researchers using AI to validate, visualize, and amplify their work on NobleBlocks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="shadow-xl shadow-slate-900/20 hover:scale-105">
            Create your NobleBlocks account
          </Button>
        </div>
        <p className="mt-6 text-xs text-slate-500">No credit card required for Starter plan.</p>
      </div>
    </section>
  );
}

