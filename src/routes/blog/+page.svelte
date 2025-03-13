<script lang="ts">
import PageTitle from "$lib/components/PageTitle.svelte";
import { sortedPosts, groupPostsByCategory } from "$lib/helpers/utils.js";
import PostGroup from "$lib/components/PostGroup.svelte";
import { onDestroy, onMount } from "svelte";
import SearchIcon from "$lib/components/SearchIcon.svelte";

export let data: {
  posts: any[];
  index: Record<string, string | string[]>[];
};

let search: HTMLInputElement;
let searchResult = [];
let showSearch = false;
let resultEmptyText = "Looking for something?";

const posts = groupPostsByCategory(data.posts);

function handleGlobalKeydown(event: KeyboardEvent) {
  if (event.key === "Escape" && showSearch) {
    event.preventDefault();
    event.stopPropagation();
    closeSearch();
  }
}

function handleInputKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    event.preventDefault();
    event.stopPropagation();
    closeSearch();
    return false;
  }
}

function closeSearch() {
  showSearch = false;
  searchResult = [];
}

onMount(() => {
  window.addEventListener("keydown", handleGlobalKeydown, true);
return () => {
    window.removeEventListener("keydown", handleGlobalKeydown, true);
  };
});

function searchPosts(searchTerm: string) {
  const result = data.index.filter(post => {
    return Object.values(post).some(value => {
      if (value instanceof Array) {
        return value.some(val => val.toLowerCase().includes(searchTerm.toLowerCase())) 
      }
      return value.toLowerCase().includes(searchTerm.toLowerCase())
    })
  });

  if (result.length === 0) {
    resultEmptyText = "No results found for '" + searchTerm + "'" 
  } else {
    resultEmptyText = "Looking for something else?"
  }

  if(searchTerm === '') {
    searchResult = []
    return
  }

  searchResult = result.slice(0, 5) 
}

function openSearch() {
  showSearch = true;
  setTimeout(() => {
    if (search) search.focus();
  }, 200);
}
</script>


{#if showSearch}
  <div 
    class="search-background" 
    on:click|self={closeSearch}
    on:keydown={handleInputKeydown}
  >
    <div class="search">
      <input 
        bind:this={search} 
        type="search" 
        placeholder="Search" 
        on:input={() => searchPosts(search.value)}
        on:keydown={handleInputKeydown}
      />
      <button class="close-btn" on:click={closeSearch}>ESC</button>
      {#if searchResult.length > 0}
        <ul>
          {#each searchResult as post}
            <li>
              <a href="/blog/{post.id}">{post.title}</a>
            </li>
          {/each}
        </ul>
      {:else}
        <p class="placeholder">{resultEmptyText}</p>
      {/if}
    </div>
  </div>
{/if}

<div class="header">
  <PageTitle title="Blog" subtitle="<a href='/rss.xml'>RSS feed</a>" />
<button class="search-btn" on:click={openSearch}><SearchIcon /> <span class="search-btn-text">Search</span></button>
</div>

<section id="categories">
  {#each Object.keys(posts) as cat}
    <PostGroup posts={sortedPosts(posts[cat])} category={cat} />
  {/each}
</section>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
}

.search-btn {
  border: none;
  border-radius: 0;
  background-color: transparent;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: var(--accent-color-inverted);
  font-size: 1.5rem;
  height: 60px;
  font-family: "JetBrains Mono", sans-serif;
  margin: auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.search-btn:hover {
  :global(.search-icon path) {
    stroke: var(--accent-color);
  }
.search-btn-text {
  color: var(--accent-color-inverted);
}

}

.search-btn-text {
color: var(--accent-color);  
}


#categories {
  margin-top: 2rem;
}

.search-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(7px);
}

.search {
  width: 500px;
  min-height: 400px;
  background-color: var(--background-color);
  padding: 1rem;
  position: relative;
  border: 2px solid var(--accent-color);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
}

.search input {
  width: 100%;
  padding: 1rem 1rem;
  border: none;
  margin: 0;
  background-color: var(--text-color);
}

.close-btn {
  position: absolute;
  right: 20px;
  width: 50px;
  height: 38px;
  top: 21px;
  border: 1px solid var(--accent-color-inverted);
  border-radius: 0;
  background-color: var(--text-color);
  font-size: .7rem;
  cursor: pointer;
  color: var(--accent-color-inverted);
  font-weight: bold;
  cursor: pointer;
}

.search-background ul {
  list-style: none;
  padding: 0;
  margin-bottom: 0;
}

.search-background ul li {
  border: 2px solid var(--accent-color-inverted);
  display: block;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
}

.search-background ul li a {
  text-decoration: none;
  border-bottom: none;
}

.placeholder {
  align-self: center;
  justify-self: center;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 2rem;
  opacity: .3; 
  text-align: center;
}
</style>

