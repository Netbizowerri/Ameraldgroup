import {
  COMPANY_INFO,
  DIVISIONS,
  DivisionDetail,
  DivisionId,
  SHAREHOLDING_STEPS,
} from '../data/ameraldData';

const DEFAULT_SITE_URL = 'https://ameraldgroup.vercel.app';

export const SITE_URL = (
  (import.meta.env.VITE_SITE_URL as string | undefined) || DEFAULT_SITE_URL
)
  .trim()
  .replace(/\/+$/, '');

export const LIVE_PRODUCTION_DOMAIN = 'https://www.ameraldgroup.com.ng';
export const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg`;
export const OG_IMAGE_ALT =
  'Amerald Group and Sourceways Nigeria — Cooperative Shareholding, Strategic Consulting, Protective Force Security, and HR Outsourcing';

export interface RouteSeoMeta {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
}

export const ROUTE_SEO: Record<
  'home' | 'overview' | 'divisionsIndex' | 'shareholding' | 'contact' | 'notFound',
  RouteSeoMeta
> = {
  home: {
    title: 'Amerald Group Nigeria | Sourceways Consulting & Security',
    description:
      'Amerald Group unites Sourceways Cooperative shareholding, strategic consulting, corporate protective security, and HR outsourcing in Abuja and Kano, Nigeria.',
    canonicalPath: '/',
  },
  overview: {
    title: 'About Amerald Group | Vision, P-E-O-P-L-E Values & Team',
    description:
      "Learn about Amerald Group's vision, mission, P-E-O-P-L-E core values, and multidisciplinary leadership team serving communities and enterprises in Nigeria.",
    canonicalPath: '/overview',
  },
  divisionsIndex: {
    title: 'Sourceways Business Divisions | Amerald Group Nigeria',
    description:
      "Explore Amerald Group's four Sourceways divisions: strategic business consulting, Protective Force security, cooperative shareholding, and HR outsourcing.",
    canonicalPath: '/divisions',
  },
  shareholding: {
    title: 'Cooperative Shareholding & Membership | Amerald Group',
    description:
      'Become a part owner in Sourceways Cooperative in four steps: ₦5,000 form, ₦10,000 per share unit, flexible savings, and annual member profit sharing.',
    canonicalPath: '/shareholding',
  },
  contact: {
    title: 'Contact Amerald Group | Abuja & Kano Offices Nigeria',
    description:
      'Contact Amerald Group and Sourceways in Abuja (Karu Site) or Kano (Airport Road) for cooperative shareholding, consulting, security, or HR inquiries.',
    canonicalPath: '/contact',
  },
  notFound: {
    title: 'Page Not Found (404) | Amerald Group & Sourceways',
    description:
      'The page you requested could not be found on Amerald Group. Return home or explore our Sourceways business divisions in Nigeria.',
    canonicalPath: '/',
    noIndex: true,
  },
};

export const DIVISION_SEO: Record<DivisionId, RouteSeoMeta> = {
  consulting: {
    title: 'Strategic Business Consulting in Nigeria | Sourceways',
    description:
      'Sourceways Consulting Services Concept Nigeria Limited delivers 10 advisory pillars: strategy, finance, project management, hospitality, logistics, and IT.',
    canonicalPath: '/divisions/consulting',
  },
  protective: {
    title: 'Corporate Security & Guarding Nigeria | Protective Force',
    description:
      'Sourceways Protective Force Nigeria Ltd. provides uniformed guarding, VIP protection, access control, mobile patrols, rapid response, and event security.',
    canonicalPath: '/divisions/protective',
  },
  cooperative: {
    title: 'Sourceways Cooperative & Shareholding | Amerald Group',
    description:
      'Join Sourceways Cooperative to acquire ₦10,000 share units, access flexible member savings products, and participate in annual audited profit sharing.',
    canonicalPath: '/divisions/cooperative',
  },
  hr: {
    title: 'HR Outsourcing & Payroll Nigeria | FMR Agency Amerald',
    description:
      'Outsource HR setup, recruitment, payroll, benefits, training, policy implementation, and Nigerian labor compliance with FMR Agency under Amerald Group.',
    canonicalPath: '/divisions/hr',
  },
};

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildHomeDivisionsListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Amerald Group & Sourceways Business Divisions',
    itemListElement: DIVISIONS.map((division, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: division.entityName,
      description: division.description,
      url: `${SITE_URL}/divisions/${division.id}`,
    })),
  };
}

export function buildAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Amerald Group & Sourceways Nigeria',
    url: `${SITE_URL}/overview`,
    description: COMPANY_INFO.mission,
    mainEntity: {
      '@id': `${SITE_URL}/#organization`,
    },
  };
}

export function buildDivisionServiceSchema(division: DivisionDetail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: division.entityName,
    serviceType: division.tabLabel,
    description: division.description,
    url: `${SITE_URL}/divisions/${division.id}`,
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    provider: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: COMPANY_INFO.groupName,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${division.tabLabel} Capabilities`,
      itemListElement: division.services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.summary,
        },
      })),
    },
  };
}

export function buildShareholdingHowToSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Become a Part Owner and Member of Sourceways Cooperative',
    description:
      'Four-step enrollment process to obtain a shareholding form, purchase ₦10,000 cooperative share units, start flexible savings, and join annual profit sharing.',
    totalTime: 'P1D',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'NGN',
      value: String(
        COMPANY_INFO.shareholdingTerms.formFee +
          COMPANY_INFO.shareholdingTerms.unitPrice
      ),
    },
    step: SHAREHOLDING_STEPS.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
  };
}

export function buildShareholdingFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much is the Sourceways Cooperative shareholding enrollment form?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Sourceways Cooperative shareholding and membership enrollment form costs ₦5,000 (one-time, non-refundable) and can be requested via the Abuja or Kano offices, authorized field officers, email, or the online inquiry form.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the price per share unit in Sourceways Cooperative?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Each cooperative share unit is fixed at ₦10,000 per unit. Members can acquire one or multiple units based on their investment capacity.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do cooperative savings and profit sharing work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Members save according to their ability across flexible cooperative savings options and participate as part owners in annual profit sharing backed by audited enterprise performance.',
        },
      },
    ],
  };
}

export function buildContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Amerald Group & Sourceways Nigeria',
    url: `${SITE_URL}/contact`,
    description:
      'Official contact channels and Abuja and Kano office locations for Amerald Group and Sourceways business divisions.',
    mainEntity: {
      '@id': `${SITE_URL}/#organization`,
    },
  };
}
