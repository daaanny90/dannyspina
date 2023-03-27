<script>
  export let title;
  export let subtitle;
</script>

<div class="title-center">
  <h1 class="page-title">{title}</h1>
  {#if subtitle}
    <p>{@html subtitle}</p>
  {/if}
</div>

<style lang="scss">
  .title-center {
    .page-title {
      font-family: "PressStart2P";
      font-size: 4rem;
      margin: 0 0 1rem 0;
      line-height: 1.1;

      @media only screen and (max-width: 600px) {
        font-size: 2rem;
      }
    }
    p {
      font-size: 1.3rem;
      font-weight: lighter;
      margin: 0;

      @media only screen and (max-width: 600px) {
        font-size: 1.1rem;
      }
    }
  }
</style>
