import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/office-device-lending-app/",
  server: {
    proxy: {
      "/api": "http://localhost:5001",
    },
  },
  plugins: [react()],
});
