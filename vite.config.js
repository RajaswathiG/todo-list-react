import { defineConfig } from 'vite'
import react from '@vitjs/plugin-react'
export default defineConfig({
    base:"/TODO-LIST",
    plugins:[react()],
  // ...
})