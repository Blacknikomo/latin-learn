import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base './' so the build works from any sub-path (e.g. GitHub Pages)
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { chunkSizeWarningLimit: 1000 },
})
