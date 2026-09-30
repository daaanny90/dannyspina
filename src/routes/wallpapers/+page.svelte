<script lang="ts">
  import RulerDivider from "$lib/components/RulerDivider.svelte";
  import Seo from "$lib/components/Seo.svelte";

  type Wallpaper = {
    code: string;
    name: string;
    slug: string;
    file: string;
    desc: string;
    size: string;
  };

  type Series = {
    n: string;
    dir: string;
    title: string;
    blurb: string;
    items: Wallpaper[];
  };

  const series: Series[] = [
    {
      n: "01",
      dir: "gridmat",
      title: "Gridmat",
      blurb: "The bench mat: millimetre grid, crosshair, translucent mark.",
      items: [
        {
          code: "WP·01",
          name: "Dark",
          slug: "dark",
          file: "gridmat-dark-3840x2160.png",
          desc: "Near-black graphite, hairline red crosshair.",
          size: "8.9 MB",
        },
        {
          code: "WP·02",
          name: "Carta",
          slug: "carta",
          file: "gridmat-carta-3840x2160.png",
          desc: "Millimetre paper, ivory and faded red. The classic block.",
          size: "7.9 MB",
        },
        {
          code: "WP·03",
          name: "Cutting",
          slug: "cutting",
          file: "gridmat-cutting-3840x2160.png",
          desc: "Self-healing cutting mat, workshop green.",
          size: "9.2 MB",
        },
        {
          code: "WP·04",
          name: "Blueprint",
          slug: "blueprint",
          file: "gridmat-blueprint-3840x2160.png",
          desc: "Deep cyanotype blue, white construction lines.",
          size: "9.0 MB",
        },
        {
          code: "WP·05",
          name: "ESD",
          slug: "esd",
          file: "gridmat-esd-3840x2160.png",
          desc: "The anti-static mat under every electronics bench.",
          size: "9.4 MB",
        },
        {
          code: "WP·06",
          name: "Banco",
          slug: "banco",
          file: "gridmat-banco-3840x2160.png",
          desc: "The bench at night: near-black, one amber line.",
          size: "8.1 MB",
        },
        {
          code: "WP·07",
          name: "Gruvbox",
          slug: "gruvbox",
          file: "gridmat-gruvbox-3840x2160.png",
          desc: "Warm greys tuned to gruvbox terminals.",
          size: "6.2 MB",
        },
        {
          code: "WP·08",
          name: "Nord",
          slug: "nord",
          file: "gridmat-nord-3840x2160.png",
          desc: "Cold slate tuned to nord setups.",
          size: "8.9 MB",
        },
        {
          code: "WP·09",
          name: "Patina",
          slug: "patina",
          file: "gridmat-patina-3840x2160.png",
          desc: "Oxidised olive, copper crosshair.",
          size: "9.2 MB",
        },
        {
          code: "WP·10",
          name: "Tecnica",
          slug: "tecnica",
          file: "gridmat-tecnica-3840x2160.png",
          desc: "Pale drafting sheet, blue capillary grid.",
          size: "6.8 MB",
        },
      ],
    },
    {
      n: "02",
      dir: "grosse",
      title: "Grosse",
      blurb: "The mark oversized, cropped at the corner. Letterhead style.",
      items: [
        {
          code: "WP·11",
          name: "Graphite",
          slug: "grosse",
          file: "wp-grosse-3840x2160.png",
          desc: "Grey on graphite.",
          size: "7.1 MB",
        },
        {
          code: "WP·12",
          name: "Light",
          slug: "light",
          file: "wp-grosse-light-3840x2160.png",
          desc: "Grey arc on ivory.",
          size: "6.6 MB",
        },
        {
          code: "WP·13",
          name: "Cobalt",
          slug: "cobalt",
          file: "wp-grosse-cobalt-3840x2160.png",
          desc: "Cobalt on cobalt.",
          size: "7.4 MB",
        },
        {
          code: "WP·14",
          name: "Cream cobalt",
          slug: "cream-cobalt",
          file: "wp-grosse-cream-cobalt-3840x2160.png",
          desc: "Cobalt arc on cream.",
          size: "5.5 MB",
        },
        {
          code: "WP·15",
          name: "Forest",
          slug: "forest",
          file: "wp-grosse-forest-3840x2160.png",
          desc: "Forest on forest.",
          size: "7.5 MB",
        },
        {
          code: "WP·16",
          name: "Oxblood",
          slug: "oxblood",
          file: "wp-grosse-oxblood-3840x2160.png",
          desc: "Oxblood on oxblood.",
          size: "7.4 MB",
        },
        {
          code: "WP·17",
          name: "Plum teal",
          slug: "plum-teal",
          file: "wp-grosse-plum-teal-3840x2160.png",
          desc: "Teal arc on plum.",
          size: "7.5 MB",
        },
        {
          code: "WP·18",
          name: "Coral",
          slug: "coral",
          file: "wp-grosse-coral-3840x2160.png",
          desc: "Terracotta arc on ink.",
          size: "6.5 MB",
        },
        {
          code: "WP·19",
          name: "Sulphur",
          slug: "sulphur",
          file: "wp-grosse-sulphur-3840x2160.png",
          desc: "Sulphur arc on ink.",
          size: "7.4 MB",
        },
        {
          code: "WP·20",
          name: "Brass left",
          slug: "brass-left",
          file: "wp-grosse-brass-left-3840x2160.png",
          desc: "The arc set left, low light.",
          size: "7.1 MB",
        },
      ],
    },
    {
      n: "03",
      dir: "graphic-lines",
      title: "Graphic lines",
      blurb: "Construction lines, contours and orbits around the mark.",
      items: [
        {
          code: "WP·21",
          name: "Bisect ink",
          slug: "bisect-ink",
          file: "wp-gfx-bisect-ink-3840x2160.png",
          desc: "Solid brass mark, one bisecting line.",
          size: "4.3 MB",
        },
        {
          code: "WP·22",
          name: "Outline ink",
          slug: "outline-ink",
          file: "wp-gfx-outline-ink-3840x2160.png",
          desc: "Double-line brass outline on ink.",
          size: "4.4 MB",
        },
        {
          code: "WP·23",
          name: "Contour graphite",
          slug: "contour-graphite",
          file: "wp-gfx-contour-graphite-3840x2160.png",
          desc: "Brass outline in a contour field, ink.",
          size: "5.0 MB",
        },
        {
          code: "WP·24",
          name: "Contour blue",
          slug: "contour-blue",
          file: "wp-gfx-contour-blue-3840x2160.png",
          desc: "White outline in a contour field, navy.",
          size: "5.0 MB",
        },
        {
          code: "WP·25",
          name: "Orbit blue",
          slug: "orbit-blue",
          file: "wp-gfx-orbit-blue-3840x2160.png",
          desc: "Pale mark with orbit rings, navy.",
          size: "4.5 MB",
        },
        {
          code: "WP·26",
          name: "Repeat graphite",
          slug: "repeat-graphite",
          file: "wp-gfx-repeat-graphite-3840x2160.png",
          desc: "Tiled micro marks, one in brass.",
          size: "4.2 MB",
        },
        {
          code: "WP·27",
          name: "Stack warm",
          slug: "warm",
          file: "wp-gfx-stack-warm-3840x2160.png",
          desc: "Sunset bands, ivory mark.",
          size: "4.0 MB",
        },
      ],
    },
    {
      n: "04",
      dir: "stack",
      title: "Stack",
      blurb: "Stripe stacks: the '77 rainbow and its landscapes.",
      items: [
        {
          code: "WP·28",
          name: "Apple 77",
          slug: "apple77",
          file: "wp-stack-apple77-3840x2160.png",
          desc: "The '77 stripes, horizontal.",
          size: "4.3 MB",
        },
        {
          code: "WP·29",
          name: "Apple vertical",
          slug: "apple-vertical",
          file: "wp-stack-apple-vertical-3840x2160.png",
          desc: "The '77 stripes, vertical.",
          size: "4.6 MB",
        },
        {
          code: "WP·30",
          name: "Apple crop",
          slug: "apple-crop",
          file: "wp-stack-apple-crop-3840x2160.png",
          desc: "The '77 stripes, mark blown up.",
          size: "4.3 MB",
        },
        {
          code: "WP·31",
          name: "Apple muted",
          slug: "apple-muted",
          file: "wp-stack-apple-muted-3840x2160.png",
          desc: "The '77 stripes, faded.",
          size: "4.0 MB",
        },
        {
          code: "WP·32",
          name: "Sunset",
          slug: "sunset",
          file: "wp-stack-sunset-3840x2160.png",
          desc: "Sunset bands, ivory mark.",
          size: "4.0 MB",
        },
        {
          code: "WP·33",
          name: "Sunset ghost",
          slug: "sunset-ghost",
          file: "wp-stack-sunset-ghost-3840x2160.png",
          desc: "Sunset bands, ghost mark.",
          size: "4.0 MB",
        },
        {
          code: "WP·34",
          name: "Canyon",
          slug: "canyon",
          file: "wp-stack-canyon-3840x2160.png",
          desc: "Canyon strata, ivory mark.",
          size: "4.0 MB",
        },
        {
          code: "WP·35",
          name: "Spectrum cool",
          slug: "spectrum-cool",
          file: "wp-stack-spectrum-cool-3840x2160.png",
          desc: "Cool bands, teal to indigo.",
          size: "4.0 MB",
        },
      ],
    },
    {
      n: "05",
      dir: "aura",
      title: "Aura",
      blurb: "The mark as a slow glow. Soft focus, dark and light.",
      items: [
        {
          code: "WP·36",
          name: "Aurora",
          slug: "aurora",
          file: "wp-aura-aurora-3840x2160.png",
          desc: "Blue-violet glow.",
          size: "8.1 MB",
        },
        {
          code: "WP·37",
          name: "Dusk",
          slug: "dusk",
          file: "wp-aura-dusk-3840x2160.png",
          desc: "Magenta glow.",
          size: "8.0 MB",
        },
        {
          code: "WP·38",
          name: "Tide",
          slug: "tide",
          file: "wp-aura-tide-3840x2160.png",
          desc: "Teal glow.",
          size: "7.7 MB",
        },
        {
          code: "WP·39",
          name: "Solstice",
          slug: "solstice",
          file: "wp-aura-solstice-3840x2160.png",
          desc: "Amber glow.",
          size: "8.1 MB",
        },
        {
          code: "WP·40",
          name: "Mono",
          slug: "mono",
          file: "wp-aura-mono-3840x2160.png",
          desc: "Grey glow.",
          size: "7.6 MB",
        },
        {
          code: "WP·41",
          name: "Chalk",
          slug: "chalk",
          file: "wp-aura-chalk-3840x2160.png",
          desc: "Ivory glow, light mode.",
          size: "4.3 MB",
        },
      ],
    },
    {
      n: "06",
      dir: "subtle",
      title: "Subtle",
      blurb: "Barely there: corner marks, whispers, micro tiles.",
      items: [
        {
          code: "WP·42",
          name: "Whisper graphite",
          slug: "whisper-graphite",
          file: "wp-sub-whisper-graphite-3840x2160.png",
          desc: "A whisper of the arc, graphite.",
          size: "7.0 MB",
        },
        {
          code: "WP·43",
          name: "Whisper cobalt",
          slug: "whisper-cobalt",
          file: "wp-sub-whisper-cobalt-3840x2160.png",
          desc: "A whisper of the arc, cobalt.",
          size: "7.4 MB",
        },
        {
          code: "WP·44",
          name: "Whisper ivory",
          slug: "whisper-ivory",
          file: "wp-sub-whisper-ivory-3840x2160.png",
          desc: "A whisper of the arc, ivory. Light mode.",
          size: "5.9 MB",
        },
        {
          code: "WP·45",
          name: "Edge graphite",
          slug: "edge-graphite",
          file: "wp-sub-edge-graphite-3840x2160.png",
          desc: "The arc off the right edge.",
          size: "6.7 MB",
        },
        {
          code: "WP·46",
          name: "Corner graphite",
          slug: "corner-graphite",
          file: "wp-sub-corner-graphite-3840x2160.png",
          desc: "A small mark in the corner, ink.",
          size: "7.5 MB",
        },
        {
          code: "WP·47",
          name: "Corner forest",
          slug: "corner-forest",
          file: "wp-sub-corner-forest-3840x2160.png",
          desc: "A small mark in the corner, forest.",
          size: "7.9 MB",
        },
        {
          code: "WP·48",
          name: "Tile graphite",
          slug: "tile-graphite",
          file: "wp-sub-tile-graphite-3840x2160.png",
          desc: "Micro marks tiled, graphite.",
          size: "7.2 MB",
        },
        {
          code: "WP·49",
          name: "Tile plum",
          slug: "tile-plum",
          file: "wp-sub-tile-plum-3840x2160.png",
          desc: "Micro marks tiled, plum.",
          size: "7.6 MB",
        },
      ],
    },
    {
      n: "07",
      dir: "poster",
      title: "Poster",
      blurb: "Plates and prints: blueprint, echoes, herringbone.",
      items: [
        {
          code: "WP·50",
          name: "Blueprint",
          slug: "blueprint",
          file: "wp-blueprint-3840x2160.png",
          desc: "The mark as an engineering drawing, spec table included.",
          size: "8.0 MB",
        },
        {
          code: "WP·51",
          name: "Echo",
          slug: "echo",
          file: "wp-echo-3840x2160.png",
          desc: "Concentric echoes of the spiral, brass core.",
          size: "5.0 MB",
        },
        {
          code: "WP·52",
          name: "Herringbone",
          slug: "herringbone",
          file: "wp-herringbone-3840x2160.png",
          desc: "Spina di pesce field, caption strip.",
          size: "3.6 MB",
        },
        {
          code: "WP·53",
          name: "Print",
          slug: "print",
          file: "wp-print-3840x2160.png",
          desc: "Framed plate: coiled spring pin, REV A.",
          size: "7.5 MB",
        },
      ],
    },
  ];

  const href = (s: Series, w: Wallpaper) =>
    `/images/wallpapers/${s.dir}/${w.file}`;
  const preview = (s: Series, w: Wallpaper) =>
    `/images/wallpapers/previews/${s.dir}/${w.slug}.webp`;
</script>

<Seo
  title="Wallpapers"
  description="Fifty-three wallpapers in seven series — grid paper, oversized marks, stripe stacks, auras, whispers and poster plates. 3840×2160 PNG, free to download."
  image="/images/wallpapers/og.png"
/>

<article>
  <p class="breadcrumb">
    &mdash; OFF THE BENCH /
    <span class="current">SHEET DS&middot;WS&middot;11</span> &middot; REV 02 &middot;
    2026&ndash;09
  </p>
  <h1>Wallpapers</h1>
  <p class="lead">
    I change wallpaper often and rarely find the one I want &mdash; so I made
    these. Seven series around the same spiral mark: grid paper, oversized
    crops, construction lines, stripe stacks, slow glows, whispers and poster
    plates. All 3840&times;2160, free to take.
  </p>

  <p class="index">
    {#each series as s, i}
      <a href="#{s.dir}"
        >{s.n} {s.title.toUpperCase()} &middot;{s.items.length}</a
      >{#if i < series.length - 1}<span class="sep"> / </span>{/if}
    {/each}
  </p>

  {#each series as s}
    <section id={s.dir}>
      <div class="ruler-slot">
        <RulerDivider label="SERIES {s.n} · {s.items.length} SHEETS" />
      </div>
      <h2>{s.title}</h2>
      <p class="blurb">{s.blurb}</p>

      <div class="grid">
        {#each s.items as w}
          <div class="card">
            <a class="plate" href={href(s, w)} download>
              <img
                src={preview(s, w)}
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
                <a class="action" href={href(s, w)} download>DOWNLOAD &rarr;</a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </section>
  {/each}

  <p class="note">
    &#8627; free to take &mdash; &copy; dannyspina.com or the lockup in the
    corner, the mark somewhere in the sheet.
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
    margin: 0 0 28px 0;

    @media screen and (max-width: $breakpoint-mobile) {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }

  .index {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    margin: 0 0 48px 0;
    line-height: 2;

    a {
      color: var(--ds-color-brass);
      border-bottom: none;

      &:hover {
        color: var(--ds-color-ink);
      }
    }

    .sep {
      color: var(--ds-color-ink-faint);
    }

    @media screen and (max-width: $breakpoint-mobile) {
      margin-bottom: 32px;
    }
  }

  section {
    margin: 0 0 64px 0;

    &:last-of-type {
      margin-bottom: 0;
    }

    @media screen and (max-width: $breakpoint-mobile) {
      margin-bottom: 48px;
    }
  }

  .ruler-slot {
    margin-bottom: 24px;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.01em;
    margin: 0 0 8px 0;
  }

  .blurb {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    color: var(--ds-color-ink-muted);
    margin: 0 0 24px 0;
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
    margin: 48px 0 0 0;
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    color: var(--ds-color-ink-faint);
  }
</style>
