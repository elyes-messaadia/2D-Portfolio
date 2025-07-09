import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/2D-Portfolio/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
