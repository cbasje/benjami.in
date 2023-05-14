import { s } from "@sanity-typed/schema-builder";
import { UserIcon } from "@sanity/icons";
import { seo } from "./seo";
import { image } from "./image";

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
            name: "image",
            title: "Image",
            optional: false,
            type: image,
        },
        {
            name: "seo",
            title: "SEO",
            optional: false,
            type: seo,
        },
    ],
});
