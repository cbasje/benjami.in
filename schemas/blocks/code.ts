import { s } from "@sanity-typed/schema-builder";
import { CodeBlockIcon } from "@sanity/icons";

export const code = s.objectNamed({
    name: "code",
    title: "Code",
    icon: CodeBlockIcon,
    fields: [
        {
            name: "content",
            title: "Content",
            optional: false,
            type: s.text(),
        },
        {
            name: "lang",
            title: "Language",
            optional: false,
            type: s.string({
                options: {
                    list: [
                        { title: "HTML", value: "markup" },
                        { title: "CSS", value: "css" },
                        { title: "clike", value: "clike" },
                        { title: "Javascript", value: "javascript" },
                        { title: "Arduino", value: "arduino" },
                        { title: "C", value: "c" },
                        { title: "C++", value: "cpp" },
                        { title: "JSX", value: "jsx" },
                        { title: "TSX", value: "tsx" },
                        { title: "SCSS", value: "scss" },
                        { title: "Swift", value: "swift" },
                        { title: "Typescript", value: "typescript" },
                    ],
                },
            }),
        },
    ],
});
