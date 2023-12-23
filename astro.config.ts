import netlify from "@astrojs/netlify";
import { defineConfig } from "astro/config";

export default defineConfig({
    output: "server",
    adapter: netlify(),
    site: "https://benjami.in",
});
