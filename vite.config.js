import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {},
  /*  define: {
    "process.env": { test: process.env.REACT_APP_TEST },
  }, */
});
