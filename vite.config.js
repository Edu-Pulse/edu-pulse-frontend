import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    https: {
      key: "./ssl/localhost-key.pem",
      cert: "./ssl/localhost.pem",
    },
  },
  preview: {
    port: 5173,
  },
});
