<script>
  export let post;

	let dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
	let pusblishDate = new Date(post.meta.date).toLocaleDateString("gb-GB", dateOptions)
</script>
<a href={post.path}>
	<h2>
		{post.meta.title}
	</h2>
	<h4>{post.meta.subtitle}</h4>
	<div class="card-footer">
		<span class="cat">{pusblishDate}</span>
		<div class="categories">
			{#each post.meta.categories as category}
				<span class="cat">{category}</span>
			{/each}
		</div>
	</div>
</a>
<style lang="scss" scoped>
	.card-footer {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;

		.categories {
			.cat {
				font-size: .7rem;
			}
			.cat:not(:first-child) {
				margin-left: .3rem
			}
		}
	}
  		a {
			text-decoration: none;
			color: inherit;
			height: 100%;
			display: block;
			border: .5px solid $black;
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
				box-shadow: 0px 0px 0px 6px #333;
				transition: box-shadow 0.1s linear;
			}

		}
		
		h4 {
			font-weight: lighter;
		}

		span {
			font-size: .8rem;
		}
</style>