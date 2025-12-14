import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // Ensure svgr runs before the React plugin and export default as component
    svgr({ exportAsDefault: true }),
    react(),
    tailwindcss(),
  ],
})