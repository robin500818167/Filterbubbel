import { defineConfig } from 'vite'

export default defineConfig({
  root: 'client',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        animation: new URL('./animation.html', import.meta.url).pathname,
                explanation: new URL('./explanation.html', import.meta.url).pathname,
        start: new URL('./start.html', import.meta.url).pathname      }
    }
  },
});