import { s } from "@sanity-typed/schema-builder";
import { PresentationIcon } from "@sanity/icons";

export const prototype = s.objectNamed({
    name: "prototype",
    title: "Prototype",
    icon: PresentationIcon,
    fields: [
        {
            name: "src",
            title: "Source",
            optional: false,
            type: s.string(),
        },
        {
            name: "provider",
            title: "Provider",
            optional: false,
            type: s.string({
                options: {
                    list: [
                        { title: "Figma", value: "figma" },
                        { title: "Framer", value: "framer" },
                        { title: "Website", value: "website" },
                    ],
                },
            }),
        },
    ],
});
