import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  test: {
    testFiles: "src/**/*.test.{ts,tsx}",
    globals: true,
    environment: "jsdom",
    css: "true",
    setupFiles: "./src/test/setup.js",
  },
});
