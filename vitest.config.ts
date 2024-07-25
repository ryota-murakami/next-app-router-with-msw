import path from 'node:path'

import { defineConfig } from 'vitest/config'
export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    include: [
      'app/**/*.{spec,test}.{js,jsx,ts,tsx}',
      'app/**/__tests__/**/*.{js,jsx,ts,tsx}',
    ],
    setupFiles: ['setupTests.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
