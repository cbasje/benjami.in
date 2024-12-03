import { defineConfig } from "astro/config";

import deno from "@deno/astro-adapter";
import icon from "astro-icon";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: deno({
        hostname: "0.0.0.0",
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
