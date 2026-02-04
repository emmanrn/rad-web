<script lang="ts">
	export let href: string;
	export let target: '_self' | '_blank' = '_self';
</script>

<a
	class="text-hl-low hover:bg-base-dawn dark:text-overlay-dawn dark:hover:bg-hl-med rounded-lg"
	{href}
	{target}
>
	<slot />
</a>
