import React from 'react';
import { COMPANY_INFO, CORE_VALUES } from '../data/ameraldData';

export const VisionValuesSection: React.FC = () => {
  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="border-b border-slate-200 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#D92B2B]">
            Vision, Mission &amp; Governance
          </p>
          <h2
            id="overview-heading"
            className="mt-2 font-display text-3xl font-bold tracking-tight text-[#1B1464] sm:text-4xl [text-wrap:balance]"
          >
            Built to empower communities and deliver institutional-grade execution.
          </h2>
        </div>

        {/* Vision & Mission Two-Column Architectural Blocks */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-wide text-[#D92B2B]">
              01 · Our Vision
            </p>
            <p className="mt-3 font-display text-xl font-semibold leading-snug text-[#1B1464] sm:text-2xl">
              &ldquo;{COMPANY_INFO.vision}&rdquo;
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Every Sourceways initiative creates practical pathways for members, employees, and business owners to build durable personal and enterprise capacity.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-wide text-[#D92B2B]">
              02 · Our Mission
            </p>
            <p className="mt-3 font-display text-xl font-semibold leading-snug text-[#1B1464] sm:text-2xl">
              {COMPANY_INFO.mission}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Operating across Abuja, Kano, and international corridors with transparent accounting controls and verifiable service delivery.
            </p>
          </div>
        </div>

        {/* Core Values: P-E-O-P-L-E */}
        <div className="mt-14 border-t border-slate-200 pt-12">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold text-[#D92B2B]">
                Core Operating Values
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-[#1B1464] sm:text-3xl">
                Guided by the P-E-O-P-L-E Standard
              </h3>
            </div>
            <p className="max-w-md text-sm text-slate-600">
              Six non-negotiable principles governing cooperative funds, advisory mandates, and security deployments.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((item) => (
              <div
                key={item.number}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-[#1B1464]/40"
              >
                <div>
                  <div className="flex items-baseline justify-between border-b border-slate-100 pb-3">
                    <span className="font-display text-2xl font-extrabold text-[#D92B2B]">
                      {item.letter}
                    </span>
                    <span className="text-xs font-medium tabular-nums text-slate-400">
                      {item.number}
                    </span>
                  </div>
                  <h4 className="mt-4 font-display text-lg font-bold text-[#1B1464]">
                    {item.word}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Management Team & Multidisciplinary Expertise */}
        <div className="mt-14 rounded-xl border border-slate-200 bg-[#1B1464] p-6 text-white sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-wide text-slate-300">
                Leadership &amp; Stewardship
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl [text-wrap:balance]">
                Accountable executive oversight backed by cross-sector specialists.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-200">
                {COMPANY_INFO.managementSummary}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
              {COMPANY_INFO.managementDisciplines.map((discipline, index) => (
                <div
                  key={discipline.role}
                  className="rounded-lg border border-white/15 bg-white/5 p-5"
                >
                  <p className="text-xs font-semibold tabular-nums text-[#F87171]">
                    0{index + 1}.
                  </p>
                  <h4 className="mt-1.5 font-display text-base font-bold text-white">
                    {discipline.role}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                    {discipline.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
