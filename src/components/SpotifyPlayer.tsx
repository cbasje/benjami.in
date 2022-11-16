import type { Fetcher } from "swr";
import useSWR from "swr";
import type { SpotifyData } from "../../lib/types";

import Styles from "../styles/spotify-player.module.scss";

const SpotifyPlayer = () => {
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
        <a className={Styles.link} href={songUrl ?? ""} target="_blank">
            <div className={Styles.textContainer}>
                <span>Now playing</span>
                <span>
                    {title} - {artist}
                </span>
            </div>

            {albumImage && (
                <img
                    className={Styles.image}
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
        <span className={Styles.link}>
            <div className={Styles.textContainer}>
                <span>Offline</span>
                <span>Spotify</span>
            </div>

            <div className={Styles.imagePlaceholder}>
                <svg
                    className={Styles.svg}
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
