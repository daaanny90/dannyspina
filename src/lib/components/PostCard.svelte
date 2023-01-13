<script>
  export let post;
</script>
<a href={post.path}>
	<h2>
		{post.meta.title}
	</h2>
	<h4>{post.meta.subtitle}</h4>
	Published {post.meta.date}
</a>
<style lang="scss">
  		a {
			text-decoration: none;
			color: inherit;
			height: 100%;
			display: block;
			border: 1px solid $black;
			padding: 1rem;
			box-shadow: 2px 1px 30px -1px transparent;
			transition: box-shadow 0.1s linear;
			border-radius: 2px;

			&:visited,
			&:hover {
				text-decoration: none;
				color: inherit;
			}

			&:hover {
				box-shadow: 1px 1px 21px -4px #333;
				transition: box-shadow 0.1s linear;
			}
		}

</style>