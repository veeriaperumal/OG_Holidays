import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

// Full production Vite configuration
export default defineConfig({

  // Base public path (important for deployment)
  // "/" for Vercel, Netlify, custom domains
  base: "/",

  // Plugins
  plugins: [
    react(),

    // Automatically compress images at build time
    // Converts PNG/JPG → optimized versions
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.7, 0.9] },
      svgo: true,
      webp: { quality: 75 }
    })
  ],

  // Dev server
  server: {
    port: 3000,
    open: true
  },

  // Preview server (after build)
  preview: {
    port: 5000
  },

  // Build optimization
  build: {
    outDir: "dist",
    sourcemap: false,       // no source maps in prod
    minify: "esbuild",      // fastest + smallest
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        // Proper vendor chunking
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"
          }
        }
      }
    }
  },

  // Path aliases
  resolve: {
    alias: {
      "@": "/src"
    }
  }
})
