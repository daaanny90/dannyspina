<script>
import { onMount } from "svelte";
import { page } from "$app/stores";
import PageTitle from "$lib/components/PageTitle.svelte";
  import BackArrow from "$lib/components/BackArrow.svelte";

export let data;

let { episodes, currentRoute } = data;
let episode;
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

<BackArrow page="asincrono" hideUnderHeader />

{#if episode}
  <PageTitle title={episode.title}/>
  <p class="date">{publishDate}</p>
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
  height: 40px;
  border-radius: 20px;
  background-color: #1a1a1a;
  filter: invert(0%);
  -webkit-appearance: none;
  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  margin: 10px 0;
}

audio::-webkit-media-controls-panel {
  background-color: #1a1a1a;
  border-radius: 20px;
  border: none;
}

audio::-webkit-media-controls-enclosure {
  background-color: #1a1a1a;
  border-radius: 20px;
  border: none;
}

audio::-webkit-media-controls-play-button {
  background-color: #333;
  border-radius: 50%;
}

audio::-webkit-media-controls-current-time-display,
audio::-webkit-media-controls-time-remaining-display {
  color: #eee;
  font-family: sans-serif;
  font-size: 12px;
}

audio::-webkit-media-controls-volume-slider {
  background-color: #555;
  border-radius: 10px;
  padding: 0 5px;
}

audio::-moz-range-track {
  background-color: #555;
  border-radius: 10px;
}

audio::-moz-range-thumb {
  background-color: #eee;
  border: none;
  border-radius: 50%;
}

audio:hover {
  opacity: 0.9;
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
.date {
  color: var(--accent-color-inverted);
}
</style>
