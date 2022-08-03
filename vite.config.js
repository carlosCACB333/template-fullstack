import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

const { PORT_CLIENT = 3000 } = process.env;

export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    port: Number(PORT_CLIENT),
  },
  build: {
    outDir: 'dist/app',
  },
});
