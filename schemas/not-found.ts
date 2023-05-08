import { s } from "@sanity-typed/schema-builder";
import { ErrorOutlineIcon } from "@sanity/icons";
import { seo } from "./seo";

export const notFound = s.document({
    name: "not-found",
    title: "404 page",
    icon: ErrorOutlineIcon,
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
