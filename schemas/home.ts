import { s } from "@sanity-typed/schema-builder";
import { HomeIcon } from "@sanity/icons";
import { seo } from "./seo";

export const home = s.document({
    name: "home",
    title: "Home page",
    icon: HomeIcon,
    i18n: true,
    fields: [
        {
            name: "title",
            title: "Title",
            optional: false,
            type: s.string(),
        },
        {
            name: "description",
            title: "Description",
            optional: true,
            type: s.text(),
        },
        {
            name: "callToAction",
            title: "Call-To-Action",
            optional: true,
            type: s.string(),
        },
        {
            name: "seo",
            title: "SEO",
            optional: false,
            type: seo,
        },
    ],
});
