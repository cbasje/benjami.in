import { defineCollection, reference, z } from "astro:content";

export const fileType = z.string().startsWith("/files/");
export type File = z.infer<typeof fileType>;
export const imageType = z.object({
    url: z.string().startsWith("/images/"),
    caption: z.string().optional(),
    alt: z.string(),
});
export type Image = z.infer<typeof imageType>;
export const seoType = z.object({
    metaTitle: z.string(),
    metaDescription: z.string().optional(),
    shareImage: imageType.optional(),
    isArticle: z.boolean().optional(),
});
export type Seo = z.infer<typeof seoType>;
export const resumeType = z.object({
    title: z.string(),
    file: fileType,
});
export type Resume = z.infer<typeof resumeType>;
export const socialLinkType = z.object({
    title: z.string(),
    url: z.string().url().optional(),
    icon: z.string(),
});
export type SocialLink = z.infer<typeof socialLinkType>;
export const dialLinkType = z.object({
    title: z.string(),
    url: z.string().url().optional(),
    slug: z.string().startsWith("/").optional(),
    image: imageType,
    hue: z.number().optional(),
    projectRef: reference("project").optional(),
});
export type DialLink = z.infer<typeof dialLinkType>;
export const companyType = z.object({
    title: z.string(),
    url: z.string().url().optional(),
    logo: imageType.optional(),
});
export type Company = z.infer<typeof companyType>;

export const aboutCollection = defineCollection({
    type: "content",
    schema: z.object({
        image: imageType,
        seo: seoType.optional(),
    }),
});
export const categoryCollection = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
    }),
});
export const footerCollection = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        links: z.array(z.union([resumeType, socialLinkType])),
    }),
});
export const uiCollection = defineCollection({
    type: "data",
    schema: z.record(z.string()),
});
export const globalCollection = defineCollection({
    type: "data",
    schema: z.object({
        siteName: z.string(),
        siteKeywords: z.string().optional(),
        defaultSeo: seoType,
    }),
});
export const homeCollection = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        links: z.array(dialLinkType).max(10),
        seo: seoType.optional(),
    }),
});
export const projectCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        excerpt: z.string().optional(),
        headerImage: imageType,
        hue: z.number().optional(),
        categories: z.array(reference("category")),
        company: companyType.optional(),
        publishedAt: z.date(),
        seo: seoType.optional(),
    }),
});

export const collections = {
    about: aboutCollection,
    category: categoryCollection,
    footer: footerCollection,
    ui: uiCollection,
    global: globalCollection,
    home: homeCollection,
    project: projectCollection,
};
