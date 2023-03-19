<script>
    import {
        QueryClient,
        QueryClientProvider,
    } from "@sveltestack/svelte-query";
    import SpotifyPlayer from "./SpotifyPlayer.svelte";

    const queryClient = new QueryClient();
</script>

<div>
    <QueryClientProvider client={queryClient}>
        <SpotifyPlayer />
    </QueryClientProvider>
</div>
