import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/edge-functions"; // TODO: does edge work well?

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: netlify(),
});
