<script lang="ts">
  import SpecTable from "$lib/components/SpecTable.svelte";

  export let sheetRef: string;
  export let revNote: string;
  export let title: string;
  export let lead: string;
  export let scope: { title: string; desc: string }[];
  export let tolerances: { key: string; value: string; brass?: boolean }[];
  export let procedure: { label: string; desc: string }[];
</script>

<article>
  <p class="breadcrumb">
    <a href="/#services">01 SERVICES</a> /
    <span class="current">SHEET {sheetRef}</span> &middot; {revNote}
  </p>
  <h1>{title}</h1>
  <p class="lead">{lead}</p>

  <div class="sheets">
    <div class="scope">
      <div class="head"><span>SCOPE OF WORK</span><span>FIG. 1</span></div>
      <div class="items">
        {#each scope as item}
          <div class="item">
            <p class="title">{item.title}</p>
            <p class="desc">{item.desc}</p>
          </div>
        {/each}
      </div>
    </div>
    <div class="tolerances">
      <SpecTable title="TOLERANCES" rows={tolerances} />
    </div>
  </div>

  <p class="procedure-label">PROCEDURE &mdash; FIG. 2</p>
  <div class="procedure">
    {#each procedure as step, i}
      <div class="step">
        <div class="marker">
          <div class="circle">{i + 1}</div>
          {#if i < procedure.length - 1}
            <div class="connector" />
          {/if}
        </div>
        <p class="step-label">{step.label}</p>
        <p class="step-desc">{step.desc}</p>
      </div>
    {/each}
  </div>
</article>

<div class="cta-strip">
  <a class="ds-btn" href="/contacts">START WITH THE INTAKE &rarr;</a>
  <p class="rev">SHEET {sheetRef} &middot; {revNote}</p>
</div>

<style lang="scss" scoped>
  article {
    padding: 56px 48px 0 48px;

    @media screen and (max-width: $breakpoint-mobile) {
      padding: 32px 20px 0 20px;
    }
  }

  .breadcrumb {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    color: var(--ds-color-ink-muted);
    margin: 0 0 20px 0;

    a {
      border-bottom: none;
    }

    .current {
      color: var(--ds-color-ink);
    }
  }

  h1 {
    font-size: var(--ds-text-h1);
    line-height: 1.08;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0 0 20px 0;

    @media screen and (max-width: $breakpoint-mobile) {
      font-size: var(--ds-text-h2);
    }
  }

  .lead {
    font-size: var(--ds-text-lead);
    line-height: var(--ds-leading-text);
    max-width: 58ch;
    color: var(--ds-color-ink-muted);
    margin: 0 0 48px 0;

    @media screen and (max-width: $breakpoint-mobile) {
      font-size: 16px;
      margin-bottom: 32px;
    }
  }

  .sheets {
    display: grid;
    grid-template-columns: 7fr 5fr;
    gap: 40px;
    margin-bottom: 56px;

    @media screen and (max-width: $breakpoint-mobile) {
      grid-template-columns: 1fr;
      gap: 24px;
      margin-bottom: 40px;
    }
  }

  .scope {
    border: 1px solid var(--ds-color-line);
    background: var(--ds-color-bg-raised);
    align-self: start;
  }

  .scope .head {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    letter-spacing: var(--ds-tracking-label);
    padding: 10px 16px;
    border-bottom: 1px solid var(--ds-color-line);
    display: flex;
    justify-content: space-between;
  }

  .scope .items {
    padding: 4px 20px 16px 20px;
  }

  .scope .item {
    padding: 14px 0;
    border-bottom: 1px dashed rgba(237, 231, 218, 0.22);

    &:last-child {
      border-bottom: none;
    }

    .title {
      font-size: 16px;
      font-weight: 600;
      margin: 0 0 4px 0;
    }

    .desc {
      font-family: var(--ds-font-mono);
      font-size: var(--ds-text-xs);
      line-height: 1.6;
      color: var(--ds-color-ink-muted);
      margin: 0;
    }
  }

  .tolerances {
    align-self: start;
  }

  .procedure-label {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    letter-spacing: var(--ds-tracking-label);
    border-bottom: 1px solid var(--ds-color-line);
    padding-bottom: 10px;
    margin: 0 0 28px 0;
  }

  .procedure {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    margin-bottom: 56px;

    @media screen and (max-width: $breakpoint-mobile) {
      grid-template-columns: 1fr;
      gap: 24px;
      margin-bottom: 40px;
    }
  }

  .marker {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }

  .circle {
    width: 28px;
    height: 28px;
    border: 1.5px solid var(--ds-color-brass);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    color: var(--ds-color-brass);
    flex: none;
  }

  .connector {
    flex: 1;
    border-top: 1px dashed rgba(237, 231, 218, 0.3);

    @media screen and (max-width: $breakpoint-mobile) {
      display: none;
    }
  }

  .step-label {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    color: var(--ds-color-brass);
    margin: 0 0 6px 0;
  }

  .step-desc {
    font-size: 14px;
    line-height: 1.6;
    color: var(--ds-color-ink-muted);
    margin: 0;
  }

  .cta-strip {
    border-top: 1px solid var(--ds-color-line);
    padding: 32px 48px 36px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;

    @media screen and (max-width: $breakpoint-mobile) {
      padding: 24px 20px 28px 20px;
    }
  }

  .rev {
    font-family: var(--ds-font-mono);
    font-size: 11.5px;
    color: var(--ds-color-ink-faint);
    margin: 0;
  }
</style>
