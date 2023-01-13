<script context="module">
  export let category;
  export const load = async ({ params, fetch }) => {
    category = params.category
    const currentCategory = params.category
    const response = await fetch('/api/posts.json')
    const posts = await response.json()

    
    const matchingPosts = posts
    .filter(post => post.meta.categories.includes(currentCategory))
    
    return {
      props: {
        posts: matchingPosts,
        currentCategory: currentCategory
      }
    }
  }
</script>

<script>
 	import PageTitle from '$lib/components/PageTitle.svelte';
	import PostCard from '$lib/components/PostCard.svelte'
  export let posts;
</script>

{#if !posts.length}
  <div>No posts for this category</div>
{/if}

<PageTitle title={category} subtitle="" />
<ul class="blog-posts">
	{#each posts as post}
		<li>
			<PostCard post={post} />
		</li>
	{/each}
</ul>

<style lang="scss">
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
