import { defineConfig } from "astro/config";
import sanity from "astro-sanity";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
    output: "static",
    integrations: [
        sanity({
            projectId: "jt1bq8i3",
            dataset: "production",
            apiVersion: "2021-03-25",
            useCdn: true,
        }),
        astroI18next(),
    ],
});
