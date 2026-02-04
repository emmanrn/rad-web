<script lang="ts">
	import { mount, onMount } from 'svelte';
	import CopyCodeButton from './CopyCodeButton.svelte';

	onMount(() => {
		const preTags: HTMLCollectionOf<HTMLPreElement> = document.getElementsByTagName('pre');

		for (let preTag of preTags) {
			const classList = Array.from(preTag.classList);

			const isCodeBlock = classList.some((name) => name.startsWith('language-'));

			if (isCodeBlock) {
				const preTagParent = preTag.parentNode;

				const newCodeBlockWrapper = document.createElement('div');
				newCodeBlockWrapper.className = 'relative';
				mount(CopyCodeButton, {
					target: newCodeBlockWrapper,
					intro: false
				});

				if (preTagParent) {
					preTagParent.replaceChild(newCodeBlockWrapper, preTag);
					newCodeBlockWrapper.appendChild(preTag);
				}
			}
		}
	});
</script>

<slot />
