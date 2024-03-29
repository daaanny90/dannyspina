<script lang="ts">
  import PageTitle from "$lib/components/PageTitle.svelte";
  import BookCategory from "$lib/components/BookCategory.svelte";
  import BookList from "$lib/components/BookList.svelte";
  import Book from "$lib/components/Book.svelte";
  import Callout from "$lib/components/Callout.svelte";

  import Rocket from "$lib/icons/Rocket.svelte";
  import Power from "$lib/icons/Power.svelte";
  import Art from "$lib/icons/Art.svelte";
  import Technology from "$lib/icons/Technology.svelte";

  export let data;
  let { books } = data;

  const categories = [];

  const booksCategorized = books.reduce(function (r, book) {
    r[book.meta.metadata.category] = r[book.meta.metadata.category] || [];
    r[book.meta.metadata.category].push(book);
    return r;
  }, Object.create(null));

  for (let i = 0; i < Object.entries(booksCategorized).length; i++) {
    categories.push(Object.entries(booksCategorized)[i]);
  }

  const icons = {
    Productivity: Rocket,
    "Personal Growth": Power,
    Technology: Technology,
    "Arts & Entertainment": Art,
  };
</script>

<PageTitle
  title="Books I've Read & Currently Reading"
  subtitle="My Reading Adventure: A Collection of Books I've Read and Currently Reading"
/>

<Callout title="I'm reading">
  <strong>A philosophy of a software design</strong> by John Ousterhout <br />
  <strong>Dune</strong> by Frank Herbert <br />
</Callout>

<h2>Categories</h2>
{#each categories as category}
  <ul>
    <li>
      <a href="#{category[0].toLowerCase().replaceAll(' ', '-')}"
        >{category[0]}</a
      >
    </li>
  </ul>
{/each}

{#each categories as category}
  <BookCategory category={category[0]}>
    <svelte:component this={icons[category[0]]} maxWidth="2rem" />
  </BookCategory>

  <BookList>
    {#each category[1] as book}
      <Book
        title={book.meta.metadata.title}
        author={book.meta.metadata.author}
        amazonLink={book.meta.metadata.amazonLink}
        path={book.path}
      />
    {/each}
  </BookList>
{/each}

<style lang="scss" scoped>
  .container-reading {
    background-color: var(--text-color);
    color: var(--background-color);
    padding: 1rem 0 2rem 1rem;
    margin-top: 2rem;
  }
  h2 {
    display: flex;
    align-items: center;
  }
</style>
