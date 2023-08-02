<script lang="ts">
  import DarkModeSwitch from "./DarkModeSwitch.svelte";
  import BackArrow from "./BackArrow.svelte";
  import Burger from "./Burger.svelte";
  import Logo from "./Logo.svelte";
  import { isArrowUnderHeader, backArrowPage } from "../../store";
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';

  let currentPage;
  let show;
  let currentUrl: string;
  const backArrowExcludedPaths = [
    '/',
    '/blog',
    '/books',
    '/about',
    '/contact'
  ]
  
  backArrowPage.subscribe(page => {
    currentPage = page
  })
  
  isArrowUnderHeader.subscribe(status => {
    show = status
  })
  
  onMount(() => currentUrl = window.location.pathname);

  afterNavigate(() => {
    currentUrl = window.location.pathname
  })
</script>

<nav>
  <Logo />

  <!-- for accessibility, the back arrow must not be present on all pages due to redundant links -->
  {#if !backArrowExcludedPaths.includes(currentUrl)}
  <h1>show backarrow</h1>
  <div class="backArrow" class:show>
    <BackArrow page={currentPage} />
  </div>
  {/if}

  <div class="buttonsContainer">
    <DarkModeSwitch />
    <Burger />
  </div>
</nav>

<style lang="scss" scoped>
  nav {
    z-index: 955;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    position: fixed;
    top: 0;
    width: 100%;
    backdrop-filter: blur(7px);
  }

  .buttonsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: $breakpoint-mobile) {
      padding-right: 6px;
    }
  }

  .backArrow {
    opacity: 0;
    flex-grow: 1;
    max-width: 720px;
    transition: opacity .1s ease-in-out;
    margin: 0 auto;

    &.show {
      opacity: 1;
   transition: opacity .1s ease-in-out;
    }
  }
</style>
