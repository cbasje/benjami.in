import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";
import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: netlify(),
    integrations: [
        sanity({
            projectId: "jt1bq8i3",
            dataset: "production",
            apiVersion: "2021-03-25",
            useCdn: true,
        }),
    ],
});
