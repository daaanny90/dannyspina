<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import AiIndicator from "$lib/components/AiIndicator.svelte";

  export let title;
  export let subtitle = "";
  export let date;
  export let categories = [];
  export let human = undefined;

  let logNo = "···";
  let readingMinutes: number | null = null;
  let prev = null; // older entry
  let next = null; // newer entry

  const isoDate = (d: string) =>
    d ? String(d).slice(0, 10).replace(/-/g, "–") : "";

  onMount(async () => {
    try {
      const res = await fetch("/api/posts.json");
      const posts = await res.json();
      const path = $page.url.pathname.replace(/\/$/, "");
      const i = posts.findIndex((p) => p.path === path);
      if (i !== -1) {
        const cur = posts[i];
        logNo = String(cur.log ?? 0).padStart(3, "0");
        readingMinutes = cur.readingMinutes ?? null;
        next = posts[i - 1] ?? null; // newer (higher log)
        prev = posts[i + 1] ?? null; // older (lower log)
      }
    } catch (e) {
      // adjacents/reading-time are enhancements; the article still reads fine
    }
  });
</script>

<svelte:head>
  <title>{title} — Danny Spina</title>
  {#if subtitle}<meta name="description" content={subtitle} />{/if}
</svelte:head>

<article>
  <p class="breadcrumb">
    <a href="/blog">02 WRITING</a> /
    <span class="current">ENTRY DS·LOG·{logNo}</span>
  </p>

  <h1>{title}</h1>
  {#if subtitle}<p class="subtitle">{subtitle}</p>{/if}

  <div class="meta">
    <span>{isoDate(date)}</span>
    {#each categories as cat, i}
      <span class="tag" class:brass={i === 0}>[{cat.toLowerCase()}]</span>
    {/each}
    <span class="reading">
      {#if readingMinutes}EST. READING — {readingMinutes} MIN{/if}
    </span>
  </div>

  {#if human !== undefined}
    <div class="ai">
      <AiIndicator humanLevel={human} />
    </div>
  {/if}

  <div class="post-body">
    <slot />
  </div>

  {#if prev || next}
    <div class="adjacent">
      <p class="adjacent-label">ADJACENT ENTRIES</p>
      {#if prev}
        <a class="adj" href={prev.path}>
          <span class="adj-log"
            >← DS·LOG·{String(prev.log).padStart(3, "0")}</span
          >
          <span class="adj-title">{prev.meta.title}</span>
          <span class="adj-leader"></span>
          <span class="adj-tag"
            >[{(prev.meta.categories?.[0] ?? "notes").toLowerCase()}]</span
          >
        </a>
      {/if}
      {#if next}
        <a class="adj" href={next.path}>
          <span class="adj-log"
            >DS·LOG·{String(next.log).padStart(3, "0")} →</span
          >
          <span class="adj-title">{next.meta.title}</span>
          <span class="adj-leader"></span>
          <span class="adj-tag"
            >[{(next.meta.categories?.[0] ?? "notes").toLowerCase()}]</span
          >
        </a>
      {/if}
    </div>
  {/if}
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
    font-size: 44px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0 0 16px 0;

    @media screen and (max-width: $breakpoint-mobile) {
      font-size: 28px;
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

    .tag.brass {
      color: var(--ds-color-brass);
    }

    .reading {
      margin-left: auto;
      color: var(--ds-color-ink-faint);
    }
  }

  .ai {
    margin-bottom: 40px;
  }

  /* ---- rendered markdown body ---- */
  .post-body {
    font-size: 17px;
    line-height: 1.75;

    :global(p) {
      margin: 0 0 24px 0;
    }

    :global(h2) {
      font-size: 26px;
      font-weight: 700;
      letter-spacing: -0.01em;
      line-height: 1.2;
      margin: 48px 0 16px 0;
      padding-top: 8px;
      border-top: 1px solid var(--ds-color-line);
    }

    :global(h3) {
      font-size: 20px;
      font-weight: 700;
      margin: 36px 0 12px 0;
    }

    :global(a) {
      color: inherit;
      border-bottom: 1px solid var(--ds-color-brass);

      &:hover {
        color: var(--ds-color-brass);
      }
    }

    :global(ul),
    :global(ol) {
      margin: 0 0 24px 0;
      padding-left: 1.4em;
    }

    :global(li) {
      margin-bottom: 8px;
    }

    :global(strong) {
      font-weight: 700;
      color: var(--ds-color-ink);
    }

    :global(blockquote) {
      border: none;
      border-top: 1px solid var(--ds-color-line);
      border-bottom: 1px solid var(--ds-color-line);
      background: transparent;
      font-style: normal;
      font-size: 21px;
      font-weight: 600;
      line-height: 1.5;
      color: var(--ds-color-ink);
      padding: 20px 0;
      margin: 40px 0;

      &::before,
      &::after {
        content: none;
      }
    }

    /* figures frame like manual plates; on desktop they bleed a little wider */
    :global(figure) {
      margin: 40px 0;
      border: 1px solid var(--ds-color-line);
      background: var(--ds-color-bg-raised);
      padding: 12px;

      @media screen and (min-width: 900px) {
        margin-left: -100px;
        margin-right: -100px;
      }
    }

    :global(figure img) {
      display: block;
      width: 100%;
      height: auto;
    }

    :global(figcaption) {
      font-family: var(--ds-font-mono);
      font-size: 12px;
      color: var(--ds-color-ink-muted);
      padding-top: 10px;
    }

    /* plain markdown images (not wrapped in a figure) */
    :global(p > img) {
      display: block;
      width: 100%;
      height: auto;
      border: 1px solid var(--ds-color-line);
      background: var(--ds-color-bg-raised);
      padding: 12px;
      box-sizing: border-box;
    }
  }

  /* ---- adjacent entries ---- */
  .adjacent {
    border-top: 1px solid var(--ds-color-line);
    margin-top: 56px;
    padding-top: 24px;
  }

  .adjacent-label {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    color: var(--ds-color-ink-muted);
    margin: 0 0 8px 0;
  }

  .adj {
    display: flex;
    align-items: baseline;
    gap: 20px;
    padding: 10px 0;
    border-bottom: 1px dashed rgba(237, 231, 218, 0.22);

    &:last-child {
      border-bottom: none;
    }

    &:hover .adj-title {
      color: var(--ds-color-brass);
    }

    .adj-log {
      font-family: var(--ds-font-mono);
      font-size: 12px;
      color: var(--ds-color-ink-muted);
      flex: none;
    }

    .adj-title {
      font-size: 15px;
      font-weight: 600;
    }

    .adj-leader {
      flex: 1;
      border-bottom: 1px dotted rgba(237, 231, 218, 0.3);
      transform: translateY(-4px);
    }

    .adj-tag {
      font-family: var(--ds-font-mono);
      font-size: 11.5px;
      color: var(--ds-color-ink-muted);
      flex: none;
    }

    @media screen and (max-width: $breakpoint-mobile) {
      flex-wrap: wrap;
      gap: 4px 14px;

      .adj-title {
        width: 100%;
        order: 3;
      }

      .adj-leader {
        display: none;
      }
    }
  }
</style>
