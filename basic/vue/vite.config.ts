import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  root: "./",
  resolve: {
    alias: [{ find: "src/", replacement: `${__dirname}/src/` }],
  },
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
  },
})
