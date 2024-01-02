<script lang="ts">
  import InstaImage from "$lib/components/InstaImage.svelte";
  import type { InstaImageType } from "$lib/helpers/types";
  export let data: InstaImageType;
</script>

<div class="insta-grid">
  {#each Object.keys(data.images) as date}
    <InstaImage images={data.images[date]} />
  {/each}
</div>

<style>
  code {
    padding: 1rem;
    overflow-x: scroll;
  }

  .insta-grid {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
  }
</style>
