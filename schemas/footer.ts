import { s } from "@sanity-typed/schema-builder";
import { LinkIcon } from "@sanity/icons";

export const resume = s.objectNamed({
    name: "resume",
    title: "Resume",
    fields: [
        {
            name: "title",
            title: "Title",
            optional: false,
            type: s.string(),
        },
        {
            name: "file",
            title: "File",
            optional: false,
            type: s.file(),
        },
    ],
});

export const socialLink = s.objectNamed({
    name: "social-link",
    title: "Social link",
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
            type: s.url({
                validation: (Rule) =>
                    Rule.uri({ scheme: ["https", "http", "mailto"] }),
            }),
        },
        {
            name: "icon",
            title: "Icon",
            optional: false,
            type: s.string(),
        },
    ],
});

export const footer = s.document({
    name: "footer",
    title: "Footer",
    icon: LinkIcon,
    i18n: true,
    fields: [
        {
            name: "title",
            title: "Title",
            optional: false,
            type: s.string(),
        },
        {
            name: "links",
            title: "Links",
            optional: false,
            type: s.array({
                of: [resume, socialLink],
            }),
        },
    ],
});
