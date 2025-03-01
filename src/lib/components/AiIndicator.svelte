<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  const iconsPath = "../icons";

  export let humanLevel: 100 | 90 | 50 | 10 = 100;
  let aiIndicatorClass = "hide";
  let icon = "";
  let theme = "dark";

  onMount(() => {
    theme = document.documentElement.getAttribute("data-theme");

    setTimeout(() => {
      switch (humanLevel) {
        case 100:
          aiIndicatorClass = "human";
          break;
        case 90:
          aiIndicatorClass = "proof";
          break;
        case 50:
          aiIndicatorClass = "mix";
          break;
        case 10:
          aiIndicatorClass = "ai";
          break;
      }
    }, 500);

    // Observe changes to the data-theme attribute
    const observer = new MutationObserver(() => {
      theme = document.documentElement.getAttribute("data-theme");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  });
</script>

<div class="AI" on:click={() => goto("/ai")} on:keypress={() => goto("/ai")}>
  <div class="indicator-container">
    <span>Human content: {humanLevel}%</span>
    <span class="ai-indicator {aiIndicatorClass}" />
  </div>
</div>

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

  .AI {
    display: flex;
    width: 12rem;
    height: 3rem;
    scale: 1;
    transition: scale 0.3s ease-in-out;
    &:hover {
      scale: 1.1;
      transition: scale 0.3s ease-in-out;
      cursor: pointer;
    }

    .indicator-container {
      display: flex;
      flex-direction: column;
      font-size: 0.6rem;
      color: var(--accent-color);
      font-family: "JetBrains Mono", sans-serif;
      justify-content: flex-end;

      @media only screen and (max-width: 600px) {
        justify-content: center;
      }
    }

    .ai-indicator {
      border: 1px solid var(--accent-color);
      width: 103px;
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
        background-color: var(--accent-color);
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
  }
</style>
