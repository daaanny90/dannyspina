<script>
  export let page;
</script>

<a class="back-arrow-container" href="/{page}">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="back-arrow"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    />
  </svg> <span>Back to {page}</span>
</a>

<style lang="scss" scoped>
  a {
    @include unstyledLink;
  }

  .back-arrow-container {
    color: var(--text-color);
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }
  .back-arrow {
    max-width: 2rem;
    margin-right: 0.5rem;
  }
</style>
