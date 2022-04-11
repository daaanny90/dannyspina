<script lang="ts">
	import MenuItem from './MenuItem.svelte';
	import Burger from './Burger.svelte';

	function handleMessage(event) {
		console.log(event.detail);
		active = !active;
	}

	let active: boolean = false;
</script>

<Burger on:menuOpen={handleMessage} />
<div class="mobile-menu" class:active>
	<MenuItem link="/blog" text="Blog" />
	<MenuItem link="/about" text="About" />
	<MenuItem link="/contact" text="Contact" />
</div>

<style lang="scss" scoped>
	div {
		z-index: 250;
	}
	.mobile-menu {
		position: absolute;
		top: 0;
		right: -100vw;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		z-index: -200;
		background: $white;
		transition: right 0.3s ease-out;

		&.active {
			right: 0;
			z-index: 200;
			transition: right 0.3s ease-in;
		}
	}
</style>
