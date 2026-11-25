import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { SeoHead } from '../components/SeoHead';
import { VisionValuesSection } from '../components/VisionValuesSection';
import {
  ROUTE_SEO,
  buildAboutPageSchema,
  buildBreadcrumbSchema,
} from '../config/seoConfig';

export const OverviewPage: React.FC = () => {
  return (
    <>
      <SeoHead
        {...ROUTE_SEO.overview}
        structuredData={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Overview', path: '/overview' },
          ]),
          buildAboutPageSchema(),
        ]}
      />

      <PageHeader
        kicker="Corporate Governance"
        title="Vision, Mission, Core Values & Management"
        description="Discover the founding purpose, P-E-O-P-L-E operating principles, and multidisciplinary leadership steering Amerald Group and Sourceways across Nigeria."
        currentPageLabel="Overview"
      />

      <VisionValuesSection />

      <section className="pattern-surface-lattice py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <h2 className="font-display text-xl font-bold text-[#1B1464]">
              Ready to explore our operating divisions or join the cooperative?
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Review detailed service scopes or submit an inquiry directly to our management desk.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/divisions"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#1B1464] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#110D42]"
            >
              <span>Explore Divisions</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#D92B2B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#B91C1C]"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
