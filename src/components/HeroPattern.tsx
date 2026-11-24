import React from 'react';

interface HeroPatternProps {
  variant?: 'hero' | 'subpage';
}

export const HeroPattern: React.FC<HeroPatternProps> = ({
  variant = 'hero',
}) => {
  const isSubpage = variant === 'subpage';

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      {/* Right-aligned geometric seal rings echoing the Amerald Group circular emblem */}
      <svg
        className={`absolute -top-24 -right-24 text-white ${
          isSubpage
            ? 'h-[420px] w-[420px] opacity-[0.12] sm:h-[520px] sm:w-[520px]'
            : 'h-[560px] w-[560px] opacity-[0.14] sm:h-[720px] sm:w-[720px]'
        }`}
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="300"
          cy="300"
          r="275"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 8"
        />
        <circle
          cx="300"
          cy="300"
          r="220"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <circle
          cx="300"
          cy="300"
          r="165"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.65"
        />
        <circle
          cx="300"
          cy="300"
          r="108"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.45"
        />
        {/* Crimson emblem arc accent */}
        <path
          d="M300 80 A220 220 0 0 1 520 300"
          stroke="#D92B2B"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.85"
        />
        <path
          d="M300 135 A165 165 0 0 0 135 300"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.55"
        />
        {/* Architectural cross axes */}
        <line
          x1="300"
          y1="0"
          x2="300"
          y2="600"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.28"
        />
        <line
          x1="0"
          y1="300"
          x2="600"
          y2="300"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.28"
        />
      </svg>

      {/* Subtle bottom-left geometric diagonal lines */}
      <svg
        className={`absolute -bottom-16 -left-16 text-white ${
          isSubpage
            ? 'h-56 w-56 opacity-[0.07]'
            : 'h-72 w-72 opacity-[0.08]'
        }`}
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 280L280 0M0 240L240 0M0 200L200 0M0 160L160 0M0 120L120 0M40 280L280 40M80 280L280 80M120 280L280 120"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};
