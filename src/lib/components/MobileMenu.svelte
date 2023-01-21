<script lang="ts">
  import MenuItem from "./MenuItem.svelte";
  import Burger from "./Burger.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let active: boolean = false;

  function handleMessage(event): void {
    active = !active;
  }

  function closeMenu(): void {
    setTimeout(() => {
      active = !active;
      dispatch("menuOpen", false);
      if (document.querySelector(".cross input").checked) {
        document.querySelector(".cross input").checked = false;
      }
    }, 250);
  }
</script>

<Burger on:menuOpen={handleMessage} />
<div class="mobile-menu light-mode" on:click={closeMenu} class:active>
  <MenuItem link="/blog" text="Blog" />
  <MenuItem link="/about" text="About" />
  <MenuItem link="/contact" text="Contact" />
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
    background: $black;
    transition: all 0.3s ease-out;

    &.light-mode {
      background: $white;
    }

    &.active {
      right: 0;
      z-index: 200;
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
