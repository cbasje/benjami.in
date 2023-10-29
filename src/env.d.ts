/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly SANITY_STUDIO_PROJECT_ID: string;
    readonly SANITY_STUDIO_DATASET: string;

    readonly SPOTIFY_CLIENT_ID: string;
    readonly SPOTIFY_CLIENT_SECRET: string;
    readonly SPOTIFY_CODE: string;
    readonly SPOTIFY_REFRESH_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
