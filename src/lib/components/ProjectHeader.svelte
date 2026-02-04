<script lang="ts">
	import { formatPublishedAt } from '$lib/utils/dates';

	export let title: string;
	export let publishedAt: string;
</script>

<header class="px-4 pb-12">
	<div>
		<h1 class=" mb-4 text-4xl font-extrabold">
			{title}
		</h1>
		<div class="inline-block border-t py-2 text-sm dark:border-gray-700">
			<span>Published: </span>
			<time class="font-light" datetime={publishedAt}>
				{formatPublishedAt(publishedAt)}
			</time>
		</div>
	</div>
</header>
