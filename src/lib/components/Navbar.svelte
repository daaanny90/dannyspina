<script lang="ts">
  import DarkModeSwitch from "./DarkModeSwitch.svelte";
  import Burger from "./Burger.svelte";
  import { menuOpen } from "../../store";

  const toggleMenu = () => {
    menuOpen.set(!menuOpen)
  }



</script>

<nav>
  <a class="logo" href="/">DS</a>
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
    box-shadow: 0 0 10px 0 var(--background-color);
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
</style>
