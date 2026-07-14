<script>
  import "$lib/styles/tokens.css";
  import "$lib/styles/style.scss";
  import "$lib/styles/variables.scss";
  import { fade } from "svelte/transition";
  import { afterNavigate } from "$app/navigation";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  const excludedRoutesFromLayout = ["/notion/weekinfo"];

  // data-sveltekit-noscroll disables SvelteKit's own anchor handling, and the
  // page transition resets scroll — honor #hash targets manually after both.
  afterNavigate(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 450);
    }
  });
  // pages designed as full-width "sheets"; everything else stays prose-width
  const wideRoutes = ["/", "/services", "/workshop"];

  export let data;

  $: currentRoute = data.currentRoute;
  $: wide = wideRoutes.some(
    (route) =>
      currentRoute === route ||
      (route !== "/" && currentRoute.startsWith(route)),
  );
</script>

<svelte:head>
  <title>Danny Spina — software developer</title>
</svelte:head>

{#if !excludedRoutesFromLayout.includes(currentRoute)}
  <Header />

  {#key data.currentRoute}
    <main
      class:wide
      in:fade={{ duration: 140, delay: 140 }}
      out:fade={{ duration: 140 }}
      on:outroend={() => {
        if (!window.location.hash) window.scroll(0, 0);
      }}
    >
      <slot />
    </main>
  {/key}

  <Footer />
{:else}
  <slot />
{/if}

<style lang="scss">
  main {
    padding: 0 1rem;
    margin: 48px auto 96px auto;
    line-height: 1.7;
    max-width: 720px;

    @media screen and (max-width: $breakpoint-mobile) {
      margin: 32px auto 64px auto;
    }

    &.wide {
      max-width: 1200px;
      padding: 0;
      margin: 0 auto;
      line-height: var(--ds-leading-text);
    }
  }
</style>
