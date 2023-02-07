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
  let cat = categories.map(
    (category) =>
      `<a class="cat" href="/blog/categories/${category}">${category}</a>`
  );
  cat = cat.join(" ");
</script>

<BackArrow page="blog" />

<PageTitle {title} {subtitle} />

{#if categories.length}
  <aside class="categories">
    <h3>{@html cat}</h3>
  </aside>
{/if}

<p class="date">{pusblishDate}</p>

<slot />

<style lang="scss">
  .date {
    margin-bottom: 5rem;
  }
</style>
