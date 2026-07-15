import React, { useState } from 'react';
import { BlogPost } from '../../types';
import { BLOG_POSTS } from '../../data';
import { FileText, Calendar, User, Clock, ArrowRight, X, Sparkles, Filter } from 'lucide-react';

export const BlogView: React.FC = () => {
  const categories: ('All' | BlogPost['category'])[] = [
    'All',
    'SEO',
    'Marketing',
    'AI',
    'Web Development',
    'Apps',
    'Business Growth'
  ];

  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div id="blog-view" className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
          <FileText size={14} />
          <span>AGENCY GROWTH INSIGHTS</span>
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-display">
          Our Latest Growth Log
        </h1>
        <p className="text-gray-300 text-sm leading-relaxed">
          Stay informed on next-generation search engine guidelines, organic video hooks, fast code architecture patterns, and algorithmic social updates.
        </p>
      </div>

      {/* Categories Filters */}
      <div className="flex justify-center items-center">
        <div className="flex items-center space-x-2 bg-[#061224]/80 border border-white/5 rounded-full p-1.5 max-w-full overflow-x-auto no-scrollbar scroll-smooth">
          <span className="text-gray-500 pl-3 pr-1 text-xs shrink-0 flex items-center gap-1">
            <Filter size={12} />
            <span>Topic:</span>
          </span>
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#1E88E5] to-[#D4AF37] text-white shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Blog list Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400">No blog posts found under this category yet. Stay tuned as we release weekly blueprints.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-2xl overflow-hidden glass-panel glass-panel-hover flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div>
                {/* Thumbnail */}
                <div className="h-48 relative overflow-hidden bg-gray-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/20 to-transparent" />
                  
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-[#0B1F3A]/90 border border-white/10 text-[9px] font-bold tracking-widest text-[#D4AF37] uppercase">
                    {post.category}
                  </span>
                </div>

                {/* Info and excerpt */}
                <div className="p-6 space-y-3 text-left">
                  <div className="flex items-center space-x-3 text-[10px] text-gray-400 font-mono">
                    <span className="flex items-center gap-0.5">
                      <Calendar size={10} />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Clock size={10} />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-white tracking-tight leading-snug group-hover:text-[#D4AF37] hover:text-[#D4AF37] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-xs leading-relaxed font-light line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read button */}
              <div className="p-6 pt-0 text-left">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-[#D4AF37] hover:underline cursor-pointer"
                >
                  <span>Read Article Blueprint</span>
                  <ArrowRight size={12} />
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* FULL READER MODAL OVERLAY */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-[#0B1F3A]/85 backdrop-blur-md" onClick={() => setSelectedPost(null)} />
          
          {/* Reader container */}
          <div className="relative w-full max-w-3xl rounded-2xl bg-[#0B1F3A] border border-white/10 overflow-hidden shadow-2xl z-10 my-8">
            <div className="h-1 bg-gradient-to-r from-[#1E88E5] to-[#D4AF37]" />
            
            {/* Close */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-all cursor-pointer p-1.5 rounded-full hover:bg-white/5"
              aria-label="Close reader"
            >
              <X size={20} />
            </button>

            <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-6 text-left">
              {/* Category */}
              <span className="inline-block px-2.5 py-1 rounded-full bg-[#D4AF37]/10 text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase">
                {selectedPost.category}
              </span>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-black text-white font-display leading-tight">
                {selectedPost.title}
              </h2>

              {/* Meta details */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 border-y border-white/5 py-3 font-mono">
                <div className="flex items-center gap-1">
                  <User size={13} className="text-[#D4AF37]" />
                  <span>Written By: <strong>{selectedPost.author}</strong></span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={13} />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={13} />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>

              {/* Banner image inside modal */}
              <div className="h-64 rounded-xl overflow-hidden">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content text block styled beautifully */}
              <div className="space-y-4 text-sm text-gray-300 leading-relaxed font-light">
                <p className="text-white text-base font-normal leading-relaxed italic">
                  {selectedPost.excerpt}
                </p>
                <div className="border-l-2 border-[#D4AF37] pl-4 py-1 text-gray-400 text-xs italic space-y-1">
                  <span className="uppercase tracking-wider font-bold text-[#D4AF37] flex items-center gap-1">
                    <Sparkles size={11} />
                    <span>Bin Usman Growth Secret:</span>
                  </span>
                  <span>This strategy blueprint forms part of our corporate client handbook library.</span>
                </div>
                <p>
                  {selectedPost.content}
                </p>
                <p>
                  Algorithm changes across platforms require agile updates. We monitor core metrics such as Google indexing speed, Core Web Vitals compliance, video retention charts, and follower graphs daily. Our clients receive live performance updates inside a dedicated Slack pipeline to ensure transparent lead translation.
                </p>
              </div>

              {/* Reader CTA row */}
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-gray-400">Want to implement this strategy directly for your brand?</p>
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    // Open consult quote via standard event
                    const quoteBtn = document.getElementById('quote-header-btn');
                    if (quoteBtn) quoteBtn.click();
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#D4AF37] hover:bg-[#C5A028] text-[#0B1F3A] font-bold text-xs shadow transition-all cursor-pointer"
                >
                  Request Strategy Implementation
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
