import { defineConfig } from 'vite';
import { resolve } from 'path';
export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        animation: resolve(__dirname, 'animation.html'),
        animation1: resolve(__dirname, 'animation1.html'),
        explanation: resolve(__dirname, 'explanation.html'),
        start: resolve(__dirname, 'start.html')
      }
    }
  },
});