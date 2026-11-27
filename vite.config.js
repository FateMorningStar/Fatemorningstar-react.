import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Keep this repository path for the GitHub Pages project site.
  base: '/fatemorningstar-react/',
});
