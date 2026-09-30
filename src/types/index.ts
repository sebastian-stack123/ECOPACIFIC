export type Language = 'es' | 'en';

export interface Product {
  id: string;
  name: string;
  brandId: 'coco-freeze' | 'dhoy' | 'ecolove' | 'hortilisto';
  familyId: string;
  emotionalDescription: string;
  presentations: string[];
  technicalInfo: {
    ingredients?: string;
    conservation?: string;
    origin?: string;
    temperature?: string;
    highlights?: string[];
  };
  imageUrl?: string;
  featured?: boolean;
}

export interface ProductFamily {
  id: string;
  name: string;
  tagline: string; // Frase de presentación destacada en bloque de color
  description?: string;
  productIds: string[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface BrandColorConfig {
  primary: string; // main brand color
  secondary: string;
  accent: string; // vibrant secondary accent
  badgeBg: string;
  badgeText: string;
  blockBg: string;
  blockText: string;
  borderAccent: string;
  heroGradient: string;
  // Standalone Brand Experience tokens:
  navBg: string;
  navText: string;
  navHover: string;
  navCtaBg: string;
  navCtaText: string;
  subKickerBg: string;
  subKickerText: string;
  cardAccentBorder: string;
  cardTagBg: string;
  cardTagText: string;
  footerBg: string;
  footerText: string;
  vibrantTag: string;
  buttonBg: string;
  buttonText: string;
  buttonBorder: string;
}

export interface Brand {
  id: 'coco-freeze' | 'dhoy' | 'ecolove' | 'hortilisto';
  name: string;
  slug: string;
  valueStatement: string;
  conceptVisual: string;
  shortDescription: string;
  storyTitle: string;
  storyText: string;
  milestones: Milestone[];
  families: ProductFamily[];
  products: Product[];
  colors: BrandColorConfig;
  heroImage: string;
  closingStatement: string;
}
