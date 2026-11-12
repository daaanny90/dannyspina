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
      value: "any modern web stack<br />deepest: TypeScript &middot; Vue",
    },
    {
      key: "PRICING",
      value: "fixed quote or monthly<br />agreed before we start",
    },
  ];

  const scope = [
    {
      title: "Feature development",
      desc: "New features, from the data model to the UI.",
    },
    {
      title: "Architecture & refactoring",
      desc: "Cleaning up the parts of the code that slow the team down.",
    },
    {
      title: "Frontend & design systems",
      desc: "Most of my work is here: UI architecture, component libraries and tokens.",
    },
    {
      title: "Maintenance",
      desc: "Upgrades, dependency updates, performance and bug fixes.",
    },
  ];

  const procedure = [
    {
      label: "INTAKE",
      desc: "A free 30-minute call where you tell me the problem.",
    },
    {
      label: "MEASURE",
      desc: "I read the codebase before promising anything.",
    },
    {
      label: "BUILD",
      desc: "Features, refactors and fixes in small steps that are easy to review.",
    },
    {
      label: "DOCUMENT",
      desc: "I write down the important decisions and the reasons behind them.",
    },
  ];
</script>

<Seo
  title="Software development"
  description="Web software development: new features, refactoring and maintenance for TypeScript and Vue codebases."
  schema={{
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Software development",
    serviceType: "Web software development",
    description:
      "Features, architecture and maintenance for TypeScript and Vue codebases.",
    provider: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
    areaServed: ["IT", "DE", "EU"],
  }}
/>

<ServiceSheet
  sheetRef="DS·SRV·01"
  revNote="REV 02 · 2026–07"
  title="Software development"
  lead="I join your team and work on the code with you, from new features to maintenance."
  {scope}
  {tolerances}
  {procedure}
/>
