import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/2D-Portfolio/',
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'src/index.html'), // ✅ correction ici
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
