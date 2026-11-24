import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { HeroPattern } from './HeroPattern';

interface PageHeaderProps {
  kicker: string;
  title: string;
  description: string;
  currentPageLabel: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  kicker,
  title,
  description,
  currentPageLabel,
}) => {
  return (
    <section className="hero-pattern-navy relative -mt-14 overflow-hidden border-b border-slate-200 pt-24 pb-12 text-white sm:-mt-16 sm:pt-28 sm:pb-16">
      <HeroPattern variant="subpage" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-5 flex items-center gap-2 text-xs font-medium text-slate-300"
        >
          <Link
            to="/"
            className="m-underline cursor-pointer transition-colors hover:text-white"
          >
            Home
          </Link>
          <ChevronRight
            className="h-3.5 w-3.5 text-[#D92B2B]"
            aria-hidden="true"
          />
          <span className="font-semibold text-white">{currentPageLabel}</span>
        </nav>

        <p className="text-sm font-semibold text-[#F87171]">{kicker}</p>
        <h1 className="hero-enter mt-2 max-w-3xl font-display text-[clamp(2rem,3.6vw,3rem)] font-bold leading-tight tracking-tight text-white [text-wrap:balance]">
          {title}
        </h1>
        <p className="hero-enter-delay-1 mt-3 max-w-2xl text-base leading-relaxed text-slate-200">
          {description}
        </p>
      </div>
    </section>
  );
};
