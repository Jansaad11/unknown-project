import { defineConfig } from 'vite' 
import react from '@vitejs/plugin-react' 
export default defineConfig({ 
  plugins: [react()] ,
  base: '/unknown-project', // <-- Use your repo name here 
})
