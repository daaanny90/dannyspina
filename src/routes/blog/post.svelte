<script>
  import PageTitle from "$lib/components/PageTitle.svelte";
  import BackArrow from "$lib/components/BackArrow.svelte";

  export let title;
  export let subtitle;
  export let date;
  export let categories;

  export let data;
  export let form;

  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let pusblishDate = new Date(date).toLocaleDateString("gb-GB", dateOptions);
</script>

<BackArrow page="blog" />

<PageTitle {title} {subtitle} />

<p class="date">{pusblishDate}</p>

{#if categories.length}
  <aside class="categories">
    {#each categories as cat}
      <a class="cat" href="/blog/categories/${cat}">#{cat}</a>
    {/each}
  </aside>
{/if}

<slot />

<style scoped>
  .categories {
    width: 100%;
    display: flex;

    margin-bottom: 5rem;
  }
  .cat {
    font-weight: lighter;
    text-decoration: none;
    font-size: .9rem;
    margin: 0 1rem 0 0;
  }
  .date {
    align-self: flex-start;
  }
</style>
