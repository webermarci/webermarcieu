<script lang="ts">
    import Header from "$lib/Header.svelte";
    import Intro from "$lib/Intro.svelte";
</script>

<main>
    <div>
        <Header />
        <Intro />
    </div>
</main>

<style lang="postcss">
    main {
        @apply text-white;
        @apply text-lg;
        @apply tracking-wide;
        @apply pt-14;
        @apply px-8;
        @apply pb-8;
        @apply sm:p-12;
        @apply md:p-16;
        @apply xl:p-24;
        @apply xl:ml-32;
        @apply 2xl:p-64;
        @apply 2xl:ml-52;
    }

    main > div {
        @apply max-w-lg;
    }
</style>
