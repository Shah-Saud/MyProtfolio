import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configured with relative base './' so that the built site works both at root
// (https://username.github.io/) and under any GitHub Pages repository path
// (https://username.github.io/REPOSITORY/).
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    target: 'es2020',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
