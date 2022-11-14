import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: vercel(),
    integrations: [
        sanity({
            projectId: "jt1bq8i3",
            dataset: "production",
            apiVersion: "2021-10-21",
            useCdn: true,
        }),
    ],
});
