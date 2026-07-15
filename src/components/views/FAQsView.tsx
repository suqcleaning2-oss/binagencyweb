import React, { useState } from 'react';
import { FAQS_DATA } from '../../data';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

export const FAQsView: React.FC = () => {
  const categories = ['All', 'SEO', 'Web & App', 'AI & Design', 'Marketing & Growth'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item expanded by default

  const filteredFaqs = activeCategory === 'All'
    ? FAQS_DATA
    : FAQS_DATA.filter(faq => faq.category === activeCategory);

  const toggleExpand = (idx: number) => {
    if (expandedIndex === idx) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(idx);
    }
  };

  return (
    <div id="faqs-view" className="space-y-16 py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
          <HelpCircle size={14} />
          <span>INSTANT ANSWERS TO DIGITAL STRATEGIES</span>
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-display">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-300 text-sm leading-relaxed">
          Explore quick answers to our technical coding stacks, organic social media growth methodologies, cinematic video render timetables, and NDA guarantees.
        </p>
      </div>

      {/* Category Selection Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveCategory(cat);
              setExpandedIndex(null); // Reset expands to avoid confusion
            }}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#1E88E5] text-white shadow-md'
                : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Expandable FAQs Accordion */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 ${
                isExpanded
                  ? 'bg-gradient-to-tr from-[#1E88E5]/10 to-[#0B1F3A] border-[#D4AF37]/40 shadow-md'
                  : 'bg-white/5 border-white/5 hover:border-white/10'
              }`}
            >
              
              {/* Question Trigger */}
              <button
                id={`faq-trigger-${idx}`}
                onClick={() => toggleExpand(idx)}
                className="w-full text-left p-6 flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
              >
                <div className="flex items-center space-x-3 text-left">
                  <span className="text-[#D4AF37] shrink-0 font-mono text-sm font-bold">
                    Q{idx + 1}.
                  </span>
                  <span className="font-bold text-white text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                </div>
                
                <span className={`text-[#D4AF37] transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-180' : ''}`}>
                  <ChevronDown size={18} />
                </span>
              </button>

              {/* Collapsible Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 text-left ${
                  isExpanded ? 'max-h-[300px] border-t border-white/5' : 'max-h-0'
                }`}
              >
                <div className="p-6 text-xs sm:text-sm text-gray-300 leading-relaxed font-light space-y-3">
                  <p>{faq.answer}</p>
                  
                  {/* Category label indicator */}
                  <div className="flex items-center space-x-2 pt-2 text-[9px] font-mono uppercase text-gray-500 font-bold">
                    <ShieldCheck size={10} className="text-[#D4AF37]" />
                    <span>Topic category: {faq.category}</span>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Call to action footer box */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/5 text-center space-y-3">
        <h3 className="font-bold text-lg text-white font-display">Have other technical or project-specific queries?</h3>
        <p className="text-gray-400 text-xs max-w-xl mx-auto">
          We are available around the clock. Engage directly with our senior strategy directors via our instant WhatsApp link or request a zoom callback proposal.
        </p>
        <div className="flex justify-center pt-2">
          <a
            href="https://wa.me/923282890374?text=Hi%20Bin%20Usman%20Marketing!%20I%20have%20some%20questions%20regarding%20your%20services."
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold text-xs shadow-lg transition-all flex items-center space-x-1.5 cursor-pointer"
          >
            <span>Ask us on WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
};
