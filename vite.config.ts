// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Replace 'portfolio' with your exact GitHub repository name
const repoName = 'portfolio'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: `/portfolio/`, // Important for GitHub Pages
  build: {
    outDir: 'build', // Ensure this matches your deploy command
  },
})
