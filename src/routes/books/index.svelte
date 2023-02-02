<script>
  import PageTitle from "$lib/components/PageTitle.svelte";
  import BookCart from "$lib/components/BookCart.svelte";
  import BookCategory from "$lib/components/BookCategory.svelte";
  import BookList from "$lib/components/BookList.svelte";
  import Book from "$lib/components/Book.svelte";
  import Rocket from "$lib/icons/Rocket.svelte";
  import Power from "$lib/icons/Power.svelte";
  import Art from "$lib/icons/Art.svelte";
  import Technology from "$lib/icons/Technology.svelte";
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
  <strong>The Art of Taking Action</strong> by Gregg Krech. <br />
</div>

<h2>Categories</h2>
<ul>
  <li>
    <a href="#productivity">Productivity</a>
  </li>
  <li>
    <a href="#personal-growth">Personal Growth</a>
  </li>
  <li>
    <a href="#arts-&-entertainment">Arts & Entertainment</a>
  </li>
  <li>
    <a href="#technology">Technology</a>
  </li>
</ul>

<BookCategory category="Productivity"><Rocket maxWidth="2rem" /></BookCategory>
<BookList>
  <Book
    title="Atomic Habits"
    author="James Clear"
    amazonLink="https://amzn.to/3XXnNST"
  />
  <Book
    title="Building a second brain"
    author="Tiago Forte"
    amazonLink="https://amzn.to/3kRN0Q2"
  />
</BookList>

<BookCategory category="Personal Growth"><Power maxWidth="2rem" /></BookCategory
>
<BookList>
  <Book
    title="How to Win Friends and Influence People"
    author="Dale Carnegie"
    amazonLink="https://amzn.to/3l1cPxd"
  />
  <Book
    title="The monk who sold his Ferrari"
    author="Robin Sharma"
    amazonLink="https://amzn.to/3YjnKRq"
  />
  <Book
    title="Super you"
    author="Claudio Belotti"
    amazonLink="https://amzn.to/3DzKMeL"
  />
  <Book
    title="Come smettere di farsi le seghe mentali e godersi la vita"
    author="Giulio Cesare Giacobbe"
    amazonLink="https://amzn.to/3wNO3Dh"
  />
  <Book
    title="Alla ricerca delle coccole perdute"
    author="Giulio Cesare Giacobbe"
    amazonLink="https://amzn.to/3Y3GBjx"
  />
  <Book
    title="Come diventare un Buddha in 10 settimane"
    author="Giulio Cesare Giacobbe"
    amazonLink="https://amzn.to/3XUhhMO"
  />
</BookList>

<BookCategory category="Arts & Entertainment"
  ><Art maxWidth="2rem" /></BookCategory
>
<BookList>
  <Book
    title="Story"
    author="Robert McKee"
    amazonLink="https://amzn.to/3XXbaaD"
  />
  <Book
    title="Tutto Cinema"
    author="Various authors"
    amazonLink="https://amzn.to/3DvM6z5"
  />
</BookList>

<BookCategory category="Technology"
  ><Technology maxWidth="2rem" /></BookCategory
>
<BookList>
  <Book title="Free Software, Free Society" author="Sam Williams" amazonLink="https://github.com/pettarin/fsfs3/releases/tag/v1.0.0" />
</BookList>
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
    margin-right: 0.5rem;

    &.buy-book {
      max-width: 1.5rem;
    }
  }
</style>
