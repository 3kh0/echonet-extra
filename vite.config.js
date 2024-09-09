/** @type {import('vite').UserConfig} */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: "esbuild",
    outDir: "dist",
    sourcemap: true
  },
  plugins: [
    vue(), 
    vueDevTools(),
    createHtmlPlugin()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
