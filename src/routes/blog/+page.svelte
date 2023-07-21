<script lang="ts">
  import PostCard from "$lib/components/PostCard.svelte";
  import { onMount, tick } from "svelte";
  import { outerHeight } from "$lib/helpers/utils.js";
  import Loader from "$lib/components/Loader.svelte";

  export let data;

  let postsNumber: number;
  let loading = false;

  const infiniteScroll = () => {
    if (postsNumber >= data.posts.length) {
      loading = false;
      return;
    }

    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;
      
      if (window.scrollY >= scrollableHeight) {
        loading = true
        setTimeout(() => {
          postsNumber = postsNumber * 2;
          loading = false
        }, 1000);
      }
  };

  onMount(async () => {
    await tick().then(() => {
      const containerHeigth = window.innerHeight - 128 // remove margint top of the page
      const postCardHeight = outerHeight('.post-card')
      postsNumber = Math.round(containerHeigth / postCardHeight)
    })
  })
</script>

<svelte:window on:scroll={infiniteScroll} />
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
  {#if loading}<Loader />{/if}
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
