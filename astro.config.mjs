import react from "@astrojs/react";
import fonts from "astro-fonts-next";
import astroI18next from "astro-i18next";
import sanity from "astro-sanity";
import { defineConfig } from "astro/config";
import image from "@astrojs/image";

// https://astro.build/config
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
        fonts({
            url: [
                "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
            ],
        }),
        react(),
        image(),
    ],
});
