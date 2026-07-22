<script lang="ts">
  /* Fallback mdsvex layout: markdown that lives outside /blog and /books (the
     weekly archive) still needs its own title and description, but no chrome. */
  import Seo from "$lib/components/Seo.svelte";

  export let title;
  export let subtitle = "";
  export let date = "";
  export let categories = [];
</script>

<Seo
  {title}
  description={subtitle || `${title} — from the archive.`}
  type="article"
  publishedAt={date}
  tags={categories}
/>

<slot />
