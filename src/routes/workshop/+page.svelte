<script lang="ts">
  import RulerDivider from "$lib/components/RulerDivider.svelte";
  import Seo from "$lib/components/Seo.svelte";

  type Item = {
    code: string;
    tag: string;
    title: string;
    desc: string;
    status?: string;
    links?: { label: string; href: string }[];
  };

  const items: Item[] = [
    {
      code: "WS·01",
      tag: "[cameras]",
      title: "Camera repairs",
      desc: "Mechanical cameras disassembled, cleaned and brought back to spec. Six years as a Nikon service technician, kept alive on the bench.",
      status: "on request",
      links: [{ label: "REQUEST A REPAIR →", href: "/contacts" }],
    },
    {
      code: "WS·02",
      tag: "[paper]",
      title: "The repair manual",
      desc: "A book about fixing mechanical cameras — and the method behind fixing anything: measure, disassemble, rebuild, document.",
      status: "manuscript · in progress",
    },
    {
      code: "WS·03",
      tag: "[tool]",
      title: "Forfy",
      desc: "Tax simulator for Italian freelancers under Regime Forfettario: you invoice, Forfy does the math — set-asides, deadlines, the €85k ceiling.",
      links: [{ label: "OPEN →", href: "https://forfy.tax" }],
    },
    {
      code: "WS·04",
      tag: "[tool]",
      title: "Strider",
      desc: "Walking & running app: pick a mission — a real or fictional route — and advance along it by logging your own distance. Community mission catalog on GitHub.",
      links: [
        { label: "OPEN →", href: "https://strider.dannyspina.com" },
        {
          label: "MISSION CATALOG →",
          href: "https://github.com/daaanny90/strider-missions",
        },
      ],
    },
    {
      code: "WS·05",
      tag: "[tool]",
      title: "PitStop",
      desc: "Vehicle maintenance for Android & iOS: services, costs, reminders — the service log, but for your car.",
      status: "coming to the stores",
    },
    {
      code: "WS·06",
      tag: "[tool]",
      title: "NPMGuard",
      desc: "Dependency audit of your package.json: what is outdated, abandoned or risky — before it bites.",
      links: [
        { label: "SOURCE →", href: "https://github.com/daaanny90/npmguard" },
        { label: "LOG ENTRY →", href: "/blog/npmguard" },
      ],
    },
    {
      code: "WS·07",
      tag: "[tool]",
      title: "Blaze",
      desc: "Seamless browsing in challenging conditions: text-first, weight stripped, for when the network is against you.",
      links: [
        { label: "OPEN →", href: "https://blaze.dannyspina.com" },
        { label: "LOG ENTRY →", href: "/blog/blaze" },
      ],
    },
    {
      code: "WS·08",
      tag: "[tool]",
      title: "podshort",
      desc: "Clip generator for podcast episodes — cut shorts out of long recordings without a video editor.",
      links: [
        { label: "SOURCE →", href: "https://github.com/daaanny90/podshort" },
      ],
    },
    {
      code: "WS·09",
      tag: "[tool]",
      title: "JSON.resume",
      desc: "Your CV as a JSON file, versioned and rendered. This is how cv.dannyspina.com is built.",
      links: [
        {
          label: "SOURCE →",
          href: "https://github.com/daaanny90/JSON.resume",
        },
        { label: "LIVE →", href: "https://cv.dannyspina.com" },
      ],
    },
    {
      code: "WS·10",
      tag: "[pixels]",
      title: "claude-desktop.nvim",
      desc: "Warm dark Neovim colorscheme matching the Claude Desktop app. For terminals that live next to it.",
      links: [
        {
          label: "SOURCE →",
          href: "https://github.com/daaanny90/claude-desktop.nvim",
        },
      ],
    },
    {
      code: "WS·11",
      tag: "[pixels]",
      title: "Wallpapers",
      desc: "I change wallpaper often and rarely find the one I'm looking for — so I make them, or generate them with AI. Shared here, free, when they ship.",
      status: "next batch · in progress",
    },
  ];
</script>

<Seo
  title="The workshop"
  description="Off the bench: camera repairs, small tools, colorschemes and wallpapers by Danny Spina."
/>

<article>
  <p class="breadcrumb">
    &mdash; OFF THE BENCH /
    <span class="current">SHEET DS&middot;WS&middot;01</span> &middot; REV 01 &middot;
    2026&ndash;07
  </p>
  <h1>The workshop</h1>
  <p class="lead">
    What leaves the bench when nobody is billing: cameras brought back to spec,
    small tools, pixels, paper. Not billable &mdash; built anyway.
  </p>

  <div class="ruler-slot">
    <RulerDivider label="INVENTORY — CAMERAS · TOOLS · PIXELS · PAPER" />
  </div>

  <div class="grid">
    {#each items as item}
      <div class="card">
        <div class="card-head">
          <span class="code">{item.code}</span>
          <span class="tag">{item.tag}</span>
        </div>
        <h3>{item.title}</h3>
        <p class="desc">{item.desc}</p>
        <div class="card-foot">
          {#if item.links}
            {#each item.links as link}
              <a class="action" href={link.href}>{link.label}</a>
            {/each}
          {/if}
          {#if item.status}
            <span class="status">{item.status}</span>
          {/if}
        </div>
      </div>
    {/each}
  </div>
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
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
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

  .status {
    font-family: var(--ds-font-mono);
    font-size: 11.5px;
    color: var(--ds-color-ink-faint);
  }
</style>
