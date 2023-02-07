<script context="module">
  export const load = async ({ fetch }) => {
    const posts = await fetch("/api/posts.json");
    const allPosts = await posts.json();

    return {
      props: {
        posts: allPosts,
      },
    };
  };
</script>

<script>
  import PostCard from "$lib/components/PostCard.svelte";

  export let posts;
</script>

<ul class="blog-posts">
  {#each posts as post}
    <li>
      <PostCard {post} />
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
