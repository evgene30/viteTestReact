import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'single-spa-entry.ts',
      name: 'YourAppName',
      fileName: (format) => `your-app-name.${format}.js`,
    },
    rollupOptions: {
      external: ['single-spa'],
      output: {
        globals: {
          'single-spa': 'SingleSPA',
        },
      },
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
    }),
    checker({
      typescript: true,
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
