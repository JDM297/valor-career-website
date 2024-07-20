import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'valor-career-website', // Replace 'your-repo-name' with the actual repository name
});
