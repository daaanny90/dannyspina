<!-- Header.svelte -->
<script>
	import MenuItem from './MenuItem.svelte'
</script>

<a class="logo" href="/">DS</a>
<div class="sidebar">
	<div class="menu">
		<MenuItem isSidebar={true} link="/blog" text="Blog" />
		<MenuItem isSidebar={true} link="/about" text="About" />
		<MenuItem isSidebar={true} link="/contact" text="Contact" />
	</div>
</div>

<style lang="scss" scoped>
	.logo {
		font-family: $font-rhyme;
		width: 5rem;
		text-align: center;
		font-size: 2rem;
		position: absolute;
		top: 1rem;
		margin: 0;
		color: black;
		font-weight: normal;
		text-decoration: none;
		z-index: 100;

		&:visited {
			color: inherit;
		}
	}

	.sidebar {
		position: fixed;
		font-family: $font-montserrat;
		font-weight: 700;
		top: 0;
		bottom: 0;
		left: 0;
		display: flex;
		width: 5rem;
		flex-direction: column;
		justify-content: space-between;

		@media screen and (max-width: $breakpoint-mobile) {
			display: none;
		}

		.menu {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 7rem 0 1rem 0;
			height: 100%;
		}
	}
</style>
