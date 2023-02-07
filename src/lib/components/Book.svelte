<script>
  import BookCart from "$lib/components/BookCart.svelte";

  export let title;
  export let author;
  export let amazonLink;
  export let path;
</script>

<li>
  <a
    href="{path}"
    >{title}</a
  >
  by {author}.
  <BookCart link={amazonLink} />
</li>
