<script lang="ts">
  import type { Post } from "$lib/helpers/types";

  export let category: String;
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
      </li>
    {/each}
  </ul>
</article>

<style lang="scss" scoped>
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