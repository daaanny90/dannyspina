<script lang="ts">
  export let images: { imgUrl: string; folder: string }[];
</script>

<div class="images-container">
  {#if images.length == 1}
    <img
      src="../images/{images[0].imgUrl.replace('/static/images', '')}"
      alt=""
    />
  {:else}
    <div class="insta-gallery">
      {#each images as image}
        <img
          src="../images/{image.imgUrl.replace('/static/images', '')}"
          alt=""
        />
      {/each}
    </div>
  {/if}
</div>

<style>
  .images-container {
    position: relative;
  }
  .images-container img {
    width: 160px;
    height: auto;
    object-fit: contain;
    position: absolute;
  }
  .insta-gallery {
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
  }
</style>
