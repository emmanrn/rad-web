<script lang="ts">
	import NotesHeader from '$lib/components/NotesHeader.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { content: Content, title, publishedAt } = data;
</script>

<div>
	<NotesHeader {title} {publishedAt} />
	<Content />
</div>
