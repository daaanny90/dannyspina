---
title: How use the same store in different Storybook stories of the same component
subtitle: When a component manipulate the store in different stories, the store state is overwritten for all stories. This is how you can solve this.
date: "2024-03-14"
categories:
  - "Learning"
---

<script lang="ts">
  import ImagePost from "$lib/components/ImagePost.svelte"
  import Gallery from "$lib/components/Gallery.svelte"
  import Sidenote from "$lib/components/Sidenote.svelte"

  const imagesPath = "blog/storybook_7_multiple_pinia"
</script>

<ImagePost file="{imagesPath}/image.jpg" alt="alt" caption="caption" credits='credits' />

<Gallery>
 <ImagePost file="{imagesPath}/image.jpg" alt="alt" caption="caption" credits='credits' gallery /> 
</Gallery>

<Sidenote text="This is a sidenote"/>
