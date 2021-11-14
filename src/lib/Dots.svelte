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

    for (let i = 0; i < 128; i++) {
        coords.push({
            x: Math.random() * n,
            y: Math.random() * n,
            r: Math.random() * 2.3,
        });
    }
</script>

<section>
    <svg>
        {#each coords as { x, y, r }, i}
            <circle fill="#fff" cx={x} cy={y} {r} />
        {/each}
    </svg>
</section>

<style>
    section {
        animation: fade ease 2s;
    }

    svg {
        @apply h-screen;
        @apply w-screen;
        @apply fixed;
        @apply top-0;
        @apply opacity-60;
        @apply ease-linear;

        z-index: -1;
        animation-name: orbit;
        animation-duration: 420s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
    }

    @media (prefers-color-scheme: dark) {
        circle {
            filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.5));
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

    @keyframes orbit {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>
