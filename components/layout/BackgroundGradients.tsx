import React from 'react';

export default function BackgroundGradients() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="blob bg-blue-50 w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"></div>
      <div className="blob bg-purple-50 w-[600px] h-[600px] rounded-full top-1/2 right-0 translate-x-1/3 -translate-y-1/2 mix-blend-multiply"></div>
    </div>
  );
}

