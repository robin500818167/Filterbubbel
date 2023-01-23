import { defineConfig } from 'vite';
import { resolve } from 'path';
export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        animation: resolve(__dirname, 'animation.html'),
        explanation: resolve(__dirname, 'explanation.html'),
        start: resolve(__dirname, 'start.html')
      }
    }
  },
});