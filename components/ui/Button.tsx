import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  primary: 'bg-slate-900 hover:bg-slate-800 text-white',
  secondary: 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200',
  outline: 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200',
};

const sizeStyles = {
  sm: 'text-sm py-2 px-4',
  md: 'text-base py-3.5 px-8',
  lg: 'text-base py-4 px-10',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-full transition-all whitespace-nowrap';
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

