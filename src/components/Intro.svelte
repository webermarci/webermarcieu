<script lang="ts">
    import Skills from "./Skills.svelte";
</script>

<section>
    <p class="mb-6">
        I am a software developer with great emphasis on performance and
        perfection.
    </p>

    <p class="mb-8">
        Recently, I've been working on an IoT sensor platform. We are hoping to
        release it really soon.
    </p>

    <p class="mb-4">
        For the past few years I had made drive throughs even more seamless at
        <a target="blank" href="https://www.rolletpay.com">Rollet</a>. I was an
        early bird at the company, so I had the opportunity to work on almost
        everything software related.
    </p>

    <p class="mb-8">
        My best work at
        <a target="blank" href="https://www.rolletpay.com">Rollet</a>
        was definitely the IoT system we designed and developed.
    </p>

    <p class="mb-8">
        Previously I was making an HR software system at Ulyssys.
    </p>

    <Skills />

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

<style>
    a {
        @apply text-green-500;
        @apply transition-colors;
        @apply duration-300;
    }

    a:hover {
        @apply text-green-300;
    }

    section {
        @apply mb-6;
    }
</style>
