<script lang="ts">
  import ServiceSheet from "$lib/components/ServiceSheet.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import { SITE_NAME, SITE_URL } from "$lib/siteConfig";

  const tolerances = [
    { key: "ENGAGEMENT", value: "2 weeks &ndash; ongoing" },
    { key: "MODE", value: "remote-first<br />on-site IT / DE" },
    { key: "LANGUAGES", value: "IT &middot; DE &middot; EN" },
    {
      key: "COMPATIBILITY",
      value: "Figma &middot; design tokens<br />your stack, your tools",
    },
    {
      key: "PRICING",
      value: "fixed quote or monthly<br />agreed at intake, no surprises",
    },
  ];

  const scope = [
    {
      title: "Token pipeline",
      desc: "Design decisions as code: from Figma variables into CI, drift caught early.",
    },
    {
      title: "Handoff & workflows",
      desc: "Specs developers actually read; reviews that catch problems before release.",
    },
    {
      title: "Tooling",
      desc: "Figma-to-code bridges, linting, scaffolds — the boring glue that saves weeks.",
    },
    {
      title: "Process & rituals",
      desc: "Design reviews, contribution flows, naming that sticks after I leave.",
    },
  ];

  const procedure = [
    { label: "INTAKE", desc: "30-minute call, free. You state the problem." },
    {
      label: "OBSERVE",
      desc: "I watch how design ships today — where it stalls. Numbers, not impressions.",
    },
    {
      label: "WIRE",
      desc: "Tokens, tooling, handoff — connected one piece at a time.",
    },
    {
      label: "EMBED",
      desc: "Rituals documented and rehearsed. The team runs it without me.",
    },
  ];
</script>

<Seo
  title="Design ops"
  description="Design ops: token pipelines, Figma-to-code workflows and rituals that bridge design and engineering teams."
  schema={{
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Design ops",
    serviceType: "Design ops",
    description:
      "Token pipelines, Figma-to-code workflows and rituals that bridge design and engineering teams.",
    provider: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
    areaServed: ["IT", "DE", "EU"],
  }}
/>

<ServiceSheet
  sheetRef="DS·SRV·03"
  revNote="REV 01 · 2026–07"
  title="Design ops"
  lead="For teams where design and engineering ship past each other. I build the bridge: shared tokens, working handoffs, and rituals that survive the next deadline."
  {scope}
  {tolerances}
  {procedure}
/>
