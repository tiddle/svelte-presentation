<script lang="ts">
	let count: number = $state(1);

	function increment(i = 1) {
		count += i;
	}

	function decrement(i = 1) {
		count -= i;
	}
</script>

<p class="text-base font-semibold leading-7 text-indigo-600"><a href="/">Back</a></p>
<p class="text-base font-semibold leading-7 text-indigo-600">Chapter 03</p>
<h1 class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
	Logic Blocks
</h1>

<div class="mt-2">
	<div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
		<p class="mb-3">The count is: {count}</p>
		<p class="mb-3">The double of count is: {count * 2}</p>
		{#if count == 3}
			<p>Count is {count}</p>
		{:else}
			<p>Count is NOT 3</p>
		{/if}

		<button
			class="mr-2 border p-3"
			onclick={() => {
				increment();
			}}>Increment</button
		>
		<button
			class="round-5 border p-3"
			onclick={() => {
				decrement();
			}}>Decrement</button
		>
	</div>
</div>
