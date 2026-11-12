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
      value: "Vue &middot; web components<br />works with any framework",
    },
    {
      key: "PRICING",
      value: "fixed quote or monthly<br />agreed before we start",
    },
  ];

  const scope = [
    {
      title: "Design tokens",
      desc: "Colors, type and spacing defined once and used both in Figma and in the code.",
    },
    {
      title: "Component libraries",
      desc: "Web components or components in your framework, whatever fits better.",
    },
    {
      title: "UI architecture",
      desc: "How state, styles and components are organized in the app.",
    },
    {
      title: "Documentation & adoption",
      desc: "Docs and examples for every component, plus rules for contributing.",
    },
  ];

  const procedure = [
    {
      label: "INTAKE",
      desc: "A free 30-minute call where you tell me the problem.",
    },
    {
      label: "INVENTORY",
      desc: "I go through the existing UI and list what's there and what repeats.",
    },
    {
      label: "BUILD",
      desc: "Tokens first, then components, released step by step.",
    },
    {
      label: "HANDOVER",
      desc: "I hand the system over to the team, with docs and contribution rules.",
    },
  ];
</script>

<Seo
  title="Frontend &amp; design systems"
  description="Design systems, design tokens and component libraries, built with Vue or web components and usable with any framework."
  schema={{
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Frontend & design systems",
    serviceType: "Frontend and design systems",
    description: "Design systems, design tokens and component libraries.",
    provider: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
    areaServed: ["IT", "DE", "EU"],
  }}
/>

<ServiceSheet
  sheetRef="DS·SRV·02"
  revNote="REV 01 · 2026–07"
  title="Frontend & design systems"
  lead="In many apps every screen is built a little differently. I turn that into a design system, with tokens, components and docs the whole team can use."
  {scope}
  {tolerances}
  {procedure}
/>
