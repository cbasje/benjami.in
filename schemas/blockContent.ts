import { s } from "@sanity-typed/schema-builder";
import { ImageIcon } from "@sanity/icons";
import { code } from "./blocks/code";
import { prototype } from "./blocks/prototype";

export const blockContent = s.array({
    of: [
        s.block({
            styles: [
                { title: "Normal", value: "normal" },
                { title: "H1", value: "h1" },
                { title: "H2", value: "h2" },
                { title: "H3", value: "h3" },
                { title: "H4", value: "h4" },
                { title: "Quote", value: "blockquote" },
            ],
            lists: [{ title: "Bullet", value: "bullet" }],
            marks: {
                decorators: [
                    { title: "Strong", value: "strong" },
                    { title: "Emphasis", value: "em" },
                ],
                annotations: [
                    {
                        title: "URL",
                        name: "link",
                        type: "object",
                        fields: [
                            {
                                title: "URL",
                                name: "href",
                                type: "url",
                            },
                        ],
                    },
                ],
            },
        }),
        s.image({
            hotspot: true,
            icon: ImageIcon,
        }),
        code,
        prototype,
    ],
});
