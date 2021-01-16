<script lang="ts">
	import TailwindCSS from "./TailwindCSS.svelte";
	import Dots from "./components/Dots.svelte";
	import Header from "./components/Header.svelte";
	import Intro from "./components/Intro.svelte";
	import Projects from "./components/Projects.svelte";
</script>

<main class="p-8 sm:p-12 md:p-16 xl:p-24 xl:ml-32">
	<div class="max-w-6xl lg:grid lg:grid-cols-2 lg:gap-5">
		<div class="max-w-lg">
			<Header />
			<Intro />
		</div>

		<div class="max-w-md mb-8 lg:mb-0">
			<Projects />
		</div>
	</div>
</main>
<Dots />
<TailwindCSS />

<style>
	main {
		@apply text-white;
		@apply text-lg;
		@apply tracking-wide;
		animation: fade ease 1s;
	}
</style>
