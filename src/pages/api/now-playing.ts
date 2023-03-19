import type { APIRoute } from "astro";
import { getNowPlaying } from "../../../lib/now-playing";
import type { SpotifyData } from "../../../lib/types";

const parseName = (name: string): string => {
    return name.split(/[(-]/i)[0];
};
const parseArtist = (artists: any[]): string => {
    return artists.map((a: any) => a.name)[0] ?? "";
};

export const get: APIRoute = async () => {
    const response = await getNowPlaying();

    if (!response.ok || response.status === 204 || response.status >= 400) {
        return new Response(
            JSON.stringify({
                isPlaying: false,
            }),
            {
                status: 200,
            }
        );
    }

    const song: any = await response.json();

    const data: SpotifyData = {
        isPlaying: song.is_playing,
        title: parseName(song.item.name),
        artist: parseArtist(song.item.artists),
        // album: parseName(song.item.album.name),
        albumImage: song.item.album.images[2],
        songUrl: song.item.external_urls.spotify,
    };

    return new Response(JSON.stringify(data), {
        status: 200,
    });
};
