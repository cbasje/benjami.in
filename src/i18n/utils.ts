import { ui, defaultLocale, showDefaultLocale, type Locale } from "./ui";

export function useTranslations(locale: Locale) {
    return function t(key: keyof (typeof ui)[typeof defaultLocale]) {
        return ui[locale][key] || ui[defaultLocale][key];
    };
}

export function useTranslatedPath(locale: Locale) {
    return function translatePath(path: string, l: Locale = locale) {
        return !showDefaultLocale && l === defaultLocale
            ? path
            : `/${l}${path}`;
    };
}
