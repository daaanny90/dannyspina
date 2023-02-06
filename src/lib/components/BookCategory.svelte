<script>
  export let category;
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
