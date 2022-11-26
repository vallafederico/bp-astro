import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
// import glsl from "vite-plugin-glsl";

export default defineConfig({
  integrations: [preact(), tailwind()],
  vite: {
    // plugins: [glsl()],
    assetsInclude: ["**/*.webp", "**/*.glb"],
  },
});

// https://astro.build/config
