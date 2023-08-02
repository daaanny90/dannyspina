<script lang="ts">
  import DarkModeSwitch from "./DarkModeSwitch.svelte";
  import BackArrow from "./BackArrow.svelte";
  import Burger from "./Burger.svelte";
  import Logo from "./Logo.svelte";
  import { isArrowUnderHeader, backArrowPage } from "../../store";

  // TODO: move the search feature to a new component
  // TODO: add button to navbar to toggle search overlay (store)
  // TODO: add animations to serach results as they appear
  // TODO: add close button
  // TODO: style input
  // TODO: perform fetch only once when search is toggled, not on input. The json result does not change, so must be fetched only once when needed.
  let currentPage;
  let show;
  let search: HTMLInputElement;
  let searchInput = "";
  let searchResults = []
  let postSearchResult = []
  let bookSearchResult = []

  backArrowPage.subscribe(page => {
    currentPage = page
  })

  isArrowUnderHeader.subscribe(status => {
    show = status
  })

  const performSearch = (e: InputEvent) => {
    searchInput = e.target.value.toLowerCase()

    if (!searchInput) {
      postSearchResult = []
      bookSearchResult = []
      return;
    }

    fetch('/api/posts.json').then((res) => res.json()).then((posts) => {
      postSearchResult = posts.filter((post) => post.meta.title.toLowerCase().includes(searchInput))
    })

    fetch('/api/books.json').then((res) => res.json()).then((books) => {
      bookSearchResult = books.filter((book) => {
        if (book.meta.metadata.title.toLowerCase().includes(searchInput) || book.meta.metadata.author.toLowerCase().includes(searchInput)) {
          return book
        }
      })
    })

    console.log({postSearchResult, bookSearchResult})

    searchResults.concat(postSearchResult, bookSearchResult)

    console.log(searchResults)
  }
</script>

<div class="search-results">
  <input bind:this={search} on:input={performSearch} type="search" placeholder="Search something..." />
  {#if postSearchResult.length > 0}
    <h2>Blog</h2>
    <ul>
      {#each postSearchResult as post}
        <li><a href="{post.path}" class="link">{post.meta.title}</a></li>
      {/each}
    </ul>
  {/if}

  {#if bookSearchResult.length > 0}
    <h2>Books</h2>
    <ul>
      {#each bookSearchResult as book}
        <li><a href="{book.path}" class="link">{book.meta.metadata.title}</a></li>
      {/each}
    </ul>
  {/if}

  {#if searchInput && !bookSearchResult.length && !postSearchResult.length}
    Nothing found :/
  {/if}
</div>

<nav>
  <Logo />
  <div class="backArrow" class:show>
    <BackArrow page={currentPage} />
  </div>
  <div class="buttonsContainer">
    <DarkModeSwitch />
    <Burger />
  </div>
</nav>

<style lang="scss" scoped>
  .search-results {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 0;
    left: 0;
    background-color: hsla(0, 0%, 20%, 0.5);
    width: 100dvw;
    height: 100dvh;
    z-index: 8000;
  }

  nav {
    z-index: 955;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    position: fixed;
    top: 0;
    width: 100%;
    backdrop-filter: blur(7px);
  }

  .buttonsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: $breakpoint-mobile) {
      padding-right: 6px;
    }
  }

  .backArrow {
    opacity: 0;
    flex-grow: 1;
    max-width: 720px;
    transition: opacity .1s ease-in-out;
    margin: 0 auto;

    &.show {
      opacity: 1;
   transition: opacity .1s ease-in-out;
    }
  }
</style>
