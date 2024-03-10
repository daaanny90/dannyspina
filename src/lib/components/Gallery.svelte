<script lang="ts">
  export let imageList: string[];
</script>

<section>
  <slot></slot>
</section>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>