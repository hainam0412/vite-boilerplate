import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@asset': path.resolve(__dirname, './src/asset'),
            '@component': path.resolve(__dirname, './src/component'),
            '@store': path.resolve(__dirname, './src/store'),
            '@style': path.resolve(__dirname, './src/style'),
            '@type': path.resolve(__dirname, './src/type'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@router': path.resolve(__dirname, './src/router'),
            '@page': path.resolve(__dirname, './src/page'),
            '@controller': path.resolve(__dirname, './src/controller'),
        },
    },
});
