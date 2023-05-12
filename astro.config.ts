import image from "@astrojs/image";
import svelte from "@astrojs/svelte";
import i18n from "astro-i18n";
import sanity from "astro-sanity";
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
    output: "server",
    site: "https://benjami.in",
    integrations: [
        // @ts-expect-error
        sanity({
            projectId: "jt1bq8i3",
            dataset: "production",
            apiVersion: "2021-03-25",
            useCdn: true,
        }),
        i18n(),
        image(),
        svelte(),
    ],
    adapter: netlify(),
});
