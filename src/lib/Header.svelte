<script lang="ts">
    import Logo from "./Logo.svelte";
</script>

<section>
    <div>
        <h1>Wéber Marci</h1>
        <a href="mailto:webermarton@gmail.com">webermarton@gmail.com</a>
    </div>
    <Logo />
</section>

<style>
    h1 {
        @apply text-2xl;
        @apply tracking-wider;
    }

    a {
        @apply text-green-500;
        @apply transition-colors;
        @apply duration-300;
    }

    a:hover {
        @apply text-green-300;
    }

    section {
        @apply flex;
        @apply items-center;
        @apply mb-8;
    }
</style>
