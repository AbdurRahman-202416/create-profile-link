import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 
  future: {
    // ... other flags
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    // ... other flags
  },
})
