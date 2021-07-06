<script lang="ts">
    interface Point {
        x: number;
        y: number;
        r: number;
    }

    const coords: Point[] = [];

    for (let i = 0; i < 100; i++) {
        coords.push({
            x: Math.floor(Math.random() * window.outerWidth),
            y: Math.floor(Math.random() * window.outerHeight),
            r: Math.floor(Math.random() * 3),
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
        animation: fade ease 3s;
    }

    svg {
        @apply h-screen;
        @apply w-screen;
        @apply fixed;
        @apply top-0;
        @apply opacity-50;
        @apply ease-linear;

        z-index: -1;
        animation-name: orbit;
        animation-duration: 420s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
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
