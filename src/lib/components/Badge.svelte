<script lang="ts">
  export let text: string;
  export let outline = false;
</script>

<span class:outline>{text}</span>

<style lang="scss" scoped>
  span {
    background-color: var(--accent-color);
    color: var(--background-color);
    padding: 0.1rem 0.5rem;
    margin: 0 0.5rem;
    font-size: 0.8rem;
    font-family: "JetBrains Mono", sans-serif;

    &.outline {
      border: 1px solid var(--accent-color);
      background-color: transparent;
      color: var(--accent-color);
    }
  }
</style>
