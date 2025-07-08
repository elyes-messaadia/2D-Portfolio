import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/2D-Portfolio/',
  build: {
    rollupOptions: {
      input: 'src/index.html', // ⚠️ sans slash au début
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
