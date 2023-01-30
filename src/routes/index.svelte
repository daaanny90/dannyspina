<script>
  import PageTitle from '$lib/components/PageTitle.svelte'
</script>

<PageTitle title="DANNY SPINA" />
<p>DIGITAL CRAFTSMAN AND BUG HUNTER AT <a href="https://www.ostec.de"><img class="company-logo" src='ostec_logo.png' alt="Ostec GmbH"/></a></p>

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

    @media only screen and (max-width: 600px) {
      max-width: 5rem;
    }
  }
</style>