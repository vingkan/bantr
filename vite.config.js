import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/bantr/',
    build: {
        outDir: 'bantr',
    },
    plugins: [react()],
    server: {
        hmr: true,
    },
})