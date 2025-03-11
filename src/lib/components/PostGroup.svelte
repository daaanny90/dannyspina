<script lang="ts">
  import type { Post } from "$lib/helpers/types";
  import Badge from "./Badge.svelte";

  export let category: string;
  export let posts: Post[];
</script>
<article>
  <header>
    <h2>{category}</h2>
    {#if posts.length > 4}
      <a href="/blog/categories/{category}"
        >Read all ({posts.length})</a
      >
    {/if}
  </header>
  <ul>
    {#each posts.slice(0, 4) as post}
      <li>
        <a href={post.path}>{post.meta.title}</a>
        {#if post.latest} <Badge text="New" outline/> {/if}
      </li>
    {/each}
  </ul>
</article>

<style lang="scss" scoped>
  .badge {
    background-color: var(--accent-color);
    color: var(--background-color);
    padding: .1rem .5rem;
    margin: 0 .5rem;
    font-size: .8rem;
    font-family: "JetBrains Mono", sans-serif;
  }

  article {
    margin-bottom: 3rem;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        margin: 0;
      }
    }

    ul {
      border: 2px solid var(--text-color);

      li {
        margin-bottom: 0.5rem;
        padding: 0.5rem;

        &::marker {
          color: var(--accent-color);
        }
      }
    }
  }
</style>
