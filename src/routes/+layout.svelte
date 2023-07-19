<script charset="utf-8">
  import Sidebar from "$lib/components/Sidebar.svelte";
  import MobileMenu from "$lib/components/MobileMenu.svelte";
  import DarkModeSwitch from "$lib/components/DarkModeSwitch.svelte";
  import "$lib/styles/style.scss";
  import "$lib/styles/variables.scss";
  import { blur } from "svelte/transition";

  const excludedRoutesFromLayout = ["/notion/weekinfo"];

  export let data;
  let { currentRoute } = data;
</script>

{#if !excludedRoutesFromLayout.includes(currentRoute)}
  <Sidebar />
  <MobileMenu />
  <DarkModeSwitch />

  {#key data.currentRoute}
    <main in:blur={{ duration: 350, delay: 450 }} out:blur={{ duration: 350 }}>
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
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 800px), screen and (max-height: 530px) {
      margin: 8rem 2rem 0 2rem;
    }
  }
</style>

