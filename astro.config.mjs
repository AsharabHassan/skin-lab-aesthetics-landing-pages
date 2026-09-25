// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://lp.skinlabaesthetics.pk",
  // Emit /dermatology.html etc. so Netlify serves /dermatology with no trailing-slash redirect —
  // the Google Ads conversion triggers in GTM match these exact URLs.
  build: { format: "file", inlineStylesheets: "always" },
  trailingSlash: "never",
  vite: { plugins: [tailwindcss()] },
});
