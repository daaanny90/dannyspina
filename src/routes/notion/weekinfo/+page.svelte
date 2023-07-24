<script lang="ts">
  import { onMount } from "svelte";
  import Calendar from "$lib/helpers/Calendar";

  const calendar = new Calendar();
  let widget;
  let light = false;

  onMount(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams();
    const lightTheme = urlParams.entries;

    console.log(queryString)

    if (queryString.includes("light")) {
      light = true
    }
  });
</script>

<div bind:this={widget} class="background" class:light>
  <h2>
    Today is <u
      >{calendar.getDayName()}
      {calendar.getDayNumber()}
      {calendar.getMonthName()}</u
    >. <br />
  </h2>
  <h5>Week {calendar.getWeekNumber()}</h5>
  <span class="progressBar">
    <span class="progress" style="width: {calendar.getWeekProgress()}%;"
      ><span class="percent">{calendar.getWeekProgress()}%</span></span
    >
  </span>
  <h5>{calendar.currentDate.getFullYear()}</h5>
  <span class="progressBar year">
    <span class="progress" style="width: {calendar.getYearProgress()}%;"
      ><span class="percent">{calendar.getYearProgress()}%</span></span
    >
    <span class="quarters">
      <span>Q1</span>
      <span>Q2</span>
      <span>Q3</span>
      <span>Q4</span>
    </span>
  </span>
  <h5>Q{calendar.getQuarter()}</h5>
  <span class="progressBar">
    <span class="progress" style="width: {calendar.getQuarterProgress()}%;"
      ><span class="percent">{calendar.getQuarterProgress()}%</span></span
    >
  </span>
</div>

<style lang="scss">
  // manage theme palette
  .background {
    --notion-primary: #d1d1d1;
    --notion-secondary: #191919;
  }
  
  .background.light {
    --notion-primary: #191919;
    --notion-secondary: #d1d1d1;
  }

  h2,
  h5 {
    font-family: sans-serif;
    color: var(--notion-primary);
  }

  .background {
    color: var(--notion-primary);
    padding: 1rem;

    h5 {
      margin-bottom: 0;
    }

    h2 {
      color: var(--notion-primary);
    }
    
    &.light {
      color: var(--notion-secondary);
    }

    .progressBar {
      display: block;
      width: 100%;
      height: 2rem;
      border: 2px solid var(--notion-primary);
      position: relative;

      & {
        &::after {
          width: 5rem;
        }
      }

      &.year {
        margin-bottom: 2rem;
      }

      .quarters {
        display: flex;
        position: absolute;
        bottom: -17px;
        width: 100%;
        height: 1rem;
        border-right: 2px solid var(--notion-primary);

        span {
          width: 25%;
          text-align: center;
          color: var(--notion-primary);

          &:not(:last-child) {
            border-right: 2px solid var(--notion-primary);
          }
        }
      }
    }
    .progress {
      content: "";
      display: flex;
      justify-content: flex-end;
      padding-right: 0.5rem;
      align-items: center;
      color: var(--notion-secondary);
      max-width: calc(100% - 8px);
      position: absolute;
      top: 0;
      left: 0;
      height: 2rem;
      background-color: var(--notion-primary);
      width: 0;

      .percent {
        color: var(--notion-secondary);
      }
    }
  }

</style>
