<script lang="ts">
  import type Post from "./post.svelte";
  import { sortedPosts, groupPostsByCategory } from "$lib/helpers/utils.js";
  import PostGroup from "$lib/components/PostGroup.svelte";
  import Callout from "$lib/components/Callout.svelte";

  export let data;

  const posts = groupPostsByCategory(data.posts);
  const lastPost: Post = data.posts[0]
</script>

<section>
  <Callout title="Last post">
    <a href="{lastPost.path}">{lastPost.meta.title}</a>
  </Callout>
</section>

<section id="categories">
  {#each Object.keys(posts) as cat}
    <PostGroup posts={sortedPosts(posts[cat])} category={cat}/>
  {/each}
</section>

<style>
#categories {
  margin-top: 2rem;
}
</style>