import { s } from "@sanity-typed/schema-builder";

export const company = s.objectNamed({
    name: "company",
    title: "Company",
    fields: [
        {
            name: "title",
            title: "Title",
            optional: false,
            type: s.string(),
        },
        {
            name: "url",
            title: "URL",
            optional: true,
            type: s.url(),
        },
        {
            name: "logo",
            title: "Logo",
            optional: true,
            type: s.image({
                hotspot: true,
            }),
        },
    ],
});
