<script lang="ts">
  /* Layout for archived writing. These entries are kept for rereading, not for
     circulation: they stay out of the log, the feed, the sitemap and the index. */
  import Seo from "$lib/components/Seo.svelte";

  export let title;
  export let subtitle = "";
  export let date;
  export let categories = [];

  const isoDate = (d: string) =>
    d ? String(d).slice(0, 10).replace(/-/g, "–") : "";
</script>

<Seo
  {title}
  description={subtitle || `${title} — filed in the archive.`}
  noindex
/>

<article>
  <p class="breadcrumb">
    <a href="/archive">ARCHIVE</a> /
    <span class="current">FILED</span>
  </p>

  <h1>{title}</h1>
  {#if subtitle}<p class="subtitle">{subtitle}</p>{/if}

  <div class="meta">
    <span>{isoDate(date)}</span>
    {#each categories as cat}
      <span class="tag">[{cat.toLowerCase()}]</span>
    {/each}
  </div>

  <p class="notice">
    Filed away. This entry is no longer part of the log — it is kept here
    because it happened, not because it still holds up.
  </p>

  <div class="post-body">
    <slot />
  </div>

  <p class="back"><a href="/archive">← back to the archive</a></p>
</article>

<style lang="scss" scoped>
  article {
    max-width: 760px;
    margin: 0 auto;
    padding: 56px 20px 64px 20px;

    @media screen and (max-width: $breakpoint-mobile) {
      padding: 32px 20px 48px 20px;
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
    font-size: 40px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0 0 16px 0;

    @media screen and (max-width: $breakpoint-mobile) {
      font-size: 26px;
      line-height: 1.15;
    }
  }

  .subtitle {
    font-size: var(--ds-text-lead);
    line-height: 1.5;
    color: var(--ds-color-ink-muted);
    margin: 0 0 24px 0;

    @media screen and (max-width: $breakpoint-mobile) {
      font-size: 16px;
    }
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 10px 20px;
    font-family: var(--ds-font-mono);
    font-size: 12.5px;
    color: var(--ds-color-ink-muted);
    border-top: 1px solid var(--ds-color-line);
    border-bottom: 1px dashed rgba(237, 231, 218, 0.22);
    padding: 12px 0;
    margin-bottom: 24px;
  }

  .notice {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    line-height: 1.6;
    color: var(--ds-color-ink-faint);
    border-left: 2px solid var(--ds-color-brass);
    padding: 4px 0 4px 14px;
    margin: 0 0 36px 0;
  }

  .back {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    margin-top: 56px;
    padding-top: 20px;
    border-top: 1px solid var(--ds-color-line);
  }
</style>
