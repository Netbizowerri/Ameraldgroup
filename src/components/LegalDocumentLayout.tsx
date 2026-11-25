import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowRight, FileText, Mail, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/ameraldData';
import { LEGAL_NAV_LINKS, LegalDocument } from '../data/legalData';
import { PageHeader } from './PageHeader';

interface LegalDocumentLayoutProps {
  document: LegalDocument;
}

export const LegalDocumentLayout: React.FC<LegalDocumentLayoutProps> = ({
  document,
}) => {
  return (
    <>
      <PageHeader
        kicker={document.kicker}
        title={document.title}
        description={document.description}
        currentPageLabel={document.navLabel}
      />

      <section className="pattern-white-architectural py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            {/* Sticky Sidebar: Legal Suite Switcher & Section Contents */}
            <aside
              aria-label="Legal Navigation and Table of Contents"
              className="space-y-6 lg:sticky lg:top-24 lg:col-span-4"
            >
              {/* Legal Documents Switcher */}
              <div className="pattern-white-panel rounded-2xl border border-slate-200 p-5 sm:p-6">
                <p className="text-xs font-semibold text-[#D92B2B]">
                  Legal &amp; Compliance Suite
                </p>
                <nav
                  aria-label="Legal Pages"
                  className="mt-3 flex flex-col gap-1.5"
                >
                  {LEGAL_NAV_LINKS.map((item) => (
                    <NavLink
                      key={item.slug}
                      to={item.to}
                      className={({ isActive }) =>
                        `flex min-h-[42px] items-center gap-2.5 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors duration-150 ${
                          isActive
                            ? 'bg-[#1B1464] font-semibold text-white'
                            : 'text-slate-700 hover:bg-slate-100 hover:text-[#1B1464]'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <FileText
                            className={`h-4 w-4 shrink-0 ${
                              isActive ? 'text-white' : 'text-[#D92B2B]'
                            }`}
                            aria-hidden="true"
                          />
                          <span>{item.label}</span>
                        </>
                      )}
                    </NavLink>
                  ))}
                </nav>
              </div>

              {/* In-Page Section Index */}
              <div className="pattern-white-panel rounded-2xl border border-slate-200 p-5 sm:p-6">
                <p className="text-xs font-semibold text-[#1B1464]">
                  On This Page
                </p>
                <ol className="mt-3 space-y-2 text-sm">
                  {document.sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex items-baseline gap-2.5 py-1 text-slate-600 transition-colors hover:text-[#1B1464]"
                      >
                        <span className="font-display text-xs font-bold tabular-nums text-[#D92B2B]">
                          {section.number}.
                        </span>
                        <span className="group-hover:underline">
                          {section.heading}
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            {/* Main Legal Document Reading Surface */}
            <article className="pattern-white-panel rounded-2xl border border-slate-200 p-6 sm:p-10 lg:col-span-8">
              {/* Quiet Metadata Bar (Zero Pills) */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-slate-200 pb-5 text-xs font-medium text-slate-500">
                <span className="font-semibold text-[#1B1464]">
                  Effective: {document.effectiveDate}
                </span>
                <span aria-hidden="true">·</span>
                <span>Jurisdiction: {document.jurisdiction}</span>
                <span aria-hidden="true">·</span>
                <span>{COMPANY_INFO.groupName} Nigeria</span>
              </div>

              {/* Plain-Language Overview */}
              <div className="mt-6 rounded-xl border border-slate-200/90 bg-slate-50/90 p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#1B1464]"
                    aria-hidden="true"
                  />
                  <div>
                    <h2 className="font-display text-sm font-bold text-[#1B1464]">
                      Document Summary
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {document.summary}
                    </p>
                  </div>
                </div>
              </div>

              {/* Numbered Legal Clauses */}
              <div className="mt-8 space-y-9">
                {document.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    aria-labelledby={`heading-${section.id}`}
                    className="scroll-mt-24 border-b border-slate-100 pb-8 last:border-b-0 last:pb-0"
                  >
                    <h2
                      id={`heading-${section.id}`}
                      className="font-display text-xl font-bold tracking-tight text-[#1B1464] sm:text-2xl"
                    >
                      <span className="mr-2 tabular-nums text-[#D92B2B]">
                        {section.number}.
                      </span>
                      {section.heading}
                    </h2>

                    <div className="mt-3.5 space-y-3.5 text-[15px] leading-7 text-slate-700">
                      {section.paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>

                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="mt-4 space-y-2.5 pl-5 text-[15px] leading-7 text-slate-700 list-disc marker:text-[#D92B2B]">
                        {section.bullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {/* Compliance Desk Callout */}
              <div className="navy-card-pattern mt-10 rounded-xl border border-slate-200 p-6 text-white sm:p-7">
                <h2 className="font-display text-lg font-bold text-white">
                  Questions or Compliance Verification?
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-200">
                  Contact our Abuja Head Office or Kano Branch Office directly to verify cooperative enrollment details, request NDPA data access, or obtain formal division contracts.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-200">
                  <a
                    href={COMPANY_INFO.contacts.phoneHref}
                    className="inline-flex items-center gap-1.5 tabular-nums text-white hover:underline"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#F87171]" aria-hidden="true" />
                    <span>{COMPANY_INFO.contacts.phone}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.contacts.emails[0]}`}
                    className="inline-flex items-center gap-1.5 text-white hover:underline"
                  >
                    <Mail className="h-3.5 w-3.5 text-[#F87171]" aria-hidden="true" />
                    <span>{COMPANY_INFO.contacts.emails[0]}</span>
                  </a>
                </div>

                <div className="mt-5">
                  <Link
                    to="/contact"
                    className="m-btn inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-[#D92B2B] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#B91C1C]"
                  >
                    <span>Contact Compliance &amp; Inquiry Desk</span>
                    <ArrowRight className="m-arrow h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
