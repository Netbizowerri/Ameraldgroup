import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

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
    <section className="border-b border-slate-200 bg-[#1B1464] py-12 text-white sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-5 flex items-center gap-2 text-xs font-medium text-slate-300"
        >
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#D92B2B]" aria-hidden="true" />
          <span className="text-white">{currentPageLabel}</span>
        </nav>

        <p className="text-sm font-semibold text-[#F87171]">{kicker}</p>
        <h1 className="mt-2 max-w-3xl font-display text-[clamp(2rem,3.6vw,3rem)] font-bold leading-tight tracking-tight text-white [text-wrap:balance]">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-200">
          {description}
        </p>
      </div>
    </section>
  );
};
