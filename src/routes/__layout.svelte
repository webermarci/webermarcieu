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
        @apply bg-gray-900;
        @apply overscroll-none;
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
        @apply bg-gradient-to-b;
        @apply from-yellow-300;
        @apply to-yellow-400;
        @apply hover:underline;
        @apply rounded-sm;
        @apply px-1;
        box-shadow: 0 0 8px 0 rgba(252, 211, 77, 0.4);
    }
</style>
