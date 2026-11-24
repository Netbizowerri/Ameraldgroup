import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/ameraldData';
import { AmeraldLogo } from './AmeraldLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-12 border-t border-[#1B1464]/10 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 border-b border-[#1B1464]/10 pb-10 md:grid-cols-12">
          {/* Brand Summary */}
          <div className="md:col-span-5">
            <Link
              to="/"
              className="group inline-flex cursor-pointer items-center gap-3"
            >
              <AmeraldLogo
                size={36}
                className="transition-transform duration-150 group-hover:scale-105"
              />
              <span className="font-display text-lg font-bold text-[#1B1464]">
                {COMPANY_INFO.groupName}
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              Sourceways Cooperative, Sourceways Consulting Services Concept Nigeria Limited, Sourceways Protective Force Nigeria Ltd., and FMR Agency HR Outsourcing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-bold text-[#1B1464]">
              Site Pages
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="m-underline inline-block cursor-pointer text-slate-600 transition-colors hover:text-[#1B1464]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/overview"
                  className="m-underline inline-block cursor-pointer text-slate-600 transition-colors hover:text-[#1B1464]"
                >
                  Vision, Mission &amp; Values
                </Link>
              </li>
              <li>
                <Link
                  to="/divisions"
                  className="m-underline inline-block cursor-pointer text-slate-600 transition-colors hover:text-[#1B1464]"
                >
                  Business Divisions
                </Link>
              </li>
              <li>
                <Link
                  to="/shareholding"
                  className="m-underline inline-block cursor-pointer text-slate-600 transition-colors hover:text-[#1B1464]"
                >
                  Cooperative Shareholding
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="m-underline inline-block cursor-pointer text-slate-600 transition-colors hover:text-[#1B1464]"
                >
                  Contact &amp; Offices
                </Link>
              </li>
            </ul>
          </div>

          {/* Offices & Direct Contact */}
          <div className="md:col-span-4">
            <h3 className="font-display text-sm font-bold text-[#1B1464]">
              Offices &amp; Direct Line
            </h3>
            <div className="mt-3 space-y-2.5 text-sm">
              {COMPANY_INFO.contacts.offices.map((office) => (
                <p key={office.label} className="leading-relaxed text-slate-600">
                  <span className="font-semibold text-[#1B1464]">
                    {office.label}:{' '}
                  </span>
                  {office.address}
                </p>
              ))}
              <p className="pt-1 font-semibold tabular-nums text-[#1B1464]">
                Tel: {COMPANY_INFO.contacts.phone} ·{' '}
                {COMPANY_INFO.contacts.emails[0]}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {currentYear} {COMPANY_INFO.groupName} / Sourceways Nigeria. All rights reserved.
          </p>

          <button
            type="button"
            onClick={handleScrollTop}
            className="m-btn inline-flex min-h-[38px] items-center gap-1.5 rounded-xl border border-[#1B1464]/15 bg-white/85 px-3.5 py-1.5 text-xs font-semibold text-[#1B1464] hover:border-[#1B1464]/35 hover:bg-white focus-visible:outline-2 focus-visible:outline-[#1B1464]"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
