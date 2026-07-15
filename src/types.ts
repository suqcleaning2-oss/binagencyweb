export type Page =
  | 'home'
  | 'services'
  | 'about'
  | 'blog'
  | 'faqs'
  | 'privacy'
  | 'terms'
  | 'cookies'
  | '404';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
  features: string[];
  ctaText: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Websites' | 'Mobile Apps' | 'AI Videos' | 'Graphic Design' | 'SEO' | 'Social Media Marketing';
  image: string;
  client: string;
  result: string;
  year: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'SEO' | 'Marketing' | 'AI' | 'Web Development' | 'Apps' | 'Business Growth';
  image: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'SEO' | 'Web & App' | 'AI & Design' | 'Marketing & Growth';
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
}
