import { defineConfig, envField } from "astro/config";

import partytown from "@astrojs/partytown";
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
    partytown(),
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

  env: {
    schema: {
      UMAMI_ID: envField.string({
        context: "client",
        access: "public",
      }),
      UMAMI_ENDPOINT: envField.string({
        context: "client",
        access: "public",
      }),
    },
  },
});
