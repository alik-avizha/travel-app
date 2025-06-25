import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'
import oxlintPlugin from 'vite-plugin-oxlint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react(), tailwindcss(), oxlintPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Алиас @ на папку src
    },
  },
})
