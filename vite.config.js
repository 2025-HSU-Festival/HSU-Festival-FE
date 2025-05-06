import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://3.34.22.86:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
      },
      "^/notice.*": {
        target: "http://3.34.22.86:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
