/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // extend: {},
    colors: {
      black: "#111",
      white: "#fff",
      gray: "#ccc",
      light: "#eee",
    },
  },
  plugins: [],
};
