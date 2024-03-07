
---
title: 2023 Recap - A personal overview
subtitle: Let's make a year recap
date: "2023-12-31"
categories:
  - "Personal Life"
---

<script lang="ts">
  import ImagePost from "$lib/components/ImagePost.svelte"
  import Gallery from "$lib/components/Gallery.svelte"
  import Sidenote from "$lib/components/Sidenote.svelte"

  const imagesPath = "blog/2023_recap"
</script>

<ImagePost file="{imagesPath}/image.jpg" alt="alt" caption="caption" credits='credits' />

<Gallery>
 <ImagePost file="{imagesPath}/image.jpg" alt="alt" caption="caption" credits='credits' gallery /> 
</Gallery>

<Sidenote text="This is a sidenote"/>
