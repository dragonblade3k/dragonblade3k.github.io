import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "src") } },
  // Photos, resume and apps live at the repo root, so dev serves them from there.
  publicDir: path.resolve(import.meta.dirname, "dev-public"),
  build: { outDir: "dist", assetsDir: "static", sourcemap: false, emptyOutDir: true },
});
