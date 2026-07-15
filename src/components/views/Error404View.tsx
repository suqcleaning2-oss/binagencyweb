import React from 'react';
import { Page } from '../../types';
import { ShieldAlert, Home, ArrowLeft } from 'lucide-react';

interface Error404ViewProps {
  setCurrentPage: (page: Page) => void;
}

export const Error404View: React.FC<Error404ViewProps> = ({ setCurrentPage }) => {
  const handleReturn = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="404-view" className="py-24 max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 flex flex-col justify-center items-center min-h-[60vh]">
      
      {/* Decorative pulse glow */}
      <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37] text-[#D4AF37] flex items-center justify-center animate-pulse">
        <ShieldAlert size={36} />
      </div>

      <div className="space-y-3">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">
          ERROR CODE: 404
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight leading-none">
          Page Not Found
        </h1>
        <p className="text-gray-300 text-sm leading-relaxed font-light">
          We apologize, but the specified marketing pipeline or resource path does not exist inside our directory networks. It might have been re-organized or updated to maintain faster loading velocity.
        </p>
      </div>

      {/* Action buttons */}
      <div className="pt-2">
        <button
          onClick={handleReturn}
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#C5A028] text-[#0B1F3A] font-bold text-xs shadow-md transition-all cursor-pointer"
        >
          <Home size={14} />
          <span>Return to Safe Dashboard</span>
        </button>
      </div>

    </div>
  );
};
