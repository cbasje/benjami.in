import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
    output: "server",
    adapter: node({
        mode: "standalone",
    }),
    site: "https://benjami.in",
    integrations: [svelte()],
});
