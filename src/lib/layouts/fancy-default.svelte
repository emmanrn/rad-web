<script lang="ts">
	import CopyCodeInjector from '$lib/components/CopyCodeInjector.svelte';
	import './github-markdown.css';
	import '../utils/prism-rose-pine.css';
</script>

<CopyCodeInjector>
	<div class="prose h-full w-full max-w-none px-4 dark:prose-invert">
		<slot />
	</div>
</CopyCodeInjector>
