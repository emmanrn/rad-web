<script lang="ts">
	import MainHeader from '$lib/components/MainHeader.svelte';
	import ThemeInitializer from '$lib/components/ThemeInitializer.svelte';
	import '../app.css';
</script>

<ThemeInitializer>
	<div class="mx-auto flex max-w-7xl gap-2">
		<MainHeader />
		<main class=" prose max-w-none grow overflow-x-auto pt-22 pb-8 dark:prose-invert">
			<slot />
		</main>
	</div>
</ThemeInitializer>
