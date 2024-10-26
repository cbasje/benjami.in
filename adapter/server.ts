import type { SSRManifest } from "astro";
import { App } from "astro/app";
import type { Server } from "bun";
import type { Options } from "./types";

let _server: Server | undefined = undefined;

/**
 * Render the path with the Astro router
 *
 * @param app Astro app
 * @param req Request
 * @returns Promise<Response>
 */
async function renderAstroPath(app: App, req: Request) {
    const res = await app.render(req);
    if (app.setCookieHeaders) {
        for (const setCookieHeader of app.setCookieHeaders(res)) {
            res.headers.append("Set-Cookie", setCookieHeader);
        }
    }
    return res;
}

/**
 * Find the static file in the local directory
 *
 * @param app Astro app
 * @param req Request
 * @returns Promise<BunFile>
 */
async function getStaticFile(app: App, req: Request) {
    const clientRoot = new URL("../../client/", import.meta.url);
    const url = new URL(req.url);

    // Find the path to the static file
    const localPath = new URL(`./${app.removeBase(url.pathname)}`, clientRoot);
    return Bun.file(localPath);
}

export function start(manifest: SSRManifest, options: Options) {
    const app = new App(manifest);
    const logger = app.getAdapterLogger();

    _server = Bun.serve({
        port: options.port ?? 3000,
        hostname: options.hostname ?? "0.0.0.0",

        fetch: async (req) => {
            // Find the request path in Astro
            if (app.match(req)) {
                return await renderAstroPath(app, req);
            }

            // If the request path wasn't found,
            // try to fetch a static file instead
            const file = await getStaticFile(app, req);
            if (await file.exists()) {
                const fileRes = new Response(file);
                return fileRes;
            }

            // Render the Astro custom 404 page
            return await renderAstroPath(app, req);
        },

        error: (error) => {
            logger.error(`Something wrong: ${error.message}`);
            return new Response(`<pre>${error}\n${error.stack}</pre>`, {
                headers: {
                    "Content-Type": "text/html",
                },
            });
        },
    });

    logger.debug(`Bun server listening on ${_server.hostname}:${_server.port}`);
}

// Astro Adapter exports
export async function createExports(manifest: SSRManifest, options: Options) {
    const app = new App(manifest);

    return {
        stop() {
            if (_server) {
                _server.stop();
                _server = undefined;
            }
        },
        running() {
            return _server !== undefined;
        },
        async start() {
            return start(manifest, options);
        },
        async handle(request: Request) {
            return app.render(request);
        },
    };
}
