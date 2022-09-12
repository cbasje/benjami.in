import { createConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { withDocumentI18nPlugin } from "@sanity/document-internationalization";

export default createConfig({
    name: "default",
    title: "api-benjamiin",

    projectId: "jt1bq8i3",
    dataset: "production",

    plugins: withDocumentI18nPlugin([], {
        base: "en",
        languages: [
            { id: "en", title: "English" },
            { id: "nl", title: "Nederlands" },
        ],
    }),

    schema: {
        types: schemaTypes,
    },
});
