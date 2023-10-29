import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";

export default defineConfig({
    output: "static",
    site: "https://benjami.in",
    integrations: [svelte()],
});
