import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ShareholdingSection } from '../components/ShareholdingSection';

export const ShareholdingPage: React.FC = () => {
  return (
    <>
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
