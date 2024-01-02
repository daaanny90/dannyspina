<script lang="ts">
  export let images: { imgUrl: string; folder: string }[];
</script>

<div class="images-container">
  {#each images as image}
    <img src="../images/{image.imgUrl.replace('/static/images', '')}" alt="" />
  {/each}
</div>

<style>
  .images-container img {
    width: 175px;
    height: auto;
    object-fit: contain;
  }
</style>
