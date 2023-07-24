<script lang="ts">
  import { sortedPosts, groupPostsByCategory } from "$lib/helpers/utils.js";
  import PostGroup from "$lib/components/PostGroup.svelte";

  export let data;

  const posts = groupPostsByCategory(data.posts);
</script>

<section>
  {#each Object.keys(posts) as cat}
    <PostGroup posts={sortedPosts(posts[cat])} category={cat}/>
  {/each}
</section>