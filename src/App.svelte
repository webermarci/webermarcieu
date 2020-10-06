<script>
  import Skills from "./Skills.svelte";
  import Dots from "./Dots.svelte";
  import Logo from "./Logo.svelte";
  import ProjectItem from "./ProjectItem.svelte";

  const projects = [
    {
      title: "Neural Flappy Bird",
      description: "AI written in Javascript to play the game.",
      url: "https://neural-flappybird.netlify.app/",
    },
    {
      title: "Timato",
      description: "It is just a pomodoro timer Svelte PWA application.",
      url: "https://timato.netlify.app/",
    },
    {
      title: "Portfolio site",
      description: "The source code of this site. It is written in Svelte.",
      url: "https://github.com/webermarci/webermarcieu",
    },
  ];
</script>

<style>
  main {
    animation: fade ease 1s;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>

<main class="text-white text-lg tracking-wide">
  <div class="p-8 sm:p-12 md:p-16 xl:p-24 xl:ml-32">
    <div class="max-w-6xl grid lg:grid-cols-2 gap-5">
      <div class="max-w-lg mb-6">
        <div class="mb-8">
          <h1 class="text-2xl tracking-wider">Wéber Marci</h1>
          <a
            class="text-green-500 hover:text-green-300 transition-colors
          duration-300"
            href="mailto:webermarton@gmail.com">
            webermarton@gmail.com
          </a>
        </div>

        <p class="mb-6">
          I am a software developer with great emphasis on performance and
          perfection.
        </p>

        <p class="mb-4">
          For the past few years I had made drive throughs even more seamless at
          <a
            class="text-green-500 hover:text-green-300 transition-colors
          duration-300"
            target="blank"
            href="https://www.rolletpay.com">
            Rollet.
          </a>
          I was an early bird at the company, so I had the opportunity to work
          on almost everything software related.
        </p>

        <p class="mb-8">
          My best work at
          <a
            class="text-green-500 hover:text-green-300 transition-colors
          duration-300"
            target="blank"
            href="https://www.rolletpay.com">
            Rollet
          </a>
          was definitely the IoT system we designed and developed.
        </p>

        <p class="mb-8">
          Previously I was making an HR software system at Ulyssys.
        </p>

        <p class="mb-2">Things I like to work with:</p>
        <Skills />

        <p>
          You can find me on
          <a
            class="text-green-500 hover:text-green-300
          transition-colors duration-300"
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
      </div>

      <div class="max-w-lg mb-8">
        <h1 class="text-2xl tracking-wider mb-1">Projects</h1>

        <div class="grid md:grid-cols-2 gap-3">
          {#each projects as { title, description, url }}
            <ProjectItem {title} {description} {url} />
          {/each}
        </div>
      </div>
    </div>

    <Logo />
  </div>

  <Dots />
</main>
