import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  base: '/', // Asegúrate de que la base esté configurada correctamente si despliegas en un subdirectorio
});
