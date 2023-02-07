<script>
  import BookCart from "$lib/components/BookCart.svelte";

  export let title;
  export let author;
  export let amazonLink;
</script>

<li>
  <a
    href="/books/{title.toLowerCase().replaceAll(' ', '_').replaceAll(',', '')}"
    >{title}</a
  >
  by {author}.
  <BookCart link={amazonLink} />
</li>
