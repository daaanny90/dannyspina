<script charset="utf-8">
  import Sidebar from "$lib/components/Sidebar.svelte";
  import MobileMenu from "$lib/components/MobileMenu.svelte";
  import "$lib/styles/style.scss";
  import "$lib/styles/variables.scss";
  import { blur } from "svelte/transition";
  import Navbar from "$lib/components/Navbar.svelte";

  const excludedRoutesFromLayout = ["/notion/weekinfo"];

  export let data;
  let { currentRoute } = data;
</script>

{#if !excludedRoutesFromLayout.includes(currentRoute)}
  <Navbar />
  <Sidebar />
  <MobileMenu />

  {#key data.currentRoute}
    <main in:blur={{ duration: 350, delay: 450 }} out:blur={{ duration: 350 }} on:outroend={() => {window.scroll(0, 0)}}>
      <slot />
    </main>
  {/key}
{:else}
  <slot />
{/if}

<style lang="scss">
  main {
    padding: 1rem;
    margin: 8rem auto 0 auto;
    line-height: 1.7;

    height: 100%;

    max-width: 720px;

    display: flex;
    justify-content: center;
    flex-direction: column;

    overflow-x: hidden;

    @media screen and (max-width: $breakpoint-mobile), screen and (max-height: 330px) {
      margin: 8rem 1rem 0 1rem;
    }
  }
</style>

