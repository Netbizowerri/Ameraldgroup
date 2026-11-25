import React, { useEffect } from 'react';
import {
  OG_IMAGE_ALT,
  OG_IMAGE_URL,
  SITE_URL,
} from '../config/seoConfig';

export interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  ogImageAlt?: string;
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

function upsertMetaTag(
  attribute: 'name' | 'property',
  key: string,
  content: string
): void {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertCanonicalLink(href: string): void {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

/**
 * React 19 native document head manager for per-route Technical SEO,
 * Open Graph synchronization, self-referencing canonical URLs, and route-level JSON-LD.
 */
export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  ogImage = OG_IMAGE_URL,
  ogImageAlt = OG_IMAGE_ALT,
  noIndex = false,
  structuredData,
}) => {
  const serializedSchema = structuredData
    ? JSON.stringify(
        Array.isArray(structuredData)
          ? {
              '@context': 'https://schema.org',
              '@graph': structuredData.map(({ ['@context']: _ctx, ...rest }) => rest),
            }
          : structuredData
      )
    : '';

  useEffect(() => {
    const normalizedPath = canonicalPath.startsWith('/')
      ? canonicalPath
      : `/${canonicalPath}`;
    const canonicalUrl = `${SITE_URL}${normalizedPath}`;
    const robotsDirective = noIndex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1';

    document.title = title;

    upsertMetaTag('name', 'description', description);
    upsertMetaTag('name', 'robots', robotsDirective);
    upsertCanonicalLink(canonicalUrl);

    // Sync Open Graph metadata
    upsertMetaTag('property', 'og:type', ogType);
    upsertMetaTag('property', 'og:site_name', 'Amerald Group');
    upsertMetaTag('property', 'og:title', title);
    upsertMetaTag('property', 'og:description', description);
    upsertMetaTag('property', 'og:url', canonicalUrl);
    upsertMetaTag('property', 'og:image', ogImage);
    upsertMetaTag('property', 'og:image:secure_url', ogImage);
    upsertMetaTag('property', 'og:image:alt', ogImageAlt);

    // Sync Twitter Card metadata
    upsertMetaTag('name', 'twitter:card', 'summary_large_image');
    upsertMetaTag('name', 'twitter:title', title);
    upsertMetaTag('name', 'twitter:description', description);
    upsertMetaTag('name', 'twitter:image', ogImage);
    upsertMetaTag('name', 'twitter:image:alt', ogImageAlt);

    // Remove previous route-level JSON-LD script(s) without touching global index.html JSON-LD
    document.head
      .querySelectorAll('script[type="application/ld+json"][data-seo-route="true"]')
      .forEach((node) => node.remove());

    if (serializedSchema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-route', 'true');
      script.textContent = serializedSchema;
      document.head.appendChild(script);
    }

    return () => {
      document.head
        .querySelectorAll('script[type="application/ld+json"][data-seo-route="true"]')
        .forEach((node) => node.remove());
    };
  }, [
    title,
    description,
    canonicalPath,
    ogType,
    ogImage,
    ogImageAlt,
    noIndex,
    serializedSchema,
  ]);

  return null;
};
