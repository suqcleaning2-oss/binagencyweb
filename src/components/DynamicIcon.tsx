import React from 'react';
import {
  Share2,
  Search,
  Globe,
  Smartphone,
  Video,
  Palette,
  Tv,
  Instagram,
  Facebook,
  Music,
  Users,
  DollarSign,
  Zap,
  Cpu,
  TrendingUp,
  MessageSquareCode,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Send,
  MessageCircle,
  Check,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Star,
  Award,
  Briefcase,
  ShieldCheck,
  Calendar,
  Building,
  Filter,
  FileText
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Share2,
  Search,
  Globe,
  Smartphone,
  Video,
  Palette,
  Tv,
  Instagram,
  Facebook,
  Music,
  Users,
  DollarSign,
  Zap,
  Cpu,
  TrendingUp,
  MessageSquareCode,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Send,
  MessageCircle,
  Check,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Star,
  Award,
  Briefcase,
  ShieldCheck,
  Calendar,
  Building,
  Filter,
  FileText
};

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = '', size }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    // Fallback icon if not found
    return <Globe className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
};
