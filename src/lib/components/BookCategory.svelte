<script>
  import Rocket from "$lib/icons/Rocket.svelte";
  export let category;
  export let icon;
</script>

<h2 id={category.toLowerCase().replaceAll(" ", "-")}>
  <slot />
  {category}
</h2>

<style>
  h2 {
    display: flex;
    align-items: center;
  }
</style>
