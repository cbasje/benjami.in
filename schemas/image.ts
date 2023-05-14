import { s } from "@sanity-typed/schema-builder";
import { ImageIcon } from "@sanity/icons";

export const image = s.image({
    icon: ImageIcon,
    hotspot: true,
    options: {
        metadata: ["blurhash"],
    },
    fields: [
        {
            name: "caption",
            title: "Caption",
            optional: true,
            type: s.string(),
        },
        {
            name: "alt",
            title: "Alt text",
            optional: false,
            type: s.string(),
        },
    ],
});

// export const image = s.objectNamed({
//     name: "image",
//     title: "Image",
//     icon: ImageIcon,
//     fields: [
//         {
//             name: "src",
//             type: s.image({
//                 hotspot: true,
//                 options: {
//                     metadata: ["blurhash"],
//                 },
//             }),
//         },
//         {
//             name: "caption",
//             title: "Caption",
//             optional: true,
//             type: s.string(),
//         },
//         {
//             name: "alt",
//             title: "Alt text",
//             optional: false,
//             type: s.string(),
//         },
//     ],
// });
