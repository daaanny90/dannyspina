<script>
import { onMount } from "svelte";
import { page } from "$app/stores";
import PageTitle from "$lib/components/PageTitle.svelte";

export let data;

let { episodes, currentRoute } = data;
let episode;
let episodeId;
let publishDate;
let dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

currentRoute = currentRoute.replace('/asincrono/', '');

episode = episodes.find(e =>  {
  console.log(e.id, currentRoute, e.id === currentRoute)
  return e.id === currentRoute
});

episode.description = episode.description
  .replace(/<br>/g, '')
  .replace(/<p><\/p>/g, '</>');

publishDate = new Date(episode.pubDate).toLocaleDateString("gb-GB", dateOptions);
</script>

{#if episode}
  <PageTitle title={episode.title}/>
  <p>{publishDate}</p>
 {@html episode.description}
  {#if episode.audioUrl}
    <div class="audio-player">
      <img src="{episode.imageUrl}" alt="{episode.title}" class="episode-image" />
      <audio controls>
        <source src="{episode.audioUrl}" type="audio/mpeg" />
      </audio>
    </div>  {/if}
{:else}
  <p>Loading...</p>
{/if}

<style>
audio {
  width: 100%;
  border-radius: 10px;
}

audio::-webkit-media-controls-panel {
  background-color: #1e1e1e;
  border-radius: 10px;
}

audio::-webkit-media-controls-play-button,
audio::-webkit-media-controls-pause-button {
  filter: invert(1);
}

audio::-webkit-media-controls-timeline {
  background: #333;
  border-radius: 5px;
}
.audio-player {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #222;
  padding: 10px;
  border-radius: 10px;
}

.episode-image {
  width: 8rem;
  height: 8rem;
  border-radius: 5px;
}
</style>
