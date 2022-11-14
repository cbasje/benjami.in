import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: cloudflare(),
    integrations: [
        sanity({
            projectId: "jt1bq8i3",
            dataset: "production",
            apiVersion: "2021-10-21",
            useCdn: true,
        }),
    ],
});
