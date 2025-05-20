import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // вот тут меняем порт
    proxy: {
      '/api': {
        target: 'http://ec2-13-61-24-129.eu-north-1.compute.amazonaws.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
});
