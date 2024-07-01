import { defineConfig } from "astro/config";

import icon from "astro-icon";
import bun from "./adapter/index";

// https://astro.build/config
export default defineConfig({
    output: "hybrid",
    adapter: bun({
        port: 3000,
        hostname: "127.0.0.1",
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
});
