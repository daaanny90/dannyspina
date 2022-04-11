<script lang="ts">
	export let link: string;
	export let text: string;
  export let isSidebar: boolean = false;
</script>

<p class:sidebar={isSidebar}><a href="{link}">{text}</a></p>

<style lang="scss">
  .sidebar {
    transform: rotate(270deg);
  }

	a {
		text-decoration: none;
		color: $red;
		font-size: 2rem;
		font-weight: bold;

		&:hover {
			text-decoration: line-through;
		}
	}
</style>
