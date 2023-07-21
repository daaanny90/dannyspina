<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    dispatch("menuOpen", isMenuOpen);
  }
</script>

<div class="menu cross menu--1">
  <label>
    <input type="checkbox" on:click={toggleMenu} />
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
      <path class="line--2" d="M0 50h70" />
      <path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
    </svg>
  </label>
</div>

<style lang="scss">
  input {
    display: none;
  }

  .cross {
    position: relative;

    @media screen and (min-width: $breakpoint-mobile) and (orientation: portrait) {
      display: none;
    }

    @media screen and (min-height: 530px) and (orientation: landscape) {
      display: none;
    }
  }

  label {
    display: block;
    cursor: pointer;
    width: 7rem;
    height: 7rem;
    font-size: 2rem;
    position: absolute;
    top: -9rem;
    right: -15px;
    z-index: 250;
  }

  path {
    fill: none;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    --length: 24;
    --offset: -38;
    stroke-dasharray: var(--length) var(--total-length);
    stroke-dashoffset: var(--offset);
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);

    &.line--1,
    &.line--2,
    &.line--3 {
      stroke: var(--text-color);
    }
  }

  .cross input:checked + svg {
    .line--1,
    .line--3 {
      --length: 22.627416998;
      stroke: var(--background-color);
    }
    .line--2 {
      --length: 0;
      stroke: var(--background-color);
    }
  }

  .menu--1 {
    background-color: var(--background-color);
    .line--1,
    .line--3 {
      --total-length: 126.64183044433594;
    }
    .line--2 {
      --total-length: 70;
    }
    input:checked + svg {
      .line--1,
      .line--3 {
        --offset: -94.1149185097;
      }
      .line--2 {
        --offset: -50;
      }
    }
  }
</style>
