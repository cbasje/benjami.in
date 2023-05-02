import image from "@astrojs/image";
import svelte from "@astrojs/svelte";
import astroI18next from "astro-i18next";
import sanity from "astro-sanity";
import { defineConfig } from "astro/config";

export default defineConfig({
    output: "static",
    site: "https://benjami.in",
    integrations: [
        sanity({
            projectId: "jt1bq8i3",
            dataset: "production",
            apiVersion: "2021-03-25",
            useCdn: true,
        }),
        astroI18next(),
        // image({
        //     serviceEntryPoint: "@astrojs/image/sharp",
        // }),
        image(),
        svelte(),
    ],
});
