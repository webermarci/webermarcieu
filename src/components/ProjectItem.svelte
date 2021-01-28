<script lang="ts">
    export let title: string;
    export let description: string;
    export let url: string;
</script>

<section>
    <a href={url} target="_blank" rel="noopener">
        <h1>{title}</h1>
    </a>
    <p>{description}</p>
</section>

<style>
    section {
        @apply p-3;
        @apply bg-white;
        @apply bg-opacity-5;
        @apply rounded-xl;
        @apply transition-colors;
        @apply duration-500;
        @apply z-10;
    }

    section:hover {
        @apply bg-opacity-10;
    }

    h1 {
        @apply mb-1;
    }

    p {
        @apply text-sm;
        @apply mb-1;
    }

    a {
        @apply flex;
        @apply items-center;
        @apply text-green-500;
        @apply transition-colors;
        @apply duration-300;
    }

    a:hover {
        @apply text-green-300;
    }
</style>
