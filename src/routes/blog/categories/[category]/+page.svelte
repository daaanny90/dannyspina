<script>
  import PageTitle from "$lib/components/PageTitle.svelte";
  import PostCard from "$lib/components/PostCard.svelte";
  export let data;
</script>

{#if !data.posts.length}
  <div>No posts for this category</div>
{/if}

<PageTitle title={data.currentCategory} subtitle="" />
<ul class="blog-posts">
  {#each data.posts as post}
    <li>
      <PostCard {post} />
    </li>
  {/each}
</ul>

<style lang="scss">
  .blog-posts {
    list-style-type: none;
    padding: 0;
    margin-top: 3rem;

    li {
      margin-bottom: 3rem;
    }

    // &.dark-mode {
    //   li {
    //     a {
    //       border: 1px solid #eee;

    //       &:hover {
    //         border: 2px solid #eee;
    //       }
    //     }
    //   }
    // }
  }
</style>
