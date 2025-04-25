import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    // threads: false, // Disable worker threads to prevent termination issues
    testTimeout: 10000, // Increase timeout for slower tests
    pool: 'vmThreads', // Use VM threads instead of worker threads
    poolOptions: {
      vmThreads: {
        useAtomics: true, // Enable atomics for better thread stability
      },
    },
    mockReset: true, // Reset mocks between tests
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});