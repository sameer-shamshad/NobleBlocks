import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'amber' | 'red' | 'emerald' | 'cyan' | 'purple' | 'indigo' | 'pink';
  className?: string;
}

const variantStyles = {
  blue: 'bg-blue-50 border-blue-100 text-blue-700',
  amber: 'bg-amber-50 border-amber-100 text-amber-700',
  red: 'bg-red-50 border-red-100 text-red-700',
  emerald: 'bg-emerald-50 border-emerald-100 text-emerald-700',
  cyan: 'bg-cyan-50 border-cyan-100 text-cyan-700',
  purple: 'bg-purple-50 border-purple-100 text-purple-700',
  indigo: 'bg-indigo-50 border-indigo-100 text-indigo-700',
  pink: 'bg-pink-50 border-pink-100 text-pink-700',
};

export default function Badge({ children, variant = 'blue', className = '' }: BadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wide ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}

