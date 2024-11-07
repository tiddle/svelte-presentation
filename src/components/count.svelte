<script lang="ts">
	let { count } = $props();
</script>

<p class="mb-3">The count is: {count}</p>

<style>
	p {
		color: #fe57a1;
	}

  :global(p) {
      color: black;
  }
</style>
