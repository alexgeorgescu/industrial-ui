import { defineConfig } from 'tsup';

export default defineConfig({
    entry: [
        'src/index.ts',
        'src/components/**/index.ts'
    ],
    format: ['esm', 'cjs'],
    dts: true,            // Generate .d.ts files
    splitting: true,      // Enable code splitting
    sourcemap: true,
    clean: true,          // Clean dist folder before build
    minify: true,
    treeshake: true,
    external: [],         // Add any peer dependencies here
    outDir: 'dist',
});