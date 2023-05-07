import { s } from "@sanity-typed/schema-builder";
import { EarthGlobeIcon } from "@sanity/icons";
import { seo } from "./seo";

export const global = s.document({
    name: "global",
    title: "Global SEO",
    icon: EarthGlobeIcon,
    i18n: true,
    fields: [
        {
            name: "siteName",
            title: "Site name",
            optional: false,
            type: s.string(),
        },
        {
            name: "siteKeywords",
            title: "Keywords",
            optional: true,
            type: s.text(),
        },
        {
            name: "defaultSeo",
            title: "Default SEO",
            optional: false,
            type: seo,
        },
    ],
});
