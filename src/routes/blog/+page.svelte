<script lang="ts">
  export let data: { posts: any[] };

  const posts = data.posts; // newest first, enriched with { log, readingMinutes }

  let query = "";
  let activeTag = "all";
  let newestFirst = true;

  // unique tags across the whole log, lowercased for the technical-sheet look
  const tags = Array.from(
    new Set(
      posts.flatMap((p) => (p.meta.categories ?? []).map((c: string) => c)),
    ),
  ).sort((a, b) => a.localeCompare(b));

  const yearOf = (post) => new Date(post.meta.date).getFullYear();
  const monthDay = (post) => {
    const d = new Date(post.meta.date);
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${mm}–${dd}`;
  };
  const logNo = (post) => String(post.log ?? 0).padStart(3, "0");

  function matchesQuery(post, q: string) {
    if (!q) return true;
    const hay = [
      post.meta.title,
      post.meta.subtitle,
      ...(post.meta.categories ?? []),
      String(yearOf(post)),
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q.toLowerCase());
  }

  function matchesTag(post, tag: string) {
    if (tag === "all") return true;
    return (post.meta.categories ?? []).includes(tag);
  }

  $: filtered = posts
    .filter((p) => matchesTag(p, activeTag) && matchesQuery(p, query))
    .sort((a, b) => {
      const diff =
        (new Date(b.meta.date) as any) - (new Date(a.meta.date) as any);
      return newestFirst ? diff : -diff;
    });

  // group the filtered set by year, preserving the current sort direction
  $: grouped = (() => {
    const map = new Map<number, any[]>();
    for (const p of filtered) {
      const y = yearOf(p);
      if (!map.has(y)) map.set(y, []);
      map.get(y).push(p);
    }
    return Array.from(map.entries());
  })();

  $: years = posts.map(yearOf);
  $: spanLabel = years.length
    ? `${Math.min(...years)}–${Math.max(...years)}`
    : "";

  function clearOnEsc(e: KeyboardEvent) {
    if (e.key === "Escape") query = "";
  }
</script>

<svelte:head>
  <title>The log — Danny Spina</title>
  <meta
    name="description"
    content="Writing on frontend architecture, design systems and design ops — a running log, searchable, no tracking, no comments."
  />
</svelte:head>

<div class="wrap">
  <div class="top">
    <div class="heading">
      <p class="kicker">
        02 WRITING &middot; <span class="strong">{posts.length} ENTRIES</span>
        {#if spanLabel}&middot; {spanLabel}{/if}
      </p>
      <h1>The log.</h1>
    </div>
    <div class="search">
      <label class="search-label" for="log-search">SEARCH THE LOG</label>
      <div class="search-field">
        <input
          id="log-search"
          type="search"
          placeholder="title, tag, year…"
          bind:value={query}
          on:keydown={clearOnEsc}
        />
        <span class="search-icon" aria-hidden="true">⌕</span>
      </div>
      <p class="hint">↳ filters as you type &middot; ESC clears</p>
    </div>
  </div>

  <div class="filters">
    <span class="filter-label">FILTER:</span>
    <button
      class="tag"
      class:active={activeTag === "all"}
      on:click={() => (activeTag = "all")}>[all]</button
    >
    {#each tags as tag}
      <button
        class="tag"
        class:active={activeTag === tag}
        on:click={() => (activeTag = tag)}>[{tag.toLowerCase()}]</button
      >
    {/each}
    <button
      class="sort"
      on:click={() => (newestFirst = !newestFirst)}
      title="Toggle sort order"
    >
      SORT: {newestFirst ? "NEWEST ↓" : "OLDEST ↑"}
    </button>
  </div>

  {#if filtered.length === 0}
    <p class="empty">
      No entries match. <button
        class="reset"
        on:click={() => {
          query = "";
          activeTag = "all";
        }}>Clear filters</button
      >
    </p>
  {/if}

  {#each grouped as [year, entries]}
    <p class="year">{year}</p>
    {#each entries as post}
      <a class="entry" href={post.path}>
        <span class="date">{monthDay(post)}</span>
        <span class="logno">LOG·{logNo(post)}</span>
        <span class="title">{post.meta.title}</span>
        <span class="leader"></span>
        <span class="tag-cell"
          >[{(post.meta.categories?.[0] ?? "notes").toLowerCase()}]</span
        >
        <span class="mins">{post.readingMinutes} MIN</span>
      </a>
    {/each}
  {/each}

  <div class="foot">
    <span>SHOWING {filtered.length} OF {posts.length}</span>
    <span class="foot-right"
      ><a href="/rss.xml">RSS AVAILABLE</a> &middot; NO TRACKING, NO COMMENTS</span
    >
  </div>
</div>

<style lang="scss">
  .wrap {
    max-width: 1100px;
    margin: 0 auto;
    padding: 56px 48px 64px 48px;

    @media screen and (max-width: $breakpoint-mobile) {
      padding: 32px 20px 48px 20px;
    }
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 40px;
    margin-bottom: 40px;

    @media screen and (max-width: $breakpoint-mobile) {
      flex-direction: column;
      align-items: stretch;
      gap: 24px;
    }
  }

  .kicker {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    color: var(--ds-color-ink-muted);
    margin: 0 0 16px 0;

    .strong {
      color: var(--ds-color-ink);
    }
  }

  h1 {
    font-size: var(--ds-text-h1);
    line-height: 1.08;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0;

    @media screen and (max-width: $breakpoint-mobile) {
      font-size: var(--ds-text-h2);
    }
  }

  .search {
    width: 380px;
    flex: none;

    @media screen and (max-width: $breakpoint-mobile) {
      width: 100%;
    }
  }

  .search-label {
    display: block;
    font-family: var(--ds-font-mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    color: var(--ds-color-ink-muted);
    margin: 0 0 6px 0;
  }

  .search-field {
    display: flex;
    border: 1px solid var(--ds-color-line);
    background: var(--ds-color-bg-raised);

    input {
      flex: 1;
      min-width: 0;
      border: none;
      background: transparent;
      color: var(--ds-color-ink);
      font-family: var(--ds-font-mono);
      font-size: 13px;
      padding: 12px 14px;

      &::placeholder {
        color: var(--ds-color-ink-faint);
      }

      &:focus {
        outline: none;
      }
    }

    &:focus-within {
      border-color: var(--ds-color-brass);
    }

    .search-icon {
      border-left: 1px solid var(--ds-color-line);
      padding: 0 16px;
      display: flex;
      align-items: center;
      font-family: var(--ds-font-mono);
      font-size: 15px;
      color: var(--ds-color-brass);
    }
  }

  .hint {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    color: var(--ds-color-ink-faint);
    margin: 6px 0 0 0;
  }

  .filters {
    display: flex;
    align-items: baseline;
    gap: 18px;
    flex-wrap: wrap;
    font-family: var(--ds-font-mono);
    font-size: 12.5px;
    border-bottom: 1px solid var(--ds-color-line);
    padding-bottom: 14px;
    margin-bottom: 8px;
  }

  .filter-label {
    color: var(--ds-color-ink-faint);
  }

  .tag {
    font-family: var(--ds-font-mono);
    font-size: 12.5px;
    background: none;
    border: none;
    padding: 3px 4px;
    cursor: pointer;
    color: var(--ds-color-ink-muted);
    transition: color var(--ds-motion-shutter) var(--ds-ease-mechanical);

    &:hover {
      color: var(--ds-color-brass);
    }

    &.active {
      color: var(--ds-color-on-brass);
      background: var(--ds-color-brass);
      padding: 3px 8px;
    }
  }

  .sort {
    margin-left: auto;
    font-family: var(--ds-font-mono);
    font-size: 12.5px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: var(--ds-color-ink-muted);

    &:hover {
      color: var(--ds-color-brass);
    }
  }

  .empty {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-s);
    color: var(--ds-color-ink-muted);
    padding: 32px 0;

    .reset {
      background: none;
      border: none;
      color: var(--ds-color-brass);
      cursor: pointer;
      font-family: var(--ds-font-mono);
      font-size: var(--ds-text-s);
      padding: 0;
    }
  }

  .year {
    font-family: var(--ds-font-mono);
    font-size: 12px;
    letter-spacing: 0.1em;
    color: var(--ds-color-brass);
    margin: 28px 0 4px 0;
  }

  .entry {
    display: flex;
    align-items: baseline;
    gap: 20px;
    padding: 14px 0;
    border-bottom: 1px dashed rgba(237, 231, 218, 0.22);
    border-top: none;

    &:hover {
      color: inherit;

      .title {
        color: var(--ds-color-brass);
      }
    }

    .date {
      font-family: var(--ds-font-mono);
      font-size: 12.5px;
      color: var(--ds-color-ink-muted);
      width: 60px;
      flex: none;
    }

    .logno {
      font-family: var(--ds-font-mono);
      font-size: 11.5px;
      color: var(--ds-color-ink-faint);
      width: 76px;
      flex: none;
    }

    .title {
      font-size: 17px;
      font-weight: 600;
    }

    .leader {
      flex: 1;
      border-bottom: 1px dotted rgba(237, 231, 218, 0.3);
      transform: translateY(-4px);
    }

    .tag-cell {
      font-family: var(--ds-font-mono);
      font-size: 12px;
      color: var(--ds-color-ink-muted);
      flex: none;
    }

    .mins {
      font-family: var(--ds-font-mono);
      font-size: 12px;
      color: var(--ds-color-ink-faint);
      width: 52px;
      text-align: right;
      flex: none;
    }

    @media screen and (max-width: $breakpoint-mobile) {
      flex-wrap: wrap;
      gap: 6px 14px;

      .title {
        width: 100%;
        order: 3;
        font-size: 16px;
      }

      .leader {
        display: none;
      }

      .logno {
        width: auto;
      }

      .mins {
        width: auto;
        margin-left: auto;
      }
    }
  }

  .foot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--ds-color-line);
    margin-top: 24px;
    padding-top: 16px;
    font-family: var(--ds-font-mono);
    font-size: 12px;
    color: var(--ds-color-ink-muted);

    .foot-right {
      color: var(--ds-color-ink-faint);

      a {
        color: var(--ds-color-ink-muted);
        border-bottom: none;

        &:hover {
          color: var(--ds-color-brass);
        }
      }
    }

    @media screen and (max-width: $breakpoint-mobile) {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }
  }
</style>
