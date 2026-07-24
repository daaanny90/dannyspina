<script lang="ts">
  import PageTitle from "$lib/components/PageTitle.svelte";
  import Seo from "$lib/components/Seo.svelte";

  export let data;

  // newest first from the endpoint; group by year for a shelf-like listing
  const byYear = data.entries.reduce((acc, entry) => {
    const year = String(entry.meta.date).slice(0, 4);
    (acc[year] = acc[year] ?? []).push(entry);
    return acc;
  }, {});

  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  const isoDate = (d: string) =>
    d ? String(d).slice(0, 10).replace(/-/g, "–") : "";
</script>

<Seo
  title="Archive"
  description="Writing kept off the log — old experiments, weekly retros and pieces that no longer hold up."
  noindex
/>

<section>
  <PageTitle title="Archive" subtitle="What came off the shelf" />

  <p class="intro">
    Everything here used to be on the log. Some of it was written by a machine
    in 2022, some of it was a weekly diary, some of it simply stopped being
    true. None of it is indexed and none of it is in the feed — it lives here so
    it can be reread in ten years, not found by accident today.
  </p>

  {#each years as year}
    <div class="year">
      <p class="year-label">{year}</p>
      <ul>
        {#each byYear[year] as entry}
          <li>
            <a href={entry.path}>
              <span class="title">{entry.meta.title}</span>
              <span class="leader"></span>
              <span class="date">{isoDate(entry.meta.date)}</span>
            </a>
            {#if entry.meta.subtitle}
              <p class="subtitle">{entry.meta.subtitle}</p>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  {/each}

  <p class="back"><a href="/blog">← the log</a></p>
</section>

<style lang="scss" scoped>
  section {
    max-width: 860px;
    margin: 0 auto;
    padding: 56px 20px 64px 20px;

    @media screen and (max-width: $breakpoint-mobile) {
      padding: 32px 20px 48px 20px;
    }
  }

  .intro {
    max-width: 62ch;
    line-height: 1.6;
    color: var(--ds-color-ink-muted);
    margin: 0 0 48px 0;
  }

  .year-label {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    color: var(--ds-color-brass);
    border-bottom: 1px solid var(--ds-color-line);
    padding-bottom: 8px;
    margin: 0 0 16px 0;
  }

  .year {
    margin-bottom: 40px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 20px;
  }

  li a {
    display: flex;
    align-items: baseline;
    gap: 10px;
    border-bottom: none;

    .title {
      font-weight: 600;
    }

    .leader {
      flex: 1;
      border-bottom: 1px dashed rgba(237, 231, 218, 0.22);
      transform: translateY(-3px);
    }

    .date {
      font-family: var(--ds-font-mono);
      font-size: var(--ds-text-xs);
      color: var(--ds-color-ink-faint);
      white-space: nowrap;
    }
  }

  .subtitle {
    font-size: 15px;
    line-height: 1.5;
    color: var(--ds-color-ink-muted);
    margin: 4px 0 0 0;
  }

  .back {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    margin-top: 48px;
    padding-top: 20px;
    border-top: 1px solid var(--ds-color-line);
  }
</style>
