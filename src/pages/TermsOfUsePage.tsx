import React from 'react';
import { LegalDocumentLayout } from '../components/LegalDocumentLayout';
import { SeoHead } from '../components/SeoHead';
import {
  ROUTE_SEO,
  buildBreadcrumbSchema,
  buildLegalWebPageSchema,
} from '../config/seoConfig';
import { LEGAL_DOCUMENTS } from '../data/legalData';

export const TermsOfUsePage: React.FC = () => {
  const doc = LEGAL_DOCUMENTS['terms-of-use'];

  return (
    <>
      <SeoHead
        {...ROUTE_SEO.termsOfUse}
        structuredData={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Terms of Use', path: '/terms-of-use' },
          ]),
          buildLegalWebPageSchema(doc.title, doc.routePath, doc.description),
        ]}
      />
      <LegalDocumentLayout document={doc} />
    </>
  );
};
