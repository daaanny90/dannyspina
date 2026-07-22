<script>
  import PageTitle from "$lib/components/PageTitle.svelte";
  import PostCard from "$lib/components/PostCard.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import { onMount } from "svelte";

  export let data;
  let { episodes } = data;
</script>

<Seo
  title="Asincrono"
  description="Asincrono, il podcast di Danny Spina: episodi in italiano su sviluppo software, lavoro da remoto e letture."
/>

<PageTitle
  title="Asincrono"
  subtitle="Il mio podcast dove chiacchiero con me"
/>

<ul class="episode-list">
  {#each [...episodes].reverse() as { title, id, pubDate }, index}
    <li>
      <PostCard
        info="Episode {index + 1}"
        {title}
        path="asincrono/{id}"
        date={pubDate}
        subtitle=""
        categories={["Podcast"]}
      />
    </li>
  {/each}
</ul>

<style>
  .episode-list {
    margin-top: 3rem;
    list-style-type: none;
    padding: 0;
  }

  ul {
    display: flex;
    flex-direction: column-reverse;
  }

  li {
    margin-bottom: 3rem;
  }
</style>
