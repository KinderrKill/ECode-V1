import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      external: [
        'react', // ignore react stuff
        'react-dom',
        'pocketbase',
      ],
    },
  },
  optimizeDeps: {
    include: ['pocketbase'],
  },
});
