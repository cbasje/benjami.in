import { s } from "@sanity-typed/schema-builder";
import { FolderIcon } from "@sanity/icons";
import { blockContent } from "./blockContent";
import { category } from "./category";
import { company } from "./company";
import { seo } from "./seo";

export const project = s.document({
    name: "project",
    title: "Project",
    icon: FolderIcon,
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
            name: "excerpt",
            title: "Excerpt",
            optional: true,
            type: s.text(),
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
        {
            name: "mainImage",
            title: "Main image",
            optional: false,
            type: s.image({
                options: {
                    hotspot: true,
                },
            }),
        },
        {
            name: "mainImageRound",
            title: "Main image (Round)",
            optional: false,
            type: s.image(),
        },
        {
            name: "colour",
            title: "Colour",
            optional: true,
            type: s.string({
                options: {
                    list: [
                        { title: "Purple", value: "purple" },
                        { title: "Green", value: "green" },
                        { title: "Blue", value: "blue" },
                    ],
                },
            }),
        },
        {
            name: "categories",
            title: "Categories",
            optional: true,
            type: s.array({
                of: [s.reference({ to: [category] })],
            }),
        },
        {
            name: "content",
            title: "Content",
            optional: true,
            type: blockContent,
        },
        {
            name: "company",
            title: "Company",
            optional: true,
            type: company,
        },
        {
            name: "publishedAt",
            title: "Published at",
            optional: false,
            type: s.datetime(),
        },
        {
            name: "seo",
            title: "SEO",
            optional: false,
            type: seo,
        },
    ],

    preview: {
        select: {
            title: "title",
            media: "mainImage",
        },
    },
});
