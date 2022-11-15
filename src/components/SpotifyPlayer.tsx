import { useState } from "react";
import type { Fetcher } from "swr";
import useSWR from "swr";
import type { SpotifyData } from "../../lib/types";
import { css } from "../stitches.config";

const link = css({
    maxWidth: "100%",

    display: "flex",
    flexDirection: "row",
    gap: "$2",
    borderRadius: "$md",
    lineHeight: "24px",
    letterSpacing: "-.01em",
});

const textContainer = css({
    maxWidth: "100%",

    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    height: "3rem",
    alignItems: "flex-end",
    justifyContent: "center",
    textAlign: "end",

    "& > span": {
        maxWidth: "100%",

        fontFamily: "$display",
        fontWeight: "$regular",
        fontSize: "smaller",
        lineHeight: 1.5,
        textTransform: "uppercase",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",

        "&:first-child": { fontWeight: "$bold" },
    },
});

const image = css({
    borderRadius: "$full",
    width: "3rem",
    height: "3rem",
});

const imagePlaceholder = css({
    borderRadius: "$full",
    width: "3rem",
    height: "3rem",
    background: "rgb($green400)",
});
const svg = css({
    width: "100%",
    height: "100%",
});

const SpotifyPlayer = () => {
    // const fetcher = async (url: string): Promise<SpotifyData> => {
    //     const res = await fetch(url);
    //     return res.json();
    // };

    // const [data, setData] = useState<SpotifyData | null>(null);

    // const interval = setInterval(async () => {
    //     const fetchData = await fetcher("/.netlify/functions/now-playing");
    //     setData(fetchData);
    // }, 30 * 1000);

    const fetcher: Fetcher<SpotifyData> = async (url: string) => {
        const res = await fetch(url);
        return res.json();
    };

    const { data, error } = useSWR("/.netlify/functions/now-playing", fetcher, {
        refreshInterval: 30000,
        // revalidateIfStale: false,
        // revalidateOnFocus: false,
        // revalidateOnReconnect: false,
    });

    const {
        isPlaying,
        title,
        artist,
        album,
        albumImage,
        songUrl,
    }: SpotifyData = data ?? {
        isPlaying: false,
    };

    return isPlaying ? (
        <a className={link()} href={songUrl ?? ""} target="_blank">
            <div className={textContainer()}>
                <span>Now playing</span>
                <span>
                    {title} - {artist}
                </span>
            </div>

            {albumImage && (
                <img
                    className={image()}
                    src={albumImage.url}
                    width={albumImage.width}
                    height={albumImage.height}
                    alt={`Album cover of ${album ?? "the album"} by ${
                        artist ?? "the artist"
                    }`}
                />
            )}
        </a>
    ) : (
        <span className={link()}>
            <div className={textContainer()}>
                <span>Offline</span>
                <span>Spotify</span>
            </div>

            <div className={imagePlaceholder()}>
                <svg
                    className={svg()}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                >
                    <path
                        d="M179.1,108.3a112.1,112.1,0,0,0-102.3.1"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></path>
                    <path
                        d="M164.3,136.7a79.9,79.9,0,0,0-72.7.1"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></path>
                    <path
                        d="M149.5,165.1A47.3,47.3,0,0,0,128,160a48.7,48.7,0,0,0-21.6,5.1"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></path>
                </svg>
            </div>
        </span>
    );
};

export default SpotifyPlayer;
