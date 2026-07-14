<script lang="ts">
  export let title = "SPECIFICATIONS";
  export let fig: string | undefined = undefined;
  export let rows: { key: string; value: string; brass?: boolean }[] = [];
</script>

<div class="spec">
  <div class="head">
    <span>{title}</span>
    {#if fig}<span>{fig}</span>{/if}
  </div>
  <div class="rows">
    {#each rows as row}
      <div class="row">
        <span class="key">{row.key}</span>
        <span class="value" class:brass={row.brass}>{@html row.value}</span>
      </div>
    {/each}
  </div>
</div>

<style lang="scss" scoped>
  .spec {
    border: 1px solid var(--ds-color-line);
    background: var(--ds-color-bg-raised);
  }

  .head {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    letter-spacing: var(--ds-tracking-label);
    padding: 10px 16px;
    border-bottom: 1px solid var(--ds-color-line);
    display: flex;
    justify-content: space-between;
  }

  .rows {
    padding: 8px 16px 14px 16px;
    font-family: var(--ds-font-mono);
    font-size: 12.5px;
    line-height: 1.5;
  }

  .row {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 0;
    border-bottom: 1px dashed rgba(237, 231, 218, 0.22);

    &:last-child {
      border-bottom: none;
    }
  }

  .key {
    color: var(--ds-color-ink-muted);
  }

  .value {
    text-align: right;

    &.brass {
      color: var(--ds-color-brass);
    }
  }
</style>
