import React from 'react';

interface AmeraldLogoProps {
  className?: string;
  size?: number;
}

export const AmeraldLogo: React.FC<AmeraldLogoProps> = ({
  className = '',
  size = 40,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Amerald Group Circular Emblem"
    >
      {/* Outer Deep Navy Ring */}
      <circle cx="50" cy="50" r="47" fill="#1B1464" />
      <circle cx="50" cy="50" r="44" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.25" />

      {/* Inner Crisp White Field */}
      <circle cx="50" cy="50" r="34" fill="#FFFFFF" />

      {/* Crimson Accent Ring Segment */}
      <path
        d="M50 18 A32 32 0 0 1 82 50"
        stroke="#D92B2B"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M50 82 A32 32 0 0 1 18 50"
        stroke="#1B1464"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Geometric Rising Pillar / A-Mark */}
      <path
        d="M50 26L68 68H58.5L54.2 57.5H45.8L41.5 68H32L50 26ZM50 40.5L47.1 49.5H52.9L50 40.5Z"
        fill="#1B1464"
      />
      {/* Crimson Apex Bar */}
      <rect x="42" y="61.5" width="16" height="4" rx="1" fill="#D92B2B" />
    </svg>
  );
};
