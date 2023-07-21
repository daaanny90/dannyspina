<script lang="ts">
  import PostCard from "$lib/components/PostCard.svelte";
  import { onMount, tick } from "svelte";
  import { outerHeight } from "$lib/helpers/utils.js";
  import Loader from "$lib/components/Loader.svelte";
  import Button from "$lib/components/Button.svelte";

  export let data;

  let postsNumber: number;
  let loading = false;

  const loadPosts = () => {
    loading = true;
    setTimeout(() => {
      postsNumber = postsNumber * 2;
      loading = false;
    }, 1000);
  };
  
  onMount(() => {
      const containerHeigth = window.innerHeight - 128; // remove margin top of the page
      const postCardHeight = outerHeight(".post-card");
      postsNumber = Math.round(containerHeigth / postCardHeight);
    });
</script>

<ul class="blog-posts">
  {#each data.posts.slice(0, postsNumber) as post}
    <li>
      <article>
        <PostCard {post} />
      </article>
    </li>
  {/each}
</ul>

<section>
  {#if loading}
    <Loader />
  {:else if postsNumber < data.posts.length}
    <Button text="Load more" clickFunc={loadPosts} position="centered" styling="full-width" />
  {/if}
</section>

<style lang="scss">
  .blog-posts {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 3rem;
    }
  }
</style>
