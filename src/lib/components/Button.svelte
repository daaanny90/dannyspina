<script lang="ts">
  export let text: string;
  export let clickFunc: () => unknown;
  export let position: 'centered' | '' = ''

</script>

<button class:centered={position === 'centered'} on:click={clickFunc}>{text}</button>

<style>
  button {
    display: block;
    cursor: pointer;
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
    padding: .5rem 1rem;
    background-color: var(--background-color);
  }

  .centered {
    margin: 0 auto;
  }
</style>