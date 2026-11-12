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
      value: "Figma &middot; design tokens<br />the tools you already use",
    },
    {
      key: "PRICING",
      value: "fixed quote or monthly<br />agreed before we start",
    },
  ];

  const scope = [
    {
      title: "Token pipeline",
      desc: "Figma variables exported as code and checked in CI.",
    },
    {
      title: "Handoff & workflows",
      desc: "Short specs and reviews that catch problems before release.",
    },
    {
      title: "Tooling",
      desc: "Plugins and scripts between Figma and code, plus linting and project templates.",
    },
    {
      title: "Process & rituals",
      desc: "Regular design reviews, contribution rules and naming conventions.",
    },
  ];

  const procedure = [
    {
      label: "INTAKE",
      desc: "A free 30-minute call where you tell me the problem.",
    },
    {
      label: "OBSERVE",
      desc: "I look at how design gets into code today and where it gets stuck.",
    },
    {
      label: "WIRE",
      desc: "I connect tokens, tools and handoff one piece at a time.",
    },
    {
      label: "EMBED",
      desc: "I write down the process and try it with the team until it works without me.",
    },
  ];
</script>

<Seo
  title="Design ops"
  description="Design ops: token pipelines, Figma-to-code workflows and processes that help designers and developers work together."
  schema={{
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Design ops",
    serviceType: "Design ops",
    description:
      "Token pipelines, Figma-to-code workflows and processes that help designers and developers work together.",
    provider: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
    areaServed: ["IT", "DE", "EU"],
  }}
/>

<ServiceSheet
  sheetRef="DS·SRV·03"
  revNote="REV 01 · 2026–07"
  title="Design ops"
  lead="I help designers and developers work from the same tokens and the same specs. Most of the time I start with the handoff between the two."
  {scope}
  {tolerances}
  {procedure}
/>
