<script>
  import Skills from "./Skills.svelte";
  import Dots from "./Dots.svelte";
</script>

<style>
  .logo {
    zoom: 0.5;
    stroke-width: 0.3rem;
  }
</style>

<main class="text-white text-lg tracking-wide">

  <div class="max-w-2xl p-8 sm:p-12 md:p-16 lg:p-24 lg:ml-32">
    <div class="mb-10">
      <h1 class="text-xl tracking-wider">Wéber Marci</h1>
      <a
        class="text-green-500 hover:text-green-300 transition-colors
        duration-300"
        href="mailto:webermarton@gmail.com">
        webermarton@gmail.com
      </a>
    </div>

    <p class="mb-6">
      I'm a software developer with great emphasis on performance and
      perfection.
    </p>
    <p class="mb-6">
      For the past few years I've made drive throughs even more seamless at
      <a
        class="text-green-500 hover:text-green-300 transition-colors
        duration-300"
        target="blank"
        href="https://www.rollet.hu">
        Rollet.
      </a>
      I was an early bird in the company, so I had the opportunity to work on
      almost everything software related.
    </p>
    <p class="mb-8">
      My best work at
      <a
        class="text-green-500 hover:text-green-300 transition-colors
        duration-300"
        target="blank"
        href="https://www.rollet.hu">
        Rollet
      </a>
      was definitely the IoT system we designed and developed.
    </p>

    <p class="mb-8">
      Previously I was making an HR software system at Ulyssys.
    </p>

    <p class="mb-2">Things I like to work with:</p>
    <Skills />

    <p class="mb-8">
      Check out my projects:
      <a
        class="text-green-500 hover:text-green-300 transition-colors
        duration-300"
        target="blank"
        href="https://neural-flappybird.netlify.app/">
        Neural Flappy Bird,
      </a>
      <a
        class="text-green-500 hover:text-green-300 transition-colors
        duration-300"
        target="blank"
        href="https://github.com/webermarci/webermarcieu">
        Source code of this site
      </a>
    </p>

    <p>
      You can find me on
      <a
        class="text-green-500 hover:text-green-300 transition-colors
        duration-300"
        target="blank"
        href="https://www.linkedin.com/in/webermarton/">
        LinkedIn,
      </a>
      <a
        class="text-green-500 hover:text-green-300 transition-colors
        duration-300"
        target="blank"
        href="https://github.com/webermarci">
        GitHub
      </a>
      and you can get in touch via
      <a
        class="text-green-500 hover:text-green-300 transition-colors
        duration-300"
        href="mailto:webermarton@gmail.com">
        email.
      </a>
    </p>

    <svg
      class="logo mt-16"
      xmlns="http://www.w3.org/2000/svg"
      width="110"
      height="140"
      stroke-linecap="round"
      stroke="currentColor">
      <line x1="5" y1="5" x2="35" y2="70" />
      <line x1="35" y1="70" x2="5" y2="135" />
      <line x1="35" y1="70" x2="55" y2="35" />
      <line x1="35" y1="70" x2="55" y2="105" />
      <line x1="55" y1="35" x2="75" y2="70" />
      <line x1="55" y1="105" x2="75" y2="70" />
      <line x1="75" y1="70" x2="105" y2="5" />
      <line x1="75" y1="70" x2="105" y2="135" />
    </svg>
  </div>

  <Dots />

</main>
