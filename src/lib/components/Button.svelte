<script lang="ts">
  export let text: string;
  export let clickFunc: () => unknown;
  export let position: "centered" | "" = "";
  export let styling: "full-width" | "" = "";
</script>

<button 
  class:centered={position === "centered"}
  class:fullWidth={styling === "full-width"}
  on:click={clickFunc}
>
  {text}
</button>

<style>
  button {
    display: block;
    cursor: pointer;
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
    padding: 1rem 1.5rem;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-family: "JetBrains Mono", sans-serif;
    background-color: var(--background-color);
    text-align: center;
  }

  .centered {
    margin: 0 auto;
  }

  .fullWidth {
    width: 100%;
  }
</style>
