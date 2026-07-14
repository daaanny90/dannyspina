<script lang="ts">
  import ServiceSheet from "$lib/components/ServiceSheet.svelte";

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
      value: "fixed quote or monthly<br />agreed at intake, no surprises",
    },
  ];

  const scope = [
    {
      title: "Feature development",
      desc: "New capabilities, from data model to UI.",
    },
    {
      title: "Architecture & refactoring",
      desc: "Structure that survives the next three features, not just the demo.",
    },
    {
      title: "Frontend & design systems",
      desc: "The special focus: UI architecture, component libraries, tokens.",
    },
    {
      title: "Maintenance",
      desc: "The unglamorous work: upgrades, dependencies, performance, bugs.",
    },
  ];

  const procedure = [
    { label: "INTAKE", desc: "30-minute call, free. You state the problem." },
    {
      label: "MEASURE",
      desc: "I read the codebase before promising anything. Numbers, not impressions.",
    },
    {
      label: "BUILD",
      desc: "Features, refactors, fixes — shipped in small, reviewable steps.",
    },
    {
      label: "DOCUMENT",
      desc: "Decision records your next hire can read without a guide.",
    },
  ];
</script>

<svelte:head>
  <title>Software development — Danny Spina</title>
  <meta
    name="description"
    content="Software development for the web: features, architecture and maintenance for TypeScript and Vue codebases, with a special focus on frontend and design ops."
  />
</svelte:head>

<ServiceSheet
  sheetRef="DS·SRV·01"
  revNote="REV 02 · 2026–07"
  title="Software development"
  lead="For products that grew faster than their structure. I open the codebase, measure what is actually there, and build what is missing — features, refactors, maintenance — with your team, not instead of it."
  {scope}
  {tolerances}
  {procedure}
/>
