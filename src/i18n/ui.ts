import en from "./common/en.json";
import nl from "./common/nl.json";

export const locales = ["en", "nl"] as const;
export type Locale = (typeof locales)[number];

export const showDefaultLocale = true;
export const defaultLocale: Locale = "en";

export const localeTitles: Record<Locale, string> = {
    en: "English",
    nl: "Nederlands",
};

export const ui: Record<Locale, Record<string, string>> = {
    en,
    nl,
} as const;

export const routes: Record<Locale, Record<string, string>> = {
    en: {
        // about: "about",
    },
    nl: {
        // about: "over",
    },
};
