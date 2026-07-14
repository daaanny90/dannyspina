<script lang="ts">
  import { page } from "$app/stores";
  import { afterNavigate } from "$app/navigation";

  const items = [
    { n: "01", label: "Services", href: "/#services", match: "/services" },
    { n: "02", label: "Writing", href: "/blog", match: "/blog" },
    { n: "03", label: "About", href: "/about", match: "/about" },
    { n: "04", label: "Contact", href: "/contacts", match: "/contacts" },
  ];

  let open = false;

  $: pathname = $page.url.pathname;

  afterNavigate(() => {
    open = false;
  });
</script>

<header>
  <div class="bar">
    <a href="/" class="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="currentColor"
        role="img"
        aria-label="Bottega Spina"
      >
        <path
          d="M21.72 78.28C17.23 73.23 14.13 67.09 12.71 60.69C11.29 54.29 11.56 47.63 13.38 41.55C15.2 35.46 18.56 29.95 22.97 25.66C27.37 21.37 32.81 18.3 38.55 16.75C44.29 15.2 50.32 15.17 55.9 16.56C61.47 17.95 66.57 20.76 70.61 24.55C74.65 28.34 77.62 33.1 79.24 38.18C80.86 43.27 81.13 48.67 80.11 53.7C79.08 58.73 76.78 63.38 73.56 67.12C70.35 70.86 66.24 73.68 61.8 75.3C57.36 76.93 52.6 77.36 48.14 76.64C43.67 75.93 39.5 74.07 36.11 71.39C32.72 68.71 30.12 65.21 28.55 61.4C26.98 57.6 26.45 53.48 26.92 49.6C27.39 45.71 28.86 42.06 31.06 39.06C33.25 36.07 36.16 33.74 39.36 32.29C42.55 30.83 46.03 30.27 49.32 30.55C52.62 30.84 55.72 31.98 58.29 33.74L54.65 40.87C53.3 39.72 51.55 38.88 49.6 38.55C47.65 38.21 45.52 38.39 43.48 39.14C41.44 39.9 39.5 41.24 37.98 43.06C36.46 44.89 35.37 47.2 34.92 49.74C34.47 52.27 34.68 55.03 35.62 57.65C36.55 60.26 38.21 62.73 40.47 64.68C42.73 66.62 45.57 68.04 48.69 68.66C51.82 69.28 55.2 69.11 58.42 68.05C61.63 67 64.67 65.06 67.09 62.42C69.51 59.77 71.31 56.41 72.17 52.72C73.03 49.03 72.94 45.01 71.83 41.18C70.71 37.35 68.57 33.71 65.58 30.77C62.58 27.82 58.75 25.59 54.51 24.44C50.26 23.28 45.62 23.2 41.16 24.31C36.69 25.42 32.42 27.73 28.91 31.01C25.41 34.3 22.69 38.57 21.17 43.35C19.66 48.12 19.36 53.38 20.4 58.49C21.45 63.59 23.84 68.53 27.37 72.63Z"
        />
      </svg>
      <span>DANNY SPINA</span>
    </a>

    <nav class="desktop" aria-label="Main">
      {#each items as item}
        <a href={item.href} class:active={pathname.startsWith(item.match)}>
          {item.n} {item.label}
        </a>
      {/each}
    </nav>

    <button
      class="burger"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      on:click={() => (open = !open)}
    >
      <span class="line" class:cross-a={open} />
      <span class="line" class:cross-b={open} />
    </button>
  </div>

  {#if open}
    <nav class="dropdown" aria-label="Main">
      {#each items as item}
        <a href={item.href} class:active={pathname.startsWith(item.match)}>
          <span class="num">{item.n}</span>
          {item.label}
        </a>
      {/each}
    </nav>
  {/if}
</header>

<style lang="scss" scoped>
  header {
    border-bottom: 1px solid var(--ds-color-line);
    position: relative;
    z-index: 955;
  }

  .bar {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    padding: 0 48px;

    @media screen and (max-width: $breakpoint-mobile) {
      height: 56px;
      padding: 0 20px;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    font-size: 17px;
    letter-spacing: 0.02em;
    border-bottom: none;

    svg {
      width: 26px;
      height: 26px;
      flex: none;
    }

    @media screen and (max-width: $breakpoint-mobile) {
      font-size: 15px;
      gap: 8px;

      svg {
        width: 22px;
        height: 22px;
      }
    }
  }

  .desktop {
    display: flex;
    gap: 28px;
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-s);

    a {
      border-bottom: 2px solid transparent;
      padding-bottom: 2px;
      transition: color var(--ds-motion-shutter) var(--ds-ease-mechanical),
        border-color var(--ds-motion-shutter) var(--ds-ease-mechanical);

      &:hover {
        border-bottom-color: var(--ds-color-brass);
        color: var(--ds-color-ink);
      }

      &.active {
        color: var(--ds-color-brass);
        border-bottom-color: var(--ds-color-brass);
      }
    }

    @media screen and (max-width: $breakpoint-mobile) {
      display: none;
    }
  }

  .burger {
    display: none;
    background: none;
    border: none;
    padding: 12px 0;
    width: 22px;
    box-sizing: content-box;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;

    .line {
      display: block;
      height: 1.5px;
      width: 22px;
      background: var(--ds-color-ink);
      transition: transform var(--ds-motion-shutter) var(--ds-ease-mechanical);
    }

    .cross-a {
      transform: translateY(3.25px) rotate(45deg);
    }

    .cross-b {
      transform: translateY(-3.25px) rotate(-45deg);
    }

    @media screen and (max-width: $breakpoint-mobile) {
      display: flex;
    }
  }

  .dropdown {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--ds-color-bg-raised);
    border-bottom: 1px solid var(--ds-color-line);
    box-shadow: var(--ds-shadow-sheet);

    a {
      display: block;
      font-family: var(--ds-font-mono);
      font-size: var(--ds-text-s);
      padding: 16px 20px;
      border-bottom: 1px dashed var(--ds-color-line-soft);

      &:last-child {
        border-bottom: none;
      }

      &.active {
        color: var(--ds-color-brass);
      }

      .num {
        color: var(--ds-color-brass);
        margin-right: 8px;
      }

      &.active .num,
      &:hover .num {
        color: inherit;
      }
    }

    @media screen and (max-width: $breakpoint-mobile) {
      display: block;
    }
  }
</style>
