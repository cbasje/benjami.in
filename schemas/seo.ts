import { s } from "@sanity-typed/schema-builder";

export const seo = s.objectNamed({
    name: "seo",
    title: "SEO",
    fields: [
        {
            name: "metaTitle",
            title: "Meta title",
            optional: false,
            type: s.string(),
        },
        {
            name: "metaDescription",
            title: "Meta description",
            optional: true,
            type: s.text(),
        },
        {
            name: "shareImage",
            title: "Share image",
            optional: true,
            type: s.image({
                hotspot: true,
            }),
        },
        {
            name: "isArticle",
            title: "Is article?",
            optional: true,
            type: s.boolean(),
        },
    ],
});
