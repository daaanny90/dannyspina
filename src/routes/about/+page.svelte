<script lang="ts">
  import PageTitle from "$lib/components/PageTitle.svelte";
  import Accordion from "$lib/components/Accordion.svelte";
  import Divider from "$lib/components/Divider.svelte";
  import AiIndicator from "$lib/components/AiIndicator.svelte";
  import Seo from "$lib/components/Seo.svelte";

  const today = new Date();
  const startCodingDate = new Date("2017-09-01");

  const yearsOfExperience = today.getFullYear() - startCodingDate.getFullYear();
</script>

<Seo
  title="About me"
  description="A bit about me, my work and what I like outside of it."
/>

<div class="header">
  <PageTitle title="About Me" />
  <AiIndicator humanLevel={50} />
</div>

<p>
  Interested in my CV? <a href="https://cv.dannyspina.com">Get it here</a>
  <br />
  <br />
</p>
<p>
  I'm Danny, a frontend engineer. I've been writing software for {yearsOfExperience}
  years, mostly with TypeScript, Vue and web components.
</p>

<p>
  Most of my work is on the structure behind the interface: design systems,
  component libraries and how the code is organized. Domain-driven design helps
  me a lot with the last part.
</p>

<p>
  I also worked on the backend with Node.js, Express, PostgreSQL and MongoDB. It
  helps on the frontend, because I know what happens on the other side.
</p>

<p>
  Besides writing code, I like to improve how a team works, especially between
  designers and developers.
</p>

<p>
  If you want to talk about any of this, <a href="/contacts">write me</a>.
</p>
<h2>My passions</h2>

<p>I have some passions outside the tech world:</p>

<Accordion title="Cooking">
  <p>
    I don't know if the reason is that I am italian (let's confirm some cliches)
    but I am really in love with food, the meaning that food has and the act of
    cooking. I could not imagine a life eating stuff withouit thinking or
    tasteless stuff.
  </p>

  <p>
    The food and the way we cook it is part of our culture, is what we are (we
    are what we eat, right?).
  </p>

  <p>
    Food is important. It tells a lot about the people who crafted the recipe,
    and if I think to travel somewhere without eating local food, I feel I miss
    50% of the experience. I miss that big part of culture that the food can
    tell.
  </p>

  <p>
    It says a lot about how the people manage poverty, what grows there, how the
    people conserve the food. It shows the rituals that the people has.
  </p>

  <p>
    Eating is also an extreme good experience if done properly. I always
    confront eating with making love. Yes, you could make love only for survive
    purposes or doing bad sex just to do it. But why? Why avoid to enjoy this
    beautiful experience?
  </p>

  <p>
    So, do me a favour: next time you are eating (or making love), just stop for
    a moment and be present. Try to enjoiy eat, put attention on you sensation
    while doing it. And try to do it the best way you can.
  </p>
</Accordion>

<Accordion title="Movies">
  <p>I watch all kinds of movies, from dramas to adventure films.</p>

  <p>
    My top 3 are "Matrix", "Blade Runner" and the "Lord of the Rings" trilogy.
    "Dune" and "Interstellar" could make it into my top 10.
  </p>

  <p>
    Directors I like a lot: Denis Villeneuve ("Blade Runner 2049", "Arrival"),
    Christopher Nolan ("Inception", "The Dark Knight"), David Lynch ("Mulholland
    Drive", "Twin Peaks") and Martin Scorsese ("Goodfellas", "Taxi Driver").
  </p>
</Accordion>

<Accordion title="Photography">
  <p>
    For years I took photos to make something artistic. When my daughters were
    born, I started taking them mostly to remember moments with my family.
  </p>

  <p>
    I put the professional gear aside and now I mostly use my phone. Some of my
    favorite pictures were taken with a mid-range smartphone.
  </p>

  <p>
    Having a good camera always in my pocket means I take many more pictures
    than before.
  </p>

  <p>
    Sometimes I wonder what all these photos will do to us and to our kids. The
    generations before us had a few pictures, or none. We have thousands of
    them, always with us. I'm curious to see how this will change the way we
    remember.
  </p>
</Accordion>

<Accordion title="Reading">
  <p>I read a lot, mostly non-fiction and personal growth, but also novels.</p>

  <p>
    I like non-fiction most, because I can take something from each book and use
    it in my life.
  </p>

  <p>
    Some time ago I started reading science fiction too, first Asimov's
    "Foundation" and then "Dune".
  </p>

  <p>
    I like paper books, but since I have a Kindle I read much more. I can
    highlight, take notes, look up a word or translate a sentence right away.
  </p>

  <p>Reading is part of my day and I can't imagine a life without it.</p>
</Accordion>

<Divider />

<h2>Credits</h2>

Vectors and icons by<a
  href="https://dazzleui.gumroad.com/l/dazzleiconsfree?ref=svgrepo.com"
  target="_blank">Dazzle Ui</a
>
in CC Attribution License via
<a href="https://www.svgrepo.com/" target="_blank">SVG Repo</a>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 434px) {
      gap: 0;
    }
  }
</style>
