import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"


const root = path.resolve("src")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      components: `${root}/components`,
      blocks: `${root}/components`,
      pages: `${root}/components`,
      store: `${root}/store`,
    }
  }
})
