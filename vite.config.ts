// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages için base, repo adın olmalı: /boltJSTScompare/
// (Dev server'ı etkilemez; sadece build çıktısında kullanılır.)
export default defineConfig({
  base: '/boltJSTScompare/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
