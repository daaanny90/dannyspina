<script lang="ts">
  export let file: string;
  export let alt: string;
  export let caption = "";
  export let credits = "";

  credits = credits ? `<span>${credits}</span>` : ''

  const separator = caption && credits ? "~" : "";
</script>

<figure>
  <img src="../images/{file}" {alt} />
  <figcaption>
    {caption}
    {separator}
    {@html credits}
  </figcaption>
</figure>

<style>
  figure {
    margin: 0;
    z-index: 100;
  }

  figcaption {
    font-size: 0.8rem;
    opacity: 0.6;
  }

  img {
    max-width: 100%;
  }
</style>
