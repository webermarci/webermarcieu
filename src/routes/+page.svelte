<script lang="ts">
	import Header from "$lib/Header.svelte";
	import Intro from "$lib/Intro.svelte";
</script>

<section>
	<Header />
	<Intro />
</section>

<style lang="postcss">
	section {
		@apply max-w-lg;
	}
</style>
