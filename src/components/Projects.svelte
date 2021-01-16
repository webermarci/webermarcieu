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
            title: "Portfolio site",
            description: "The source code of this website.",
            url: "https://github.com/webermarci/webermarcieu",
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
