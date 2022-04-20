<script lang="ts">
	import { page } from '$app/stores';

	export let link: string;
	export let text: string;
  export let isSidebar: boolean = false;
</script>

<p class:sidebar={isSidebar} class:active="{$page.url.pathname.includes(link)}"><a href="{link}">{text}</a></p>

<style lang="scss" scoped>
  .sidebar {
    transform: rotate(270deg);
  }

	.active {
		text-decoration: line-through;
	}

	a {
		text-decoration: none;
		font-size: 1.3rem;
		font-weight: $font-weight-normal;

		&:hover {
			text-decoration: line-through;
		}

		&:visited {
			color: inherit;
		}
	}
</style>
