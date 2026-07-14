<script lang="ts">
  export let label = "";
</script>

<div class="ruler-wrap">
  {#if label}
    <p class="label">{label}</p>
  {/if}
  <div class="ruler" />
</div>

<style lang="scss" scoped>
  .label {
    font-family: var(--ds-font-mono);
    font-size: 11.5px;
    color: var(--ds-color-ink-faint);
    text-align: right;
    margin: 0 0 6px 0;
  }

  .ruler {
    height: 14px;
    background-image: repeating-linear-gradient(
      to right,
      rgba(237, 231, 218, 0.8) 0,
      rgba(237, 231, 218, 0.8) 1px,
      transparent 1px,
      transparent 10px
    );
    background-size: 100% 6px;
    background-position: bottom;
    background-repeat: no-repeat;
    border-bottom: 1px solid var(--ds-color-line);
  }
</style>
