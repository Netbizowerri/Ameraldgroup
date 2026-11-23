import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  ArrowUpRight,
  Briefcase,
  Compass,
  Home,
  Menu,
  PhoneCall,
  TrendingUp,
  X,
} from 'lucide-react';
import { AmeraldLogo } from './AmeraldLogo';

const NAV_ITEMS: {
  to: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  matchPrefix?: boolean;
}[] = [
  { to: '/overview', label: 'Overview', icon: Compass },
  { to: '/divisions', label: 'Divisions', icon: Briefcase, matchPrefix: true },
  { to: '/shareholding', label: 'Shareholding', icon: TrendingUp },
  { to: '/contact', label: 'Contact', icon: PhoneCall },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          {/* Zone 1: Single-line Brand Wordmark & Emblem */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3 rounded-md py-1 text-left transition-opacity duration-150 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B1464]"
          >
            <AmeraldLogo size={34} />
            <span className="font-display text-lg font-bold tracking-tight whitespace-nowrap text-[#1B1464]">
              Amerald Group
            </span>
          </Link>

          {/* Zone 2: 4 Concise Single-Line Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-7 md:flex"
          >
            {NAV_ITEMS.map((item) => {
              const isPrefixActive =
                item.matchPrefix && pathname.startsWith(item.to);
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={!item.matchPrefix}
                  className={({ isActive }) => {
                    const active = isActive || Boolean(isPrefixActive);
                    return `relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B1464] ${
                      active
                        ? 'font-semibold text-[#1B1464]'
                        : 'text-slate-600 hover:text-[#1B1464]'
                    }`;
                  }}
                >
                  {({ isActive }) => {
                    const active = isActive || Boolean(isPrefixActive);
                    return (
                      <>
                        <span>{item.label}</span>
                        <span
                          aria-hidden="true"
                          className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-[#D92B2B] transition-transform duration-150 ${
                            active ? 'scale-x-100' : 'scale-x-0'
                          }`}
                        />
                      </>
                    );
                  }}
                </NavLink>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
          <div className="flex shrink-0 items-center gap-3">
            <Link
              to="/contact"
              className="hidden items-center gap-1.5 rounded-lg bg-[#D92B2B] px-4 py-2 text-sm font-semibold whitespace-nowrap shrink-0 text-white transition-colors duration-150 hover:bg-[#B91C1C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1464] md:inline-flex"
            >
              <span>Inquire Now</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-[#1B1464] transition-colors duration-150 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1464] md:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Tray */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-200 md:hidden ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="fixed inset-0 bg-[#110D42]/60 backdrop-blur-xs"
          onClick={() => setMobileOpen(false)}
        />

        <aside
          id="mobile-nav-drawer"
          aria-label="Mobile Navigation"
          className={`fixed top-0 right-0 flex h-full w-full max-w-xs flex-col bg-white shadow-xl transition-transform duration-200 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-slate-200 px-5">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2.5"
            >
              <AmeraldLogo size={30} />
              <span className="font-display text-base font-bold text-[#1B1464]">
                Amerald Group
              </span>
            </Link>
            <button
              type="button"
              aria-label="Close navigation drawer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 hover:text-[#1B1464] focus-visible:outline-2 focus-visible:outline-[#1B1464]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <p className="px-3 pb-2 text-xs font-medium text-slate-500">
              Pages
            </p>
            <ul className="space-y-1.5">
              <li>
                <NavLink
                  to="/"
                  end
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex min-h-[44px] w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? 'bg-[#1B1464] text-white'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-[#1B1464]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Home
                        className={`h-4 w-4 shrink-0 ${
                          isActive ? 'text-white' : 'text-[#D92B2B]'
                        }`}
                        aria-hidden="true"
                      />
                      <span>Home</span>
                    </>
                  )}
                </NavLink>
              </li>

              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isPrefixActive =
                  item.matchPrefix && pathname.startsWith(item.to);
                return (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={!item.matchPrefix}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) => {
                        const active = isActive || Boolean(isPrefixActive);
                        return `flex min-h-[44px] w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors duration-150 ${
                          active
                            ? 'bg-[#1B1464] text-white'
                            : 'text-slate-700 hover:bg-slate-100 hover:text-[#1B1464]'
                        }`;
                      }}
                    >
                      {({ isActive }) => {
                        const active = isActive || Boolean(isPrefixActive);
                        return (
                          <>
                            <Icon
                              className={`h-4 w-4 shrink-0 ${
                                active ? 'text-white' : 'text-[#D92B2B]'
                              }`}
                              aria-hidden="true"
                            />
                            <span>{item.label}</span>
                          </>
                        );
                      }}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#D92B2B] px-4 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#B91C1C]"
              >
                <span>Submit Division Inquiry</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </nav>

          <div className="border-t border-slate-200 bg-slate-50 px-5 py-4 text-xs text-slate-600">
            <p className="font-semibold text-[#1B1464]">Abuja &amp; Kano Offices</p>
            <p className="mt-0.5 tabular-nums">Tel: 07032087973</p>
          </div>
        </aside>
      </div>
    </>
  );
};
