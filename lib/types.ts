import { s } from "@sanity-typed/schema-builder";
import type { about } from "../schemas/about";
import type { category } from "../schemas/category";
import type { company } from "../schemas/company";
import type { footer, resume, socialLink } from "../schemas/footer";
import type { global } from "../schemas/global";
import type { home } from "../schemas/home";
import type { notFound } from "../schemas/not-found";
import type { project } from "../schemas/project";
import type { seo } from "../schemas/seo";

export enum Locale {
    EN = "en",
    NL = "nl",
}

const image = s.image();
export type Image = s.infer<typeof image>;

export type Seo = s.infer<typeof seo>;
export type GlobalSeo = s.infer<typeof global> & { locale: string };

export type NotFound = s.infer<typeof notFound>;

export type Home = Omit<s.infer<typeof home>, "links"> & {
    locale: string;
    links: {
        _type: "reference" | "general-link";
        colour: string;
        url?: string;
        slug?: string;
        title: string;
        image?: Image;
    }[];
};

export type About = s.infer<typeof about>;

export type Category = Omit<s.infer<typeof category>, "projects"> & {
    locale: string;
    projects?: Project;
};

export type Company = s.infer<typeof company>;

export type ProjectColour = "purple" | "green" | "blue";
export type Project = Omit<s.infer<typeof project>, "categories"> & {
    locale: string;
    categories: Pick<Category, "_id" | "title">[];
};

export interface SpotifyData {
    isPlaying: boolean;
    title?: string;
    artist?: string;
    album?: string;
    albumImage?: AlbumImage;
    songUrl?: string;
}

interface AlbumImage {
    url: string;
    width: number;
    height: number;
}

export type SocialLink = s.infer<typeof socialLink>;
export type Resume = Omit<s.infer<typeof resume>, "file"> & { fileUrl: string };
export type Footer = Omit<s.infer<typeof footer>, "links"> & {
    links: (SocialLink | Resume)[];
};
