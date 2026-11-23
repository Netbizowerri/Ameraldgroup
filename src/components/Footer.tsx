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
    <footer className="border-t border-slate-200 bg-[#110D42] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 border-b border-white/15 pb-10 md:grid-cols-12">
          {/* Brand Summary */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <AmeraldLogo size={36} />
              <span className="font-display text-lg font-bold text-white">
                {COMPANY_INFO.groupName}
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300">
              Sourceways Cooperative, Sourceways Consulting Services Concept Nigeria Limited, Sourceways Protective Force Nigeria Ltd., and FMR Agency HR Outsourcing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-bold text-white">
              Site Pages
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/overview"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Vision, Mission &amp; Values
                </Link>
              </li>
              <li>
                <Link
                  to="/divisions"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Business Divisions
                </Link>
              </li>
              <li>
                <Link
                  to="/shareholding"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Cooperative Shareholding
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Contact &amp; Offices
                </Link>
              </li>
            </ul>
          </div>

          {/* Offices & Direct Contact */}
          <div className="md:col-span-4">
            <h3 className="font-display text-sm font-bold text-white">
              Offices &amp; Direct Line
            </h3>
            <div className="mt-3 space-y-2.5 text-sm">
              {COMPANY_INFO.contacts.offices.map((office) => (
                <p key={office.label} className="leading-relaxed text-slate-300">
                  <span className="font-semibold text-white">
                    {office.label}:{' '}
                  </span>
                  {office.address}
                </p>
              ))}
              <p className="pt-1 tabular-nums text-white">
                Tel: {COMPANY_INFO.contacts.phone} ·{' '}
                {COMPANY_INFO.contacts.emails[0]}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>
            © {currentYear} {COMPANY_INFO.groupName} / Sourceways Nigeria. All rights reserved.
          </p>

          <button
            type="button"
            onClick={handleScrollTop}
            className="inline-flex min-h-[36px] items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/10"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
