<script>
  export let category;
</script>

<h2 id={category.toLowerCase().replaceAll(" ", "-")}>
  <slot />
  <span>{category}</span>
</h2>

<style>
  h2 {
    display: flex;
    align-items: center;
  }

  span {
    margin-left: .5rem;
  }
</style>
