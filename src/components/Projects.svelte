<script lang="ts">
    import ProjectItem from "./ProjectItem.svelte";

    interface Project {
        title: string;
        description: string;
        url: string;
    }

    const projects: Project[] = [
        {
            title: "Neural Flappy Bird",
            description: "A neural network that learns to play the game.",
            url: "https://neural-flappybird.netlify.app/",
        },
        {
            title: "Timato",
            description: "A simple pomodoro timer progressive web app.",
            url: "https://timato.netlify.app/",
        },
        {
            title: "go-pipe-parser",
            description: "A go library to help parse unix pipes.",
            url: "https://github.com/webermarci/go-pipe-parser",
        },
        {
            title: "Portfolio site",
            description: "The source code of this website.",
            url: "https://github.com/webermarci/webermarcieu",
        },
        {
            title: "Svelte.js & Tailwind",
            description: "My take on the Svelte and Tailwind template.",
            url: "https://github.com/webermarci/svelte-tailwind-template",
        },
        {
            title: "Svelte.ts & Tailwind",
            description: "Simliar to the previous one, but with Typescript.",
            url:
                "https://github.com/webermarci/svelte-typescript-tailwind-template",
        },
    ];
</script>

<section class="md:grid-cols-2">
    {#each projects as { title, description, url }}
        <ProjectItem {title} {description} {url} />
    {/each}
</section>

<style>
    section {
        @apply grid;
        @apply gap-3;
    }
</style>
