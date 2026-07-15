import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Eye, 
  CheckCircle2, 
  MessageCircle, 
  Mail, 
  Share2, 
  Search, 
  Code, 
  Smartphone, 
  Video, 
  Palette, 
  Youtube, 
  Instagram, 
  Facebook, 
  TrendingUp, 
  Award, 
  Compass, 
  Clock, 
  Heart, 
  Cpu, 
  Zap, 
  DollarSign, 
  UserCheck
} from 'lucide-react';

export const AboutView: React.FC = () => {
  // Why Choose Us features with custom icons
  const whyChooseUsFeatures = [
    { title: 'Professional Team', icon: UserCheck, desc: 'Highly skilled digital marketers, developers, and designers working as one unit.' },
    { title: 'Result-Oriented Strategies', icon: TrendingUp, desc: 'Tailored roadmaps focused entirely on high conversions and measurable growth.' },
    { title: 'Affordable Pricing', icon: DollarSign, desc: 'Premium, enterprise-grade digital services designed to fit your marketing budget.' },
    { title: 'Fast Project Delivery', icon: Clock, desc: 'Punctual milestones and swift turnaround times without sacrificing layout quality.' },
    { title: 'Modern AI Solutions', icon: Cpu, desc: 'Leveraging cutting-edge generative AI tools for videos, content, and automation.' },
    { title: '24/7 Customer Support', icon: MessageCircle, desc: 'Always available via WhatsApp and active communication channels for complete peace of mind.' },
    { title: '100% Client Satisfaction', icon: Heart, desc: 'We iterate meticulously until the solution matches your custom business visions.' },
    { title: 'Custom Business Solutions', icon: Zap, desc: 'Zero generic templates. Every strategy is built from scratch around your brand goals.' }
  ];

  // Services offered with custom icons and descriptions
  const servicesList = [
    { title: 'Social Media Marketing', icon: Share2, desc: 'Dominating feeds across platforms with engaging, highly strategic campaigns.' },
    { title: 'Search Engine Optimization (SEO)', icon: Search, desc: 'Climbing search results to drive high-intent organic traffic around the clock.' },
    { title: 'Website Development', icon: Code, desc: 'High-speed, custom-coded web experiences built with modern UI standards.' },
    { title: 'Mobile App Development', icon: Smartphone, desc: 'Sleek, responsive native and hybrid applications with seamless flow.' },
    { title: 'AI Video Creation', icon: Video, desc: 'Cutting-edge AI video editing, pacing, and high-impact visual narrative.' },
    { title: 'Graphic Designing', icon: Palette, desc: 'Premium branding elements, custom vectors, and eye-catching marketing collateral.' },
    { title: 'YouTube Monetization', icon: Youtube, desc: 'Accelerated channel growth, viral structure consulting, and visual optimization.' },
    { title: 'Instagram Organic Followers', icon: Instagram, desc: 'Aesthetic consistency and targeted community building for authentic scaling.' },
    { title: 'Facebook Organic Followers', icon: Facebook, desc: 'Interactive group engagement, page hygiene, and targeted audience outreach.' },
    { title: 'TikTok Organic Followers', icon: Compass, desc: 'Unlocking algorithmic momentum using trending loops, audios, and viral styles.' }
  ];

  // WhatsApp Contact Trigger helper
  const handleWhatsAppClick = () => {
    const text = "Hi Bin Usman Marketing Team! I visited your About Us page and want to scale my business.";
    const url = `https://wa.me/923282890374?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="about-view" className="space-y-24 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. HERO HEADER SECTION */}
      <section id="about-hero" className="relative text-center py-16 sm:py-24 rounded-3xl overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#1E88E5]/10 rounded-full blur-3xl pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-3xl mx-auto relative z-10"
        >
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Award size={14} className="animate-pulse" />
            <span>EXECUTIVE DIGITAL AGENCY</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight font-display leading-none">
            About Bin Usman <br />
            <span className="royal-gradient-text mt-2 block">Marketing Agency</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed pt-2">
            Helping startups, small businesses, and established companies build premium digital presence, capture audiences, and scale organic brand growth.
          </p>
        </motion.div>
      </section>

      {/* 2. THE STORY SECTION */}
      <section id="agency-story" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
            Who We Are
          </h2>
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed font-light">
            <p>
              At <strong className="text-[#D4AF37] font-semibold">Bin Usman Marketing Agency</strong>, we help businesses build a strong digital presence and achieve real business growth through innovative marketing strategies and modern technology.
            </p>
            <p>
              Our mission is to provide high-quality, result-driven digital solutions that help brands reach more customers, increase engagement, and generate long-term success.
            </p>
            <p>
              We specialize in creating powerful online experiences through digital marketing, SEO, website development, mobile app development, AI-powered videos, graphic design, YouTube monetization, and organic social media growth.
            </p>
            <p>
              Our experienced team focuses on creativity, transparency, and customer satisfaction. Every project is handled with attention to detail, ensuring that our clients receive professional solutions tailored to their business goals.
            </p>
            <p>
              Whether you are a startup, a small business, or an established company, Bin Usman Marketing Agency is committed to helping you grow with reliable, affordable, and innovative digital services.
            </p>
          </div>
        </motion.div>

        {/* Visual Story Representation */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Bin Usman Agency Workspace"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-panel border border-white/10 backdrop-blur-md">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block mb-1">Our Core Commitment</span>
              <p className="text-xs text-white leading-relaxed font-light">
                Every business model deserves elegant code, original creatives, and organic traffic growth that actually moves the revenue needle.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. MISSION & VISION DUAL CARDS */}
      <section id="mission-vision" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-3xl glass-panel border border-white/5 space-y-4 relative overflow-hidden group hover:border-[#1E88E5]/30 transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#1E88E5]/5 rounded-bl-full pointer-events-none" />
          <div className="w-12 h-12 rounded-2xl bg-[#1E88E5]/10 border border-[#1E88E5]/20 flex items-center justify-center text-[#1E88E5]">
            <Target size={24} />
          </div>
          <h3 className="text-xl font-bold text-white font-display">Our Mission</h3>
          <p className="text-gray-300 text-sm leading-relaxed font-light">
            To empower businesses with innovative digital solutions that drive measurable growth, strengthen brand identity, and create lasting success in the digital world.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-8 rounded-3xl glass-panel border border-white/5 space-y-4 relative overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-bl-full pointer-events-none" />
          <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
            <Eye size={24} />
          </div>
          <h3 className="text-xl font-bold text-white font-display">Our Vision</h3>
          <p className="text-gray-300 text-sm leading-relaxed font-light">
            To become one of the leading digital marketing agencies recognized for creativity, innovation, quality, and exceptional customer service worldwide.
          </p>
        </motion.div>
      </section>

      {/* 4. WHY CHOOSE US (8 Premium Cards Grid) */}
      <section id="why-choose-us" className="space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[#1E88E5] text-xs font-bold uppercase tracking-widest">UNCOMPROMISING EXECUTION</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Why Choose Us
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">
            We align premium aesthetics with measurable strategic outcomes to accelerate your market prominence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsFeatures.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-2xl glass-panel border border-white/5 hover:border-[#D4AF37]/20 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-all duration-300">
                    <IconComp size={18} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-white leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">{feat.title}</h4>
                    <p className="text-gray-400 text-[11px] leading-relaxed font-light">{feat.desc}</p>
                  </div>
                </div>
                
                {/* Visual Accent checkmark icon */}
                <div className="pt-4 flex items-center text-[10px] text-gray-500 font-mono gap-1">
                  <CheckCircle2 size={10} className="text-emerald-500" />
                  <span>Verified Choice</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. OUR SERVICES GRID (10 Premium Services) */}
      <section id="about-services-catalog" className="space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">COMPLETE CORE CATALOG</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Our Services
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">
            We scale digital businesses using precision instruments, creative copywriting, and flawless platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {servicesList.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-5 rounded-2xl glass-panel border border-white/5 flex flex-col justify-between text-left hover:border-[#1E88E5]/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#1E88E5] group-hover:bg-[#1E88E5]/10 group-hover:border-[#1E88E5]/30 transition-all duration-300">
                    <IconComp size={16} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-white leading-tight group-hover:text-[#1E88E5] transition-colors duration-300">{srv.title}</h4>
                    <p className="text-gray-400 text-[10px] leading-relaxed font-light">{srv.desc}</p>
                  </div>
                </div>
                
                <span className="text-[9px] text-[#D4AF37] font-mono mt-3 block group-hover:underline cursor-pointer">
                  Premium Category
                </span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 6. CONTACT INFORMATION SECTION */}
      <section id="about-contact" className="relative p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 text-center overflow-hidden">
        {/* Glow behind contact */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-8 relative z-10"
        >
          <div className="space-y-2">
            <span className="text-[#25D366] text-xs font-bold uppercase tracking-widest block">LET'S START CONVERSATION</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Contact Information
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto font-light">
              Get in touch with Bin Usman Marketing Agency directly. Connect with us on WhatsApp or shoot us an email for inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            {/* WhatsApp Contact */}
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-between p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer text-left"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <span className="text-[10px] text-green-400 uppercase tracking-widest font-bold">WhatsApp Us</span>
                  <p className="text-white text-xs font-semibold mt-0.5">+92 328 2890374</p>
                </div>
              </div>
            </button>

            {/* Email Contact */}
            <a
              href="mailto:binusmangrp@gmail.com"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 hover:bg-[#D4AF37]/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer text-left"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37] flex items-center justify-center text-[#0B1F3A]">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">Email Directly</span>
                  <p className="text-white text-xs font-semibold mt-0.5">binusmangrp@gmail.com</p>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
};
