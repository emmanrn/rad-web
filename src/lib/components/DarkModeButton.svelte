<script>
	import { darkmode } from '$lib/stores/darkmode';
	import MoonIcon from './svg/MoonIcon.svelte';
	import SunIcon from './svg/SunIcon.svelte';

	function toggleDarkMode() {
		if ($darkmode) {
			$darkmode = false;
			darkmode.set(false);
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		} else {
			$darkmode = true;
			darkmode.set(true);
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		}
	}
</script>

<button on:click={toggleDarkMode} class="text-gold">
	{#if $darkmode}
		<div>
			<MoonIcon class="h-8 w-8 cursor-pointer" />
		</div>
	{:else}
		<div>
			<SunIcon class="h-8 w-8 cursor-pointer fill-current" />
		</div>
	{/if}
</button>
