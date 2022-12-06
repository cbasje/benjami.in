import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { getNowPlaying } from "../../../lib/now-playing";
import type { SpotifyData } from "../../../lib/types";

const parseName = (name: string): string => {
    return name.split(/[(-]/i)[0];
};
const parseArtist = (artists: any[]): string => {
    return artists.map((a: any) => a.name)[0] ?? "";
};

const handler: Handler = async (
    event: HandlerEvent,
    context: HandlerContext
) => {
    const response = await getNowPlaying();

    if (!response.ok || response.status === 204 || response.status >= 400) {
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                isPlaying: false,
            }),
        };
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

    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data }),
    };
};

export { handler };
