import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Minus, Plus } from 'lucide-react';
import { COMPANY_INFO, SHAREHOLDING_STEPS } from '../data/ameraldData';

const PRESET_UNITS = [1, 5, 10, 25];

export const ShareholdingSection: React.FC = () => {
  const [units, setUnits] = useState<number>(5);
  const navigate = useNavigate();

  const formFee = COMPANY_INFO.shareholdingTerms.formFee;
  const unitPrice = COMPANY_INFO.shareholdingTerms.unitPrice;
  const shareCapital = units * unitPrice;
  const totalInitial = shareCapital + formFee;

  const formatNaira = (amount: number) =>
    `₦${amount.toLocaleString('en-NG')}`;

  const handleAdjustUnits = (delta: number) => {
    setUnits((prev) => Math.max(1, Math.min(500, prev + delta)));
  };

  const handleProceed = () => {
    const summaryNote = `I would like to apply for Sourceways Cooperative membership and acquire ${units} share ${
      units === 1 ? 'unit' : 'units'
    } (${formatNaira(shareCapital)} equity + ${formatNaira(
      formFee
    )} non-refundable form fee = ${formatNaira(totalInitial)} total initial outlay).`;

    navigate('/contact', {
      state: {
        inquiryType: 'Shareholding & Cooperative Membership',
        prefilledNote: summaryNote,
      },
    });
  };

  return (
    <section
      aria-labelledby="shareholding-heading"
      className="pattern-white-architectural py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#D92B2B]">
            Four-Step Membership Onboarding
          </p>
          <h2
            id="shareholding-heading"
            className="mt-2 font-display text-2xl font-bold tracking-tight text-[#1B1464] sm:text-3xl [text-wrap:balance]"
          >
            How to become a part owner and cooperative member.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Designed for broad community participation—acquire equity units, save at your own pace, and share in audited cooperative profits.
          </p>
        </div>

        {/* 4-Step Breakdown */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SHAREHOLDING_STEPS.map((item) => (
            <div
              key={item.step}
              className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white/95 p-6 shadow-xs"
            >
              <div>
                <div className="flex items-baseline justify-between border-b border-slate-200 pb-3">
                  <span className="font-display text-2xl font-extrabold tabular-nums text-[#D92B2B]">
                    {item.step}
                  </span>
                  {item.feeOrUnit && (
                    <span className="text-xs font-semibold tabular-nums text-[#1B1464]">
                      {item.feeOrUnit}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-[#1B1464]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Share Unit Estimator */}
        <div className="navy-card-pattern mt-10 rounded-2xl border border-slate-200 p-6 text-white sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-wide text-slate-300">
                Share Capital Estimator
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Plan your cooperative shareholding units
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                Each share unit is fixed at{' '}
                <span className="font-semibold tabular-nums text-white">
                  ₦10,000
                </span>
                , alongside a one-time{' '}
                <span className="font-semibold tabular-nums text-white">
                  ₦5,000
                </span>{' '}
                non-refundable shareholding enrollment form.
              </p>

              {/* Preset Unit Selectors */}
              <div className="mt-6">
                <span className="block text-xs font-medium text-slate-300">
                  Quick unit selection
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {PRESET_UNITS.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setUnits(preset)}
                      className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-semibold tabular-nums whitespace-nowrap transition-colors duration-150 ${
                        units === preset
                          ? 'bg-[#D92B2B] text-white'
                          : 'border border-white/20 bg-white/5 text-white hover:bg-white/15'
                      }`}
                    >
                      {preset} {preset === 1 ? 'Unit' : 'Units'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimator Control & Breakdown */}
            <div className="rounded-xl border border-white/15 bg-[#110D42] p-6 lg:col-span-6">
              <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
                <label
                  htmlFor="share-unit-input"
                  className="text-sm font-medium text-slate-200"
                >
                  Number of Share Units
                </label>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Decrease share units"
                    onClick={() => handleAdjustUnits(-1)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/15"
                  >
                    <Minus className="h-4 w-4" aria-hidden="true" />
                  </button>

                  <input
                    id="share-unit-input"
                    type="number"
                    min={1}
                    max={500}
                    value={units}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      if (!Number.isNaN(val)) {
                        setUnits(Math.max(1, Math.min(500, val)));
                      }
                    }}
                    className="h-10 w-20 rounded-lg border border-white/20 bg-white/10 px-2 text-center font-display text-base font-bold tabular-nums text-white focus:border-white focus:outline-none"
                  />

                  <button
                    type="button"
                    aria-label="Increase share units"
                    onClick={() => handleAdjustUnits(1)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/15"
                  >
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <dl className="mt-4 space-y-2.5 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-slate-300">
                    Share Equity ({units} × ₦10,000)
                  </dt>
                  <dd className="font-semibold tabular-nums text-white">
                    {formatNaira(shareCapital)}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-slate-300">
                    Shareholding Form (One-Time Non-Refundable)
                  </dt>
                  <dd className="font-semibold tabular-nums text-white">
                    {formatNaira(formFee)}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-white/15 pt-3">
                  <dt className="font-display text-base font-bold text-white">
                    Estimated Initial Total
                  </dt>
                  <dd className="font-display text-xl font-extrabold tabular-nums text-[#F87171]">
                    {formatNaira(totalInitial)}
                  </dd>
                </div>
              </dl>

              <button
                type="button"
                onClick={handleProceed}
                className="mt-6 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#D92B2B] px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#B91C1C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>
                  Request Shareholding Form ({units}{' '}
                  {units === 1 ? 'Unit' : 'Units'})
                </span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
