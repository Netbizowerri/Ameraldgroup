import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  title,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#1B1464] via-[#191970] to-[#110D42] p-6 text-center text-white ${className}`}
        role="img"
        aria-label={alt}
      >
        <Building2 className="mb-3 h-10 w-10 text-white/80" aria-hidden="true" />
        <span className="font-display text-sm font-semibold tracking-tight text-white/95">
          {title}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
