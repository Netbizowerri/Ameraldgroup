import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { BRAND_IMAGES, HERO_HIGHLIGHTS } from '../data/ameraldData';
import { ImageWithFallback } from './ImageWithFallback';

export const HeroSection: React.FC = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="pt-8 pb-12 sm:pt-12 sm:pb-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Frosted Glass Architectural Hero Shell */}
        <div className="glass-panel-tinted rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Core Proposition */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <div className="hero-enter mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-slate-600">
                  <span className="text-[#1B1464]">Amerald Group</span>
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
                  className="hero-enter font-display text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-[#1B1464] [text-wrap:balance]"
                >
                  Integrated cooperative wealth, corporate advisory, and protective services across Nigeria.
                </h1>

                <p className="hero-enter-delay-1 mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  Amerald Group unites Sourceways Cooperative shareholding, strategic business consulting, disciplined corporate security, and outsourced HR operations under one accountable leadership team.
                </p>
              </div>

              <div className="hero-enter-delay-2 mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/divisions"
                  className="m-btn inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[#D92B2B] px-6 py-3 text-sm font-semibold whitespace-nowrap text-white hover:bg-[#B91C1C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1464]"
                >
                  <span>Explore Business Divisions</span>
                  <ArrowRight className="m-arrow h-4 w-4" aria-hidden="true" />
                </Link>

                <Link
                  to="/shareholding"
                  className="m-btn inline-flex min-h-[46px] items-center gap-1.5 rounded-xl border border-[#1B1464]/20 bg-white/85 px-5 py-3 text-sm font-semibold whitespace-nowrap text-[#1B1464] hover:border-[#1B1464]/40 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1464]"
                >
                  <span>Become a Part Owner</span>
                  <ChevronRight className="m-arrow h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right Column: Framed Architectural Photograph with Frosted Glass Plaque */}
            <div className="lg:col-span-5">
              <div className="m-zoom relative h-64 rounded-2xl border border-white/80 bg-white/60 shadow-[0_14px_34px_-12px_rgba(27,20,100,0.16)] sm:h-80 lg:h-full lg:min-h-[360px]">
                <ImageWithFallback
                  src={BRAND_IMAGES.hero}
                  alt="Modern corporate headquarters building representing Amerald Group and Sourceways operations in Nigeria"
                  title="Amerald Group · Sourceways Headquarters"
                  className="hero-media-settle h-full w-full object-cover"
                />
                <div className="glass-chip absolute inset-x-3.5 bottom-3.5 rounded-xl p-4 sm:inset-x-4 sm:bottom-4">
                  <p className="text-xs font-semibold text-[#D92B2B]">
                    Head Office · Karu Site, FCT Abuja
                  </p>
                  <p className="mt-1 font-display text-sm font-bold text-[#1B1464] sm:text-base">
                    Multi-sector stewardship built on audit discipline and community growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full-Width 4-Column Light Frosted Highlight Strip Below Hero Split */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="glass-panel rounded-2xl p-5 transition-colors duration-150 hover:border-[#1B1464]/25 hover:bg-white/95"
              >
                <p className="text-xs font-semibold text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1.5 font-display text-xl font-bold tabular-nums text-[#1B1464]">
                  {item.value}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
