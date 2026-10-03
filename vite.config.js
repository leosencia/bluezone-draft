import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        comparison: fileURLToPath(new URL('./aeroponics-vs-hydroponics/index.html', import.meta.url)),
        biocube: fileURLToPath(new URL('./biocube/index.html', import.meta.url)),
      },
    },
  },
})
