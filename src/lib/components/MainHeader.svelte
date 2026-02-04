<script>
	import DarkModeButton from './DarkModeButton.svelte';
	import IconLink from './IconLink.svelte';
	import GithubIcon from './svg/GithubIcon.svelte';
	import HamburgerIcon from './svg/HamburgerIcon.svelte';

	let menuOpen = false;
</script>

<div class="bg-r-base-dawn dark:bg-r-base fixed z-50 h-12 w-full">
	<button
		class="prose cursor-pointer pt-4 pl-4 font-bold md:hidden dark:prose-invert"
		on:click={() => (menuOpen = !menuOpen)}
		id="menuToggle"
	>
		<HamburgerIcon class="text-r-base dark:text-r-base-dawn h-6 w-6" />
	</button>
</div>
{#if menuOpen}
	<aside
		class="bg-r-base-dawn dark:bg-r-base fixed top-12 left-0 z-40 h-screen w-full overflow-y-auto md:hidden"
	>
		<ul class="space-y-2 px-6 py-4">
			<li class="flex items-center gap-4">
				<IconLink href="https://github.com/emmanrn" target="_blank">
					<GithubIcon class="h-6 w-6 fill-current" />
				</IconLink>
				<DarkModeButton />
			</li>

			<li>
				<a class="prose dark:prose-invert" href="/" on:click={() => (menuOpen = false)}>Radd</a>
			</li>
			<li>
				<a class="prose dark:prose-invert" href="/projects" on:click={() => (menuOpen = false)}
					>projects</a
				>
			</li>
			<li>
				<a class="prose dark:prose-invert" href="/my-notes" on:click={() => (menuOpen = false)}
					>me notes</a
				>
			</li>
		</ul>
	</aside>
{/if}

<aside
	class="sticky top-0 hidden h-screen w-50 shrink-0 overflow-y-auto bg-transparent py-[70px] pr-4 pl-8 text-end md:block
  "
	id="menu"
>
	<ul class="w-full">
		<li class="flex justify-end gap-5 pt-5 pb-10">
			<IconLink href="https://github.com/emmanrn" target="_blank">
				<GithubIcon class="h-8 w-8 fill-current" />
			</IconLink>
			<DarkModeButton />
		</li>
		<li>
			<a class="hover:text-love dark:hover:text-r-rose-moon prose dark:prose-invert" href="/">
				Radd
			</a>
		</li>
		<li></li>
		<li>
			<a
				class="hover:text-love dark:hover:text-r-rose-moon prose dark:prose-invert"
				href="/projects">projects</a
			>
		</li>
		<li>
			<a
				class="hover:text-love dark:hover:text-r-rose-moon prose dark:prose-invert"
				href="/my-notes">me notes</a
			>
		</li>
	</ul>
</aside>
