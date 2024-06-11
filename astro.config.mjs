import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    output: "static",

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
