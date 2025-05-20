import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Inspect from "vite-plugin-inspect";

export default defineConfig({
  plugins: [vue(), Inspect()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
