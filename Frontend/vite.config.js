import { defineConfig } from 'vite'
<<<<<<< HEAD
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
=======
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
>>>>>>> b66cc76552a79348146011ce8649e71fcf4dc65c
})
