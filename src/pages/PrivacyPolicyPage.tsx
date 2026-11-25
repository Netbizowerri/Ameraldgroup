import React from 'react';
import { LegalDocumentLayout } from '../components/LegalDocumentLayout';
import { SeoHead } from '../components/SeoHead';
import {
  ROUTE_SEO,
  buildBreadcrumbSchema,
  buildLegalWebPageSchema,
} from '../config/seoConfig';
import { LEGAL_DOCUMENTS } from '../data/legalData';

export const PrivacyPolicyPage: React.FC = () => {
  const doc = LEGAL_DOCUMENTS['privacy-policy'];

  return (
    <>
      <SeoHead
        {...ROUTE_SEO.privacyPolicy}
        structuredData={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Privacy Policy', path: '/privacy-policy' },
          ]),
          buildLegalWebPageSchema(doc.title, doc.routePath, doc.description),
        ]}
      />
      <LegalDocumentLayout document={doc} />
    </>
  );
};
