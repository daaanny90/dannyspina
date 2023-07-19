<script lang="ts">
  import { page } from "$app/stores";

  export let link: string;
  export let text: string;
  export let isSidebar = false;
</script>

<p class:sidebar={isSidebar} class:active={$page.url.pathname.includes(link)}>
  <a href={link}>{text}</a>
</p>

<style lang="scss" scoped>
  .sidebar {
    transform: rotate(270deg);
    margin: 0;

    // the menu items in the sidebar must be the normal color of the text...
    a {
      color: var(--text-color);
    }
    
    &:hover {
      a {
        text-decoration: line-through;
      }
    }
  }

  .active {
    a {
      text-decoration: line-through;
    }
    text-decoration-color: forestgreen;
  }

  a {
    @include unstyledLink;
    
    text-decoration: none;
    font-size: 1.3rem;
    // ...but in the mobile menu must be the opposite
    color: var(--background-color);
    font-weight: 400;
    font-family: 'JetBrains Mono';

    &:visited {
      color: inherit;
    }
  }
</style>
