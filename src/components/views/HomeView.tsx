import React, { useState, useEffect } from 'react';
import { Page, Service } from '../../types';
import { SERVICES_DATA, TRUSTED_LOGOS } from '../../data';
import { DynamicIcon } from '../DynamicIcon';
import { ArrowRight, Star, ChevronLeft, ChevronRight, CheckCircle, Award, Sparkles, MessageSquare, Play, Globe, TrendingUp, Video, Layers, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import aiRobotHero from '../../assets/images/ai_robot_hero_1784112219809.jpg';

interface HomeViewProps {
  setCurrentPage: (page: Page) => void;
  onOpenQuote: () => void;
  onSelectService: (srvId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setCurrentPage,
  onOpenQuote,
  onSelectService,
}) => {
  // Counters State
  const [stats, setStats] = useState({ projects: 0, clients: 0, experts: 0, support: '' });

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

  useEffect(() => {
    // Elegant counter ticks on mount
    let prj = 0;
    let clt = 0;
    let exp = 0;

    const interval = setInterval(() => {
      let updated = false;
      if (prj < 100) { prj += 4; updated = true; }
      if (clt < 50) { clt += 2; updated = true; }
      if (exp < 10) { exp += 1; updated = true; }

      setStats({
        projects: Math.min(prj, 100),
        clients: Math.min(clt, 50),
        experts: Math.min(exp, 10),
        support: '24/7'
      });

      if (!updated) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Testimonials Slider
  const testimonials = [
    {
      name: 'Muhammad Ali',
      role: 'CEO, Apex Group Holdings',
      text: 'Bin Usman Marketing Agency completely revolutionized our digital pipeline. Their custom React website increased our qualified lead generation by over 140% in just six weeks, and their technical SEO keeps us ranking at the top page of Google!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    {
      name: 'Amara Jenkins',
      role: 'Founder, Velvet Threads Boutique',
      text: 'Their AI Cinematic Videos are pure magic. We ran an organic TikTok & Instagram campaign which secured over 4 million cumulative views and returned an incredible 4.8x Return on Ad Spend! Highly recommended.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80'
    },
    {
      name: 'Ahmad Khan',
      role: 'Marketing Lead, CloudTask Systems',
      text: 'Superb team. Fast, dedicated, and highly expert in their execution. We went from completely unranked to top 3 position on search engines for 8 of our highest-converting keywords. Absolute game changers.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Featured 3 services preview
  const featuredServices = SERVICES_DATA.slice(0, 3);

  // Process Timeline steps
  const processSteps = [
    { name: 'Discovery', num: '01', desc: 'Deep-dive audit into your competitors, brand ranks, and organic keywords.' },
    { name: 'Planning', num: '02', desc: 'Crafting custom script frameworks, wireframes, and dynamic traffic maps.' },
    { name: 'Design', num: '03', desc: 'Developing luxury UI/UX vectors, brand layouts, and viral hook assets.' },
    { name: 'Development', num: '04', desc: 'Constructing pixel-perfect React platforms and fast mobile interfaces.' },
    { name: 'Marketing', num: '05', desc: 'Deploying high-retention AI videos, SEO clusters, and daily algorithm hooks.' },
    { name: 'Growth', num: '06', desc: 'Scaling operations with 24/7 monitoring, Slack updates, and conversion audits.' }
  ];

  return (
    <div id="home-view" className="space-y-24">
      
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
        
        {/* Subtle premium glowing mesh or light nodes */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#1E88E5]/15 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-[#1E88E5]/5 rounded-full blur-[150px] pointer-events-none" />

        {/* Premium cyber grid pattern backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,136,229,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(30,136,229,0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40 z-0" />

        {/* Delicate cybernetic network lines */}
        <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E88E5]/20 to-transparent pointer-events-none z-0" />
        <div className="absolute bottom-[35%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent pointer-events-none z-0" />

        {/* Floating background matrix-like stars/particles */}
        <div className="absolute top-[35%] left-[12%] w-1.5 h-1.5 rounded-full bg-[#1E88E5]/40 animate-ping pointer-events-none" />
        <div className="absolute top-[60%] right-[18%] w-2 h-2 rounded-full bg-[#D4AF37]/30 animate-ping pointer-events-none" />
        <div className="absolute bottom-[25%] left-[22%] w-1 h-1 rounded-full bg-[#1E88E5]/30 animate-pulse pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative min-h-[70vh]">
            
            {/* Hero Left Content - placed on the left on desktop, underneath robot on mobile */}
            <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 text-center lg:text-left relative z-20 max-w-2xl mx-auto lg:mx-0">
              
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
                <Sparkles size={14} className="animate-spin text-[#D4AF37]" />
                <span>Next-Gen Marketing Engineered with AI</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
                Grow Your Business <br />
                <span className="gold-gradient-text">with Digital Marketing &amp; AI</span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                Helping businesses grow with modern marketing, SEO, websites, mobile apps, AI content, cinematic video editing and organic branding solutions. We align with search engine and social algorithms to secure market domination.
              </p>

              {/* CTAs */}
              <div className="flex justify-center lg:justify-start pt-4">
                <button
                  id="hero-cta-get-started"
                  onClick={() => {
                    setCurrentPage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group px-10 py-5 rounded-full bg-gradient-to-r from-[#1E88E5] via-[#D4AF37] to-[#1E88E5] bg-[length:200%_auto] text-white font-extrabold text-base sm:text-lg transition-all duration-500 shadow-[0_10px_30px_rgba(30,136,229,0.35)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)] flex items-center justify-center space-x-3 cursor-pointer hover:scale-105 active:scale-95 hover:bg-[right_center]"
                >
                  <span>Get Started Now</span>
                  <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </div>

              {/* Bullet Trust indicators */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="flex items-center space-x-2 text-xs text-gray-300">
                  <CheckCircle size={14} className="text-[#D4AF37]" />
                  <span>100% Organic Growth</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-300">
                  <CheckCircle size={14} className="text-[#D4AF37]" />
                  <span>Custom Code &amp; Design</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-300">
                  <CheckCircle size={14} className="text-[#D4AF37]" />
                  <span>AI-Augmented Velocity</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-300">
                  <CheckCircle size={14} className="text-[#D4AF37]" />
                  <span>24/7 Slack Partnership</span>
                </div>
              </div>

            </div>

            {/* Hero Right Visual Deck: Large Ultra-Realistic 3D AI Robot - placed on the right on desktop, top on mobile */}
            <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center items-center z-20 w-full overflow-visible select-none lg:select-auto">
              <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[480px] aspect-square flex items-center justify-center">
                
                {/* Neon glowing halos behind the robot */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#1E88E5]/20 to-[#D4AF37]/15 blur-3xl opacity-80 animate-pulse pointer-events-none" />
                <div className="absolute inset-[-12px] rounded-full border border-dashed border-[#1E88E5]/20 animate-[spin_60s_linear_infinite] pointer-events-none" />
                <div className="absolute inset-[20px] rounded-full border border-double border-[#D4AF37]/10 animate-[spin_30s_linear_infinite_reverse] pointer-events-none" />
                
                {/* 3D AI Robot Image - Framer Motion floating container */}
                <motion.div
                  className="relative w-full h-full z-10 flex items-center justify-center overflow-visible"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Clean, sharp representation with a radial transparency mask to blend seamlessly */}
                  <img
                    src={aiRobotHero}
                    alt="World-Class AI Robot"
                    referrerPolicy="no-referrer"
                    className="w-[95%] h-[95%] object-contain select-none filter drop-shadow-[0_0_35px_rgba(30,136,229,0.3)]"
                    style={{
                      maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                      WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)'
                    }}
                  />
                </motion.div>

                {/* Hologram Badge 1: SEO Analytics */}
                <motion.div
                  className="absolute top-[-4%] left-[-5%] sm:left-[-10%] lg:top-[-10%] lg:left-[-15%] z-30 backdrop-blur-md bg-[#061224]/85 border border-white/10 rounded-xl lg:rounded-2xl p-2 lg:p-3 shadow-2xl flex items-center space-x-2 lg:space-x-3 max-w-[125px] sm:max-w-[145px] lg:max-w-[175px] pointer-events-auto"
                  animate={{
                    y: [0, -6, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-lg lg:rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <TrendingUp size={14} className="lg:w-[18px] lg:h-[18px]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[8px] lg:text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold leading-none mb-1">SEO Analytics</p>
                    <p className="text-white text-[10px] lg:text-xs font-black leading-none">Rank #1 SEO</p>
                  </div>
                </motion.div>

                {/* Hologram Badge 2: Website Development */}
                <motion.div
                  className="absolute top-[8%] right-[-5%] sm:right-[-10%] lg:top-[5%] lg:right-[-15%] z-30 backdrop-blur-md bg-[#061224]/85 border border-white/10 rounded-xl lg:rounded-2xl p-2 lg:p-3 shadow-2xl flex items-center space-x-2 lg:space-x-3 max-w-[125px] sm:max-w-[145px] lg:max-w-[175px] pointer-events-auto"
                  animate={{
                    y: [0, -8, 0]
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-lg lg:rounded-xl bg-[#1E88E5]/10 border border-[#1E88E5]/30 flex items-center justify-center text-[#1E88E5] shrink-0">
                    <Globe size={14} className="lg:w-[18px] lg:h-[18px]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[8px] lg:text-[10px] font-mono tracking-widest text-[#1E88E5] uppercase font-bold leading-none mb-1">Web Dev</p>
                    <p className="text-white text-[10px] lg:text-xs font-black leading-none flex items-center space-x-1">
                      <span>Speed 100%</span>
                      <span className="flex h-1.5 w-1.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                      </span>
                    </p>
                  </div>
                </motion.div>

                {/* Hologram Badge 3: Mobile App Development */}
                <motion.div
                  className="absolute top-[40%] left-[-12%] sm:left-[-18%] lg:top-[38%] lg:left-[-20%] z-30 backdrop-blur-md bg-[#061224]/85 border border-white/10 rounded-xl lg:rounded-2xl p-2 lg:p-3 shadow-2xl flex items-center space-x-2 lg:space-x-3 max-w-[125px] sm:max-w-[145px] lg:max-w-[175px] pointer-events-auto"
                  animate={{
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-lg lg:rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Smartphone size={14} className="lg:w-[18px] lg:h-[18px]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[8px] lg:text-[10px] font-mono tracking-widest text-purple-400 uppercase font-bold leading-none mb-1">Mobile App</p>
                    <p className="text-white text-[10px] lg:text-xs font-black leading-none">iOS &amp; Android</p>
                  </div>
                </motion.div>

                {/* Hologram Badge 4: Social Media Marketing */}
                <motion.div
                  className="absolute top-[48%] right-[-12%] sm:right-[-18%] lg:top-[44%] lg:right-[-20%] z-30 backdrop-blur-md bg-[#061224]/85 border border-white/10 rounded-xl lg:rounded-2xl p-2 lg:p-3 shadow-2xl flex items-center space-x-2 lg:space-x-3 max-w-[125px] sm:max-w-[145px] lg:max-w-[175px] pointer-events-auto"
                  animate={{
                    y: [0, -7, 0]
                  }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-lg lg:rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                    <Layers size={14} className="lg:w-[18px] lg:h-[18px]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[8px] lg:text-[10px] font-mono tracking-widest text-pink-400 uppercase font-bold leading-none mb-1">Social Growth</p>
                    <p className="text-white text-[10px] lg:text-xs font-black leading-none">Algorithm Hooks</p>
                  </div>
                </motion.div>

                {/* Hologram Badge 5: AI Video Creation */}
                <motion.div
                  className="absolute bottom-[-2%] left-[-4%] sm:left-[-8%] lg:bottom-[-8%] lg:left-[-12%] z-30 backdrop-blur-md bg-[#061224]/85 border border-white/10 rounded-xl lg:rounded-2xl p-2 lg:p-3 shadow-2xl flex items-center space-x-2 lg:space-x-3 max-w-[125px] sm:max-w-[145px] lg:max-w-[175px] pointer-events-auto"
                  animate={{
                    y: [0, -6, 0]
                  }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-lg lg:rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                    <Video size={14} className="lg:w-[18px] lg:h-[18px]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[8px] lg:text-[10px] font-mono tracking-widest text-red-400 uppercase font-bold leading-none mb-1">AI Video</p>
                    <p className="text-white text-[10px] lg:text-xs font-black leading-none">Cinematic 4K</p>
                  </div>
                </motion.div>

                {/* Hologram Badge 6: Growth Charts */}
                <motion.div
                  className="absolute bottom-[5%] right-[-4%] sm:right-[-8%] lg:bottom-[-4%] lg:right-[-12%] z-30 backdrop-blur-md bg-[#061224]/85 border border-white/10 rounded-xl lg:rounded-2xl p-2 lg:p-3 shadow-2xl flex items-center space-x-2 lg:space-x-3 max-w-[125px] sm:max-w-[145px] lg:max-w-[175px] pointer-events-auto"
                  animate={{
                    y: [0, -9, 0]
                  }}
                  transition={{
                    duration: 5.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2.5
                  }}
                >
                  <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-lg lg:rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                    <Award size={14} className="lg:w-[18px] lg:h-[18px]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[8px] lg:text-[10px] font-mono tracking-widest text-teal-400 uppercase font-bold leading-none mb-1">Growth Charts</p>
                    <p className="text-white text-[10px] lg:text-xs font-black leading-none">10x ROI Metric</p>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. TRUSTED BY LOGO TICKER */}
      <section id="trusted" className="py-6 border-y border-white/5 bg-[#061224]/40">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-6">
            Dominating Digital Space for Industry Leaders
          </p>
          <div className="overflow-hidden relative w-full">
            {/* CSS Ticker container */}
            <div className="flex items-center justify-center md:justify-between flex-wrap gap-8 md:gap-4 max-w-5xl mx-auto">
              {TRUSTED_LOGOS.map((logo, idx) => (
                <div
                  key={idx}
                  className="text-gray-500 font-display font-black tracking-widest text-sm hover:text-white transition-colors duration-200"
                >
                  {logo.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* 3. ABOUT SUMMARY & COUNTERS */}
      <section id="about-intro" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[#1E88E5] text-xs font-extrabold uppercase tracking-widest">ABOUT US</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
                We Build Digital Empires <br />
                <span className="text-[#D4AF37]">With Absolute Intentionality</span>
              </h2>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Bin Usman Marketing Agency is an international digital boutique providing custom-engineered web frameworks, programmatic search engine ranking campaigns, premium social community construction, and generative cinematic video production.
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              We completely discard standard slow, generic templates. Our engineering team builds clean, SEO-optimized code, while our branding team secures high-retention engagement on TikTok, YouTube, and Facebook.
            </p>

            <button
              id="about-learn-more-btn"
              onClick={() => {
                setCurrentPage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-1.5 text-sm font-bold text-[#D4AF37] hover:text-[#C5A028] hover:underline cursor-pointer group"
            >
              <span>Discover Our Core Team</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Animated counter board */}
          <div className="grid grid-cols-2 gap-4">
            
            <div className="p-6 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <h3 className="text-4xl sm:text-5xl font-black text-[#D4AF37] font-display">
                {stats.projects}+
              </h3>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Projects Completed</p>
              <p className="text-[10px] text-gray-500 leading-tight">Websites, mobile apps, video edits and SEO retainers.</p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <h3 className="text-4xl sm:text-5xl font-black text-[#1E88E5] font-display">
                {stats.clients}+
              </h3>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Happy Clients</p>
              <p className="text-[10px] text-gray-500 leading-tight">Elite e-commerce stores, realtors, healthcare, SaaS.</p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <h3 className="text-4xl sm:text-5xl font-black text-white font-display">
                {stats.experts}+
              </h3>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Expert Team</p>
              <p className="text-[10px] text-gray-500 leading-tight">Senior engineers, certified SEO directors, Adobe designers.</p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <h3 className="text-4xl sm:text-5xl font-black text-green-400 font-display">
                {stats.support}
              </h3>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Support Desk</p>
              <p className="text-[10px] text-gray-500 leading-tight">Direct instant access on Slack, WhatsApp, Zoom updates.</p>
            </div>

          </div>

        </div>
      </section>


      {/* 4. SERVICES PREVIEW GRID */}
      <section id="services-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">WHAT WE EXCEL AT</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Premium Services Tailored For Growth
          </h2>
          <p className="text-gray-400 text-xs">
            We deliver highly specialized algorithmic strategies for custom software development, search prominence, and cinematic media campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl overflow-hidden glass-panel glass-panel-hover flex flex-col justify-between"
            >
              <div>
                {/* High quality service card image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] to-transparent" />
                  
                  {/* Absolute icon overlay */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-[#0B1F3A]/90 border border-white/10 flex items-center justify-center text-[#D4AF37]">
                    <DynamicIcon name={service.iconName} size={20} />
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white font-display">{service.title}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">{service.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
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

        <div className="text-center pt-4">
          <button
            onClick={() => {
              setCurrentPage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm transition-all cursor-pointer"
          >
            <span>View All Services</span>
            <ArrowRight size={16} className="text-[#D4AF37]" />
          </button>
        </div>
      </section>


      {/* 5. PROCESS WORKFLOW TIMELINE */}
      <section id="process-flowchart" className="bg-[#061224]/50 border-y border-white/5 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[#1E88E5] text-xs font-extrabold uppercase tracking-widest">OUR STRATEGIC ROADMAP</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
              Six Phases to Absolute Growth
            </h2>
            <p className="text-gray-400 text-xs">
              Every partnership goes through our elite framework, ensuring zero gaps between research and lead scaling.
            </p>
          </div>

          {/* Interactive Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0B1F3A]/85 border border-white/5 relative hover:border-[#D4AF37]/30 transition-all group"
              >
                {/* Phase Number bubble */}
                <div className="absolute top-3 right-3 text-2xl font-black text-white/5 group-hover:text-[#D4AF37]/10 font-mono transition-colors">
                  {step.num}
                </div>

                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#D4AF37] mb-4 font-mono font-bold text-xs">
                  {step.num}
                </div>

                <h3 className="font-bold text-base text-white group-hover:text-[#D4AF37] transition-colors">{step.name}</h3>
                <p className="text-gray-400 text-[11px] leading-relaxed mt-2">{step.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* 6. SLIDING TESTIMONIALS */}
      <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#1E88E5]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">VERIFIED RESULTS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
              What Our Elite Partners Say About Us
            </h2>
            <p className="text-gray-400 text-xs leading-relaxed">
              We build long-term relationships centered around raw data and massive scalability. Don&apos;t just take our word for it—read our client logs.
            </p>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={prevTestimonial}
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Slide block */}
            <div className="p-8 sm:p-10 rounded-2xl glass-panel gold-border-glow relative">
              
              {/* Star Rating display */}
              <div className="flex items-center space-x-1 text-yellow-500 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-white text-base sm:text-lg italic leading-relaxed font-light mb-8">
                &ldquo;{testimonials[activeTestimonial].text}&rdquo;
              </p>

              {/* Client Profile */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full border-2 border-[#D4AF37] object-cover"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-xs text-gray-400">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
