<script lang="ts">
	import CheckIcon from './svg/CheckIcon.svelte';
	import CopyIcon from './svg/CopyIcon.svelte';

	let copyButton: HTMLButtonElement;
	let showCheckmark = false;

	function handleCopyClick() {
		const preTagSibling = copyButton.nextElementSibling as HTMLPreElement;

		navigator.clipboard.writeText(preTagSibling.innerText);

		showCheckmark = true;

		setTimeout(() => (showCheckmark = false), 1000);
	}
</script>

<button
	bind:this={copyButton}
	class={`absolute top-2 right-2 rounded-md p-1 shadow-md ${showCheckmark ? 'bg-green-600' : 'bg-surface hover:bg-hl-med'}`}
	on:click={handleCopyClick}
>
	{#if showCheckmark}
		<CheckIcon class="text-r-base-dawn h-6 w-6" />
	{:else}
		<CopyIcon class="text-hl-low-dawn h-6 w-6" />
	{/if}
</button>
