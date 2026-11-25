import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ROUTE_SEO } from '../config/seoConfig';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SeoHead {...ROUTE_SEO.notFound} />
      <section className="pattern-white-architectural flex flex-1 items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <p className="font-display text-sm font-semibold text-[#D92B2B]">
            404 · Page Not Found
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#1B1464]">
            We couldn&apos;t find that page.
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            The route you requested does not exist. Return to the Amerald Group home page or browse our business divisions.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#1B1464] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#110D42]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/divisions"
              className="inline-flex min-h-[44px] items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#1B1464] transition-colors hover:bg-slate-100"
            >
              <span>Explore Divisions</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
