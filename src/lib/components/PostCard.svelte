<script lang="ts">
  import type { Post } from "$lib/helpers/types";

  export let post: Post;

  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  } as Intl.DateTimeFormatOptions;
  
  let pusblishDate = new Date(post.meta.date).toLocaleDateString(
    "gb-GB",
    dateOptions
  );
</script>

<a class="post-card" href={post.path}>
  <h2>
    {post.meta.title}
  </h2>
  <p>{post.meta.subtitle}</p>
  <div class="card-footer">
    <span class="cat">{pusblishDate}</span>
    <div class="categories">
      {#each post.meta.categories as category}
        <span class="cat">#{category}</span>
      {/each}
    </div>
  </div>
</a>

<style lang="scss" scoped>
  .card-footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .categories {
      .cat {
        font-size: 0.7rem;
      }
      .cat:not(:first-child) {
        margin-left: 0.3rem;
      }
    }
  }
  a {
    @include unstyledLink;

    text-decoration: none;
    color: inherit;
    height: 100%;
    display: block;
    border: 0.5px solid var(--text-color);
    padding: 1rem;
    box-shadow: 2px 1px 30px -1px transparent;
    transition: box-shadow 0.1s linear;

    &:visited,
    &:hover {
      text-decoration: none;
      color: inherit;
    }

    &:hover {
      box-shadow: 0px 0px 0px 6px var(--text-color);
      transition: box-shadow 0.1s linear;
    }
  }

  h4 {
    font-weight: lighter;
  }

  span {
    font-size: 0.8rem;
  }
</style>
