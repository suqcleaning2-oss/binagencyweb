import React, { useState } from 'react';
import { Service } from '../../types';
import { SERVICES_DATA } from '../../data';
import { DynamicIcon } from '../DynamicIcon';
import { Check, ArrowRight, ShieldCheck, Search } from 'lucide-react';

interface ServicesViewProps {
  onOpenQuoteWithService: (serviceId: string) => void;
  activeServiceId: string | null;
  clearActiveServiceId: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onOpenQuoteWithService,
  activeServiceId,
  clearActiveServiceId,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const getWhatsAppLink = (serviceId: string) => {
    const baseUrl = "https://wa.me/923282890374?text=";
    let message = "";
    switch (serviceId) {
      case 'social-media':
        message = "Hi Bin Usman Marketing Agency, I need Social Media Marketing services.";
        break;
      case 'seo':
        message = "Hi Bin Usman Marketing Agency, I need SEO services.";
        break;
      case 'web-dev':
        message = "Hi Bin Usman Marketing Agency, I need a professional website.";
        break;
      case 'app-dev':
        message = "Hi Bin Usman Marketing Agency, I need a mobile application.";
        break;
      case 'ai-videos':
        message = "Hi Bin Usman Marketing Agency, I need AI video services.";
        break;
      case 'graphic-design':
        message = "Hi Bin Usman Marketing Agency, I need graphic design services.";
        break;
      case 'youtube-growth':
        message = "Hi Bin Usman Marketing Agency, I need YouTube Monetization services.";
        break;
      case 'instagram-followers':
        message = "Hi Bin Usman Marketing Agency, I need Instagram Organic Followers.";
        break;
      case 'facebook-followers':
        message = "Hi Bin Usman Marketing Agency, I need Facebook Organic Followers.";
        break;
      case 'tiktok-followers':
        message = "Hi Bin Usman Marketing Agency, I need TikTok Organic Followers.";
        break;
      default:
        message = "Hi Bin Usman Marketing Agency, I'm interested in your digital marketing services.";
    }
    return baseUrl + encodeURIComponent(message);
  };

  // Handle highlighted service focus
  React.useEffect(() => {
    if (activeServiceId) {
      const element = document.getElementById(`service-card-${activeServiceId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Pulse background accent briefly
        element.classList.add('ring-2', 'ring-[#D4AF37]');
        const timer = setTimeout(() => {
          element.classList.remove('ring-2', 'ring-[#D4AF37]');
          clearActiveServiceId();
        }, 3000);
        return () => clearTimeout(timer);
      }
    }
  }, [activeServiceId, clearActiveServiceId]);

  const filteredServices = SERVICES_DATA.filter(srv =>
    srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    srv.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    srv.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div id="services-view" className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
          <ShieldCheck size={14} />
          <span>ALGORITHMIC DIGITAL EXCELLENCE</span>
        </span>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white font-display">
          Our Premium Services
        </h1>
        <p className="text-gray-300 text-sm leading-relaxed">
          We completely reject slow web builders and bot follower scams. We engineer custom high-conversion software, programmatic SEO keywords, and authentic organic media followings that keep your business scaling.
        </p>

        {/* Dynamic Search bar to filter services */}
        <div className="pt-4 max-w-md mx-auto relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search core services (e.g., SEO, React, TikTok)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
          />
        </div>
      </div>

      {/* Services Grid Layout */}
      {filteredServices.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400">No service matching &quot;{searchQuery}&quot; was found. Contact us directly for a custom quote.</p>
          <button
            onClick={() => setSearchQuery('')}
            className="mt-4 text-xs font-bold text-[#D4AF37] hover:underline"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              id={`service-card-${service.id}`}
              key={service.id}
              className="rounded-[18px] overflow-hidden glass-panel glass-panel-hover flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              
              <div>
                {/* Header Image Related directly to Service */}
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/20 to-transparent" />
                  
                  {/* Absolute top badge icon */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-[#0B1F3A] border border-white/10 flex items-center justify-center text-[#D4AF37] shadow-lg">
                    <DynamicIcon name={service.iconName} size={20} />
                  </div>
                </div>

                {/* Service Card Details */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white font-display leading-tight">{service.title}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed font-light">{service.description}</p>
                  
                  {/* Features Bullet List */}
                  <div className="border-t border-white/5 pt-4 space-y-2.5">
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Included Deliverables:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-gray-300">
                          <Check size={14} className="text-green-400 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Actions */}
              <div className="p-6 pt-0">
                <a
                  id={`srv-whatsapp-btn-${service.id}`}
                  href={getWhatsAppLink(service.id)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-xs font-bold text-white transition-all duration-300 shadow-md hover:shadow-green-500/15 hover:scale-[1.03] active:scale-95 cursor-pointer text-center"
                >
                  <span>💬 WhatsApp Us</span>
                </a>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Trust Quote CTA Footnote */}
      <div className="rounded-2xl bg-gradient-to-tr from-[#1E88E5]/10 via-[#D4AF37]/5 to-transparent p-6 sm:p-8 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center sm:text-left">
          <h3 className="font-bold text-lg text-white font-display">Need a Fully Customized Marketing Bundle?</h3>
          <p className="text-xs text-gray-300 max-w-xl">
            We understand every business is unique. We can coordinate custom combinations of app development, cinematic video schedules, and international link acquisition.
          </p>
        </div>
        
        <button
          onClick={() => onOpenQuoteWithService('custom-full-bundle')}
          className="px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#C5A028] text-[#0B1F3A] font-bold text-xs transition-all whitespace-nowrap cursor-pointer shadow-md"
        >
          Request Custom Proposal
        </button>
      </div>

    </div>
  );
};
