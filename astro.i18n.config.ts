import { defineAstroI18nConfig } from "astro-i18n";

export default defineAstroI18nConfig({
    defaultLangCode: "en",
    supportedLangCodes: ["nl"],
    showDefaultLangCode: false,
    routeTranslations: {
        nl: {
            about: "over",
        },
    },
});
