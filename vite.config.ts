import path from "path"
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress', // Algoritmo: gzip, brotliCompress, deflate, etc.
      ext: '.br', // Extensión del archivo comprimido
      threshold: 1024, // Comprime archivos mayores a 1KB
      deleteOriginFile: false, // Mantiene los archivos originales
    }),
  ],
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    port: 3000, // El puerto donde se ejecutará el servidor
    open: true, // Abre el navegador automáticamente
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});