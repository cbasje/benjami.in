import { Umami } from "@umami/node";
import { UMAMI_ENDPOINT, UMAMI_ID } from "astro:env/client";

const umami = new Umami({
  websiteId: UMAMI_ID,
  hostUrl: UMAMI_ENDPOINT,
});

export const track = (...args: Parameters<typeof umami.track>) => {
  umami.track(...args);
};
