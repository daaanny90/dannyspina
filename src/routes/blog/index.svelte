<script context="module">
	export const load = async ({ fetch }) => {
		const posts = await fetch('/api/posts.json');
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script>
	import PageTitle from '$lib/components/PageTitle.svelte';

	export let posts;

	console.log(posts);
</script>

<PageTitle title="Blog" subtitle="" />
<ul class="blog-posts">
	{#each posts as post}
		<li>
			<a href={post.path}>
				<h2>
					{post.meta.title}
				</h2>
				<h4>{post.meta.subtitle}</h4>
				Published {post.meta.date}
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	.blog-posts {

		a {
			text-decoration: none;
			color: inherit;
			height: 100%;
			display: block;
			border: 1px solid $black;
			padding: 2rem;
	
			&:visited,
			&:hover {
				text-decoration: none;
				color: inherit;
			}
	
			&:hover {
				border: 2px solid $black;
			}
		}
	}

	.blog-posts {
		list-style-type: none;
		padding: 0;
		margin: 0;

		li {
			margin-bottom: 3rem;
		}

		&.dark-mode {
			li {
				a {
					border: 1px solid $white;

					&:hover {
						border: 2px solid $white;
					}
				}
			}
		}
	}
</style>
