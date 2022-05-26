<script lang="ts">
	import MenuItem from './MenuItem.svelte';
	import Burger from './Burger.svelte';
	import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
	let active: boolean = false;

	function handleMessage(event): void {
		active = !active;
	}

	function closeMenu(): void {
		active = false;
    dispatch('menuOpen', false);
  }

</script>

<Burger on:menuOpen={handleMessage} />
<div class="mobile-menu light-mode" class:active>
	<MenuItem link="/blog" text="Blog" on:click={closeMenu}/>
	<MenuItem link="/about" text="About" on:click={closeMenu}/>
	<MenuItem link="/contact" text="Contact" on:click={closeMenu}/>
</div>

<style lang="scss" scoped>
	div {
		z-index: 250;
	}
	.mobile-menu {
		position: fixed;
		top: 0;
		right: -100vw;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		z-index: -200;
		background: $black;
		transition: all 0.3s ease-out;

		&.light-mode {
			background: $white;
		}

		&.active {
			right: 0;
			z-index: 200;
			transition: all 0.3s ease-in;

			@media screen and (min-width: $breakpoint-mobile) {
				right: -100vw;
			}
		}
	}
</style>
