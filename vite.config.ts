import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './components/test/setup.ts',
    globals: true,
    exclude: ['**/node_modules/**', '**/.next/**', '**/dist/**'],
    include: ['**/__tests__/**/*.{test,spec}.{ts,tsx}'],
    deps: {
      inline: ['vitest-canvas-mock']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  }
}) 