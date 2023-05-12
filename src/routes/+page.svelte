<script>
  import PageTitle from "$lib/components/PageTitle.svelte";
</script>

<PageTitle title="< DANNY SPINA />" subtitle="" />
<p>
  CODE MONKEY AT <a href="https://www.zalari.de"
    ><img class="company-logo" src="https://www.zalari.de/assets/icons/icon.png" alt="Ostec GmbH" /></a
  >
</p>

<style lang="scss" scoped>
  p {
    font-weight: lighter;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    font-size: 1.3rem;

    @media only screen and (max-width: 600px) {
      font-size: 1.1rem;
    }
  }
  .company-logo {
    max-width: 5rem;
    padding: 0 .5rem;

    @media only screen and (max-width: 600px) {
      max-width: 5rem;
      padding: 0;
    }
  }
</style>
