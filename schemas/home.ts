import { s } from "@sanity-typed/schema-builder";
import { HomeIcon } from "@sanity/icons";
import { project, projectColour } from "./project";
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
            name: "links",
            title: "Links",
            optional: false,
            type: s.array({
                max: 10,
                of: [
                    s.objectNamed({
                        name: "general-link",
                        title: "General link",
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
                                name: "slug",
                                title: "Slug",
                                optional: true,
                                type: s.slug(),
                            },
                            {
                                name: "image",
                                title: "Image",
                                optional: false,
                                type: s.image(),
                            },
                            {
                                name: "colour",
                                title: "Colour",
                                optional: true,
                                type: projectColour,
                            },
                        ],
                    }),
                    s.reference({ to: [project] }),
                ],
            }),
        },
        {
            name: "seo",
            title: "SEO",
            optional: false,
            type: seo,
        },
    ],
});
