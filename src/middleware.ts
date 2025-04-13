import { defineMiddleware } from "astro:middleware";
import { track } from "./lib/umami";

export const onRequest = defineMiddleware((context, next) => {
  track("visit", { url: context.url.pathname });
  return next();
});
