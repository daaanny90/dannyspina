<script lang="ts">
export let title: String;
</script>

<details>
  <summary><h3>{title}</h3></summary>
  <slot></slot>
</details>

<style lang="scss" scoped>
  details {
    h3 {
      margin: 0 0 0 0.5rem;
      display: inline-block;
    }

    summary {
      cursor: pointer;

      &:hover {
        color: var(--accent-color);
      }

      &::marker {
        color: var(--accent-color);
      }
    }
  }
</style>