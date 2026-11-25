import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

const DEFAULT_SITE_URL = 'https://ameraldgroup.vercel.app';

const SITEMAP_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/overview', changefreq: 'monthly', priority: '0.8' },
  { path: '/divisions', changefreq: 'weekly', priority: '0.9' },
  { path: '/divisions/consulting', changefreq: 'monthly', priority: '0.9' },
  { path: '/divisions/protective', changefreq: 'monthly', priority: '0.9' },
  { path: '/divisions/cooperative', changefreq: 'monthly', priority: '0.9' },
  { path: '/divisions/hr', changefreq: 'monthly', priority: '0.8' },
  { path: '/shareholding', changefreq: 'monthly', priority: '0.9' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.4' },
  { path: '/terms-of-use', changefreq: 'yearly', priority: '0.4' },
  { path: '/disclaimer', changefreq: 'yearly', priority: '0.5' },
];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = (env.VITE_SITE_URL || process.env.VITE_SITE_URL || DEFAULT_SITE_URL)
    .trim()
    .replace(/\/+$/, '');

  return {
    plugins: [
      react(),
      tailwindcss(),
      // Copies src/assets into dist/ so root-relative URLs like
      // "/src/assets/images/..." (e.g. generate_image output) still resolve
      // in production builds. Do not remove.
      {
        name: 'copy-unbundled-src-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(__dirname, 'dist');
          const srcAssets = path.resolve(__dirname, 'src/assets');
          const distAssets = path.resolve(distDir, 'src/assets');
          if (fs.existsSync(distDir) && fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, distAssets, { recursive: true, force: true });
          }
        },
      },
      // Build-time SEO & GEO asset generator: keeps dist/sitemap.xml lastmod current
      // and synchronizes domain URLs across index.html, robots.txt, sitemap.xml, and llms.txt
      // whenever VITE_SITE_URL is overridden (e.g., https://www.ameraldgroup.com.ng).
      {
        name: 'generate-seo-assets',
        apply: 'build',
        transformIndexHtml(html: string): string {
          if (siteUrl === DEFAULT_SITE_URL) {
            return html;
          }
          return html.split(DEFAULT_SITE_URL).join(siteUrl);
        },
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(__dirname, 'dist');
          if (!fs.existsSync(distDir)) {
            return;
          }

          const todayIso = new Date().toISOString().split('T')[0];

          const sitemapXml = [
            '<?xml version="1.0" encoding="UTF-8"?>',
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
            ...SITEMAP_ROUTES.map(
              (route) =>
                `  <url>\n    <loc>${siteUrl}${route.path}</loc>\n    <lastmod>${todayIso}</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>`
            ),
            '</urlset>',
            '',
          ].join('\n');

          fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');

          if (siteUrl !== DEFAULT_SITE_URL) {
            for (const fileName of ['robots.txt', 'llms.txt']) {
              const targetPath = path.resolve(distDir, fileName);
              if (fs.existsSync(targetPath)) {
                const content = fs.readFileSync(targetPath, 'utf-8');
                fs.writeFileSync(
                  targetPath,
                  content.split(DEFAULT_SITE_URL).join(siteUrl),
                  'utf-8'
                );
              }
            }
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
