<script lang="ts">
  import BookCart from "$lib/components/BookCart.svelte";

  export let title: string;
  export let author: string;
  export let amazonLink: string;
  export let path: string;
</script>

<li>
  <a href={path}>{title}</a>
  by {author}.
  {#if amazonLink}<BookCart link={amazonLink} />{/if}
</li>
