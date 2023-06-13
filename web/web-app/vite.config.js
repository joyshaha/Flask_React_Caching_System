import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    strictPort: true,
    host: true, // needed for the docker container port mapping to work
    port: 5173, // replace this por with any not process binded port
    watch: {
      usePolling: true
    }
  }
})
