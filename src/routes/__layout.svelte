<script context="module">
	export const load = ({ url }) => {
		const currentRoute = url.pathname;

		return {
			props: {
				currentRoute
			}
		};
	};
</script>

<script charset="utf-8">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import DarkModeSwitch from '$lib/components/DarkModeSwitch.svelte';
	import '$lib/styles/style.scss';
	import { fade } from 'svelte/transition';

	const excludedRoutesFromLayout = [
		'/notion/weekinfo'
	]

	export let currentRoute;
</script>

{#if !excludedRoutesFromLayout.includes(currentRoute)}
	<div class="bg-container light-mode" />
	<Sidebar />
	<MobileMenu />
	<!-- TODO: must be implemented correctly, now is still too buggy -> <DarkModeSwitch /> -->

	{#key currentRoute}
		<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
			<slot />
		</main>
	{/key}
{:else}
		<slot />
{/if}

<style lang="scss">
	.bg-container {
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: $white;
    background-color: $black;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23ffffff' fill-opacity='0.12'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    transition: all 0.5s ease-in-out;

    &.light-mode {
      color: $black;
      background-color: $white;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23333333' fill-opacity='0.07'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
      transition: all 0.5s ease-in-out;
    }
	}
</style>
