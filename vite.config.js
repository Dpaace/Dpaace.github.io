import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { loadEnv } from 'dotenv'

// const env = loadEnv();
import { config } from 'dotenv';

config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
