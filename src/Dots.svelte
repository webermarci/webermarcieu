<script>
  const coords = [];
  for (let i = 0; i < 100; i++) {
    coords.push({
      x: Math.floor(Math.random() * window.outerWidth),
      y: Math.floor(Math.random() * window.outerHeight),
      r: Math.floor(Math.random() * 3)
    });
  }
</script>

<style>
  svg {
    width: 100vw;
    height: 100vh;

    opacity: 0.3;

    position: fixed;
    top: 0;
    z-index: -1;

    animation-name: orbit;
    animation-duration: 420s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  svg > circle {
    animation: fade ease 5s;
  }

  @keyframes orbit {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
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

<svg>
  {#each coords as { x, y, r }, i}
    <circle fill="#fff" cx={x} cy={y} {r} />
  {/each}
</svg>
