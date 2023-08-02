<script lang="ts">
  import type Post from "./post.svelte";
  import PageTitle from "$lib/components/PageTitle.svelte";
  import { sortedPosts, groupPostsByCategory } from "$lib/helpers/utils.js";
  import PostGroup from "$lib/components/PostGroup.svelte";

  export let data;

  const posts = groupPostsByCategory(data.posts);
  const lastPost: Post = data.posts[0]
</script>

<PageTitle title="Blog" />

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