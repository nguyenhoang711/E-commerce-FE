import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [react(),],
  define: { 'process.env': {
    REACT_APP_API_CORE : 'http://localhost:3055'
  } },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
