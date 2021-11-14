<script>
    import "../app.postcss";
</script>

<svelte:head>
    <title>webermarci.eu</title>
</svelte:head>

<slot />

<style lang="postcss">
    :global(*) {
        @apply antialiased;
        @apply subpixel-antialiased;
        font-family: "Rubik", sans-serif;
    }

    :global(body) {
        @apply bg-blue-600;
        @apply dark:bg-gray-900;
    }

    :global(h1) {
        @apply text-3xl;
        @apply tracking-wider;
    }

    :global(h2) {
        @apply text-xl;
    }

    :global(a) {
        @apply text-black;
        @apply bg-yellow-300;
        @apply dark:bg-green-300;
        @apply rounded-sm;
        @apply px-1;
        @apply hover:underline;
    }

    @media (prefers-color-scheme: dark) {
        :global(a) {
            box-shadow: 0 0 8px 0 rgba(110, 231, 183, 0.4);
        }
    }
</style>
