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
    <section className="pt-8 pb-6 sm:pt-12 sm:pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel-tinted rounded-3xl p-7 sm:p-10 lg:p-12">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-2 text-xs font-medium text-slate-600"
          >
            <Link
              to="/"
              className="m-underline cursor-pointer transition-colors hover:text-[#1B1464]"
            >
              Home
            </Link>
            <ChevronRight
              className="h-3.5 w-3.5 text-[#D92B2B]"
              aria-hidden="true"
            />
            <span className="font-semibold text-[#1B1464]">
              {currentPageLabel}
            </span>
          </nav>

          <p className="text-sm font-semibold text-[#D92B2B]">{kicker}</p>
          <h1 className="hero-enter mt-2 max-w-3xl font-display text-[clamp(2rem,3.6vw,3rem)] font-bold leading-tight tracking-tight text-[#1B1464] [text-wrap:balance]">
            {title}
          </h1>
          <p className="hero-enter-delay-1 mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
