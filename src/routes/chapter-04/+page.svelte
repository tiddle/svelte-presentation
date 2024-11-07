<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';

	let visible = $state(false);
</script>

<p class="text-base font-semibold leading-7 text-indigo-600"><a href="/">Back</a></p>
<p class="text-base font-semibold leading-7 text-indigo-600">Chapter 04</p>
<h1 class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
	Forms
</h1>

<div class="mt-2">
	<div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
		<form method="POST" action="?/login" transition:fade>
      <p>Enter a value in username for a valid post</p>
			<div>
				<label for="username" class="block text-sm font-medium leading-6 text-gray-900"
					>Username</label
				>
				<input
					type="text"
					name="username"
					id="username"
					class="border-2 border-solid border-black"
				/>
			</div>
			<div>
				<label for="username" class="block text-sm font-medium leading-6 text-gray-900"
					>Password</label
				>
				<input
					type="text"
					name="password"
					id="username"
					class="border-2 border-solid border-black"
				/>
			</div>
			<div>
				<input type="checkbox" bind:checked={visible} /><label class="py-1">Remember?</label>
			</div>

			<button class="mt-8">Log in</button>

			{#if visible}
				<p transition:slide>Valid <br/> Some other content</p>
			{/if}
		</form>
	</div>
</div>
