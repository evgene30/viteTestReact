import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';

export default defineConfig({
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
