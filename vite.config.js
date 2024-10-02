import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Points to your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api/v1"), // Adjusts the path to match the backend's routing
      },
    }
    
    
  },
});