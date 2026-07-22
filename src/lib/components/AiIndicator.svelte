<script lang="ts">
  import { onMount } from "svelte";

  export let humanLevel: 100 | 90 | 50 | 10 = 100;
  /** off on /ai itself, where the indicator is only a legend for the states */
  export let interactive = true;

  let fillClass = "hide";

  onMount(() => {
    setTimeout(() => {
      switch (humanLevel) {
        case 100:
          fillClass = "human";
          break;
        case 90:
          fillClass = "proof";
          break;
        case 50:
          fillClass = "mix";
          break;
        case 10:
          fillClass = "ai";
          break;
      }
    }, 500);
  });
</script>

<svelte:element
  this={interactive ? "a" : "div"}
  class="AI"
  class:link={interactive}
  href={interactive ? "/ai" : undefined}
  title={interactive ? "What this means" : undefined}
>
  <span class="readout">
    <span class="label">HUMAN CONTENT</span>
    <span class="value">{humanLevel}%</span>
    {#if interactive}
      <span class="marker" aria-hidden="true">[?]</span>
      <span class="sr-only">— read what this means</span>
    {/if}
  </span>
  <span class="ai-indicator {fillClass}"></span>
</svelte:element>

<style lang="scss" scoped>
  @keyframes bounce-start {
    0%,
    20%,
    50%,
    80% {
      width: 0;
    }
    40% {
      width: 30%;
    }
    60% {
      width: 15%;
    }
    100% {
      width: 10%;
    }
  }

  @keyframes bounce-end {
    0% {
      width: 0;
    }
    50% {
      width: 100%;
    }
    60% {
      width: 80%;
    }
    70% {
      width: 100%;
    }
    80% {
      width: 95%;
    }
    100% {
      width: 100%;
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .AI {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 12rem;
    font-family: var(--ds-font-mono);
    font-size: 11px;
    letter-spacing: var(--ds-tracking-label);
    border-bottom: none;
  }

  .readout {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }

  .label {
    color: var(--ds-color-ink-muted);
    transition: color var(--ds-motion-shutter) var(--ds-ease-mechanical);
  }

  .value {
    color: var(--ds-color-ink);
    transition: color var(--ds-motion-shutter) var(--ds-ease-mechanical);
  }

  /* footnote reference, same bracket vernacular as the [tag] chips */
  .marker {
    margin-left: auto;
    padding: 1px 3px;
    color: var(--ds-color-brass);
    transition:
      color var(--ds-motion-shutter) var(--ds-ease-mechanical),
      background-color var(--ds-motion-shutter) var(--ds-ease-mechanical);
  }

  .link {
    cursor: pointer;

    &:hover,
    &:focus-visible {
      .label,
      .value {
        color: var(--ds-color-brass);
      }

      /* the marker fills, like a key being pressed */
      .marker {
        background-color: var(--ds-color-brass);
        color: var(--ds-color-on-brass);
      }
    }

    &:focus-visible {
      outline: 1px solid var(--ds-color-brass);
      outline-offset: 5px;
    }
  }

  .ai-indicator {
    border: 1px solid var(--ds-color-brass);
    width: 100%;
    height: 0.7em;
    position: relative;
    display: block;

    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 0;
      background-color: var(--ds-color-brass);
    }

    &.hide {
      &:after {
        opacity: 0;
      }
    }

    &.human {
      &:after {
        width: 100%;
        animation: bounce-end 1s ease;
      }
    }

    &.proof {
      &:after {
        width: 90%;
        transition: width 1s ease;
      }
    }

    &.mix {
      &:after {
        width: 50%;
        transition: width 1s ease;
      }
    }

    &.ai {
      &:after {
        width: 10%;
        animation: bounce-start 1s ease;
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .label,
    .value,
    .marker {
      transition: none;
    }

    .ai-indicator:after {
      animation: none;
      transition: none;
    }
  }
</style>
