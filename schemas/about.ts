import { s } from "@sanity-typed/schema-builder";
import { UserIcon } from "@sanity/icons";
import { seo } from "./seo";

export const about = s.document({
    name: "about",
    title: "About page",
    icon: UserIcon,
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
            name: "seo",
            title: "SEO",
            optional: false,
            type: seo,
        },
    ],
});
