<script lang="ts">
  export let number: number;
  export let text: string;

  let active = false;
</script>

<span class="sidenote">
  <label 
    on:click={() => active = !active}
    tabindex="0"
    title="Sidenote number {number}"
    aria-describedby="sidenote-{number}"
    on:keypress={() => {if(event.key === 'Enter' || event.key === ' '){event.preventDefault(); active = !active}}}
    aria-label="Show sidenote number {number}">
      [ {number} ]
</label>
  <small class:active><span class="sidenote__content-parenthesis"> (sidenote: </span>{text}<span class="sidenote__content-parenthesis">)</span></small>
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