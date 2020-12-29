<script>
  const coords = [];

  for (let i = 0; i < 100; i++) {
    coords.push({
      x: Math.floor(Math.random() * window.outerWidth),
      y: Math.floor(Math.random() * window.outerHeight),
      r: Math.floor(Math.random() * 3),
    });
  }
</script>

<style>
  svg {
    z-index: -1;
    animation-name: orbit;
    animation-duration: 420s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
  }

  .container {
    animation: fade ease 3s;
  }

  @keyframes orbit {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div class="container">
  <svg class="h-screen w-screen fixed top-0 opacity-30 ease-linear">
    {#each coords as { x, y, r }, i}
      <circle fill="#fff" cx={x} cy={y} {r} />
    {/each}
  </svg>
</div>
