<script lang="ts">
  import DarkModeSwitch from "./DarkModeSwitch.svelte";
  import BackArrow from "./BackArrow.svelte";
  import Burger from "./Burger.svelte";
  import { isArrowUnderHeader, backArrowPage } from "../../store";

  let currentPage;
  let show;

  backArrowPage.subscribe(page => {
    currentPage = page
  })

  isArrowUnderHeader.subscribe(status => {
    show = status
  })
</script>

<nav>
  <a class="logo" href="/">DS</a>
  <div class="backArrow" class:show>
    <BackArrow page={currentPage} />
  </div>
  <div class="buttonsContainer">
    <DarkModeSwitch />
    <Burger />
  </div>
</nav>

<style lang="scss">
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
  }

  .logo {
    @include unstyledLink;

    animation: none;
    font-family: "JetBrains Mono";
    width: 5rem;
    text-align: center;
    font-size: 2rem;
    margin: 0;
    color: var(--accent-color);
    font-weight: normal;
    text-decoration: none;
    z-index: 100;

    &:visited {
      color: var(--accent-color);
    }
  }

  .backArrow {
    opacity: 0;
    width: 720px;
    max-width: 720px;
    transition: opacity .1s ease-in-out;
    margin: 0 auto;

    &.show {
      opacity: 1;
   transition: opacity .1s ease-in-out;
    }
  }
</style>
