import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite' // Ya lo tienes importado, ¡ahora úsalo!

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- AGREGA ESTA LÍNEA AQUÍ
  ],
})