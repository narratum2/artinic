import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'logo192.png', 'logo512.png'],
      manifest: {
        name: 'Artinic Art Consultancy',
        short_name: 'Artinic',
        description: 'Swiss art consultancy since 1881',
        theme_color: '#003366',
        icons: [
          { src: 'logo192.png', sizes: '192x192', type: 'image/png' },
          { src: 'logo512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ],
  build: {
    minify: 'esbuild',
    target: 'esnext',
    sourcemap: false
  }
});