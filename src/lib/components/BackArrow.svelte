<script lang="ts">
  import { isArrowUnderHeader, backArrowPage } from "../../store";

  export let page;
  // manage the capability to hide itself when scrolled under the header.
  // It does activate the update of the store status on scroll. Only one bacArrow for each page
  // can have this capability activated, otherwise some side effects will occurr.
  export let hideUnderHeader = false;
  
  let hide;

  isArrowUnderHeader.subscribe(status => {
    if (!hideUnderHeader) return;
    hide = status
  })

  let backArrow;
  backArrowPage.set(page)

  const positionY = () => {
    if (!hideUnderHeader) return;

    const backArrowPosition = backArrow.getBoundingClientRect().bottom
    const headerBottomPosition = document.querySelector('nav').getBoundingClientRect().bottom

    if (backArrowPosition <= headerBottomPosition + 10) {
      isArrowUnderHeader.set(true)
      return;
    }

    isArrowUnderHeader.set(false)
  }
</script>

<svelte:window on:scroll={positionY}/>

<a class="back-arrow-container" href="/{page}" bind:this={backArrow} class:hide on:click={() => isArrowUnderHeader.set(false)}>
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
  .back-arrow-container {
    @include unstyledLink;
    
    color: var(--text-color);
    display: flex;
    align-items: center;

    opacity: 1;
    transition: all .1s linear;

    &.hide {
      opacity: 0;
      transition: all .1s linear;

    }
  }
  .back-arrow {
    max-width: 2rem;
    margin-right: 0.5rem;
  }
</style>
