<script lang="ts">
	import ProjectHeader from '$lib/components/ProjectHeader.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { content: Content, title, publishedAt, summary, imgUrl } = data;
</script>

<div>
	<ProjectHeader {title} {publishedAt} />
	<Content />
</div>
