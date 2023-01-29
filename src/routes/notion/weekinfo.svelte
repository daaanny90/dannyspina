<script>
let today = new Date().getDay();
let currentDate = new Date();
let startDate = new Date(currentDate.getFullYear(), 0, 1);
var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wedneday',
  'Thursday',
  'Friday',
  'Saturday'
]
      
const weekNumber = Math.ceil(days / 7);
const currentDay = daysOfTheWeek[today]
let progress = Math.round((today / 7) * 100) + '%'

let month = new Intl.DateTimeFormat('en', { month: 'long' }).format(new Date());
let dayNumber = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(new Date());

</script>

<h2>Today is { currentDay } { dayNumber } { month } of the Week number { weekNumber }</h2>
<span class="weekProgressBar">
  <span class="progress" style="width: {progress};"><span class="percent">{progress}</span></span>
</span>

<style lang="scss">
  $notionWhite: #D1D1D1;
  $notionBackground: #131313;

  h2 {
    color: $notionWhite;
  }

  .weekProgressBar {
    display: block;
    width: 95%;
    height: 2rem;
    border: 2px solid $notionWhite;
    position: relative;

    
    & {
      &::after {
        width: 5rem
      }
    }
  }
  .progress {
    content: "";
    display: flex;
    justify-content: flex-end;
    padding-right: .5rem;
    align-items: center;
    color: $notionBackground;
    position: absolute;
    top: 0;
    left: 0;
    height: 2rem;
    background-color: $notionWhite;
    width: 0;
  }
</style>


