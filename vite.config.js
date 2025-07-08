import { defineConfig } from "vite";

export default defineConfig({
    base: "/2D-Portfolio/", // ← important pour GitHub Pages
    build: {
        minify: "terser",
    },
});
