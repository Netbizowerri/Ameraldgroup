import React from 'react';
import { useLocation } from 'react-router-dom';
import { ContactSection } from '../components/ContactSection';
import { PageHeader } from '../components/PageHeader';
import { InquiryType } from '../data/ameraldData';

interface ContactLocationState {
  inquiryType?: InquiryType;
  prefilledNote?: string;
}

export const ContactPage: React.FC = () => {
  const location = useLocation();
  const state = (location.state as ContactLocationState | null) ?? {};

  return (
    <>
      <PageHeader
        kicker="Inquiries & Office Locations"
        title="Contact Amerald Group & Sourceways"
        description="Reach our Abuja Head Office or Kano Branch Office for cooperative shareholding forms, consulting proposals, Protective Force deployments, or HR outsourcing."
        currentPageLabel="Contact"
      />

      <ContactSection
        selectedInquiryType={state.inquiryType}
        prefilledNote={state.prefilledNote}
      />
    </>
  );
};
