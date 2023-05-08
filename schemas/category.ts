import { s } from "@sanity-typed/schema-builder";
import { StarIcon } from "@sanity/icons";

export const category = s.document({
    name: "category",
    title: "Category",
    icon: StarIcon,
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
            type: s.string(),
        },
        {
            name: "slug",
            title: "Slug",
            optional: false,
            type: s.slug({
                options: {
                    source: "title",
                    maxLength: 96,
                },
            }),
        },
    ],
});
