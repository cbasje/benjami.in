<script lang="ts">
    import type { SpotifyData } from "../../lib/types";
    import { useQuery } from "@sveltestack/svelte-query";

    const queryResult = useQuery<SpotifyData>("repoData", () =>
        fetch("/api/now-playing").then((res) => res.json())
    );
</script>

{#if $queryResult.data && $queryResult.data.isPlaying}
    <a class="player" href={$queryResult.data.songUrl ?? ""} target="_blank">
        <div class="text-container">
            <span>Now playing</span>
            <span>
                {$queryResult.data.title} - {$queryResult.data.artist}
            </span>
        </div>

        {#if $queryResult.data.albumImage}
            <img
                src={$queryResult.data.albumImage.url}
                width={$queryResult.data.albumImage.width}
                height={$queryResult.data.albumImage.height}
                alt={`Album cover of ${
                    $queryResult.data.album ?? "the album"
                } by ${$queryResult.data.artist ?? "the artist"}`}
            />
        {/if}
    </a>
{:else}
    <span class="player">
        <div class="text-container">
            <span>Offline</span>
            <span>Spotify</span>
        </div>

        <div class="image-placeholder">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 256 256"
            >
                <path
                    d="M179.1,108.3a112.1,112.1,0,0,0-102.3.1"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                />
                <path
                    d="M164.3,136.7a79.9,79.9,0,0,0-72.7.1"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                />
                <path
                    d="M149.5,165.1A47.3,47.3,0,0,0,128,160a48.7,48.7,0,0,0-21.6,5.1"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                />
            </svg>
        </div>
    </span>
{/if}

<style lang="scss">
    .player {
        max-width: 100%;

        display: flex;
        flex-direction: row;
        gap: var(--size-3);
        border-radius: var(--radius-3);
        line-height: 24px;
        letter-spacing: -0.01em;

        .text-container {
            min-width: 0;
            max-width: 100%;

            display: flex;
            flex-direction: column;
            height: 3rem;
            align-items: flex-end;
            justify-content: center;
            text-align: end;

            > span {
                max-width: 100%;

                font-weight: var(--font-weight-5);
                font-size: smaller;
                line-height: 1.5;
                text-transform: uppercase;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;

                &:first-child {
                    font-weight: var(--font-weight-7);
                }
            }
        }

        img {
            border-radius: var(--radius-round);
            width: 3rem;
            height: 3rem;
        }

        .image-placeholder {
            border-radius: var(--radius-round);
            width: 3rem;
            height: 3rem;
            background: var(--color-green-4);
        }

        .svg {
            width: 100%;
            height: 100%;
        }
    }
</style>
