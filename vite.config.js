import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * GitHub project pages are served at https://<user>.github.io/<repo>/
 * Default Vite base "/" makes the browser request /assets/... at the domain root → 404.
 * Relative base fixes asset URLs for Pages (and still works for Netlify / custom domain
 * when the whole site is deployed from dist root).
 */
export default defineConfig({
  plugins: [react()],
  base: "./",
});
