<script lang="ts">
    import { onMount } from "svelte";

    interface Star {
        x: number;
        y: number;
        z: number;
    }

    let canvas: HTMLCanvasElement;
    let w: number;
    let h: number;
    let cx: number;
    let cy: number;
    let stars: Star[] = [];

    function setCanvasExtents() {
        w = document.documentElement.clientWidth;
        h = document.documentElement.clientHeight;
        canvas.width = w;
        canvas.height = h;
        cx = w / 2;
        cy = h / 2;
    }

    function clearContext(ctx: CanvasRenderingContext2D) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function bigBang(numberOfStars: number) {
        for (let i = 0; i < numberOfStars; i++) {
            const star: Star = {
                x: Math.random() * 1600 - 800,
                y: Math.random() * 900 - 450,
                z: Math.random() * 1000,
            };
            stars.push(star);
        }
    }

    function moveStars(distance: number) {
        for (let i = 0; i < stars.length; i++) {
            const star = stars[i];
            star.z -= distance;
            while (star.z <= 1) {
                star.z += 1000;
            }
        }
    }

    function drawPixel(
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        brightness: number
    ) {
        ctx.beginPath();
        ctx.fillStyle = `rgb(255,255,255,${brightness})`;
        const size = 0.3 + brightness;
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fill();
    }

    function drawStars(ctx: CanvasRenderingContext2D) {
        for (let i = 0; i < stars.length; i++) {
            const star = stars[i];
            const x = cx + star.x / (star.z * 0.001);
            const y = cy + star.y / (star.z * 0.001);

            if (x < 0 || x >= w || y < 0 || y >= h) {
                continue;
            }

            const d = star.z / 1000.0;
            const brightness = 1 - d * d;

            drawPixel(ctx, x, y, brightness);
        }
    }

    onMount(() => {
        bigBang(1500);
        setCanvasExtents();
        window.onresize = () => setCanvasExtents();

        const ctx = canvas.getContext("2d");
        let prevTime: number;

        function init(time: number) {
            prevTime = time;
            requestAnimationFrame(tick);
        }

        function tick(time: number) {
            let elapsed = time - prevTime;
            prevTime = time;

            clearContext(ctx);
            moveStars(elapsed * 0.015);
            drawStars(ctx);

            requestAnimationFrame(tick);
        }

        requestAnimationFrame(init);
    });
</script>

<section>
    <canvas bind:this={canvas} />
</section>

<style lang="postcss">
    section {
        @apply bg-gradient-to-b;
        @apply from-slate-800;
        @apply to-blue-600;
        @apply dark:from-slate-900;
        @apply dark:to-indigo-900;
        @apply fixed;
        @apply top-0;
        @apply w-screen;
        @apply h-screen;
        z-index: -1;
    }

    canvas {
        @apply w-full;
        @apply h-full;
        animation: fadeIn 1s linear;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
