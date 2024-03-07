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
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 293px));
    justify-content: center;
    grid-gap: 28px;
  }
</style>
