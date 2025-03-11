import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default {
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 4173
  },
  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 4173
  }
};
