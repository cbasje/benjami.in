import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { createImageBuilder, useSanityClient } from "astro-sanity";

const imageBuilder = createImageBuilder(useSanityClient());
export const urlForImage = (source: SanityImageSource) =>
    imageBuilder.image(source);
