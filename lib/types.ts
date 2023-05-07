import { s } from "@sanity-typed/schema-builder";
import type { seo } from "../schemas/seo";
import type { global } from "../schemas/global";
import type { notFound } from "../schemas/not-found";
import type { home } from "../schemas/home";
import type { category } from "../schemas/category";
import type { company } from "../schemas/company";
import type { project } from "../schemas/project";

export enum Locale {
    EN = "en",
    NL = "nl",
}

const image = s.image();
export type Image = s.infer<typeof image>;

export type Seo = s.infer<typeof seo>;
export type GlobalSeo = s.infer<typeof global> & { locale: string };

export type NotFound = s.infer<typeof notFound>;

export type Home = s.infer<typeof home> & { locale: string };

export type Category = s.infer<typeof category> & {
    locale: string;
    projects?: Project;
};

export type Company = s.infer<typeof company>;

export type ProjectColour = "purple" | "green" | "blue";
export type Project = s.infer<typeof project> & {
    locale: string;
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
