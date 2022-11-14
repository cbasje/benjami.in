import { createImageBuilder, useSanityClient } from "astro-sanity";

const imageBuilder = createImageBuilder(useSanityClient());
export const urlForImage = (source: string) => imageBuilder.image(source);
