import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { BRAND_IMAGES, HERO_HIGHLIGHTS } from '../data/ameraldData';
import { ImageWithFallback } from './ImageWithFallback';

export const HeroSection: React.FC = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="border-b border-slate-200 bg-[#1B1464] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* 2-Column Balanced Split */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Core Proposition */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-slate-200">
                <span>Amerald Group</span>
                <span aria-hidden="true" className="text-[#D92B2B]">
                  /
                </span>
                <span>Sourceways Nigeria</span>
                <span aria-hidden="true" className="text-[#D92B2B]">
                  /
                </span>
                <span>Abuja &amp; Kano</span>
              </div>

              <h1
                id="hero-heading"
                className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white [text-wrap:balance]"
              >
                Integrated cooperative wealth, corporate advisory, and protective services across Nigeria.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                Amerald Group unites Sourceways Cooperative shareholding, strategic business consulting, disciplined corporate security, and outsourced HR operations under one accountable leadership team.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/divisions"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#D92B2B] px-6 py-3 text-sm font-semibold whitespace-nowrap text-white transition-colors duration-150 hover:bg-[#B91C1C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Explore Business Divisions</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                to="/shareholding"
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold whitespace-nowrap text-white transition-colors duration-150 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Become a Part Owner</span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Architectural Visual */}
          <div className="lg:col-span-5">
            <div className="relative h-64 overflow-hidden rounded-xl border border-white/15 sm:h-80 lg:h-full lg:min-h-[340px]">
              <ImageWithFallback
                src={BRAND_IMAGES.hero}
                alt="Modern corporate headquarters building representing Amerald Group and Sourceways operations in Nigeria"
                title="Amerald Group · Sourceways Headquarters"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#110D42]/90 via-[#110D42]/35 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-medium text-slate-200">
                  Head Office · Karu Site, FCT Abuja
                </p>
                <p className="mt-1 font-display text-base font-semibold text-white">
                  Multi-sector stewardship built on audit discipline and community growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Enterprise Highlight Strip Below Hero Split */}
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {HERO_HIGHLIGHTS.map((item) => (
            <div key={item.label} className="bg-[#110D42] p-5 sm:p-6">
              <p className="text-xs font-medium text-slate-300">{item.label}</p>
              <p className="mt-1.5 font-display text-xl font-bold tabular-nums text-white">
                {item.value}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
