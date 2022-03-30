<script lang="ts">
	import "../app.css";
	import Starfield from "$lib/Starfield.svelte";
</script>

<svelte:head>
	<title>webermarci.eu</title>
</svelte:head>

<main>
	<slot />
</main>
<Starfield />

<style lang="postcss">
	:global(*) {
		@apply antialiased;
		@apply subpixel-antialiased;
		font-family: "Rubik", sans-serif;
	}

	:global(body) {
		@apply overscroll-none;
	}

	:global(h1) {
		@apply text-3xl;
		@apply tracking-wider;
	}

	:global(h2) {
		@apply text-xl;
	}

	:global(a) {
		@apply px-1;
		@apply rounded-sm;
		@apply text-black;
		@apply bg-gradient-to-b;
		@apply from-yellow-300;
		@apply to-yellow-400;
		@apply hover:underline;
		@apply hover:decoration-2;
	}

	main {
		@apply text-white;
		@apply text-lg;
		@apply tracking-wide;
		@apply p-8;
		@apply md:px-20;
		@apply md:py-24;
		@apply xl:p-28;
		@apply xl:mx-32;
		@apply 2xl:p-64;
		@apply 2xl:ml-52;
	}
</style>
