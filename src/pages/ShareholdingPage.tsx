import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SeoHead } from '../components/SeoHead';
import { ShareholdingSection } from '../components/ShareholdingSection';
import {
  ROUTE_SEO,
  buildBreadcrumbSchema,
  buildShareholdingFaqSchema,
  buildShareholdingHowToSchema,
} from '../config/seoConfig';

export const ShareholdingPage: React.FC = () => {
  return (
    <>
      <SeoHead
        {...ROUTE_SEO.shareholding}
        structuredData={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Shareholding', path: '/shareholding' },
          ]),
          buildShareholdingHowToSchema(),
          buildShareholdingFaqSchema(),
        ]}
      />

      <PageHeader
        kicker="Sourceways Cooperative"
        title="Shareholding & Part Ownership"
        description="Become a part owner in Sourceways Cooperative with ₦10,000 share units, flexible savings products, and annual profit-sharing participation."
        currentPageLabel="Shareholding"
      />

      <ShareholdingSection />
    </>
  );
};
