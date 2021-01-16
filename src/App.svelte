<script lang="ts">
	import TailwindCSS from "./TailwindCSS.svelte";
	import Dots from "./components/Dots.svelte";
	import Logo from "./components/Logo.svelte";
	import Skills from "./components/Skills.svelte";
	import Projects from "./components/Projects.svelte";
</script>

<main class="p-8 sm:p-12 md:p-16 xl:p-24 xl:ml-32">
	<div class="max-w-6xl lg:grid lg:grid-cols-2 lg:gap-5">
		<div class="max-w-lg">
			<header>
				<div>
					<h1>Wéber Marci</h1>
					<a href="mailto:webermarton@gmail.com"
						>webermarton@gmail.com</a
					>
				</div>
				<Logo />
			</header>

			<section>
				<p class="mb-6">
					I am a software developer with great emphasis on performance
					and perfection.
				</p>

				<p class="mb-8">
					Recently, I've been working on an IoT sensor platform. We
					are hoping to release it really soon.
				</p>

				<p class="mb-4">
					For the past few years I had made drive throughs even more
					seamless at
					<a target="blank" href="https://www.rolletpay.com">Rollet</a
					>. I was an early bird at the company, so I had the
					opportunity to work on almost everything software related.
				</p>

				<p class="mb-8">
					My best work at
					<a target="blank" href="https://www.rolletpay.com">Rollet</a
					>
					was definitely the IoT system we designed and developed.
				</p>

				<p class="mb-8">
					Previously I was making an HR software system at Ulyssys.
				</p>

				<p>Things I like to work with:</p>
				<Skills />

				<p>
					You can find me on
					<a
						target="blank"
						href="https://www.linkedin.com/in/webermarton/">
						LinkedIn,
					</a>
					<a target="blank" href="https://github.com/webermarci"
						>GitHub</a
					>
					and you can get in touch via
					<a href="mailto:webermarton@gmail.com">email</a>.
				</p>
			</section>
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

	h1 {
		@apply text-2xl;
		@apply tracking-wider;
	}

	a {
		@apply text-green-500;
		@apply transition-colors;
		@apply duration-300;
	}

	a:hover {
		@apply text-green-300;
	}

	header {
		@apply flex;
		@apply items-center;
		@apply mb-8;
	}

	section {
		@apply mb-6;
	}
</style>
