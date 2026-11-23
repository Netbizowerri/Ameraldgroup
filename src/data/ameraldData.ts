export type DivisionId = 'consulting' | 'protective' | 'cooperative' | 'hr';

export type InquiryType =
  | 'Shareholding & Cooperative Membership'
  | 'Strategic Consulting'
  | 'Protective Force Security'
  | 'HR Outsourcing (FMR Agency)'
  | 'General Inquiry';

export interface CoreValue {
  letter: string;
  word: string;
  number: string;
  description: string;
}

export interface ServicePillar {
  number: string;
  title: string;
  summary: string;
}

export interface DivisionDetail {
  id: DivisionId;
  tabLabel: string;
  entityName: string;
  kicker: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  inquiryType: InquiryType;
  ctaLabel: string;
  services: ServicePillar[];
  highlightsTitle?: string;
  highlights?: { title: string; detail: string }[];
}

export interface ShareholdingStep {
  step: string;
  title: string;
  feeOrUnit?: string;
  description: string;
}

export const BRAND_IMAGES = {
  hero: '/src/assets/images/hero_amerald_group_1795391172948.jpg',
  consulting: '/src/assets/images/division_consulting_1795391172166.jpg',
  protective: '/src/assets/images/division_protective_1795391172721.jpg',
  cooperative: '/src/assets/images/division_cooperative_1795391173129.jpg',
} as const;

export const COMPANY_INFO = {
  groupName: 'Amerald Group',
  emblemLabel: 'AMERLD GROUP',
  subBrand: 'Sourceways',
  vision:
    'A room to empower people and communities to make the best out of themselves.',
  mission:
    'Positioning Sourceways as a leader in service delivery within Nigeria and internationally across distribution, enterprises, micro-finance, and human development initiatives.',
  managementSummary:
    'Led by a seasoned auditor and accountant alongside a multidisciplinary team of bankers, marketers, engineers, and building and agricultural experts.',
  managementDisciplines: [
    {
      role: 'Audit & Financial Governance',
      detail: 'Executive leadership anchored by a seasoned auditor and chartered accounting practitioner.',
    },
    {
      role: 'Banking & Capital Advisory',
      detail: 'Experienced banking specialists structuring cooperative savings, credit, and capital mobilization.',
    },
    {
      role: 'Marketing & Distribution',
      detail: 'Commercial strategists expanding enterprise revenue channels across Nigeria and regional markets.',
    },
    {
      role: 'Engineering, Building & Agriculture',
      detail: 'Technical experts executing industrial project management, real estate, and agro-enterprise initiatives.',
    },
  ],
  contacts: {
    phone: '07032087973',
    phoneHref: 'tel:+2347032087973',
    emails: ['sourceways@gmail.com', 'emeraldcapital@gmail.com'],
    facebook: 'Sourceways Consulting',
    facebookUrl: 'https://www.facebook.com/search/top?q=Sourceways%20Consulting',
    offices: [
      {
        label: 'Abuja Head Office',
        address: 'Plot 34 E9 Agric Qtrs, Road, Karu Site, FCT, Abuja',
      },
      {
        label: 'Kano Branch Office',
        address: 'No. 13A Airport Road, Seoard Floor, Opp. St. Thomas Methodist Church, Kano',
      },
    ],
  },
  shareholdingTerms: {
    formFee: 5000,
    unitPrice: 10000,
    currency: '₦',
  },
};

export const CORE_VALUES: CoreValue[] = [
  {
    letter: 'P',
    word: 'Professionalism',
    number: '01',
    description: 'Consistent execution standards across advisory mandates, cooperative governance, and site security.',
  },
  {
    letter: 'E',
    word: 'Empathy',
    number: '02',
    description: 'Human-centered service designed to lift member households, employees, and partner communities.',
  },
  {
    letter: 'O',
    word: 'Organization',
    number: '03',
    description: 'Structured internal controls, clear reporting lines, and disciplined operational processes.',
  },
  {
    letter: 'P',
    word: 'Profitability',
    number: '04',
    description: 'Sustainable financial returns that protect member capital and fund long-term cooperative dividends.',
  },
  {
    letter: 'L',
    word: 'Learning',
    number: '05',
    description: 'Continuous industry training, market research, and workforce upskilling across every division.',
  },
  {
    letter: 'E',
    word: 'Ethics',
    number: '06',
    description: 'Transparent audit accountability, regulatory compliance, and principled stewardship of client trust.',
  },
];

export const HERO_HIGHLIGHTS = [
  {
    label: 'Cooperative Share Unit',
    value: '₦10,000 / Unit',
    detail: '₦5,000 non-refundable shareholding form',
  },
  {
    label: 'Consulting Practice',
    value: '10 Advisory Pillars',
    detail: 'Strategy, finance, hospitality, logistics & IT',
  },
  {
    label: 'Protective Force',
    value: '24/7 Site Coverage',
    detail: 'Industrial, commercial, VIP & event security',
  },
  {
    label: 'Regional Presence',
    value: 'Abuja & Kano',
    detail: 'Serving enterprises and communities nationwide',
  },
];

export const DIVISIONS: DivisionDetail[] = [
  {
    id: 'consulting',
    tabLabel: 'Strategic Consulting',
    entityName: 'Sourceways Consulting Services Concept Nigeria Limited',
    kicker: 'Corporate & Enterprise Advisory · 10 Core Pillars',
    headline: 'Actionable strategy, capital structuring, and operational turnaround.',
    description:
      'We partner with founders, institutional boards, hospitality brands, and industrial operators to build resilient operating models, secure growth capital, and optimize distribution across Nigeria.',
    image: BRAND_IMAGES.consulting,
    imageAlt: 'Sourceways Consulting executives reviewing strategy and architectural project plans in a modern Abuja boardroom',
    inquiryType: 'Strategic Consulting',
    ctaLabel: 'Request Consulting Proposal',
    services: [
      {
        number: '01',
        title: 'Strategic Business Planning',
        summary: 'Multi-year growth roadmaps, corporate structuring, and market expansion execution plans.',
      },
      {
        number: '02',
        title: 'Financial Advisory & Capital Raising',
        summary: 'Financial modeling, capital mobilization, credit readiness, and investment structuring.',
      },
      {
        number: '03',
        title: 'Project Management',
        summary: 'End-to-end delivery oversight covering scope, cost control, vendor coordination, and timelines.',
      },
      {
        number: '04',
        title: 'Hotel Brand & Operations Advisory',
        summary: 'Hospitality pre-opening setup, SOP design, guest service standards, and yield improvement.',
      },
      {
        number: '05',
        title: 'Risk Management & Compliance',
        summary: 'Enterprise risk audits, internal governance controls, and Nigerian regulatory alignment.',
      },
      {
        number: '06',
        title: 'Business Process Optimization',
        summary: 'Workflow redesign to eliminate bottlenecks, reduce operating waste, and improve unit margins.',
      },
      {
        number: '07',
        title: 'Feasibility Studies & Market Research',
        summary: 'Bankable viability assessments, demand forecasting, and competitive sector intelligence.',
      },
      {
        number: '08',
        title: 'Supply Chain & Logistics Consulting',
        summary: 'Procurement efficiency, inventory flow, warehousing layout, and regional haulage coordination.',
      },
      {
        number: '09',
        title: 'Revenue Optimization & Distribution Strategy',
        summary: 'Channel architecture, pricing frameworks, and commercial go-to-market acceleration.',
      },
      {
        number: '10',
        title: 'IT Strategy & Solutions',
        summary: 'Systems integration advisory, digital workflow modernization, and enterprise technology alignment.',
      },
    ],
  },
  {
    id: 'protective',
    tabLabel: 'Protective Force',
    entityName: 'Sourceways Protective Force Nigeria Ltd.',
    kicker: 'Corporate & Uniform Security Services · Nationwide Coverage',
    headline: 'Disciplined uniformed guarding, rapid response, and executive protection.',
    description:
      'Sourceways Protective Force delivers vetted, trained security personnel and proactive site protection across industrial facilities, commercial complexes, residential estates, and high-profile events.',
    image: BRAND_IMAGES.protective,
    imageAlt: 'Uniformed Sourceways Protective Force officer stationed at a modern commercial tower entrance',
    inquiryType: 'Protective Force Security',
    ctaLabel: 'Request Security Deployment',
    services: [
      {
        number: '01',
        title: 'Industrial, Commercial & Residential Guarding',
        summary: 'Uniformed static and perimeter guarding tailored to factories, offices, banks, and gated estates.',
      },
      {
        number: '02',
        title: 'Access & Crowd Control',
        summary: 'Structured visitor screening, gatehouse verification, and orderly high-volume entry management.',
      },
      {
        number: '03',
        title: 'VIP Protection & Personal Guards',
        summary: 'Discreet close-protection details and vetted personal security escorts for executives and principals.',
      },
      {
        number: '04',
        title: 'Mobile Patrol & Loss Prevention',
        summary: 'Scheduled roving inspections, asset verification, and inventory shrinkage deterrence.',
      },
      {
        number: '05',
        title: 'Surveillance, Alarm Monitoring & Rapid Response',
        summary: 'Continuous monitoring support backed by coordinated rapid escalation teams.',
      },
      {
        number: '06',
        title: 'Event Security, Venue Profiling & Bouncers',
        summary: 'Pre-event threat assessments, venue profiling, access marshals, and trained crowd bouncers.',
      },
      {
        number: '07',
        title: 'Investigative & Property Protection',
        summary: 'Fact-finding inquiries, asset custody protection, and vulnerability remediation.',
      },
      {
        number: '08',
        title: 'Security Training Programs',
        summary: 'Practical guard drills, emergency readiness, and client facility safety orientation.',
      },
    ],
    highlightsTitle: 'Why Sourceways Protective Force?',
    highlights: [
      {
        title: 'Rigorous Personnel Vetting',
        detail: 'Background verification, guarantor screening, and physical readiness checks prior to deployment.',
      },
      {
        title: 'Site-Specific Risk Profiling',
        detail: 'Every industrial, commercial, or event post begins with a structured threat and perimeter audit.',
      },
      {
        title: 'Disciplined Uniformed Presence',
        detail: 'Commanding, courteous officers trained in de-escalation, access protocol, and incident logging.',
      },
      {
        title: 'Coordinated Escalation & Rapid Response',
        detail: 'Clear supervisor chain-of-command linking static guards, patrol units, and client leadership.',
      },
    ],
  },
  {
    id: 'cooperative',
    tabLabel: 'Cooperative & Shares',
    entityName: 'Sourceways Cooperative & Shareholding Division',
    kicker: 'Part-Ownership · Savings & Profit Sharing',
    headline: 'Accessible cooperative shareholding built for collective wealth creation.',
    description:
      'Through Sourceways Cooperative, individuals, artisans, and professionals become part owners in a diversified enterprise ecosystem—combining structured savings with unit shareholding and annual profit sharing.',
    image: BRAND_IMAGES.cooperative,
    imageAlt: 'Sourceways Cooperative members and business owners reviewing share portfolios together',
    inquiryType: 'Shareholding & Cooperative Membership',
    ctaLabel: 'Apply for Shareholding',
    services: [
      {
        number: '01',
        title: 'Shareholding Enrollment Form (₦5,000)',
        summary: 'Begin membership with a one-time ₦5,000 non-refundable shareholding form via our office, field officers, or online inquiry.',
      },
      {
        number: '02',
        title: 'Affordable Share Units (₦10,000 / Unit)',
        summary: 'Acquire cooperative equity units at ₦10,000 per unit according to your investment capacity and long-term goals.',
      },
      {
        number: '03',
        title: 'Flexible Member Savings Products',
        summary: 'Build disciplined reserves at your own pace across structured cooperative savings options.',
      },
      {
        number: '04',
        title: 'Annual Profit Sharing & Community Impact',
        summary: 'Participate as a part owner in audited enterprise surpluses, micro-finance access, and distribution ventures.',
      },
    ],
  },
  {
    id: 'hr',
    tabLabel: 'HR Outsourcing',
    entityName: 'FMR Agency · Amerald Group HR Outsourcing',
    kicker: 'Workforce Management · Full-Cycle HR Department Outsourcing',
    headline: 'Dedicated HR administration, payroll, and compliance without internal overhead.',
    description:
      'Through our FMR Agency HR outsourcing division, growing organizations offload recruitment, payroll, welfare administration, and Nigerian labor compliance to seasoned human resource specialists.',
    image: BRAND_IMAGES.consulting,
    imageAlt: 'Amerald Group HR and executive leadership aligning workforce planning and compliance standards',
    inquiryType: 'HR Outsourcing (FMR Agency)',
    ctaLabel: 'Request HR Outsourcing Quote',
    services: [
      {
        number: '01',
        title: 'HR Setup & Workforce Planning',
        summary: 'Org chart design, headcount budgeting, and role definition for scaling teams.',
      },
      {
        number: '02',
        title: 'HR Administration & Welfare',
        summary: 'Employee records management, leave tracking, HMO coordination, and staff welfare support.',
      },
      {
        number: '03',
        title: 'Recruitment & Onboarding',
        summary: 'Candidate sourcing, competency screening, background checks, and structured induction.',
      },
      {
        number: '04',
        title: 'Performance Management',
        summary: 'KPI frameworks, appraisal cycles, and constructive performance review systems.',
      },
      {
        number: '05',
        title: 'Payroll & Benefits',
        summary: 'Accurate monthly payroll processing, statutory deductions, PAYE, pension, and benefits administration.',
      },
      {
        number: '06',
        title: 'Training & Development',
        summary: 'Targeted skills workshops, leadership coaching, and compliance upskilling.',
      },
      {
        number: '07',
        title: 'HR Policy & Implementation',
        summary: 'Employee handbooks, codes of conduct, and operational workplace policy rollout.',
      },
      {
        number: '08',
        title: 'Conflict Resolution & Compliance',
        summary: 'Mediation, disciplinary procedure governance, and Nigerian labor law adherence.',
      },
    ],
  },
];

export const SHAREHOLDING_STEPS: ShareholdingStep[] = [
  {
    step: '01',
    title: 'Obtain the Shareholding Form',
    feeOrUnit: '₦5,000 Non-Refundable',
    description:
      'Request your membership and shareholding form through our Abuja or Kano offices, authorized field officers, email, or the inquiry form below.',
  },
  {
    step: '02',
    title: 'Acquire Cooperative Share Units',
    feeOrUnit: '₦10,000 Per Share Unit',
    description:
      'Purchase one or more equity share units at ₦10,000 each to formalize your stake as a part owner in Sourceways Cooperative.',
  },
  {
    step: '03',
    title: 'Start Saving According to Ability',
    feeOrUnit: 'Flexible Savings Options',
    description:
      'Select a sustainable savings plan tailored to your income cadence—building steady financial reserves alongside your equity stake.',
  },
  {
    step: '04',
    title: 'Participate in Profit Sharing',
    feeOrUnit: 'Annual Member Surplus',
    description:
      'Receive transparent profit-sharing distributions backed by audited enterprise performance across distribution, micro-finance, and consulting.',
  },
];

export const INQUIRY_OPTIONS: InquiryType[] = [
  'Shareholding & Cooperative Membership',
  'Strategic Consulting',
  'Protective Force Security',
  'HR Outsourcing (FMR Agency)',
  'General Inquiry',
];
