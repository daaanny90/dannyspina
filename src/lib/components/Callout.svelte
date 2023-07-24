<script lang="ts">
export let title: string;
</script>

<div>
  <h2>
   {title}
  </h2>
  <div class="content">
    <slot></slot>
  </div>
</div>

<style lang="scss" scoped>
  div {
     background-color: var(--text-color);
     padding: 1rem;
     margin: 1rem 0;
     color: var(--background-color);
     
     h2 {
      margin: 0;
     }

     .content {
      padding: 0;

      @include invertedLink;
     }
   }
</style>