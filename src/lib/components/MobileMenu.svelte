<script lang="ts">
  import MenuItem from "./MenuItem.svelte";
  import Burger from "./Burger.svelte";
  // import { createEventDispatcher } from "svelte";
  import { menuOpen } from "../../store";

  let isMenuOpen: boolean;
  menuOpen.subscribe((state) => {
    isMenuOpen = state;
  });
</script>

<!-- <Burger on:menuOpen={handleMessage} /> -->
<div class="mobile-menu" class:active={isMenuOpen}>
  <MenuItem link="/blog" text="Blog" />
  <!--TODO: evaluate if remove completly the section-->
  <!-- <MenuItem link="/books" text="Books" /> -->
  <MenuItem link="/about" text="About" />
  <MenuItem link="/contact" text="Contact" />
  <MenuItem link="/asincrono" text="Podcast" />
</div>

<style lang="scss" scoped>
  div {
    z-index: 250;
  }
  .mobile-menu {
    position: fixed;
    top: 0;
    right: -100vw;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: -200;
    background: var(--text-color);
    color: var(--background-color);
    transition: all 0.3s ease-out;

    &.active {
      right: 0;
      z-index: 250;
      transition: all 0.3s ease-in;

      @media screen and (min-width: $breakpoint-mobile) and (orientation: portrait) {
        right: -100vw;
      }

      @media screen and (min-height: 530px) and (orientation: landscape) {
        right: -100vw;
      }
    }
  }
</style>
