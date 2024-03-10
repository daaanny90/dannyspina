<script lang="ts">
  export let file: string;
  export let alt: string;
  export let caption = "";
  export let credits = "";
  export let info = ""; // like the camera used to shoot the picture
  export let position: "" | "center" = "";
  export let gallery = false; // use it if the image must be part of a gallery (image grid)
  export let external = false; // use it if the image is an external link

  credits = credits ? `${credits}` : "";

  const separator = caption && credits ? "~" : "";
  const src = external ? `${file}` : `../images/${file}`;
</script>

<figure class:gallery class={position}>
  <img {src} {alt} />
  <figcaption>
    <div id="caption-credits-container">
      {caption}
      <span id="separator">{separator}</span>
      {@html credits}
    </div>
    <span id="info">{info}</span>
  </figcaption>
</figure>

<style lang="scss" scoped>
  figure {
    margin: 0;
    z-index: 100;

    img {
      max-height: 80rem;
    }

    &.gallery {
      width: 48%;
      margin-bottom: 1rem;
    }

    &.center {
      margin: 0 auto;
    }
  }

  figcaption {
    font-size: 0.8rem;
    opacity: 0.6;
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    #separator {
      margin: 0 0.2rem;
    }

    #caption-credits-container {
      margin-right: auto;
    }
  }

  img {
    max-width: 100%;
  }
</style>
