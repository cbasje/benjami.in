import fonts from "astro-fonts-next";
import astroI18next from "astro-i18next";
import sanity from "astro-sanity";
import { defineConfig } from "astro/config";

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
        fonts({
            url: [
                "https://fonts.googleapis.com/css2?family=Inter:wght@400%253B500%253B700&family=Space+Mono:ital,wght@0,400%253B0,700%253B1,400%253B1,700&display=swap",
            ],
        }),
    ],
});
