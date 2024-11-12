import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import SitemapPlugin from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    SitemapPlugin({
      hostname: 'https://jdm297.github.io/valor-career-website',
      routes: [
        '/', 
        '/about', 
        '/admissions',
        '/career-evaluation',
        '/financial-aid',
        '/student-portal',
        '/locations',
        '/news',
        '/programs',
        '/request-info',
        '/schedule-tour',
      ],
    }),
  ],
  base: process.env.NODE_ENV === 'production' ? '/valor-career-website/' : '/',
  build: {
    sourcemap: true,
    outDir: 'dist',
  },
});
