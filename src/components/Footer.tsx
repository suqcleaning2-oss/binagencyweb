import React, { useState } from 'react';
import { Page } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import binUsmanLogo from '../assets/images/bin_usman_logo_1784066891858.jpg';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handlePageClick = (pageId: Page) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#061224] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Abstract mesh background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1E88E5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand Pitch */}
          <div className="space-y-4">
            <button
              onClick={() => handlePageClick('home')}
              className="flex items-center space-x-3 text-left focus:outline-none cursor-pointer"
            >
              <img
                src={binUsmanLogo}
                alt="Bin Usman Logo"
                referrerPolicy="no-referrer"
                className="h-[44px] w-[44px] sm:h-[48px] sm:w-[48px] object-contain rounded-full shadow-md shadow-black/30 border border-white/10"
              />
              <div>
                <span className="block font-bold tracking-tight text-white text-lg leading-tight">
                  BIN USMAN
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-[#D4AF37]">
                  Marketing Agency
                </span>
              </div>
            </button>
            <p className="text-gray-400 text-sm leading-relaxed">
              We empower industry leaders and growing brands with high-retention AI video models, Google ranking domination, high-performance software, and absolute organic follower amplification.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com/binusmanmarketing"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#1E88E5] hover:bg-white/10 transition-all duration-200"
                aria-label="Facebook"
              >
                <DynamicIcon name="Facebook" size={16} />
              </a>
              <a
                href="https://instagram.com/binusmanmarketing"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-pink-500 hover:bg-white/10 transition-all duration-200"
                aria-label="Instagram"
              >
                <DynamicIcon name="Instagram" size={16} />
              </a>
              <a
                href="https://tiktok.com/@binusmanmarketing"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="TikTok"
              >
                <DynamicIcon name="Music" size={16} />
              </a>
              <a
                href="https://youtube.com/binusmanmarketing"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white/10 transition-all duration-200"
                aria-label="YouTube"
              >
                <DynamicIcon name="Tv" size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4 border-b border-white/5 pb-2">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handlePageClick('home')}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('services')}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('about')}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('faqs')}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('privacy')}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer text-left animate-pulse"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('terms')}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                >
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter Sign-up */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4 border-b border-white/5 pb-2">
              Newsletter
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Subscribe to our monthly &quot;Organic Domination Blueprint&quot; newsletter containing SEO secrets and AI tools.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 flex items-center space-x-2 text-xs">
                <CheckCircle2 size={16} className="shrink-0" />
                <span>Excellent! You have been subscribed successfully.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <Mail size={16} />
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute inset-y-1.5 right-1.5 w-8 h-8 rounded-md bg-[#D4AF37] text-[#0B1F3A] flex items-center justify-center hover:bg-[#C5A028] transition-all cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <Send size={14} />
                  </button>
                </div>
                <p className="text-[10px] text-gray-500 text-center">
                  We value security. We never spam your inbox.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Metadata row */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {currentYear} <span className="text-[#D4AF37] font-semibold">Bin Usman Marketing Agency</span>. All Rights Reserved.
          </div>
          
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2">
            <button
              onClick={() => handlePageClick('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handlePageClick('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => handlePageClick('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => handlePageClick('faqs')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              FAQs
            </button>
            <button
              onClick={() => handlePageClick('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handlePageClick('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
