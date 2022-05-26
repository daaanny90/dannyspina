<!-- _post.svelte -->
<script>
	import PageTitle from '$lib/components/PageTitle.svelte';

	export let title;
  export let subtitle;
	export let date;
	export let categories;

	let postCat = categories.length === 1 ? 'Category' : 'Categories';
  console.log(postCat)
  let cat = categories.map(category => `<a href="/blog/categories/${category}">${category}</a>`)
  console.log(cat)
	cat = cat.join(', ');
</script>

<PageTitle {title} {subtitle}/>

{#if categories.length}
<aside class="categories">
  <h3>{ postCat }: {@html cat }</h3>
</aside>
{/if}

<p class="date">{date}</p>

<slot />

<style scoped>
.date {
  margin-bottom: 5rem;
}
</style>