import netlify from "@astrojs/netlify/functions";
import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";

export default defineConfig({
    output: "server",
    adapter: netlify(),
    site: "https://benjami.in",
    integrations: [svelte()],
});
