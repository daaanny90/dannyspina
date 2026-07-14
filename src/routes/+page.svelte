<script lang="ts">
  import SpecTable from "$lib/components/SpecTable.svelte";
  import RulerDivider from "$lib/components/RulerDivider.svelte";

  export let data;

  const specs = [
    { key: "BASE", value: "Parma, Italy" },
    { key: "LANGUAGES", value: "IT &middot; DE &middot; EN" },
    {
      key: "STACK",
      value: "TypeScript &middot; Vue &middot; Node<br />framework-agnostic",
    },
    {
      key: "BACKGROUND",
      value: "software since 2017<br />13 yrs in Germany",
    },
    {
      key: "FOCUS",
      value: "frontend &middot; design ops",
      brass: true,
    },
  ];

  const services = [
    {
      n: "01",
      title: "Software development",
      desc: "Web software end to end: features, architecture, maintenance.",
      sheet: "DS·SRV·01",
      href: "/services/software-development",
    },
    {
      n: "02",
      title: "Frontend & design systems",
      desc: "Special focus: UI architecture, component libraries that survive team turnover.",
      sheet: "DS·SRV·02",
      href: "/services/frontend-design-systems",
    },
    {
      n: "03",
      title: "Design ops",
      desc: "The bridge between design and engineering teams.",
      sheet: "DS·SRV·03",
      href: "/services/design-ops",
    },
  ];

  const serviceLog = [
    {
      years: "2024–now",
      client: "Herole Services · DE",
      desc: "Frontend architecture rebuild, new design system, design↔engineering processes",
      tag: "[design-ops]",
    },
    {
      years: "2023",
      client: "Zalari · DE",
      desc: "Complex frontend architecture: web components, TypeScript",
      tag: "[front-end]",
    },
    {
      years: "2020–22",
      client: "Ostec · DE",
      desc: "Full stack: Node/TypeScript, Vue, Google Cloud",
      tag: "[full-stack]",
    },
  ];
</script>

<div class="hero">
  <div class="pitch">
    <p class="kicker">SOFTWARE DEVELOPER &middot; WEB &mdash; PARMA, IT</p>
    <h1>Software that stays serviceable.</h1>
    <p class="lead">
      Web software for teams and founders that plan in years, not sprints
      &mdash; with a special focus on frontend and design ops. The framework
      is a detail; the discipline is not.
    </p>
    <div class="cta-row">
      <a class="ds-btn" href="/contacts">WORK WITH ME &rarr;</a>
      <a class="alt-contact" href="mailto:hi@dannyspina.com"
        >or write: hi@dannyspina.com</a
      >
    </div>
  </div>
  <div class="spec-slot">
    <SpecTable title="SPECIFICATIONS" fig="FIG. 0" rows={specs} />
  </div>
</div>

<div class="ruler-slot">
  <RulerDivider
    label="PROCEDURE — MEASURE · DISASSEMBLE · REBUILD · DOCUMENT"
  />
</div>

<section id="services" class="services">
  {#each services as service}
    <div class="service">
      <p class="num">{service.n}</p>
      <div class="body">
        <h3>{service.title}</h3>
        <p class="desc">{service.desc}</p>
        {#if service.sheet}
          <a class="sheet" href={service.href}>SPEC SHEET {service.sheet} &rarr;</a>
        {:else}
          <a class="sheet" href={service.href}>REQUEST SPEC SHEET &rarr;</a>
        {/if}
      </div>
    </div>
  {/each}
  <div class="service bench">
    <p class="num">&mdash;</p>
    <div class="body">
      <h3>Off the bench</h3>
      <p class="desc">
        Writing &middot; Asincrono (IT) &middot; camera workshop &middot; tools
        I build.
      </p>
      <a class="sheet" href="/workshop">OPEN THE WORKSHOP &rarr;</a>
    </div>
  </div>
</section>

<section class="log">
  <div class="section-head">
    <p class="section-label">SERVICE LOG &mdash; EXCERPTS</p>
    <a class="section-note" href="https://cv.dannyspina.com"
      >full record: cv.dannyspina.com &rarr;</a
    >
  </div>
  {#each serviceLog as entry}
    <div class="entry">
      <span class="years">{entry.years}</span>
      <span class="client">{entry.client}</span>
      <span class="desc">{entry.desc}</span>
      <span class="tag">{entry.tag}</span>
    </div>
  {/each}
</section>

<section class="writing">
  <div class="section-head">
    <p class="section-label">02 &mdash; WRITING</p>
    <a class="all" href="/blog">ALL ENTRIES &rarr;</a>
  </div>
  {#each data.posts as post}
    <a class="row" href={post.path}>
      <span class="title">{post.meta.title}</span>
      <span class="leader" />
      <span class="tag">[{post.meta.categories?.[0] ?? "notes"}]</span>
    </a>
  {/each}
  <div class="row podcast">
    <span class="podcast-label"
      >ASINCRONO &mdash; occasional podcast, in Italian</span
    >
    <span class="leader" />
    <a class="listen" href="/asincrono">LISTEN &rarr;</a>
  </div>
</section>

<section class="bench-strip">
  <p class="text">
    <span class="strip-label">OFF THE BENCH &mdash;</span> I also repair
    mechanical cameras, write a book on the method, and build my own bench
    tools: forfy &middot; strider &middot; pit stop.
  </p>
  <a class="workshop" href="/workshop">THE WORKSHOP &rarr;</a>
</section>

<style lang="scss" scoped>
  /* ---- hero ---- */
  .hero {
    display: grid;
    grid-template-columns: 7fr 4fr;
    gap: 56px;
    padding: 80px 48px 64px 48px;

    @media screen and (max-width: $breakpoint-mobile) {
      grid-template-columns: 1fr;
      gap: 32px;
      padding: 40px 20px 32px 20px;
    }
  }

  .kicker {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-s);
    letter-spacing: var(--ds-tracking-label);
    color: var(--ds-color-brass);
    margin: 0 0 24px 0;

    @media screen and (max-width: $breakpoint-mobile) {
      font-size: 11px;
      margin-bottom: 16px;
    }
  }

  h1 {
    font-size: var(--ds-text-display);
    line-height: var(--ds-leading-tight);
    font-weight: 700;
    letter-spacing: -0.025em;
    margin: 0 0 28px 0;

    @media screen and (max-width: $breakpoint-mobile) {
      font-size: 38px;
      line-height: 1.08;
      margin-bottom: 16px;
    }
  }

  .lead {
    font-size: var(--ds-text-lead);
    line-height: var(--ds-leading-text);
    max-width: 50ch;
    margin: 0 0 40px 0;
    color: var(--ds-color-ink-muted);

    @media screen and (max-width: $breakpoint-mobile) {
      font-size: 16px;
      margin-bottom: 24px;
    }
  }

  .cta-row {
    display: flex;
    align-items: center;
    gap: 24px;

    @media screen and (max-width: $breakpoint-mobile) {
      flex-direction: column;
      align-items: stretch;
      gap: 12px;

      :global(.ds-btn) {
        display: block;
        text-align: center;
        padding: 15px 24px;
      }
    }
  }

  .alt-contact {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-s);
    color: var(--ds-color-ink-muted);
    border-bottom: 1px solid rgba(237, 231, 218, 0.3);
    padding-bottom: 2px;

    @media screen and (max-width: $breakpoint-mobile) {
      font-size: 12px;
      text-align: center;
      border-bottom: none;
    }
  }

  .spec-slot {
    align-self: start;
  }

  /* ---- ruler ---- */
  .ruler-slot {
    padding: 0 48px;

    @media screen and (max-width: $breakpoint-mobile) {
      padding: 0 20px;
    }
  }

  /* ---- services ---- */
  .services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    padding: 40px 48px 56px 48px;

    @media screen and (max-width: $breakpoint-mobile) {
      grid-template-columns: 1fr;
      gap: 22px;
      padding: 28px 20px 32px 20px;
    }
  }

  .service {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media screen and (max-width: $breakpoint-mobile) {
      display: grid;
      grid-template-columns: 32px 1fr;
      gap: 12px;
    }
  }

  .num {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-s);
    color: var(--ds-color-brass);
    margin: 0;
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media screen and (max-width: $breakpoint-mobile) {
      gap: 4px;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    margin: 0;

    @media screen and (max-width: $breakpoint-mobile) {
      font-size: 17px;
    }
  }

  .service .desc {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    line-height: 1.6;
    color: var(--ds-color-ink-muted);
    margin: 0;
  }

  .sheet {
    font-family: var(--ds-font-mono);
    font-size: 11.5px;
    color: var(--ds-color-brass);
    margin-top: 4px;
    border-bottom: none;
    align-self: flex-start;

    &:hover {
      color: var(--ds-color-ink);
    }
  }

  .bench {
    .num {
      color: var(--ds-color-ink-faint);
    }

    h3 {
      color: var(--ds-color-ink-muted);
    }

    .desc {
      color: var(--ds-color-ink-faint);
    }
  }

  /* ---- section heads (log / writing) ---- */
  .section-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1px solid var(--ds-color-line);
    padding-bottom: 10px;
  }

  .section-label {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    letter-spacing: var(--ds-tracking-label);
    margin: 0;
  }

  .section-note {
    font-family: var(--ds-font-mono);
    font-size: 11.5px;
    color: var(--ds-color-ink-faint);
    margin: 0;
  }

  a.section-note {
    border-bottom: none;

    &:hover {
      color: var(--ds-color-brass);
    }
  }

  /* ---- service log ---- */
  .log {
    padding: 0 48px 56px 48px;

    @media screen and (max-width: $breakpoint-mobile) {
      padding: 0 20px 32px 20px;
    }
  }

  .entry {
    display: flex;
    align-items: baseline;
    gap: 24px;
    padding: 16px 0;
    border-bottom: 1px dashed rgba(237, 231, 218, 0.22);

    .years {
      font-family: var(--ds-font-mono);
      font-size: var(--ds-text-s);
      color: var(--ds-color-ink-muted);
      width: 90px;
      flex: none;
    }

    .client {
      font-size: 16px;
      font-weight: 600;
      width: 240px;
      flex: none;
    }

    .desc {
      font-size: 14.5px;
      color: var(--ds-color-ink-muted);
      flex: 1;
    }

    .tag {
      font-family: var(--ds-font-mono);
      font-size: var(--ds-text-xs);
      color: var(--ds-color-brass);
    }

    @media screen and (max-width: $breakpoint-mobile) {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3px;
      padding: 12px 0;

      .years,
      .client {
        width: auto;
      }

      .years {
        font-size: 11px;
      }

      .desc {
        font-size: 14.5px;
      }

      .tag {
        font-size: 11px;
      }
    }
  }

  /* ---- writing ---- */
  .writing {
    padding: 0 48px 56px 48px;

    @media screen and (max-width: $breakpoint-mobile) {
      display: none;
    }
  }

  .writing .all {
    font-family: var(--ds-font-mono);
    font-size: 11.5px;
    color: var(--ds-color-brass);
    border-bottom: none;

    &:hover {
      color: var(--ds-color-ink);
    }
  }

  .row {
    display: flex;
    align-items: baseline;
    gap: 20px;
    padding: 14px 0;
    border-bottom: 1px dashed rgba(237, 231, 218, 0.22);

    &:last-child {
      border-bottom: none;
    }
  }

  a.row {
    border-bottom: 1px dashed rgba(237, 231, 218, 0.22);

    &:hover {
      color: inherit;

      .title {
        color: var(--ds-color-brass);
      }
    }
  }

  .row .title {
    font-size: var(--ds-text-body);
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 70%;
  }

  .leader {
    flex: 1;
    border-bottom: 1px dotted rgba(237, 231, 218, 0.3);
    transform: translateY(-4px);
  }

  .row .tag {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    color: var(--ds-color-ink-muted);
  }

  .podcast-label {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-s);
    color: var(--ds-color-ink-muted);
  }

  .listen {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    color: var(--ds-color-brass);
    border-bottom: none;

    &:hover {
      color: var(--ds-color-ink);
    }
  }

  /* ---- off the bench strip ---- */
  .bench-strip {
    margin: 0 48px 56px 48px;
    border: 1px solid var(--ds-color-line-soft);
    background: var(--ds-color-bg-raised);
    padding: 24px 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;

    @media screen and (max-width: $breakpoint-mobile) {
      display: none;
    }
  }

  .bench-strip .text {
    font-size: 14.5px;
    line-height: 1.6;
    color: var(--ds-color-ink-muted);
    margin: 0;
    max-width: 72ch;
  }

  .strip-label {
    font-family: var(--ds-font-mono);
    font-size: 11.5px;
    color: var(--ds-color-ink-faint);
    letter-spacing: 0.08em;
  }

  .workshop {
    font-family: var(--ds-font-mono);
    font-size: 11.5px;
    color: var(--ds-color-ink-muted);
    white-space: nowrap;
    border-bottom: none;

    &:hover {
      color: var(--ds-color-brass);
    }
  }
</style>
