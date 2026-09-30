<script lang="ts">
  import RulerDivider from "$lib/components/RulerDivider.svelte";
  import Seo from "$lib/components/Seo.svelte";

  type Wallpaper = {
    code: string;
    name: string;
    slug: string;
    desc: string;
    size: string;
  };

  const wallpapers: Wallpaper[] = [
    {
      code: "WP·01",
      name: "Dark",
      slug: "dark",
      desc: "Near-black graphite, hairline red crosshair.",
      size: "8.9 MB",
    },
    {
      code: "WP·02",
      name: "Carta",
      slug: "carta",
      desc: "Millimetre paper, ivory and faded red. The classic block.",
      size: "7.9 MB",
    },
    {
      code: "WP·03",
      name: "Cutting",
      slug: "cutting",
      desc: "Self-healing cutting mat, workshop green.",
      size: "9.2 MB",
    },
    {
      code: "WP·04",
      name: "Blueprint",
      slug: "blueprint",
      desc: "Deep cyanotype blue, white construction lines.",
      size: "9.0 MB",
    },
    {
      code: "WP·05",
      name: "ESD",
      slug: "esd",
      desc: "The anti-static mat under every electronics bench.",
      size: "9.4 MB",
    },
    {
      code: "WP·06",
      name: "Banco",
      slug: "banco",
      desc: "The bench at night: near-black, one amber line.",
      size: "8.1 MB",
    },
    {
      code: "WP·07",
      name: "Gruvbox",
      slug: "gruvbox",
      desc: "Warm greys tuned to gruvbox terminals.",
      size: "6.2 MB",
    },
    {
      code: "WP·08",
      name: "Nord",
      slug: "nord",
      desc: "Cold slate tuned to nord setups.",
      size: "8.9 MB",
    },
    {
      code: "WP·09",
      name: "Patina",
      slug: "patina",
      desc: "Oxidised olive, copper crosshair.",
      size: "9.2 MB",
    },
    {
      code: "WP·10",
      name: "Tecnica",
      slug: "tecnica",
      desc: "Pale drafting sheet, blue capillary grid.",
      size: "6.8 MB",
    },
  ];

  const file = (w: Wallpaper) =>
    `/images/wallpapers/gridmat-${w.slug}-3840x2160.png`;
  const preview = (w: Wallpaper) =>
    `/images/wallpapers/previews/${w.slug}.webp`;
</script>

<Seo
  title="Wallpapers"
  description="Ten grid-paper wallpapers from the workshop: millimetre grids, bench mats and blueprint blues. 3840×2160 PNG, free to download."
  image="/images/wallpapers/og.png"
/>

<article>
  <p class="breadcrumb">
    &mdash; OFF THE BENCH /
    <span class="current">SHEET DS&middot;WS&middot;11</span> &middot; REV 01 &middot;
    2026&ndash;09
  </p>
  <h1>Wallpapers</h1>
  <p class="lead">
    I change wallpaper often and rarely find the one I want &mdash; so I made
    these. Grid paper for screens: millimetre grids, bench mats, blueprint
    blues. Ten palettes, the spiral mark dead centre, a stamp in the corner.
  </p>

  <div class="ruler-slot">
    <RulerDivider label="BATCH 01 — GRIDMAT · 10 SHEETS · 3840×2160" />
  </div>

  <div class="grid">
    {#each wallpapers as w}
      <div class="card">
        <a class="plate" href={file(w)} download>
          <img
            src={preview(w)}
            alt="{w.name} — {w.desc}"
            width="1600"
            height="900"
            loading="lazy"
            decoding="async"
          />
        </a>
        <div class="body">
          <div class="card-head">
            <span class="code">{w.code}</span>
            <span class="tag">PNG &middot; {w.size}</span>
          </div>
          <h3>{w.name}</h3>
          <p class="desc">{w.desc}</p>
          <div class="card-foot">
            <a class="action" href={file(w)} download>DOWNLOAD &rarr;</a>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <p class="note">
    &#8627; free to take &mdash; &copy; dannyspina.com in the corner.
  </p>
</article>

<style lang="scss" scoped>
  article {
    padding: 56px 48px 56px 48px;

    @media screen and (max-width: $breakpoint-mobile) {
      padding: 32px 20px 32px 20px;
    }
  }

  .breadcrumb {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    color: var(--ds-color-ink-muted);
    margin: 0 0 20px 0;

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
    margin: 0 0 40px 0;

    @media screen and (max-width: $breakpoint-mobile) {
      font-size: 16px;
      margin-bottom: 28px;
    }
  }

  .ruler-slot {
    margin-bottom: 40px;

    @media screen and (max-width: $breakpoint-mobile) {
      margin-bottom: 28px;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media screen and (max-width: $breakpoint-mobile) {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }

  .card {
    background: var(--ds-color-bg-raised);
    border: 1px solid var(--ds-color-line-soft);
    display: flex;
    flex-direction: column;
  }

  .plate {
    display: block;
    border-bottom: 1px solid var(--ds-color-line-soft);

    img {
      display: block;
      width: 100%;
      height: auto;
      transition: filter var(--ds-motion-shutter) var(--ds-ease-mechanical);
    }

    &:hover img {
      filter: brightness(1.08);
    }
  }

  .body {
    padding: 20px 24px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
  }

  .card-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-family: var(--ds-font-mono);
    font-size: 11px;
    letter-spacing: var(--ds-tracking-label);

    .code {
      color: var(--ds-color-brass);
    }

    .tag {
      color: var(--ds-color-ink-faint);
    }
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }

  .desc {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    line-height: 1.6;
    color: var(--ds-color-ink-muted);
    margin: 0;
    flex: 1;
  }

  .card-foot {
    display: flex;
    align-items: baseline;
    gap: 16px;
    flex-wrap: wrap;
  }

  .action {
    font-family: var(--ds-font-mono);
    font-size: 11.5px;
    color: var(--ds-color-brass);
    border-bottom: none;

    &:hover {
      color: var(--ds-color-ink);
    }
  }

  .note {
    margin: 40px 0 0 0;
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    color: var(--ds-color-ink-faint);
  }
</style>
