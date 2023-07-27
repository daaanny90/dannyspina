<script lang="ts">
  import { onMount } from "svelte";

  export let text: string;

  let active = false;
  let sidenote: HTMLElement;
  let noteNumber = 1;

  // necessary for web accessibility purposes
  const keyDownFunc = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      active = !active;
    }
  }

  onMount(() => {
    const sidenotes = document.querySelectorAll('.sidenote');
    const sidenotesArray = Array.from(sidenotes);
    noteNumber = sidenotesArray.indexOf(sidenote, 0) + 1
  })
</script>

<span bind:this={sidenote} class="sidenote">
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label 
    on:click={() => active = !active}
    tabindex="0"
    title="Sidenote number {noteNumber}"
    aria-describedby="sidenote-{noteNumber}"
    on:keydown={keyDownFunc}
    aria-label="Show sidenote number {noteNumber}">
      [ {noteNumber} ]
</label>
  <small class:active><span class="sidenote__content-parenthesis"> (sidenote: </span>{@html text}<span class="sidenote__content-parenthesis">)</span></small>
</span>

<style lang="scss" scoped>
  span.sidenote__content-parenthesis {
    left: -99999px;
    position: absolute;
    top: auto;
  }
.sidenote {
  small {
    position: absolute;
    left: -99999px;
    top: auto;
    font-size: .875rem;
    min-width: 100%;
    color: var(--text-color);
    
    &.active {
      float: left;
      margin: 1rem 0 1rem;
      padding: 1rem;
      border-left: 2px solid var(--accent-color);
      position: relative;
      left: auto;
    }
  }
}

label {
  position: relative;
  cursor: pointer;
  color: var(--accent-color);
  top: -5px;
  font-size: .7rem;
}
</style>