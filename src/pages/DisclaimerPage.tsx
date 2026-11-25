import React from 'react';
import { LegalDocumentLayout } from '../components/LegalDocumentLayout';
import { SeoHead } from '../components/SeoHead';
import {
  ROUTE_SEO,
  buildBreadcrumbSchema,
  buildLegalWebPageSchema,
} from '../config/seoConfig';
import { LEGAL_DOCUMENTS } from '../data/legalData';

export const DisclaimerPage: React.FC = () => {
  const doc = LEGAL_DOCUMENTS.disclaimer;

  return (
    <>
      <SeoHead
        {...ROUTE_SEO.disclaimer}
        structuredData={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Cooperative & Legal Disclaimer', path: '/disclaimer' },
          ]),
          buildLegalWebPageSchema(doc.title, doc.routePath, doc.description),
        ]}
      />
      <LegalDocumentLayout document={doc} />
    </>
  );
};
