import { createImageBuilder, useSanityClient } from "astro-sanity";

const imageBuilder = createImageBuilder(useSanityClient());
export const urlForImage = (source: string) =>
    source && imageBuilder.image(source).url();
