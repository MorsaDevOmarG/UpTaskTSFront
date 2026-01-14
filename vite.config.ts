import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'node:url'; // Se importaron para los IMPORT

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Se agrega esto para los IMPORT
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
