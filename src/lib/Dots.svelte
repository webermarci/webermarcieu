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

    for (let i = 0; i < n / 5; i++) {
        coords.push({
            x: Math.random() * n,
            y: Math.random() * n,
            r: 0.2 + Math.random() * 1.5,
        });
    }
</script>

<div>
    <svg style={`width: ${n}; height: ${n}`}>
        {#each coords as { x, y, r }, i}
            <circle fill="#fff" cx={x} cy={y} {r} />
        {/each}
    </svg>
</div>

<style lang="postcss">
    div {
        @apply bg-gradient-to-b;
        @apply from-blue-700;
        @apply to-blue-500;
        @apply dark:from-gray-900;
        @apply dark:to-indigo-900;
        @apply flex;
        @apply items-center;
        @apply fixed;
        @apply top-0;
        @apply w-screen;
        @apply h-screen;
        z-index: -1;
    }

    svg {
        @apply opacity-80;
        @apply dark:opacity-100;
        @apply ease-linear;
        animation: 512s linear orbit infinite;
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
