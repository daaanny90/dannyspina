<script>
	export let title;
	export let subtitle;
</script>

<div class="title-center">
	<h1 class="page-title">{title}</h1>
	{#if subtitle}
		<p>{subtitle}</p>
	{/if}
</div>

<style lang="scss">
	.title-center {
		.page-title {
			font-family: $font-sans-serif;
			font-size: 5rem;
			margin: 0 0 1rem 0;
		}
		p {
			font-size: 3rem;
			font-weight: lighter;
			margin: 0;
		}
	}
</style>
