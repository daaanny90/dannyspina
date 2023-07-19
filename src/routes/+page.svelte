<script>
  import PageTitle from "$lib/components/PageTitle.svelte";
</script>

<section>
  <h1>Hi! I'm Danny.</h1>
  <p>I am a web developer with some <a href="/about">passions</a>.</p>
  <p>Currently @ <a href="http://zalari.de">Zalari</a>.</p>
</section>

<style lang="scss" scoped>
section {
  text-align: center;
}
  p {
    font-weight: lighter;
    font-size: 1.3rem;

    @media only screen and (max-width: 600px) {
      font-size: 1.1rem;
    }
  }
  .company-logo {
    max-width: 1rem;
    padding: 0 .5rem;

    @media only screen and (max-width: 600px) {
      max-width: 5rem;
      padding: 0;
    }
  }
</style>
