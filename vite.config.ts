import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable gzip compression
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          swiper: ['swiper'],
          icons: ['lucide-react']
        },
        // Add cache-busting hashes to filenames
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || 'asset';
          const info = name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name].[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name].[hash][extname]`;
          }
          return `assets/[name].[hash][extname]`;
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable source maps for debugging (disable in production if not needed)
    sourcemap: false,
    // Enable minification
    minify: 'terser'
  },
  // Optimize dev server
  server: {
    headers: {
      // Add caching headers for development
      'Cache-Control': 'max-age=31536000'
    }
  },
  // Asset optimization
  assetsInclude: ['**/*.webp'],
  // Preload optimization
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'swiper', 'lucide-react']
  }
})
