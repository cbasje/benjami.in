import { s } from "@sanity-typed/schema-builder";
import { BlockElementIcon } from "@sanity/icons";

export const divider = s.objectNamed({
    name: "divider",
    title: "Divider",
    icon: BlockElementIcon,
    fields: [
        {
            name: "text",
            title: "Text",
            optional: true,
            type: s.string(),
        },
    ],
});
