<script lang="ts">
	import { darkmode } from '$lib/stores/darkmode';
	import { browser } from '$app/environment';
	if (browser) {
		$darkmode = window.prefersDarkmode;
	}
</script>

<svelte:head>
	<script>
		window.prefersDarkmode = false;

		if (
			localStorage.theme === 'dark' ||
			(!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			window.prefersDarkmode = true;
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>
<slot />
