<script lang="ts">
    import Icon from "@iconify/svelte";

    /** Connect theme toggle */
    const THEME_STORAGE_KEY = "theme";

    interface Theme {
        name?: string;
        icon?: string;
    }
    const themes = [
        { name: "dark", icon: "ph:moon" },
        { name: "light", icon: "ph:sun" },
    ];

    function switchTheme() {
        let currentTheme =
            document.documentElement.getAttribute("data-theme") ?? "light";
        const currentIndex = themes.findIndex((t) => t.name === currentTheme);

        const nextIndex = (currentIndex + 1) % themes.length;
        const newTheme = themes[nextIndex].name;

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    }

    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
        window &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    let theme = "light";
    if (prefersDark) {
        theme = "dark";
    }
    if (storedTheme) {
        theme = storedTheme;
    }
    document.documentElement.setAttribute("data-theme", theme);
</script>

<div id="theme-toggle">
    {#each themes as theme, i}
        <button class="theme-{theme.name}" on:click={() => switchTheme()}>
            <Icon icon={theme.icon} />
        </button>
    {/each}
</div>

<style lang="scss">
    #theme-toggle {
        opacity: 1;
        transition: opacity 75ms cubic-bezier(0.32, 0, 0.67, 0), color 150ms,
            background-color 150ms, border-color 150ms;

        cursor: pointer;
        color: rgb(var(--theme-fg-default));
    }
    button {
        all: unset;
        padding: 0.25em;
        min-height: 40px;
        min-width: 40px;
        font-size: 3em;
    }
    .sr-only {
        border: 0;
        -webkit-clip-path: inset(50%);
        clip-path: inset(50%);
        height: 1px;
        margin: 0;
        overflow: hidden;
        padding: 0;
        position: absolute !important;
        white-space: nowrap;
        width: 1px;
    }
</style>
