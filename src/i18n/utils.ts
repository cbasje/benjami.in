import {
    ui,
    defaultLocale,
    showDefaultLocale,
    routes,
    type Locale,
} from "./ui";

export function useTranslations(locale: Locale) {
    return function t(key: keyof (typeof ui)[typeof defaultLocale]) {
        return ui[locale][key] || ui[defaultLocale][key];
    };
}

export function useTranslatedPath(locale: Locale) {
    return function translatePath(path: string, l: Locale = locale) {
        const pathName = path.replaceAll("/", "");
        const hasTranslation =
            defaultLocale !== l &&
            routes[l] !== undefined &&
            routes[l][pathName] !== undefined;
        const translatedPath = hasTranslation
            ? "/" + routes[l][pathName]
            : path;

        return !showDefaultLocale && l === defaultLocale
            ? translatedPath
            : `/${l}${translatedPath}`;
    };
}

export function getRouteFromUrl(
    currentLocale: Locale,
    url: URL
): string | undefined {
    const pathname = new URL(url).pathname;
    const parts = pathname?.split("/");
    const path = parts.pop() || parts.pop();

    if (path === undefined) {
        return undefined;
    }

    if (defaultLocale === currentLocale) {
        const route = Object.values(routes)[0];
        return route[path] !== undefined ? route[path] : undefined;
    }

    const getKeyByValue = (
        obj: Record<string, string>,
        value: string
    ): string | undefined => {
        return Object.keys(obj).find((key) => obj[key] === value);
    };

    const reversedKey = getKeyByValue(routes[currentLocale], path);

    if (reversedKey !== undefined) {
        return reversedKey;
    }

    return undefined;
}
