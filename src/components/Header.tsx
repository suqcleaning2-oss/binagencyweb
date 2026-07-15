import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import binUsmanLogo from '../assets/images/bin_usman_logo_1784066891858.jpg';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  onOpenQuote,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About Us', id: 'about' },
    { label: 'FAQs', id: 'faqs' },
    { label: 'Privacy Policy', id: 'privacy' },
    { label: 'Terms & Conditions', id: 'terms' },
  ];

  const handleNavClick = (pageId: Page) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1F3A]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button
            id="logo-button"
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 focus:outline-none group cursor-pointer"
          >
            <img
              src={binUsmanLogo}
              alt="Bin Usman Logo"
              referrerPolicy="no-referrer"
              className="h-[44px] w-[44px] sm:h-[48px] sm:w-[48px] object-contain rounded-full shadow-md shadow-black/30 border border-white/10"
            />
            <div className="text-left">
              <span className="block font-bold tracking-tight text-white text-lg leading-tight group-hover:text-[#D4AF37] transition-colors">
                BIN USMAN
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-[#D4AF37]">
                Marketing Agency
              </span>
            </div>
          </button>

          {/* Desktop Navigation Menu */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  id={`nav-item-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#D4AF37] bg-white/5 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons (Desktop) */}
          <div id="desktop-actions" className="hidden lg:flex items-center space-x-3">
            <a
              id="whatsapp-header-btn"
              href="https://wa.me/923282890374?text=Hi%20Bin%20Usman%20Marketing!%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-center space-x-2 h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm transition-all duration-300 shadow-md hover:shadow-green-500/10 cursor-pointer hover:scale-105 active:scale-95"
            >
              <MessageCircle size={16} />
              <span>Contact Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <a
              id="whatsapp-mobile-header"
              href="https://wa.me/923282890374?text=Hi%20Bin%20Usman%20Marketing!"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-center space-x-1.5 h-10 px-4 sm:px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
            >
              <MessageCircle size={14} />
              <span>Contact Now</span>
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 top-[65px] z-40 bg-[#0B1F3A] border-t border-white/5 lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-3 h-[calc(100vh-65px)] overflow-y-auto bg-[#0B1F3A] flex flex-col justify-between pb-24">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  id={`mobile-nav-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#1E88E5]/20 to-transparent text-[#D4AF37] border-l-4 border-[#D4AF37] pl-3'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-3 px-4">
            <a
              id="whatsapp-mobile-drawer-btn"
              href="https://wa.me/923282890374?text=Hi%20Bin%20Usman%20Marketing!%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noreferrer noopener"
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
            >
              <MessageCircle size={18} />
              <span>Contact Now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
