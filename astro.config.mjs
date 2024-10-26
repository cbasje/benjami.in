import { defineConfig } from "astro/config";

import icon from "astro-icon";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import bun from "./adapter/index";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: bun({
        port: 3000,
    }),

    integrations: [
        icon({
            include: {
                ph: ["*"],
            },
            svgoOptions: {
                plugins: [
                    {
                        name: "convertColors",
                        params: {
                            currentColor: true,
                        },
                    },
                ],
            },
        }),
    ],

    site: "https://benjami.in",

    vite: {
        css: {
            transformer: "lightningcss",
            lightningcss: {
                targets: browserslistToTargets(browserslist(">= 0.25%")),
                drafts: {
                    customMedia: true,
                },
            },
        },
        build: {
            cssMinify: "lightningcss",
        },
    },

    i18n: {
        defaultLocale: "en",
        locales: ["nl", "en"],
        routing: {
            prefixDefaultLocale: true,
        },
    },
});
