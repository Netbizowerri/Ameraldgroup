import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { SeoHead } from '../components/SeoHead';
import {
  ROUTE_SEO,
  buildHomeDivisionsListSchema,
} from '../config/seoConfig';
import { COMPANY_INFO, DIVISIONS } from '../data/ameraldData';

export const HomePage: React.FC = () => {
  return (
    <>
      <SeoHead
        {...ROUTE_SEO.home}
        structuredData={buildHomeDivisionsListSchema()}
      />
      <HeroSection />

      {/* Business Divisions Directory */}
      <section
        aria-labelledby="home-divisions-heading"
        className="pattern-white-architectural border-b border-slate-200 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#D92B2B]">
                Our Business Divisions
              </p>
              <h2
                id="home-divisions-heading"
                className="mt-2 font-display text-3xl font-bold tracking-tight text-[#1B1464] sm:text-4xl [text-wrap:balance]"
              >
                Explore specialized services across four Sourceways pillars.
              </h2>
            </div>

            <Link
              to="/divisions"
              className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#1B1464] transition-colors hover:text-[#D92B2B]"
            >
              <span>View all divisions</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {DIVISIONS.map((division, idx) => (
              <article key={division.id} className="flex">
                <Link
                  to={`/divisions/${division.id}`}
                  className="group flex flex-1 flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white/95 shadow-xs transition-all duration-150 hover:border-[#1B1464]/45 hover:bg-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1464]"
                >
                  <div className="aspect-[16/9] overflow-hidden border-b border-slate-200 bg-slate-100">
                    <ImageWithFallback
                      src={division.image}
                      alt={division.imageAlt}
                      title={division.entityName}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs font-medium text-slate-500">
                        <span className="font-semibold text-[#D92B2B]">
                          0{idx + 1}. {division.tabLabel}
                        </span>
                        <span className="tabular-nums">
                          {division.services.length} Services
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-xl font-bold text-[#1B1464]">
                        {division.entityName}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {division.description}
                      </p>
                    </div>

                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B1464] group-hover:text-[#D92B2B]">
                      <span>Open division details</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Governance & Shareholding Summary */}
      <section className="pattern-surface-lattice py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Overview & Leadership Card */}
            <div className="pattern-white-panel flex flex-col justify-between rounded-2xl border border-slate-200 p-7 sm:p-9">
              <div>
                <p className="text-xs font-semibold text-[#D92B2B]">
                  Vision &amp; Leadership
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#1B1464]">
                  &ldquo;{COMPANY_INFO.vision}&rdquo;
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {COMPANY_INFO.managementSummary}
                </p>
              </div>
              <div className="mt-6">
                <Link
                  to="/overview"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#1B1464] transition-colors hover:border-[#1B1464] hover:bg-slate-50"
                >
                  <span>Read Vision, P-E-O-P-L-E Values &amp; Team</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Shareholding Card */}
            <div className="navy-card-pattern flex flex-col justify-between rounded-2xl border border-slate-200 p-7 text-white sm:p-9">
              <div>
                <p className="text-xs font-semibold text-[#F87171]">
                  Sourceways Cooperative Ownership
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
                  Acquire cooperative share units at ₦10,000 per unit.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  Start with a ₦5,000 non-refundable shareholding form, choose your share unit allocation, save at your pace, and participate in annual cooperative profit sharing.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/shareholding"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#D92B2B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#B91C1C]"
                >
                  <span>Calculate Share Units</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <span>Contact Abuja / Kano Desk</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
