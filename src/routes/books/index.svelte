<script context="module">
  export const load = async ({ fetch }) => {
    const books = await fetch("/api/books.json");
    const allBooks = await books.json();

    return {
      props: {
        books: allBooks,
      },
    };
  };
</script>

<script lang="ts">
  import PageTitle from "$lib/components/PageTitle.svelte";
  import BookCategory from "$lib/components/BookCategory.svelte";
  import BookList from "$lib/components/BookList.svelte";
  import Book from "$lib/components/Book.svelte";

  import Rocket from "$lib/icons/Rocket.svelte";
  import Power from "$lib/icons/Power.svelte";
  import Art from "$lib/icons/Art.svelte";
  import Technology from "$lib/icons/Technology.svelte";
  import OpenBook from "$lib/icons/OpenBook.svelte";

  export let books;

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
  subtitle="My Reading Adventure: A Collection of Books I've Read and Currently Reading, with Quick Amazon Buy Links"
/>

<div class="container-reading">
  <h2>
    <OpenBook style="max-width: 2rem; margin-right: .5rem;" />
    I'm reading
  </h2>
  <strong>Wim Hof method</strong> by Wim Hof. <br />
  <strong>The Art of Taking Action</strong> by Gregg Krech. <br />
</div>

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
      />
    {/each}
  </BookList>
{/each}

<style lang="scss" scoped>
  .container-reading {
    background-color: lightgray;
    padding: 1rem 0 2rem 1rem;
    margin-top: 2rem;
  }
  h2 {
    display: flex;
    align-items: center;
  }
</style>
