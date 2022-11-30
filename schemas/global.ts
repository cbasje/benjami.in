export default {
    name: "global",
    title: "Global SEO",
    type: "document",
    i18n: true,
    fields: [
        {
            name: "siteName",
            title: "Site name",
            type: "string",
        },
        {
            name: "siteKeywords",
            title: "Keywords",
            type: "text",
        },
        {
            name: "defaultSeo",
            title: "Default SEO",
            type: "seo",
        },
    ],
};
