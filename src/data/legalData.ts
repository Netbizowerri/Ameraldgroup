export interface LegalSection {
  id: string;
  number: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalDocument {
  slug: 'privacy-policy' | 'terms-of-use' | 'disclaimer';
  routePath: string;
  navLabel: string;
  kicker: string;
  title: string;
  description: string;
  effectiveDate: string;
  jurisdiction: string;
  summary: string;
  sections: LegalSection[];
}

export const LEGAL_DOCUMENTS: Record<LegalDocument['slug'], LegalDocument> = {
  'privacy-policy': {
    slug: 'privacy-policy',
    routePath: '/privacy-policy',
    navLabel: 'Privacy Policy',
    kicker: 'Data Protection · NDPA 2023',
    title: 'Privacy & Data Protection Policy',
    description:
      'How Amerald Group and its Sourceways business divisions collect, use, protect, and respect your personal data in compliance with the Nigeria Data Protection Act (NDPA) 2023.',
    effectiveDate: 'November 2026',
    jurisdiction: 'Federal Republic of Nigeria (NDPA 2023 / NDPC)',
    summary:
      'This Privacy Policy explains how Amerald Group and its operating divisions handle personal information submitted through this website. Our platform operates without a custom visitor database or advertising trackers and processes inquiries strictly to respond to your requests.',
    sections: [
      {
        id: 'controller',
        number: '01',
        heading: 'Data Controller & Scope',
        paragraphs: [
          'This website is operated by Amerald Group on behalf of its Sourceways business divisions in Nigeria: Sourceways Cooperative & Shareholding Division, Sourceways Consulting Services Concept Nigeria Limited, Sourceways Protective Force Nigeria Ltd., and FMR Agency (HR Outsourcing).',
          'For the purposes of the Nigeria Data Protection Act (NDPA) 2023 and regulations issued by the Nigeria Data Protection Commission (NDPC), Amerald Group acts as the Data Controller for personal information submitted through our online inquiry channels or communicated to our Abuja Head Office and Kano Branch Office.',
        ],
      },
      {
        id: 'data-collected',
        number: '02',
        heading: 'Personal Data We Collect',
        paragraphs: [
          'We practice strict data minimization. You can browse all public pages of this website without creating an account or supplying personal information. We only collect personal data when you voluntarily submit an inquiry through our contact form or email/call our published desks:',
        ],
        bullets: [
          'Identity & Contact Data: Full name, email address, and telephone number.',
          'Organizational Data: Company, enterprise, or cooperative group name (optional).',
          'Inquiry Details: Selected business division (Shareholding, Strategic Consulting, Protective Force Security, HR Outsourcing, or General Inquiry) and the message or share-unit estimate you submit.',
          'Technical Delivery Data: Standard HTTP request metadata (such as IP address and browser user-agent) temporarily processed by our hosting provider and form processor solely to deliver requests and block automated spam.',
        ],
      },
      {
        id: 'lawful-basis',
        number: '03',
        heading: 'Lawful Basis & Purpose of Processing',
        paragraphs: [
          'Under Section 25 of the Nigeria Data Protection Act (NDPA) 2023, we process your personal data only on valid lawful grounds:',
        ],
        bullets: [
          'Consent: When you voluntarily submit an inquiry requesting cooperative shareholding documentation, consulting proposals, security deployment quotes, or HR outsourcing information.',
          'Pre-Contractual Steps: To evaluate your service scope, verify office jurisdiction (Abuja, Kano, or nationwide), and prepare formal engagement letters or membership forms prior to entering a contract.',
          'Legal & Regulatory Compliance: To fulfill statutory obligations under Nigerian corporate, cooperative, labor, tax, and private security regulations where an engagement proceeds.',
          'Legitimate Interest: To protect our website against spam, fraud, and abusive submissions via honeypot validation.',
        ],
      },
      {
        id: 'third-party-processing',
        number: '04',
        heading: 'Form Processing, Hosting & Zero Data Resale',
        paragraphs: [
          'This website does not store visitor submissions in a browser-exposed database and does not sell, rent, or trade your personal information to third-party marketers or data brokers.',
          'Online contact form submissions are transmitted securely over HTTPS via Formspree (our designated form delivery processor) directly to Amerald Group’s official administrative email desks. Because Formspree and cloud hosting infrastructure may process form payloads on secure servers outside Nigeria, any cross-border transmission is limited strictly to delivering your inquiry and is safeguarded in accordance with NDPA 2023 cross-border transfer standards.',
        ],
      },
      {
        id: 'cookies-storage',
        number: '05',
        heading: 'Cookies & Browser Storage Notice',
        paragraphs: [
          'Amerald Group does not deploy invasive advertising cookies, third-party behavioral tracking pixels, or cross-site profiling scripts on this platform.',
          'Essential technical functionality (such as client-side page routing, font loading, and temporary UI state like the share-unit estimator) operates strictly within your active session. If we introduce optional analytics cookies in the future, this notice will be updated and appropriate consent mechanisms provided.',
        ],
      },
      {
        id: 'retention-security',
        number: '06',
        heading: 'Data Retention & Security Safeguards',
        paragraphs: [
          'Inquiry correspondence is retained only for as long as reasonably necessary to respond to your request, complete pre-contractual onboarding, or meet statutory record-keeping obligations under Nigerian law (such as audited cooperative records or corporate engagement files).',
          'We apply administrative and technical safeguards—including encrypted HTTPS transport, spam filtering, and restricted access limited to authorized Amerald Group personnel—to protect submitted data against unauthorized disclosure, alteration, or loss.',
        ],
      },
      {
        id: 'ndpa-rights',
        number: '07',
        heading: 'Your Rights Under the NDPA 2023',
        paragraphs: [
          'As a Data Subject under Nigerian law, you have the right to exercise control over your personal data at any time:',
        ],
        bullets: [
          'Right of Access: Request confirmation of whether we hold your personal data and obtain a copy of it.',
          'Right to Rectification: Request correction of inaccurate or incomplete personal details.',
          'Right to Erasure: Request deletion of your inquiry records where they are no longer needed for the purpose collected and no statutory retention rule applies.',
          'Right to Withdraw Consent & Object: Withdraw consent to follow-up communications or object to processing at any time.',
          'Right to Data Portability & Redress: Request transfer of data you provided in a structured format, or lodge a complaint with the Nigeria Data Protection Commission (NDPC) if you believe your rights have been infringed.',
        ],
      },
      {
        id: 'privacy-contact',
        number: '08',
        heading: 'Data Protection Contact',
        paragraphs: [
          'To exercise any of your NDPA 2023 rights or ask questions regarding this Privacy Policy, please contact our administrative compliance desk directly:',
        ],
        bullets: [
          'Email: sourceways@gmail.com or emeraldcapital@gmail.com',
          'Telephone: 07032087973 (+234 703 208 7973)',
          'Abuja Head Office: Plot 34 E9 Agric Qtrs, Road, Karu Site, FCT, Abuja, Nigeria',
          'Kano Branch Office: No. 13A Airport Road, Seoard Floor, Opp. St. Thomas Methodist Church, Kano, Nigeria',
        ],
      },
    ],
  },

  'terms-of-use': {
    slug: 'terms-of-use',
    routePath: '/terms-of-use',
    navLabel: 'Terms of Use',
    kicker: 'Website Governance · Nigeria',
    title: 'Terms & Conditions of Website Use',
    description:
      'Terms governing access to the Amerald Group & Sourceways web platform, intellectual property, inquiry submissions, and governing law in the Federal Republic of Nigeria.',
    effectiveDate: 'November 2026',
    jurisdiction: 'Federal Republic of Nigeria',
    summary:
      'By accessing or using this website, you agree to comply with these Terms of Use and all applicable laws of the Federal Republic of Nigeria. If you do not agree with these terms, please discontinue use of the site.',
    sections: [
      {
        id: 'acceptance',
        number: '01',
        heading: 'Acceptance & Scope of Platform',
        paragraphs: [
          'These Terms of Use govern your access to the official web platform of Amerald Group and its Sourceways divisions (Sourceways Cooperative & Shareholding, Sourceways Consulting Services Concept Nigeria Limited, Sourceways Protective Force Nigeria Ltd., and FMR Agency HR Outsourcing).',
          'Content published on this website is provided for general corporate information and preliminary inquiry purposes. Accessing this site or submitting an inquiry form does not by itself establish a client-consultant, cooperative shareholder, security deployment, or HR outsourcing contract.',
        ],
      },
      {
        id: 'formal-engagements',
        number: '02',
        heading: 'Division-Specific Agreements Take Precedence',
        paragraphs: [
          'All commercial services and cooperative memberships offered by Amerald Group are governed by separate formal written agreements executed offline or through verified official onboarding procedures:',
        ],
        bullets: [
          'Sourceways Cooperative & Shareholding: Governed by the official shareholding enrollment form, cooperative bye-laws, and verified receipt of the ₦5,000 non-refundable form fee and ₦10,000 per-unit share subscription.',
          'Sourceways Consulting Services Concept Nigeria Limited: Governed by signed engagement letters specifying deliverables, professional fees, confidentiality, and project timelines.',
          'Sourceways Protective Force Nigeria Ltd.: Governed by site-specific risk assessments, written security deployment contracts, and agreed operational protocols.',
          'FMR Agency (HR Outsourcing): Governed by executed HR outsourcing service level agreements detailing recruitment, payroll administration, and statutory labor responsibilities.',
        ],
      },
      {
        id: 'acceptable-use',
        number: '03',
        heading: 'Acceptable Use & Cybercrime Compliance',
        paragraphs: [
          'You agree to use this website solely for lawful business or personal inquiry purposes in accordance with the Cybercrimes (Prohibition, Prevention, etc.) Act of Nigeria and all other applicable statutes. You must not:',
        ],
        bullets: [
          'Submit false, misleading, impersonated, or fraudulent contact inquiries or membership requests.',
          'Attempt to disrupt, probe, scrape aggressively, inject malicious code into, or bypass spam protections on our web forms.',
          'Misrepresent any affiliation with Amerald Group, Sourceways, or our authorized field officers.',
        ],
      },
      {
        id: 'intellectual-property',
        number: '04',
        heading: 'Intellectual Property Rights',
        paragraphs: [
          'All branding elements displayed on this site—including the Amerald Group circular emblem, Sourceways division names, P-E-O-P-L-E values framework presentation, layout architecture, copy, and custom visual assets—are the property of Amerald Group or used under license and are protected under the Nigerian Copyright Act and applicable trademark laws.',
          'You may view and print pages strictly for personal evaluation or legitimate corporate procurement review. You may not reproduce, republish, mirror, or commercially exploit any portion of this website without prior written authorization from Amerald Group.',
        ],
      },
      {
        id: 'third-party-links',
        number: '05',
        heading: 'Third-Party Links & External Platforms',
        paragraphs: [
          'This website contains links to external channels such as our Facebook page (Sourceways Consulting) and routes contact submissions through Formspree. Amerald Group does not control the independent availability, uptime, or terms of third-party platforms and assumes no liability for external websites beyond our control.',
        ],
      },
      {
        id: 'limitation-liability',
        number: '06',
        heading: 'Disclaimer of Warranties & Limitation of Liability',
        paragraphs: [
          'While Amerald Group takes reasonable care to ensure accuracy across published service descriptions, office addresses, and cooperative unit figures, this website is provided on an "as is" and "as available" basis without implied warranties of uninterrupted availability or error-free operation.',
          'To the fullest extent permitted by Nigerian law, Amerald Group and its affiliated entities shall not be liable for any indirect, incidental, or consequential loss arising from reliance on general website information prior to signing a formal written engagement agreement.',
        ],
      },
      {
        id: 'governing-law',
        number: '07',
        heading: 'Governing Law, Dispute Resolution & Updates',
        paragraphs: [
          'These Terms of Use are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any dispute arising out of website use that cannot be resolved amicably through direct engagement with our Abuja Head Office shall be subject to the jurisdiction of the competent courts of the Federal Republic of Nigeria.',
          'We may update these Terms from time to time to reflect operational or statutory changes. Continued use of the website following publication of updates constitutes acceptance of the revised Terms.',
        ],
      },
    ],
  },

  disclaimer: {
    slug: 'disclaimer',
    routePath: '/disclaimer',
    navLabel: 'Regulatory & Cooperative Disclaimer',
    kicker: 'Compliance & Disclosures · Nigeria',
    title: 'Cooperative, Advisory & Regulatory Disclaimer',
    description:
      'Important legal notices covering Sourceways Cooperative shareholding terms, non-refundable form fees, consulting scope, private security regulations, and official payment verification in Nigeria.',
    effectiveDate: 'November 2026',
    jurisdiction: 'Federal Republic of Nigeria',
    summary:
      'Please review these important disclosures carefully before applying for Sourceways Cooperative shareholding, relying on consulting descriptions, or initiating any financial transaction with Amerald Group or its operating divisions.',
    sections: [
      {
        id: 'cooperative-shareholding',
        number: '01',
        heading: 'Cooperative Shareholding & Profit-Sharing Notice',
        paragraphs: [
          'Membership and part-ownership opportunities presented on this website relate strictly to participation in Sourceways Cooperative in accordance with applicable Nigerian cooperative society governance and internal cooperative bye-laws.',
          'Nothing on this website—including the interactive Share Capital Estimator on the Shareholding page—constitutes a public offer of securities, a prospectus, or an invitation to the general public under the Investments and Securities Act (ISA) or Securities and Exchange Commission (SEC) Nigeria rules.',
        ],
        bullets: [
          'Non-Refundable Enrollment Form: The ₦5,000 shareholding enrollment form fee is strictly non-refundable and covers administrative registration processing.',
          'Share Unit Allocation: Cooperative share units are priced at ₦10,000 per unit and are allotted only upon formal verification, completion of official enrollment documentation, and receipt of cleared funds.',
          'No Guaranteed Fixed Returns: Annual profit sharing is derived exclusively from actual audited net surpluses generated by cooperative enterprise operations and approved for member distribution. Past or illustrative enterprise activity does not guarantee future surplus amounts.',
          'Illustrative Estimator Tool: The Share Capital Estimator calculates simple arithmetic multiples of ₦10,000 per unit plus the ₦5,000 form fee for planning convenience only and does not bind either party.',
        ],
      },
      {
        id: 'consulting-advisory',
        number: '02',
        heading: 'Strategic Consulting & Financial Advisory Notice',
        paragraphs: [
          'Information published for Sourceways Consulting Services Concept Nigeria Limited—including strategic planning, financial advisory, capital raising, risk management, feasibility studies, hospitality advisory, and IT strategy—is descriptive of our professional capabilities and does not constitute tailored legal, tax, statutory audit, or licensed investment advice.',
          'Clients should rely only on formal written advisory reports delivered under an executed engagement contract tailored to their specific business facts and regulatory environment.',
        ],
      },
      {
        id: 'protective-force',
        number: '03',
        heading: 'Protective Services & Private Guard Compliance',
        paragraphs: [
          'Corporate, industrial, commercial, residential, VIP, and event security deployments by Sourceways Protective Force Nigeria Ltd. are subject to pre-deployment site risk profiling, personnel availability, written contract execution, and compliance with Nigeria’s Private Guard Companies Act and applicable Nigeria Security and Civil Defence Corps (NSCDC) operational guidelines.',
          'Private guard personnel operate strictly within lawful civil security, access control, deterrence, and rapid-escalation mandates and do not replace statutory law enforcement agencies.',
        ],
      },
      {
        id: 'hr-outsourcing',
        number: '04',
        heading: 'HR Outsourcing & Statutory Payroll Notice',
        paragraphs: [
          'HR department outsourcing, recruitment, payroll administration, PAYE, pension remittance coordination, and workplace conflict resolution offered via FMR Agency are executed strictly under written client mandates in alignment with the Nigerian Labour Act, Pension Reform Act, and applicable state/federal tax regulations. Final employer statutory remittances depend on timely client funding and accurate workforce documentation.',
        ],
      },
      {
        id: 'payment-fraud-warning',
        number: '05',
        heading: 'Official Payment Verification & Anti-Fraud Warning',
        paragraphs: [
          'To protect prospective cooperative members and corporate clients against impersonation or unauthorized solicitation:',
        ],
        bullets: [
          'This website does not collect online card payments, bank transfers, or BVN/banking credentials.',
          'Never pay cash or transfer funds for shareholding forms (₦5,000), share units (₦10,000/unit), consulting retainers, or security deployments to any unverified personal account.',
          'Always verify official Amerald Group / Sourceways corporate account details and official receipt issuance directly via our Abuja Head Office (Plot 34 E9 Agric Qtrs, Road, Karu Site, FCT, Abuja), Kano Branch Office (No. 13A Airport Road, Seoard Floor, Opp. St. Thomas Methodist Church), official phone line (07032087973), or official emails (sourceways@gmail.com / emeraldcapital@gmail.com).',
        ],
      },
    ],
  },
};

export const LEGAL_NAV_LINKS = [
  {
    slug: 'privacy-policy' as const,
    to: '/privacy-policy',
    label: 'Privacy Policy',
  },
  {
    slug: 'terms-of-use' as const,
    to: '/terms-of-use',
    label: 'Terms of Use',
  },
  {
    slug: 'disclaimer' as const,
    to: '/disclaimer',
    label: 'Cooperative & Legal Disclaimer',
  },
];
