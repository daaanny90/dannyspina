<!-- _post.svelte -->
<script>
	import PageTitle from '$lib/components/PageTitle.svelte';

	export let title;
  export let subtitle;
	export let date;
	export let categories;

	let postCat = categories.length === 1 ? 'Category' : 'Categories';
  let cat = categories.map(category => `<a class="cat" href="/blog/categories/${category}">${category}</a>`)
	cat = cat.join(' ');
</script>

<PageTitle {title} {subtitle}/>

{#if categories.length}
<aside class="categories">
  <h3>{ postCat }: {@html cat }</h3>
</aside>
{/if}

<p class="date">{date}</p>

<slot />

<style>
.date {
  margin-bottom: 5rem;
}
</style>