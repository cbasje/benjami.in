import { defineConfig } from "sanity";
import { schemaTypes } from "./schemas";
import { withDocumentI18nPlugin } from "@sanity/document-internationalization";
import { visionTool } from "@sanity/vision";

const basePath = "/studio";

export default defineConfig({
    basePath,

    name: "default",
    title: import.meta.env.SANITY_STUDIO_PROJECT_TITLE || "benjami.in",
    projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID!,
    dataset: import.meta.env.SANITY_STUDIO_DATASET!,

    plugins: withDocumentI18nPlugin(
        [
            visionTool({
                defaultApiVersion: "2022-08-08",
            }),
        ],
        {
            base: "en",
            languages: [
                { id: "en", title: "English" },
                { id: "nl", title: "Nederlands" },
            ],
        }
    ),

    schema: {
        types: schemaTypes,
    },
});
