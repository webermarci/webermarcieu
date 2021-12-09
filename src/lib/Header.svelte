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

<style lang="postcss">
    section {
        @apply flex;
        @apply items-center;
        @apply mb-6;
    }
</style>
