<script>
  import Calendar from "$lib/helpers/Calendar";

  const calendar = new Calendar();
</script>

<div class="background">
  <h2>
    Today is <u>{calendar.getDayName()}
    {calendar.getDayNumber()}
    {calendar.getMonthName()}</u>. <br>
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
  $notionWhite: #d1d1d1;
  $notionBackground: #191919;

  .background {
    color: $notionWhite;
    padding-bottom: 1rem;

    h5 {
      margin-bottom: 0;
    }
  }

  h2 {
    color: $notionWhite;
  }

  .progressBar {
    display: block;
    width: 95%;
    height: 2rem;
    border: 2px solid $notionWhite;
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
      border-right: 2px solid $notionWhite;

      span {
        width: 25%;
        text-align: center;

        &:not(:last-child) {
          border-right: 2px solid $notionWhite;
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
    max-width: 99%;
    color: $notionBackground;
    position: absolute;
    top: 0;
    left: 0;
    height: 2rem;
    background-color: $notionWhite;
    width: 0;

    .percent {
      color: $notionBackground;
    }
  }
</style>
