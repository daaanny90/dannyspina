<script>
  import PageTitle from "$lib/components/PageTitle.svelte";
  import BookCart from "$lib/components/BookCart.svelte";
</script>

<PageTitle
  title="Books I've Read & Currently Reading"
  subtitle="My Reading Adventure: A Collection of Books I've Read and Currently Reading, with Quick Amazon Buy Links"
/>

<div class="container-reading">
  <h2>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
    I'm reading
  </h2>
  <strong>Wim Hof method</strong> by Wim Hof. <br />
  <strong>The Art of Taking Action</strong> by
  Gregg Krech. <br />
</div>

<h2>Categories</h2>
<ul>
  <li>
    <a href="#productivity">Productivity</a>
  </li>
</ul>


<h2 id="productivity">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
    />
  </svg>
  Productivity
</h2>
<ul class="books">
  <li class="book">
    <a href="/books/atomic_habits">Atomic Habits</a> by James Clear.
    <BookCart link="{'https://amzn.to/3XXnNST'}" />
  </li>
  <li>
    <a href="/books/building_a_second_brain">Building a second brain</a> by Tiago
    Forte.
    <BookCart link="{'https://amzn.to/3kRN0Q2'}" />
  </li>
</ul>

<style lang="scss" scoped>
  .container-reading {
    background-color: lightgray;
    padding: 1rem 0 2rem 1rem;
    margin-top: 2rem;
    
    
  }
  h2 {
    display: flex;
    align-items: center;
  }
  svg {
    max-width: 2rem;
    margin-right: .5rem;

    &.buy-book {
      max-width: 1.5rem;
    }
  }

  .book {
    position: relative;
  }
</style>
