import { defineConfig } from "astro/config";

import icon from "astro-icon";
import bun from "./adapter/index";

// https://astro.build/config
export default defineConfig({
    output: "hybrid",
    adapter: bun(),

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
