import { defineConfig } from 'tsup';
import { copy }         from 'esbuild-plugin-copy';

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
    esbuildPlugins: [
        copy({
            assets: [
                {
                    from: ['./src/assets/**/*'],
                    to: ['./assets']
                },
                {
                    from: ['./demo/index.html'],
                    to: ['./']
                }
            ]
        }),
    ],
});