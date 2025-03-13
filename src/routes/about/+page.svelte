<script lang="ts">
  import PageTitle from "$lib/components/PageTitle.svelte";
  import Accordion from "$lib/components/Accordion.svelte";
  import Divider from "$lib/components/Divider.svelte";
  import AiIndicator from "$lib/components/AiIndicator.svelte";

  const today = new Date();
  const startCodingDate = new Date("2017-09-01");

  const yearsOfExperience = today.getFullYear() - startCodingDate.getFullYear();
</script>

<div class="header">
  <PageTitle title="About Me" />
  <AiIndicator humanLevel={50} />
</div>

<p>
  Interested in my CV? <a href="https://cv.dannyspina.com">Get it here</a>
  <br />
  <br />
  <p>I'm Danny, a <strong>Frontend Engineer</strong> with a strong focus on <strong>architecture, design systems, and scalable web applications</strong>.</p>

<p>With {yearsOfExperience} years of experience, I specialize in <strong>TypeScript, Vue.js, Web Components, and frontend architecture</strong>. My expertise lies in <strong>building maintainable design systems, implementing component-driven development, and applying domain-driven design principles</strong> to create clean, scalable codebases.</p>

<p>While my strength is in frontend engineering, I also have also <strong>experience in backend development</strong>. I’m comfortable working with <strong>Node.js, Express, and databases like PostgreSQL and MongoDB</strong>, which helps me build solutions with a broader architectural perspective.</p>

<p>Beyond coding, I focus on <strong>improving development workflows</strong>, bridging the gap between <strong>design and engineering</strong>, and ensuring that every system I work on is built for long-term sustainability.</p>

<p>If you’re passionate about <strong>frontend architecture, scalable design patterns, and building robust web applications</strong>, let’s connect!</p>
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
  <p>
    Movies are a wonderful form of storytelling that captivates me. They have
    the power to transport us to different worlds, evoke emotions, and broaden
    our perspectives. I am drawn to various genres, from thought-provoking
    dramas to thrilling adventures. Watching movies allows me to experience the
    creativity and imagination of filmmakers, and I always find inspiration in
    their craft.
  </p>

  <p>
    In my top 3 favorite movies, I have to mention the mind-bending "Matrix,"
    which revolutionized the sci-fi genre and left a lasting impact on cinema.
    "Blade Runner" is another all-time favorite, with its mesmerizing dystopian
    world and philosophical themes that continue to resonate. And of course,
    "The Lord of the Rings" trilogy holds a special place in my heart, with its
    epic storytelling and remarkable filmmaking.
  </p>

  <p>
    As for potential additions to my top 10 favorites, "Dune" and "Interstellar"
    have excellent chances of securing a spot. I am drawn to the grandeur and
    depth of "Dune," and "Interstellar" captivated me with its awe-inspiring
    exploration of space and time.
  </p>

  <p>
    My admiration for the art of filmmaking extends to the directors who bring
    these cinematic wonders to life. Currently, my favorite directors include
    Denis Villeneuve, whose visionary storytelling in films like "Blade Runner
    2049" and "Arrival" leaves me in awe. Christopher Nolan's ability to craft
    mind-bending narratives in movies like "Inception" and "The Dark Knight" is
    simply exceptional. David Lynch's surreal and thought-provoking style, seen
    in "Mulholland Drive" and "Twin Peaks," continues to intrigue me. And of
    course, Martin Scorsese's masterful storytelling in classics like
    "Goodfellas" and "Taxi Driver" leaves a lasting impact on cinema.
  </p>

  <p>
    These directors' works inspire me, and I eagerly anticipate their future
    projects. As I continue my journey through the world of cinema, I am always
    on the lookout for more masterpieces that will captivate my imagination and
    deepen my appreciation for the art of filmmaking.
  </p>
</Accordion>

<Accordion title="Photography">
  <p>
    Photography has been an evolving passion for me, transforming from an art
    form to a way of capturing precious moments, especially those spent with my
    family. As time passed and my daughters came into my life, my approach to
    photography shifted. I moved away from creating artistic images myself and
    instead focused on using photography as a means to freeze cherished
    memories.
  </p>

  <p>
    With age and the responsibilities of parenthood, I found joy in capturing
    the everyday moments with my family. The arrival of my daughters brought a
    new perspective to my photography journey, as I discovered the profound
    beauty in candid shots that captured genuine emotions and connections. These
    are the moments I treasure the most, as they carry a heartfelt narrative of
    love and togetherness.
  </p>

  <p>
    As my priorities shifted, I set aside the professional equipment and
    embraced the convenience of using a smartphone as my primary camera. The
    advancements in smartphone technology have reached a level of quality that
    allows me to be content with the technical aspect of the photographs. Some
    of my most beautiful images were taken with a mid-range smartphone, proving
    that it's not solely about the gear but the emotion and story behind each
    picture.
  </p>

  <p>
    The accessibility of a capable camera in my pocket at all times has been a
    game-changer. It allows me to capture art wherever I go or to continually
    freeze moments from my life. It's a wonderful stroke of luck to have this
    tool, as it means I can document my journey and create meaningful memories
    with ease.
  </p>

  <p>
    Reflecting on this evolution of photography, I wonder how the abundance of
    visual documentation will impact our personalities and those of future
    generations. The generations before us had to grapple with the limitations
    of film or even lacked access to photography altogether due to technological
    constraints. In contrast, we now have an enormous reservoir of material that
    documents our lives at our fingertips.
  </p>

  <p>
    This unprecedented access to visual memories may reshape how we perceive our
    past and influence how we view the world. It's an intriguing thought to
    consider how this abundance of images will shape our collective identity and
    understanding of our shared human experience. As we progress in this digital
    age, it will be fascinating to observe the long-term effects of this
    photographic revolution on our culture and the generations to come.
  </p>
</Accordion>

<Accordion title="Reading">
  <p>
    Reading is a passion that holds a special place in my heart. It is an
    integral part of my life, and I find myself immersed in a diverse range of
    books, from non-fiction and personal growth to novels. It is a constant
    journey of exploration and growth, both intellectually and emotionally.
  </p>

  <p>
    I have a particular fondness for non-fiction and personal development books,
    as they offer valuable insights and knowledge that contribute to my
    continuous self-improvement. These books provide me with valuable tools to
    navigate life's challenges and strive to be a better version of myself each
    day.
  </p>

  <p>
    Lately, I have also delved into the world of science fiction, starting with
    Isaac Asimov's "Foundation" and now being captivated by "Dune." Exploring
    the realms of imagination and futuristic worlds adds a new dimension to my
    reading experience, keeping me eagerly glued to the pages.
  </p>

  <p>
    Reading, to me, is an essential aspect of personal growth. It allows me to
    gain new perspectives, broaden my horizons, and deepen my understanding of
    the world and humanity. The knowledge and wisdom found in books serve as
    guiding lights on my life's journey.
  </p>

  <p>
    While I have a strong affinity for physical books and appreciate the
    tangible experience they offer, I must admit my love for ebooks as well. My
    Kindle has become an invaluable companion, enabling me to read even more.
    The invention of e-ink is revolutionary, providing the convenience of
    carrying countless books in a compact device. The e-ink magic allows me to
    highlight passages, add notes, refer to the dictionary, and even translate
    text with a simple touch of my finger. It feels like having superpowers at
    my fingertips, making the reading experience even more enriching and
    interactive.
  </p>

  <p>
    Reading has become an inseparable part of my daily routine, and I cannot
    fathom a life without it. The knowledge and joy I gain from books
    continuously shape my thoughts, beliefs, and actions. It is a lifelong
    pursuit that enriches my soul and brings meaning to my existence.
  </p>

  <p>
    In the world of books, I find solace, inspiration, and the courage to embark
    on new adventures in life. It is a journey that will continue to unfold, and
    I eagerly anticipate the discoveries that lie ahead in the boundless realms
    of literature.
  </p>
</Accordion>

<Divider />

<h2>Credits</h2>

Vectors and icons by <a href="https://dazzleui.gumroad.com/l/dazzleiconsfree?ref=svgrepo.com" target="_blank">Dazzle Ui</a> in CC Attribution License via <a href="https://www.svgrepo.com/" target="_blank">SVG Repo</a>
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
