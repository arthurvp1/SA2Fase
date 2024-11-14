import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/ 
//npm install --save react-apexcharts apexcharts
//npm install apexcharts --save

export default defineConfig({
  plugins: [react()],
})
