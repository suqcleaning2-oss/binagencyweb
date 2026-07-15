import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Button Container */}
      <div id="floating-actions-container" className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3">
        
        {/* Back to Top Button */}
        <button
          id="back-to-top"
          onClick={scrollToTop}
          className={`w-12 h-12 rounded-full glass-panel border border-[#D4AF37]/30 text-[#D4AF37] hover:text-white hover:bg-[#D4AF37]/20 flex items-center justify-center shadow-xl cursor-pointer transition-all duration-300 transform ${
            showScroll ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
          }`}
          aria-label="Scroll back to top"
        >
          <ArrowUp size={22} />
        </button>

        {/* WhatsApp Float Chat Bubble */}
        <a
          id="whatsapp-float"
          href="https://wa.me/923282890374?text=Hi%20Bin%20Usman%20Marketing!%20I'm%20looking%20to%20grow%20my%20business."
          target="_blank"
          rel="noreferrer noopener"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-2xl relative group transition-all duration-300 transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing glow ring */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
          
          <MessageCircle size={28} className="relative z-10" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-16 bg-[#0B1F3A] text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Chat with Experts (Online)
          </span>
        </a>
      </div>

      {/* Mobile Sticky CTA ("Get a Free Quote") */}
      <div
        id="mobile-sticky-cta"
        className="fixed bottom-0 left-0 right-0 z-40 glass-panel border-t border-white/10 px-4 py-3 flex items-center justify-between sm:hidden shadow-2xl"
      >
        <div className="text-left">
          <p className="text-[10px] uppercase tracking-wider text-[#25D366] font-semibold leading-none">Instant Growth</p>
          <h4 className="text-xs font-bold text-white mt-0.5">Complimentary Audit</h4>
        </div>
        
        <a
          href="https://wa.me/923282890374?text=Hi%20Bin%20Usman%20Marketing!%20I%20would%20like%20a%20free%20quote%20for%20my%20business."
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center space-x-1.5 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer hover:scale-105"
        >
          <MessageCircle size={14} />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </>
  );
};
