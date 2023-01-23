import { defineConfig } from 'vite'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export default defineConfig({
  root: 'client',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: new URL('./client/index.html', import.meta.url).pathname,
        login: dirname(fileURLToPath(import.meta.url + 'login.html')),
      }
    }
  },
});