<!-- _post.svelte -->
<script>
  import PageTitle from "$lib/components/PageTitle.svelte";

  export let title;
  export let subtitle;
  export let date;
  export let categories;

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

  <a class="back-arrow-container" href="/blog">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="back-arrow"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
      />
    </svg> <span>Back to blog</span>
  </a> 

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

	.back-arrow-container {
		color: #333;
		display: flex;
		align-items: center;
		margin-bottom: 2rem;

	}
  .back-arrow {
    max-width: 2rem;
    margin-right: .5rem;
  }

</style>
