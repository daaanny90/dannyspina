<script context="module">
  export const load = ({ url }) => {
    const currentRoute = url.pathname

    return {
      props: {
        currentRoute
      }
    }
  }
</script>

<script charset="utf-8">
  import Sidebar from '$lib/components/Sidebar.svelte'
  import '$lib/styles/style.scss'
  import { fade } from 'svelte/transition'

  export let currentRoute
</script>

<Sidebar />

{#key currentRoute}
  <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot />
  </main>
{/key}