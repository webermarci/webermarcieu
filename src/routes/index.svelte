<script lang="ts">
    import Dots from "$lib/Dots.svelte";
    import Header from "$lib/Header.svelte";
    import Intro from "$lib/Intro.svelte";
    import Projects from "$lib/Projects.svelte";
</script>

<main class="p-8 sm:p-12 md:p-16 xl:p-24 xl:ml-32">
    <div class="max-w-6xl grid gap-5 grid-cols-1 lg:grid-cols-2">
        <div class="max-w-lg">
            <Header />
            <Intro />
        </div>

        <div class="max-w-md">
            <Projects />
        </div>
    </div>
</main>
<Dots />

<style>
    @keyframes -global-fade {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    main {
        @apply text-white;
        @apply text-lg;
        @apply tracking-wide;
        animation: fade ease 1s;
    }
</style>
