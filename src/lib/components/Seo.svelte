<script lang="ts">
  import { page } from "$app/stores";
  import {
    SITE_NAME,
    SITE_URL,
    AUTHOR_NAME,
    DEFAULT_DESCRIPTION,
    DEFAULT_OG_IMAGE,
    absoluteUrl,
  } from "$lib/siteConfig";

  export let title: string;
  export let description: string = DEFAULT_DESCRIPTION;
  export let type: "website" | "article" = "website";
  export let image: string = DEFAULT_OG_IMAGE;
  export let publishedAt = ""; // ISO date, articles only
  export let tags: string[] = [];
  export let noindex = false;
  // extra structured data (Person, Book, …) merged next to the page's own
  export let schema: Record<string, unknown> | null = null;

  // the home title already carries the name; everything else gets the suffix
  $: fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
  $: canonical = absoluteUrl(
    $page.url.pathname.replace(/\/+$/, "") || "/", // trailing slashes 301 away
  );
  $: ogImage = absoluteUrl(image);

  $: articleSchema =
    type === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          description,
          url: canonical,
          mainEntityOfPage: canonical,
          image: ogImage,
          ...(publishedAt ? { datePublished: publishedAt } : {}),
          ...(tags.length ? { keywords: tags.join(", ") } : {}),
          author: { "@type": "Person", name: AUTHOR_NAME, url: SITE_URL },
          publisher: { "@type": "Person", name: AUTHOR_NAME, url: SITE_URL },
        }
      : null;

  $: graph = [articleSchema, schema].filter(Boolean);

  // Svelte parses a literal <script> tag as component code, so JSON-LD has to
  // be injected as raw text; "<" is escaped so no payload can close the tag.
  $: jsonLd = graph.length
    ? `<script type="application/ld+json">${JSON.stringify(
        graph.length === 1 ? graph[0] : graph,
      ).replace(/</g, "\\u003c")}<\/script>`
    : "";
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  {#if noindex}
    <!-- no canonical: pairing it with noindex is a contradictory signal -->
    <meta name="robots" content="noindex, follow" />
  {:else}
    <link rel="canonical" href={canonical} />
  {/if}

  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:type" content={type} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="en_US" />

  {#if type === "article"}
    {#if publishedAt}
      <meta property="article:published_time" content={publishedAt} />
    {/if}
    <meta property="article:author" content={AUTHOR_NAME} />
    {#each tags as tag}
      <meta property="article:tag" content={tag} />
    {/each}
  {/if}

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />

  {@html jsonLd}
</svelte:head>
