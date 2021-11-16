<script lang="ts">
    interface Point {
        x: number;
        y: number;
        r: number;
    }

    const n =
        window.outerWidth > window.outerHeight
            ? window.outerWidth
            : window.outerHeight;
    const coords: Point[] = [];

    for (let i = 0; i < n / 4; i++) {
        coords.push({
            x: Math.random() * n,
            y: Math.random() * n,
            r: 0.2 + Math.random() * 2,
        });
    }
</script>

<svg>
    {#each coords as { x, y, r }, i}
        <circle fill="#fff" cx={x} cy={y} {r} />
    {/each}
</svg>

<style lang="postcss">
    svg {
        @apply fixed;
        @apply top-0;
        @apply opacity-70;
        @apply dark:opacity-80;
        @apply ease-linear;
        @apply top-1/2;
        @apply left-1/2;
        @apply origin-center;
        width: max(100vw, 100vh);
        height: max(100vw, 100vh);
        margin-top: calc((-1 * max(100vw, 100vh)) / 2);
        margin-left: calc((-1 * max(100vw, 100vh)) / 2);

        z-index: -1;
        animation-name: orbit;
        animation-duration: 512s;
        animation-fill-mode: both;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    @media (prefers-color-scheme: dark) {
        circle {
            filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.8));
        }
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
