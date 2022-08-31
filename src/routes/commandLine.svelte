<script lang="ts">
	import { goto } from '$app/navigation';
	import Error from './+error.svelte';
	let inputValue: string;
	let commandError: string;
	const handleInputChange = async () => {
		const args = inputValue.split(' ');
		switch (args[0]) {
			case 'cd':
				try {
					await goto(`/${args[1] || ''}`);
				} catch (err) {
					commandError = err as string;
				}
				break;
			default:
				goto(inputValue);
				break;
		}
		inputValue = '';
	};
</script>

<div class="m-8">
	{commandError || ''}
	<div class="flex">
		[visitor@website ~]$
		<input
			bind:value={inputValue}
			on:change={handleInputChange}
			class="flex-grow bg-transparent border-transparent focus:outline-none font-mono text-shadow ml-2"
		/>
	</div>
</div>
