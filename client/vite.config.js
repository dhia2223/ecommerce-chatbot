import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    host: '0.0.0.0',     // Listen on all network interfaces (important for Docker)
    port: 5000,          // You can change this if needed
    strictPort: true,    // Fail if port is already in use
    watch: {
      usePolling: true   // Required for file change detection in Docker (especially on Linux/WSL)
    }
  }
})