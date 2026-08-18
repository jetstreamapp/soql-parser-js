import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/**/*.spec.ts', 'scripts/**/*.spec.mjs'],
    globals: false,
    environment: 'node',
    testTimeout: 10000,
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
