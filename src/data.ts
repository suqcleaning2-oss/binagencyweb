import { Service, PortfolioItem, PricingPlan, FAQItem, BlogPost, JobOpening } from './types';

import socMediaDash from './assets/images/soc_media_dash_1784041039719.jpg';
import seoRankings from './assets/images/seo_rankings_1784041060270.jpg';
import webDevDevices from './assets/images/web_dev_devices_1784041077510.jpg';
import appDevMobile from './assets/images/app_dev_mobile_1784041093691.jpg';
import aiVideoEditing from './assets/images/ai_video_editing_1784041111038.jpg';
import graphicDesignWorkspace from './assets/images/graphic_design_workspace_1784041133441.jpg';
import youtubeMonetization from './assets/images/youtube_monetization_1784041149874.jpg';
import instagramGrowth from './assets/images/instagram_growth_1784041168749.jpg';
import facebookGrowth from './assets/images/facebook_growth_1784041185264.jpg';
import tiktokGrowth from './assets/images/tiktok_growth_1784041202755.jpg';

export const SERVICES_DATA: Service[] = [
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Complete high-performance social media management tailored to accelerate business engagement, lead generation, and ultimate growth.',
    image: socMediaDash,
    iconName: 'Share2',
    features: [
      'Strategic content calendars and premium copywriting',
      'Targeted paid ad campaigns (Facebook, Instagram, LinkedIn)',
      'Community engagement and response management',
      'In-depth monthly analytics and ROI reporting'
    ],
    ctaText: 'Start Scaling Today'
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    description: 'Propel your website to the top page of Google with elite keyword mapping, technical audits, and high-domain link acquisition.',
    image: seoRankings,
    iconName: 'Search',
    features: [
      'Deep competitor keyword analysis & opportunity audits',
      'Core Web Vitals & speed optimization recommendations',
      'Authority-building manual backlink acquisition',
      'Local SEO & Google Business Profile optimization'
    ],
    ctaText: 'Claim Your Rank'
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Stunning, high-conversion custom websites engineered with React, Tailwind, and Node.js for perfect speed and responsiveness.',
    image: webDevDevices,
    iconName: 'Globe',
    features: [
      'Next.js and React premium user interfaces',
      'Optimized for perfect 100/100 Core Web Vitals',
      'SEO-friendly semantic structure and layout',
      'Interactive custom features and dynamic animations'
    ],
    ctaText: 'Build Your Platform'
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'Fluid, interactive Android and iOS applications built using React Native or Flutter to connect with clients wherever they are.',
    image: appDevMobile,
    iconName: 'Smartphone',
    features: [
      'Cross-platform iOS and Android performance optimization',
      'Smooth native UX and gesture animations',
      'Offline-first databases and secure user authentication',
      'App Store & Play Store publication and maintenance'
    ],
    ctaText: 'Launch Your App'
  },
  {
    id: 'ai-videos',
    title: 'AI Cinematic Videos',
    description: 'Futuristic AI-driven video production, high-impact CGI animations, and programmatic editing for viral marketing campaigns.',
    image: aiVideoEditing,
    iconName: 'Video',
    features: [
      'Generative AI hyper-realistic voiceovers & scripts',
      'Cinematic color grading and custom dynamic text styling',
      'Automated format generation (Shorts, Reels, TikToks)',
      'High-impact visual transitions and copyright-free soundtracks'
    ],
    ctaText: 'Create Viral Video'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Designing',
    description: 'Premium brand guidelines, custom vector illustrations, and immersive marketing collateral that commands industry attention.',
    image: graphicDesignWorkspace,
    iconName: 'Palette',
    features: [
      'Full brand style guides, logo suites, and typography standards',
      'Social media post layouts, banners, and digital ads',
      'Print-ready business stationery and high-impact brochures',
      'Custom vector iconography and modern website layouts'
    ],
    ctaText: 'Elevate Brand Design'
  },
  {
    id: 'youtube-growth',
    title: 'YouTube Monetization',
    description: 'Unlock rapid monetization through expert CTR thumbnail designs, keyword video tags, and high-retention script structure.',
    image: youtubeMonetization,
    iconName: 'Tv',
    features: [
      'High-click-through rate (CTR) custom thumbnail designs',
      'Video SEO optimizations including high-traffic tags',
      'Monetization planning & audience retention audits',
      'Video editor support & organic playlist structuring'
    ],
    ctaText: 'Grow Your Channel'
  },
  {
    id: 'instagram-followers',
    title: 'Instagram Organic Followers',
    description: 'Build an active community with viral reel blueprints, interactive stories, and algorithmic target engagement schedules.',
    image: instagramGrowth,
    iconName: 'Instagram',
    features: [
      'Daily viral reels ideas and content frameworks',
      'Targeted community interactions in your niche',
      'Interactive poll-based stories to maximize account reach',
      'Hashtag stacks and algorithm-optimized posting slots'
    ],
    ctaText: 'Boost Organic Reach'
  },
  {
    id: 'facebook-followers',
    title: 'Facebook Organic Followers',
    description: 'Grow your business page reach organically through specialized niche group engagement, viral posts, and live events.',
    image: facebookGrowth,
    iconName: 'Facebook',
    features: [
      'Page layout and business-profile trust configuration',
      'Viral infographic designs and thought leadership articles',
      'Direct industry group collaboration & networking',
      'Optimized video uploads for high-retention monetization'
    ],
    ctaText: 'Grow Your Page'
  },
  {
    id: 'tiktok-followers',
    title: 'TikTok Organic Followers',
    description: 'Gain thousands of targeted organic followers using viral trending audio triggers, loop scripts, and interactive TikTok hooks.',
    image: tiktokGrowth,
    iconName: 'Music',
    features: [
      'Trending audio research and instant script integration',
      'Unstoppable loop video layouts to maximize view counts',
      'Daily target niche comments and follower engagement',
      'TikTok SEO strategies with hyper-relevant search tags'
    ],
    ctaText: 'Go Viral Today'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'E-Commerce Scaling Empire',
    category: 'Social Media Marketing',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    client: 'Velvet Threads Boutique',
    result: '4.8x ROAS with $120k in Monthly Revenue',
    year: '2026'
  },
  {
    id: 'p2',
    title: 'SaaS Platform Rank Acceleration',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    client: 'CloudTask Systems',
    result: '+340% Organic Traffic Growth in 90 Days',
    year: '2025'
  },
  {
    id: 'p3',
    title: 'Luxury Real Estate Portal',
    category: 'Websites',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    client: 'Apex Group Holdings',
    result: 'Stunning React Hub generating 50+ Qualified Leads/Week',
    year: '2026'
  },
  {
    id: 'p4',
    title: 'Hyper-Realistic AI Campaign',
    category: 'AI Videos',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    client: 'Chronos Watches',
    result: '12 Million Cumulative Views across TikTok & Instagram',
    year: '2026'
  },
  {
    id: 'p5',
    title: 'Fintech Mobile App UI/UX',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    client: 'PayPulse Digital',
    result: 'Perfect 4.9 App Store Rating & 100k+ Downloads',
    year: '2025'
  },
  {
    id: 'p6',
    title: 'Complete Corporate Identity Rebrand',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    client: 'Synthetix AI Solutions',
    result: 'Aesthetic luxury branding guide adopted across 14 countries',
    year: '2026'
  },
  {
    id: 'p7',
    title: 'Dental Clinic Local Search Domination',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    client: 'Aesthetic Dental Care',
    result: 'Top 3 Map Pack placement for 12 local keywords',
    year: '2025'
  },
  {
    id: 'p8',
    title: 'Fitness Startup Social Growth Blueprint',
    category: 'Social Media Marketing',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    client: 'CoreFit Online Labs',
    result: 'From 0 to 80,000 Organic Instagram Followers in 6 Months',
    year: '2026'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter Plan',
    price: '$499',
    period: 'month',
    description: 'Perfect for local small businesses looking to establish a highly professional online presence & organic base growth.',
    features: [
      'Social Media Management (3 Platforms, 12 Custom Posts/Mo)',
      'Basic Local SEO & Google Business Profile Audit',
      '1 Custom Animated AI Short Video / Month',
      'Professional Logo Design or Refresh',
      'Dedicated Account Executive & Weekly Email Support'
    ],
    isPopular: false,
    ctaText: 'Get Started with Starter'
  },
  {
    name: 'Business Plan',
    price: '$999',
    period: 'month',
    description: 'Our most popular tier. Designed for growing companies requiring comprehensive SEO strategy, custom web elements, and scale.',
    features: [
      'Social Media Dominance (4 Platforms, 20 Posts/Mo)',
      'Complete SEO Suite (On-Page, Off-Page + 5 High-Quality Backlinks)',
      '4 Cinematic AI Marketing Videos (TikTok/Reels/Shorts)',
      'Web Speed Optimization & Core Web Vitals Fix',
      'Monthly Strategy Session & Direct 24/7 Slack Access'
    ],
    isPopular: true,
    ctaText: 'Accelerate Your Business'
  },
  {
    name: 'Enterprise Plan',
    price: '$2,499',
    period: 'month',
    description: 'An elite, custom full-stack marketing powerhouse for corporations seeking custom software, app builds, and ultimate organic domination.',
    features: [
      'All-Inclusive Marketing Suite (Infinite Custom Content)',
      'Complete Mobile App / React Site Development Included',
      'Unlimited Cinematic & AI Generated Promo Videos',
      'Premium SEO Link Building Campaigns (DA 50+ Guaranteed)',
      'Dedicated Full-Stack Team: Designer, Developer & SEO Director',
      'Weekly Live Zoom Performance & Analytics Audits'
    ],
    isPopular: false,
    ctaText: 'Unlock Enterprise Power'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'How does your Search Engine Optimization (SEO) strategy work?',
    answer: 'We deploy a 3-part elite SEO approach: Technical audits to fix site speed and Core Web Vitals, Keyword Intent Mapping to write search-dominant content, and manual premium Outreach to secure authority-boosting backlinks. This ensures you climb Google ranks and stay there.',
    category: 'SEO'
  },
  {
    question: 'What technologies do you use for Website and Mobile App Development?',
    answer: 'We construct bleeding-edge responsive websites using React, Next.js, and Tailwind CSS. For mobile applications, we use React Native and Flutter, ensuring native-level performance, smooth micro-animations, and flawless support on both Android and iOS smartphones.',
    category: 'Web & App'
  },
  {
    question: 'What are AI Cinematic Videos and how do they benefit my business?',
    answer: 'AI Cinematic Videos combine advanced programmatic video editing, cinematic visual generation, and AI-modeled voiceovers. They allow us to produce high-retention, hyper-engaging commercial videos at 10x the speed of traditional agencies, ideal for Reels, Shorts, and TikTok campaigns.',
    category: 'AI & Design'
  },
  {
    question: 'Are the Instagram, Facebook, and TikTok followers organic and real?',
    answer: 'Yes, 100% organic. We NEVER use bot networks, loops, or fake farms. Instead, we generate organic follower growth through target audience interaction, viral sound and hashtag audits, niche group marketing, and highly shareable daily content models that align with the platform algorithms.',
    category: 'Marketing & Growth'
  },
  {
    question: 'Can I change my marketing plan or cancel at any time?',
    answer: 'Absolutely. All our premium retainer partnerships are on flexible month-to-month contracts. You can upgrade, downgrade, or pause your selected plan with a simple 14-day notice—no hidden fees, lock-in clauses, or complicated legal frameworks.',
    category: 'Marketing & Growth'
  },
  {
    question: 'How does the free quote and consultation process work?',
    answer: 'Once you submit our secure Quote form or click the WhatsApp trigger, you are paired with an Expert Strategy Lead. We perform a complimentary audit of your existing website, social profiles, and SEO ranks, followed by a personalized 15-minute blueprint presentation.',
    category: 'Marketing & Growth'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The AI Revolution in Digital Content: How to Rank in 2026',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    date: 'July 12, 2026',
    author: 'Usman Bin Tariq',
    readTime: '6 min read',
    excerpt: 'Generative AI has changed SEO forever. Learn how search engines detect helpful content in 2026 and how to balance AI content with human expert expertise to dominate keyword rankings.',
    content: 'SEO in 2026 is no longer about simple keyword stuffing. Search engine algorithms have evolved to evaluate absolute content depth, reading ease, and authentic expert backing. At Bin Usman Marketing Agency, we combine state-of-the-art AI systems with expert copywriting oversight to manufacture content that dominates Search Generative Experiences (SGE). Learn the 4 pillars of modern search architecture: Technical Core Web Vitals optimization, semantic theme mapping, user-intent validation, and digital footprint authority building.'
  },
  {
    id: 'b2',
    title: '5 Crucial Rules for Viral Instagram Reels and TikTok Growth',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?auto=format&fit=crop&w=800&q=80',
    date: 'June 28, 2026',
    author: 'Sarah Jenkins',
    readTime: '5 min read',
    excerpt: 'Struggling with low view counts? Discover the exact script hook structures, trending audio triggers, and editing rules our agency uses to secure millions of organic views.',
    content: 'The social media algorithms are hyper-focused on one primary metric: Watch retention rate. If a viewer scrolls past your reel in the first 1.5 seconds, the algorithm flags your video as uninteresting and stops pushing it. To bypass this, we use the "Action-Hook-Payoff" blueprint. First, start mid-motion with high-energy sound; second, present a clear, compelling text hook on-screen; and third, keep the editing dynamic with subtle frame adjustments every 1.8 seconds. This keeps the eyes locked and metrics soaring.'
  },
  {
    id: 'b3',
    title: 'Why React and Tailwind CSS are Essential for High-Conversion Sites',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
    date: 'May 14, 2026',
    author: 'Ahmad Khan',
    readTime: '8 min read',
    excerpt: 'Slow sites kill business sales. Explore how custom React architecture and utility-first styling keep your loading times under 0.8 seconds to supercharge checkout rates.',
    content: 'Every additional millisecond your website takes to load directly decays your conversion rates by up to 7%. Standard templates from WordPress or Wix come burdened with endless bloated CSS files and unnecessary third-party scripts. By building custom lightweight React structures paired with utility-first Tailwind CSS, we create blazing-fast, server-rendered layouts that execute under 0.8 seconds. Faster speeds translate to happier search engines and massive spikes in customer checkouts.'
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'j1',
    title: 'Senior SEO Strategy Specialist',
    department: 'Search Engine Optimization',
    location: 'Remote / Lahore Head Office',
    type: 'Full-Time',
    salary: '$1,200 - $1,800 / Mo',
    description: 'We are seeking a seasoned, data-driven SEO mastermind capable of designing, auditing, and executing complex global ranking campaigns.',
    requirements: [
      'Minimum 4+ years of proven agency experience scaling organic traffic',
      'Deep mastery of technical SEO tools (Ahrefs, Semrush, Screaming Frog, GSC)',
      'Expertise in high-quality manual backlink outreach and directory placement',
      'Strong knowledge of core web vitals and basic HTML/JS troubleshooting'
    ]
  },
  {
    id: 'j2',
    title: 'AI Video Editor & Motion Designer',
    department: 'Creative Productions',
    location: 'Hybrid (Lahore)',
    type: 'Full-Time',
    salary: '$800 - $1,200 / Mo',
    description: 'Join our award-winning creative team to produce viral AI-augmented cinematic videos, brand campaigns, and visual motion systems.',
    requirements: [
      'Proficiency in Adobe After Effects, Premiere Pro, and modern AI video software (Runway, Midjourney, ElevenLabs)',
      'A breathtaking graphic portfolio showcasing dynamic title layouts and pacing',
      'Solid grasp of modern social content hooks, loops, and viral formatting rules',
      'Strong team communication skills and ability to manage 4-5 dynamic projects weekly'
    ]
  },
  {
    id: 'j3',
    title: 'Lead Full-Stack React Developer',
    department: 'Technology',
    location: 'Remote',
    type: 'Full-Time',
    salary: '$1,500 - $2,200 / Mo',
    description: 'Lead the construction of custom luxury website interfaces, customer portals, and high-performance Web apps for our enterprise clients.',
    requirements: [
      'Expertise in React, Vite, Tailwind CSS, TypeScript, and Node.js servers',
      'Familiarity with semantic schema markups, SEO site layouts, and accessibility standard optimization',
      'Proven capacity to write pixel-perfect responsive components from Figma boards',
      'Excellent code discipline and self-guided workspace management capability'
    ]
  }
];

export const TRUSTED_LOGOS = [
  { name: 'Apex Group', text: 'APEX GROUP' },
  { name: 'Solis Global', text: 'SOLIS GLOBAL' },
  { name: 'Elysian Digital', text: 'ELYSIAN' },
  { name: 'Nova Health', text: 'NOVA HEALTH' },
  { name: 'Vanguard Labs', text: 'VANGUARD' },
  { name: 'Zenith Logistics', text: 'ZENITH CO' }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced Team',
    description: 'Our senior specialists have over a decade of combined experience orchestrating major growth campaigns for elite companies.',
    iconName: 'Users'
  },
  {
    title: 'Affordable Pricing',
    description: 'Get world-class, premium agency execution at highly competitive and predictable fixed monthly retainer tiers.',
    iconName: 'DollarSign'
  },
  {
    title: 'Fast Delivery',
    description: 'We respect your timeline. Our custom development pipelines ensure website builds are live and ranking within weeks.',
    iconName: 'Zap'
  },
  {
    title: 'Latest AI Technology',
    description: 'We integrate next-generation generative AI tools to hyper-accelerate video renders, data audits, and organic output.',
    iconName: 'Cpu'
  },
  {
    title: 'Result Driven',
    description: 'We prioritize raw, verifiable metrics—leads, organic traffic, and conversion growth—over simple aesthetic vanity metrics.',
    iconName: 'TrendingUp'
  },
  {
    title: '24/7 Support',
    description: 'Rest easy with uninterrupted premium communication channels, dedicated Slack workspace chats, and real-time support.',
    iconName: 'MessageSquareCode'
  }
];
