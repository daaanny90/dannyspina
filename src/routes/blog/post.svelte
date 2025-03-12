<script lang="ts">
  import PageTitle from "$lib/components/PageTitle.svelte";
  import BackArrow from "$lib/components/BackArrow.svelte";
  import AiIndicator from "$lib/components/AiIndicator.svelte";

  export let title;
  export let subtitle;
  export let date;
  export let categories;
  export let human;

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

<BackArrow page="blog" hideUnderHeader />

<PageTitle {title} {subtitle} />

<p class="date">{pusblishDate}</p>

{#if categories.length}
  <div class="footer">
    <aside class="categories">
      {#each categories as cat}
        <a class="cat" href="/blog/categories/{cat}">#{cat}</a>
      {/each}
    </aside>

    {#if human !== undefined}
      <AiIndicator humanLevel={human} />
    {/if}
  </div>
{/if}

<slot />

<style lang="scss" scoped>
  .categories {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 5rem;

    @media (max-width: 600px) {
      margin-bottom: 0;
    }
  }
  .cat {
    font-weight: lighter;
    text-decoration: none;
    font-size: 0.9rem;
    margin: 0 1rem 0 0;
  }
  .date {
    align-self: flex-start;
    color: var(--accent-color-inverted);
  }

  .footer {
    display: flex;
    justify-content: space-between;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
</style>
