<script lang="ts">
  import ServiceSheet from "$lib/components/ServiceSheet.svelte";

  const tolerances = [
    { key: "ENGAGEMENT", value: "2 weeks &ndash; ongoing" },
    { key: "MODE", value: "remote-first<br />on-site IT / DE" },
    { key: "LANGUAGES", value: "IT &middot; DE &middot; EN" },
    {
      key: "COMPATIBILITY",
      value: "Vue &middot; web components<br />framework-agnostic by design",
    },
    {
      key: "PRICING",
      value: "fixed quote or monthly<br />agreed at intake, no surprises",
    },
  ];

  const scope = [
    {
      title: "Design tokens",
      desc: "Color, type, spacing as one source of truth — from Figma to production.",
    },
    {
      title: "Component libraries",
      desc: "Web components or framework-native, built to survive team turnover.",
    },
    {
      title: "UI architecture",
      desc: "State, styling, composition: structure that scales past the third screen.",
    },
    {
      title: "Documentation & adoption",
      desc: "A system nobody uses is a folder. Docs, examples, contribution rules.",
    },
  ];

  const procedure = [
    { label: "INTAKE", desc: "30-minute call, free. You state the problem." },
    {
      label: "INVENTORY",
      desc: "Audit of the existing UI: what exists, what repeats, what drifts.",
    },
    {
      label: "BUILD",
      desc: "Tokens first, then components — shipped incrementally, never big-bang.",
    },
    {
      label: "HANDOVER",
      desc: "Docs and contribution rules. The team owns it, not me.",
    },
  ];
</script>

<svelte:head>
  <title>Frontend & design systems — Danny Spina</title>
  <meta
    name="description"
    content="Design systems, design tokens and component libraries that survive team turnover — built in Vue and web components, framework-agnostic by design."
  />
</svelte:head>

<ServiceSheet
  sheetRef="DS·SRV·02"
  revNote="REV 01 · 2026–07"
  title="Frontend & design systems"
  lead="For interfaces that grew one exception at a time. I turn scattered screens into a system: tokens, components and documentation that hold up when the team changes."
  {scope}
  {tolerances}
  {procedure}
/>
