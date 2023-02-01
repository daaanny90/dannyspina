<!-- Header.svelte -->
<script>
	import MenuItem from './MenuItem.svelte';
</script>

<a class="logo" href="/">DS</a>
<div class="sidebar">
	<div class="menu">
		<MenuItem isSidebar={true} link="/blog" text="Blog" />
		<MenuItem isSidebar={true} link="/books" text="Books" />
		<MenuItem isSidebar={true} link="/about" text="About" />
		<MenuItem isSidebar={true} link="/contact" text="Contact" />
	</div>
</div>

<style lang="scss" scoped>
	.logo {
		font-family: $font-sans-serif;
		width: 5rem;
		text-align: center;
		font-size: 2rem;
		position: fixed;
		top: 1rem;
		margin: 0;
		color: black;
		font-weight: normal;
		text-decoration: none;
		z-index: 100;

		@media screen and (max-width: $breakpoint-mobile) {
			position: absolute;
			top: 1.5rem;
		}

		&:visited {
			color: inherit;
		}
	}

	.sidebar {
		position: fixed;
		font-family: $font-sans-serif;
		font-weight: 200;
		top: 0;
		bottom: 0;
		left: 0;
		display: flex;
		width: 5rem;
		flex-direction: column;
		justify-content: space-around;

		@media screen and (max-width: $breakpoint-mobile), 
					 screen and (max-height: 530px) {
			display: none;
		}

		.menu {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			padding: 5rem 0 5rem 0;
			height: 100%;
		}
	}
</style>
