import React, { useState } from 'react';
import { Page } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

// Subviews
import { HomeView } from './components/views/HomeView';
import { ServicesView } from './components/views/ServicesView';
import { AboutView } from './components/views/AboutView';
import { BlogView } from './components/views/BlogView';
import { FAQsView } from './components/views/FAQsView';
import { PolicyViews } from './components/views/PolicyViews';
import { Error404View } from './components/views/Error404View';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  
  // Handle preselecting a service from Service card and opening WhatsApp directly
  const handleOpenQuoteWithService = (serviceId: string) => {
    const text = `Hi Bin Usman Marketing Team! I am interested in your service: ${serviceId}.`;
    const url = `https://wa.me/923282890374?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenGeneralQuote = () => {
    const text = `Hi Bin Usman Marketing Team! I want to grow my business.`;
    const url = `https://wa.me/923282890374?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Handle highlighting service from Home Page learn more click
  const [focusedServiceId, setFocusedServiceId] = useState<string | null>(null);

  const handleSelectServiceFromHome = (serviceId: string) => {
    setFocusedServiceId(serviceId);
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render the current view template
  const renderCurrentView = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomeView
            setCurrentPage={setCurrentPage}
            onOpenQuote={handleOpenGeneralQuote}
            onSelectService={handleSelectServiceFromHome}
          />
        );
      case 'services':
        return (
          <ServicesView
            onOpenQuoteWithService={handleOpenQuoteWithService}
            activeServiceId={focusedServiceId}
            clearActiveServiceId={() => setFocusedServiceId(null)}
          />
        );
      case 'about':
        return <AboutView />;
      case 'blog':
        return <BlogView />;
      case 'faqs':
        return <FAQsView />;
      case 'privacy':
        return <PolicyViews type="privacy" />;
      case 'terms':
        return <PolicyViews type="terms" />;
      case 'cookies':
        return <PolicyViews type="cookies" />;
      case '404':
        return <Error404View setCurrentPage={setCurrentPage} />;
      default:
        return <Error404View setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0B1F3A] text-white overflow-x-hidden selection:bg-[#D4AF37] selection:text-[#0B1F3A]">
      
      {/* Absolute floating lights across site background */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-radial from-[#1E88E5]/5 to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-radial from-[#D4AF37]/3 to-transparent pointer-events-none z-0" />

      {/* Sticky Top Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* Main Dynamic Workspace with page transitions */}
      <main className="flex-grow pt-24 relative z-10">
        <div className="transition-opacity duration-300">
          {renderCurrentView()}
        </div>
      </main>

      {/* Executive Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Floating Interaction Controls */}
      <FloatingActions />

    </div>
  );
}
