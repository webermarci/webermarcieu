<script>
    import Skills from "./Skills.svelte";
</script>

<div>
    <section>
        <p>
            I am a freelance software developer with great emphasis on
            performance and perfection.
        </p>
    </section>

    <Skills />

    <section>
        <p>
            You can find me on
            <a target="blank" href="https://www.linkedin.com/in/webermarton/">
                LinkedIn
            </a>
            ,
            <a target="blank" href="https://github.com/webermarci">GitHub</a>
            and you can get in touch via
            <a href="mailto:webermarton@gmail.com">email</a>.
        </p>
    </section>
</div>

<style lang="postcss">
    div > section:not(:last-child) {
        @apply mb-8;
    }

    div > section > p:not(:last-child) {
        @apply mb-4;
    }
</style>
