import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'happy-dom', // Simulates the browser, but with no UI
        globals: true
    },
});
