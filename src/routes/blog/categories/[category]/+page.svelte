<script lang="ts">
  import PageTitle from "$lib/components/PageTitle.svelte";
  import PostCard from "$lib/components/PostCard.svelte";
  import type { BlogData } from "$lib/helpers/types.js";

  export let data: BlogData;
</script>

<div class="wrap">
  <p class="breadcrumb">
    <a href="/blog">02 WRITING</a> /
    <span class="current">[{data.currentCategory.toLowerCase()}]</span>
  </p>

  {#if !data.posts.length}
    <div>No posts for this category</div>
  {/if}

  <PageTitle title={data.currentCategory} />
  <ul class="blog-posts">
    {#each data.posts as post}
      <li>
        <PostCard
          title={post.meta.title}
          path={post.path}
          subtitle={post.meta.subtitle}
          categories={post.meta.categories}
          date={post.meta.date}
        />
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .wrap {
    max-width: 760px;
    margin: 0 auto;
    padding: 48px 20px 64px 20px;

    @media screen and (max-width: $breakpoint-mobile) {
      padding: 32px 20px 48px 20px;
    }
  }

  .breadcrumb {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    letter-spacing: var(--ds-tracking-label);
    color: var(--ds-color-ink-muted);
    margin: 0 0 8px 0;

    a {
      border-bottom: none;
    }

    .current {
      color: var(--ds-color-brass);
    }
  }

  .blog-posts {
    list-style-type: none;
    padding: 0;
    margin-top: 2rem;

    li {
      margin-bottom: 3rem;
    }
  }
</style>
