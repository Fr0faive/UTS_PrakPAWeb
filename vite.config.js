import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/https://github.com/Fr0faive/UTS_PrakPAWeb.git",
  plugins: [react()],
})
