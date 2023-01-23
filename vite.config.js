import { defineConfig } from 'vite'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export default defineConfig({
  root: 'client',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: new URL('/index.html', import.meta.url).pathname
      }
    }
  },
});