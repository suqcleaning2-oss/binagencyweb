import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  Database, 
  Eye, 
  Cookie, 
  ExternalLink, 
  Shield, 
  Users, 
  RefreshCw, 
  Mail, 
  MessageSquare,
  ArrowRight,
  Sparkles,
  Globe,
  Briefcase,
  Copyright,
  Scale
} from 'lucide-react';

interface PolicyViewsProps {
  type: 'privacy' | 'terms' | 'cookies';
}

export const PolicyViews: React.FC<PolicyViewsProps> = ({ type }) => {
  
  // Custom WhatsApp helper
  const handleWhatsAppClick = () => {
    const text = type === 'terms' 
      ? "Hi Bin Usman Marketing Team! I have a question regarding your Terms & Conditions."
      : "Hi Bin Usman Marketing Team! I have a question regarding your Privacy Policy.";
    const url = `https://wa.me/923282890374?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const renderPrivacy = () => (
    <div className="space-y-10">
      {/* Introduction Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-2xl bg-[#D4AF37]/5 border border-[#D4AF37]/10 flex items-start space-x-4"
      >
        <Sparkles className="text-[#D4AF37] shrink-0 mt-1" size={20} />
        <p className="text-gray-300 text-sm leading-relaxed font-light">
          Welcome to <strong className="text-white font-semibold">Bin Usman Marketing Agency</strong>. We value your privacy and are committed to protecting any information you share with us.
        </p>
      </motion.div>

      {/* Grid of 8 structured sections */}
      <div className="grid grid-cols-1 gap-6">
        
        {/* Section 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl glass-panel border border-white/5 space-y-4 hover:border-[#D4AF37]/10 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
              <Database size={18} />
            </div>
            <h3 className="text-lg font-bold text-white font-display">1. Information We Collect</h3>
          </div>
          <div className="space-y-3 text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
            <p>Our website does not require users to create an account or log in.</p>
            <p>We may collect only the information that you voluntarily provide when contacting us through WhatsApp or email, such as:</p>
            <ul className="list-none space-y-1.5 pl-2">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Name</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Phone Number</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Email Address</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Message Details</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl glass-panel border border-white/5 space-y-4 hover:border-[#1E88E5]/10 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/10 border border-[#1E88E5]/20 flex items-center justify-center text-[#1E88E5]">
              <Eye size={18} />
            </div>
            <h3 className="text-lg font-bold text-white font-display">2. How We Use Your Information</h3>
          </div>
          <div className="space-y-3 text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
            <p>The information you provide is used only to:</p>
            <ul className="list-none space-y-1.5 pl-2">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                <span>Respond to your inquiries</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                <span>Provide our services</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                <span>Improve customer support</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                <span>Communicate regarding requested services</span>
              </li>
            </ul>
            <p className="text-gray-400 italic mt-2">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl glass-panel border border-white/5 space-y-4 hover:border-[#D4AF37]/10 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
              <Cookie size={18} />
            </div>
            <h3 className="text-lg font-bold text-white font-display">3. Cookies</h3>
          </div>
          <div className="space-y-2 text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
            <p>Our website may use basic cookies to improve website performance and user experience.</p>
            <p>No sensitive personal information is stored through cookies.</p>
          </div>
        </motion.div>

        {/* Section 4 */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl glass-panel border border-white/5 space-y-4 hover:border-[#1E88E5]/10 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/10 border border-[#1E88E5]/20 flex items-center justify-center text-[#1E88E5]">
              <ExternalLink size={18} />
            </div>
            <h3 className="text-lg font-bold text-white font-display">4. Third-Party Services</h3>
          </div>
          <div className="space-y-3 text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
            <p>Our website may contain links to third-party services such as:</p>
            <ul className="list-none space-y-1.5 pl-2">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                <span>WhatsApp</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                <span>Google Maps</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                <span>Social Media Platforms</span>
              </li>
            </ul>
            <p className="text-gray-400">We are not responsible for the privacy practices of those external websites.</p>
          </div>
        </motion.div>

        {/* Section 5 */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl glass-panel border border-white/5 space-y-4 hover:border-[#D4AF37]/10 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
              <Shield size={18} />
            </div>
            <h3 className="text-lg font-bold text-white font-display">5. Data Security</h3>
          </div>
          <div className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
            <p>We take reasonable measures to protect your information from unauthorized access, misuse, or disclosure.</p>
          </div>
        </motion.div>

        {/* Section 6 */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl glass-panel border border-white/5 space-y-4 hover:border-[#1E88E5]/10 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/10 border border-[#1E88E5]/20 flex items-center justify-center text-[#1E88E5]">
              <Users size={18} />
            </div>
            <h3 className="text-lg font-bold text-white font-display">6. Children's Privacy</h3>
          </div>
          <div className="space-y-2 text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
            <p>Our services are intended for individuals aged 13 years and above.</p>
            <p>We do not knowingly collect personal information from children.</p>
          </div>
        </motion.div>

        {/* Section 7 */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl glass-panel border border-white/5 space-y-4 hover:border-[#D4AF37]/10 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
              <RefreshCw size={18} />
            </div>
            <h3 className="text-lg font-bold text-white font-display">7. Changes to This Privacy Policy</h3>
          </div>
          <div className="space-y-2 text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
            <p>We may update this Privacy Policy from time to time.</p>
            <p>Any changes will be posted on this page with the updated revision date.</p>
          </div>
        </motion.div>

        {/* Section 8 */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl glass-panel border border-white/5 space-y-6 hover:border-[#25D366]/20 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366]">
              <MessageSquare size={18} />
            </div>
            <h3 className="text-lg font-bold text-white font-display">8. Contact Us</h3>
          </div>
          
          <div className="space-y-4 text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
            <p>If you have any questions regarding this Privacy Policy, please contact us.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* WhatsApp Item */}
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-3 p-4 rounded-xl bg-[#25D366]/5 border border-[#25D366]/15 hover:bg-[#25D366]/10 transition-all text-left cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-[#25D366] flex items-center justify-center text-white font-bold">
                  💬
                </div>
                <div>
                  <span className="text-[10px] text-green-400 font-bold uppercase block leading-none">WhatsApp</span>
                  <span className="text-white text-xs font-semibold mt-1 block">+92 328 2890374</span>
                </div>
              </button>

              {/* Email Item */}
              <a
                href="mailto:binusmangrp@gmail.com"
                className="flex items-center space-x-3 p-4 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/15 hover:bg-[#D4AF37]/10 transition-all text-left"
              >
                <Mail size={16} className="text-[#D4AF37]" />
                <div>
                  <span className="text-[10px] text-[#D4AF37] font-bold uppercase block leading-none">Email Us</span>
                  <span className="text-white text-xs font-semibold mt-1 block">binusmangrp@gmail.com</span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Closing Statement */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center pt-6 text-gray-400 text-xs font-light"
      >
        By using this website, you agree to this <strong className="text-white font-semibold">Privacy Policy</strong> and our <strong className="text-white font-semibold">Terms &amp; Conditions</strong>.
      </motion.div>
    </div>
  );

  const renderTerms = () => (
    <div className="space-y-10">
      {/* Introduction Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-2xl bg-[#D4AF37]/5 border border-[#D4AF37]/10 flex items-start space-x-4"
      >
        <Sparkles className="text-[#D4AF37] shrink-0 mt-1" size={20} />
        <p className="text-gray-300 text-sm leading-relaxed font-light">
          Welcome to <strong className="text-white font-semibold">Bin Usman Marketing Agency</strong>. By accessing and using this website, you agree to the following Terms &amp; Conditions.
        </p>
      </motion.div>

      {/* Grid of structured sections */}
      <div className="grid grid-cols-1 gap-6">
        
        {/* Section 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl glass-panel border border-white/5 space-y-4 hover:border-[#D4AF37]/10 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
              <Globe size={18} />
            </div>
            <h3 className="text-lg font-bold text-white font-display">1. Website Usage</h3>
          </div>
          <div className="space-y-2 text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
            <p>This website is provided for informational purposes only. By using this website, you agree to use it responsibly and lawfully.</p>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl glass-panel border border-white/5 space-y-4 hover:border-[#1E88E5]/10 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/10 border border-[#1E88E5]/20 flex items-center justify-center text-[#1E88E5]">
              <Briefcase size={18} />
            </div>
            <h3 className="text-lg font-bold text-white font-display">2. Services</h3>
          </div>
          <div className="space-y-4 text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
            <p>Our services include:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2 font-light">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                <span>Social Media Marketing</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                <span>Search Engine Optimization (SEO)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                <span>Website Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                <span>App Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                <span>AI Video Creation</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                <span>Graphic Designing</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                <span>YouTube Monetization</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                <span>Instagram Organic Followers</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                <span>Facebook Organic Followers</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5]" />
                <span>TikTok Organic Followers</span>
              </div>
            </div>
            <p className="text-gray-400 mt-2">Service details, timelines and pricing may vary depending on the client's requirements.</p>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl glass-panel border border-white/5 space-y-4 hover:border-[#D4AF37]/10 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
              <Copyright size={18} />
            </div>
            <h3 className="text-lg font-bold text-white font-display">3. Intellectual Property</h3>
          </div>
          <div className="space-y-2 text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
            <p>All content on this website, including text, graphics, branding, logos and designs, belongs to Bin Usman Marketing Agency unless otherwise stated.</p>
            <p>No content may be copied, reproduced or distributed without permission.</p>
          </div>
        </motion.div>

        {/* Section 4 */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl glass-panel border border-white/5 space-y-4 hover:border-[#1E88E5]/10 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/10 border border-[#1E88E5]/20 flex items-center justify-center text-[#1E88E5]">
              <ExternalLink size={18} />
            </div>
            <h3 className="text-lg font-bold text-white font-display">4. Third-Party Links</h3>
          </div>
          <div className="space-y-2 text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
            <p>Our website may contain links to third-party platforms such as WhatsApp or social media. We are not responsible for the content or privacy practices of those external platforms.</p>
          </div>
        </motion.div>

        {/* Section 5 */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl glass-panel border border-white/5 space-y-4 hover:border-[#D4AF37]/10 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
              <Scale size={18} />
            </div>
            <h3 className="text-lg font-bold text-white font-display">5. Limitation of Liability</h3>
          </div>
          <div className="space-y-2 text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
            <p>We strive to provide accurate and reliable information. However, we do not guarantee that all website content will always be complete, error-free or uninterrupted.</p>
          </div>
        </motion.div>

        {/* Section 6 */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl glass-panel border border-white/5 space-y-4 hover:border-[#1E88E5]/10 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/10 border border-[#1E88E5]/20 flex items-center justify-center text-[#1E88E5]">
              <RefreshCw size={18} />
            </div>
            <h3 className="text-lg font-bold text-white font-display">6. Changes</h3>
          </div>
          <div className="space-y-2 text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
            <p>We reserve the right to update or modify these Terms &amp; Conditions at any time without prior notice.</p>
          </div>
        </motion.div>

        {/* Section 7 */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl glass-panel border border-white/5 space-y-6 hover:border-[#25D366]/20 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366]">
              <MessageSquare size={18} />
            </div>
            <h3 className="text-lg font-bold text-white font-display">7. Contact</h3>
          </div>
          
          <div className="space-y-4 text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
            <p>If you have any questions regarding these Terms &amp; Conditions, please contact us.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* WhatsApp Item */}
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-3 p-4 rounded-xl bg-[#25D366]/5 border border-[#25D366]/15 hover:bg-[#25D366]/10 transition-all text-left cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-[#25D366] flex items-center justify-center text-white font-bold">
                  💬
                </div>
                <div>
                  <span className="text-[10px] text-green-400 font-bold uppercase block leading-none">WhatsApp</span>
                  <span className="text-white text-xs font-semibold mt-1 block">+92 328 2890374</span>
                </div>
              </button>

              {/* Email Item */}
              <a
                href="mailto:binusmangrp@gmail.com"
                className="flex items-center space-x-3 p-4 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/15 hover:bg-[#D4AF37]/10 transition-all text-left"
              >
                <Mail size={16} className="text-[#D4AF37]" />
                <div>
                  <span className="text-[10px] text-[#D4AF37] font-bold uppercase block leading-none">Email Us</span>
                  <span className="text-white text-xs font-semibold mt-1 block">binusmangrp@gmail.com</span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );

  const renderCookies = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white font-display">1. What are Cookies?</h2>
      <p className="text-gray-300 text-sm leading-relaxed font-light">
        Cookies are tiny text files placed on your computer or device by websites to record session preferences and analyze navigation trends.
      </p>

      <h2 className="text-2xl font-bold text-white font-display">2. Analytics Tracking</h2>
      <p className="text-gray-300 text-sm leading-relaxed font-light">
        We use cookies from partners like Google Analytics to measure how visitors find our pages and which blog articles or services command high reading duration. This helps us optimize site performance.
      </p>

      <h2 className="text-2xl font-bold text-white font-display">3. Third-Party Integrations</h2>
      <p className="text-gray-300 text-sm leading-relaxed font-light">
        Our chat buttons link directly to WhatsApp and Google Maps. These systems may set independent cookies beyond our direct control to authorize your account profile.
      </p>

      <h2 className="text-2xl font-bold text-white font-display">4. User Consent</h2>
      <p className="text-gray-300 text-sm leading-relaxed font-light">
        By continuing to navigate this premium website, you consent to our standard cookie policy. You hold the capacity to reject cookie records via your personal browser settings at any time.
      </p>
    </div>
  );

  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    cookies: 'Cookie Policy'
  };

  return (
    <div id="policy-views" className="py-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
      
      {/* Header breadcrumb */}
      <div className="space-y-3 border-b border-white/5 pb-6">
        <div className="flex items-center space-x-2 text-[#D4AF37] text-xs font-bold uppercase tracking-widest font-mono">
          <Lock size={12} />
          <span>Bin Usman Corporate Standards</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight">
          {titles[type]}
        </h1>
        {type !== 'terms' && (
          <p className="text-xs text-gray-400 font-mono">
            Effective Date: July 14, 2026 | Last Updated: Today
          </p>
        )}
      </div>

      {/* Main content */}
      <div className="text-gray-300">
        {type === 'privacy' && renderPrivacy()}
        {type === 'terms' && renderTerms()}
        {type === 'cookies' && renderCookies()}
      </div>

      {/* Contact footnote */}
      {type !== 'privacy' && type !== 'terms' && (
        <div className="p-6 rounded-xl bg-white/5 border border-white/5 space-y-3 mt-12">
          <h3 className="font-bold text-sm text-white flex items-center space-x-2 font-display">
            <ShieldCheck size={16} className="text-[#D4AF37]" />
            <span>Have questions regarding our legal parameters?</span>
          </h3>
          <p className="text-xs text-gray-400 font-light">
            Email our legal and compliance department directly at <strong className="text-white">binusmangrp@gmail.com</strong>. We will reply with fully detailed descriptions within 24 hours.
          </p>
        </div>
      )}

    </div>
  );
};
