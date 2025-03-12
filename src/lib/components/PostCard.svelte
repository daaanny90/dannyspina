<script lang="ts">
  export let path: string;
  export let title:string;
  export let subtitle:string;
  export let date:string;
  export let categories:string[];
  export let info = '';

  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  } as Intl.DateTimeFormatOptions;
  
  let pusblishDate = new Date(date).toLocaleDateString(
    "gb-GB",
    dateOptions
  );
</script>

<a class="post-card" href={path}>
  <span>{info}</span>
  <h2>
    {title}
  </h2>
  <p>{subtitle}</p>
  <div class="card-footer">
    <span class="cat date">{pusblishDate}</span>
    <div class="categories">
      {#each categories as category}
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
        color: var(--accent-color);
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
    border: 2px solid var(--accent-color-inverted);
    padding: 1rem;

    &:visited,
    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }

  h4 {
    font-weight: lighter;
  }

  span {
    font-size: 0.8rem;
  }
</style>
