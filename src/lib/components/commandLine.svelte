<script lang="ts">
	import { goto } from '$app/navigation';
	let inputValue: string;
	let commandError: string;
	const focus = (node: any) => node.focus();
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
			case 'help':
				goto('/commands/help');
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
		<div class="whitespace-nowrap">[visitor@website ~]$</div>
		<input
			bind:value={inputValue}
			on:change={handleInputChange}
			use:focus
			class="grow bg-transparent border-transparent focus:outline-none font-mono text-shadow ml-2"
		/>
	</div>
</div>
