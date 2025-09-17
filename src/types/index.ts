export interface CallButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface PhoneButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export interface StatItem {
  id: string;
  number: number;
  suffix: string;
  label: string;
  icon?: React.ReactNode;
}

export interface StatsCounterProps {
  stats: StatItem[];
  className?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ProcessStepsProps {
  steps: ProcessStep[];
  className?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  description: string;
  phone: string;
}

export interface TeamSectionProps {
  teamMember: TeamMember;
  className?: string;
}

export interface InsurancePartner {
  name: string;
  website?: string;
}

export interface InsurancePartnersProps {
  partners: InsurancePartner[];
  className?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'service' | 'emergency';
}

export interface FAQProps {
  faqs: FAQItem[];
  className?: string;
}

export interface CityContent {
  name: string;
  description: string;
  zones: string[];
  landmarks: string[];
  pricing: {
    simpleOpening: string;
    complexOpening: string;
    cylinderChange: string;
  };
  testimonials: {
    name: string;
    text: string;
    rating: number;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}