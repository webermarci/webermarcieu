<script lang="ts">
    import Skills from "./Skills.svelte";
</script>

<div>
    <section>
        <p>
            I am a freelance software developer with great emphasis on
            performance and perfection.
        </p>
    </section>

    <section>
        <p>Recently, I've been working on an IoT sensor platform.</p>
    </section>

    <section>
        <p>
            For the past few years I had made drive throughs even more seamless
            at
            <a target="blank" href="https://www.rollet.hu/">Rollet</a>. I was an
            early bird at the company, so I had the opportunity to work on
            almost everything software related.
        </p>

        <p>
            My best work at
            <a target="blank" href="https://www.rollet.hu/">Rollet</a>
            was definitely the IoT system we designed and developed.
        </p>
    </section>

    <section>
        <p>Previously I was making an HR software system at Ulyssys.</p>
    </section>

    <section><Skills /></section>

    <section>
        <p>
            You can find me on
            <a target="blank" href="https://www.linkedin.com/in/webermarton/">
                LinkedIn,
            </a>
            <a target="blank" href="https://github.com/webermarci">GitHub</a>
            and you can get in touch via
            <a href="mailto:webermarton@gmail.com">email</a>.
        </p>
    </section>
</div>

<style>
    a {
        @apply text-green-500;
        @apply transition-colors;
        @apply duration-300;
    }

    a:hover {
        @apply text-green-300;
    }

    div > section:not(:last-child) {
        @apply mb-8;
    }

    div > section > p:not(:last-child) {
        @apply mb-4;
    }
</style>
