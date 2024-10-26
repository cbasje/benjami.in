import { AssetCache } from "@11ty/eleventy-fetch";
import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async () => {
    // Pass in your unique custom cache key
    const asset = new AssetCache("robots-txt");

    // check if the cache is fresh within the last day
    if (asset.isCacheValid("1d")) {
        // return cached data.
        const robotsTxt = await asset.getCachedValue();
        return new Response(robotsTxt);
    }

    const url = "https://api.darkvisitors.com/robots-txts";
    const body = JSON.stringify({
        agent_types: [
            "AI Assistant",
            "AI Data Scraper",
            "Undocumented AI Agent",
        ],
        disallow: "/",
    });

    const response = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${import.meta.env.ROBOTS_API_TOKEN}`,
            "Content-Type": "application/json",
        },
        body,
    });
    const robotsTxt = await response.arrayBuffer();

    console.log("body", robotsTxt);

    await asset.save(robotsTxt, "buffer");

    return new Response(robotsTxt);
};
