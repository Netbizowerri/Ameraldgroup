import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { DIVISIONS, DivisionId } from '../data/ameraldData';
import { ImageWithFallback } from './ImageWithFallback';

interface DivisionsShowcaseProps {
  activeId: DivisionId;
}

export const DivisionsShowcase: React.FC<DivisionsShowcaseProps> = ({
  activeId,
}) => {
  const navigate = useNavigate();

  const activeDivision =
    DIVISIONS.find((division) => division.id === activeId) ?? DIVISIONS[0];

  return (
    <section
      aria-labelledby="divisions-heading"
      className="pattern-surface-lattice py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Route-Based Segmented Tabs */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#D92B2B]">
              Sourceways Business Divisions
            </p>
            <h2
              id="divisions-heading"
              className="mt-2 font-display text-2xl font-bold tracking-tight text-[#1B1464] sm:text-3xl [text-wrap:balance]"
            >
              Select a division to view full capabilities and mandate scope.
            </h2>
          </div>

          {/* Interactive Division Route Links */}
          <nav
            aria-label="Amerald Group Business Divisions"
            className="flex flex-wrap gap-1.5 rounded-xl border border-slate-200 bg-white p-1.5"
          >
            {DIVISIONS.map((division) => {
              const isSelected = division.id === activeDivision.id;
              return (
                <NavLink
                  key={division.id}
                  to={`/divisions/${division.id}`}
                  className={`min-h-[40px] inline-flex items-center rounded-lg px-4 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1464] sm:text-sm ${
                    isSelected
                      ? 'bg-[#1B1464] text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-[#1B1464]'
                  }`}
                >
                  {division.tabLabel}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Active Division Panel */}
        <div className="pattern-white-panel mt-8 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10">
          {/* Top Overview Split */}
          <div className="grid grid-cols-1 items-stretch gap-8 border-b border-slate-200 pb-8 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <p className="text-xs font-semibold text-[#D92B2B]">
                  {activeDivision.entityName}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {activeDivision.kicker}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#1B1464] sm:text-3xl [text-wrap:balance]">
                  {activeDivision.headline}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  {activeDivision.description}
                </p>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() =>
                    navigate('/contact', {
                      state: {
                        inquiryType: activeDivision.inquiryType,
                        prefilledNote: `Inquiry regarding ${activeDivision.entityName}.`,
                      },
                    })
                  }
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#D92B2B] px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition-colors duration-150 hover:bg-[#B91C1C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1464]"
                >
                  <span>{activeDivision.ctaLabel}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-slate-100 lg:h-full lg:aspect-auto">
                <ImageWithFallback
                  src={activeDivision.image}
                  alt={activeDivision.imageAlt}
                  title={activeDivision.entityName}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Numbered Service Pillars */}
          <div className="mt-8">
            <h4 className="font-display text-base font-bold text-[#1B1464]">
              Scope of Services &amp; Capabilities
            </h4>
            <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {activeDivision.services.map((service) => (
                <div
                  key={service.number}
                  className="flex items-start gap-4 border-b border-slate-100 pb-4"
                >
                  <span className="font-display text-sm font-bold tabular-nums text-[#D92B2B]">
                    {service.number}.
                  </span>
                  <div>
                    <h5 className="font-display text-sm font-bold text-[#1B1464] sm:text-base">
                      {service.title}
                    </h5>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {service.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Protective Force "Why Us" Proof Block */}
          {activeDivision.highlights && activeDivision.highlightsTitle && (
            <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
              <h4 className="font-display text-lg font-bold text-[#1B1464]">
                {activeDivision.highlightsTitle}
              </h4>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {activeDivision.highlights.map((highlight) => (
                  <div key={highlight.title} className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        className="h-4 w-4 shrink-0 text-[#D92B2B]"
                        aria-hidden="true"
                      />
                      <h5 className="font-display text-sm font-bold text-[#1B1464]">
                        {highlight.title}
                      </h5>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-600">
                      {highlight.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
