import { s } from "@sanity-typed/schema-builder";
import { code } from "./blocks/code";
import { prototype } from "./blocks/prototype";
import { image } from "./image";
import { divider } from "./blocks/divider";
import { link } from "./blocks/link";

export const blockContent = s.array({
    of: [
        s.block({
            options: {
                spellCheck: true,
            },
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
                    { title: "Code", value: "code" },
                ],
                annotations: [link],
            },
        }),
        image,
        code,
        prototype,
        divider,
    ],
});
