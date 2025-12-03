import React from 'react';

interface SectionHeaderProps {
  badge?: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({ badge, title, description, className = '' }: SectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      {badge && <div className="mb-3">{badge}</div>}
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto px-4">{description}</p>
      )}
    </div>
  );
}

