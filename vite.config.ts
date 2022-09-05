import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    coverage: {
      reporter: ['text'],
    },
    include: ['src/**/*.test.ts'],
  },
});
