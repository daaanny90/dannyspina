<script lang="ts">
  import PageTitle from "$lib/components/PageTitle.svelte";
  import Accordion from "$lib/components/Accordion.svelte";

  const today = new Date();
  const startCodingDate = new Date("2017-09-01");

  const yearsOfExperience = today.getFullYear() - startCodingDate.getFullYear();
</script>

<PageTitle title="About Me" />

<p>
  Interested in my CV? <a href="https://cv.dannyspina.com">Get it here</a>
  <br />
  <br />
  <strong>I'm Danny</strong>, a web developer with a focus on building scalable
  and maintainable web applications.
  <br />
  <br />
  I have {yearsOfExperience} years of experience working with
  <strong>front-end</strong>
  and <strong>back-end</strong> technologies, and specialize in
  <strong>TypeScript</strong>
  and <strong>JavaScript</strong>. I have a solid understanding of the latest
  web development technologies and frameworks such as <strong>React</strong>,
  <strong>Vue</strong>, <strong>Node.js</strong> and <strong>Express</strong>,
  and have experience working with a variety of databases like
  <strong>MongoDB</strong>, <strong>MySQL</strong> and
  <strong>PostgreSQL</strong>. I am well-versed in <strong>Agile</strong>
  development methodologies and have experience working in a
  <strong>team-oriented environment</strong>.
  <br />
  <br />
  I take pride in my ability to write
  <strong>clean, efficient and well-documented code</strong>, and am always
  looking for ways to improve my skills and stay up-to-date with the latest
  industry trends.
  <br />
  I am also passionate about the <strong>ethical aspects</strong> of software
  development and I love <strong>open source</strong> projects. I am focused on
  <strong>architecture</strong>
  and <strong>design methodologies</strong> such as
  <strong>Domain-Driven Design</strong>, which allows me to create sustainable,
  easy to maintain and well-designed systems.
</p>
<p>
  Beyond writing code, I am deeply invested in the impact that technology has on
  society. I believe that software development is a powerful tool for <strong
    >creating positive change</strong
  >, and I am committed to using my skills for the greater good. This passion
  for ethical technology is reflected in my love for open-source projects and my
  focus on design methodologies like Domain-Driven Design. These practices not
  only result in <strong>sustainable, easy-to-maintain systems</strong>, but
  they also promote transparency and collaboration. I am always eager to apply
  my skills to projects that align with my values and have a
  <strong>meaningful impact on the world</strong>.
</p>

<p>
  In the end, <strong
    >I am grateful to be able to do what I love every day</strong
  >.
  <br />
  <br />
  Programming is not just a job for me, it's a <strong>passion</strong>.
  <br />
  It's a <strong>privilege</strong> to be able to use my skills to create
  something that <strong>can make a difference</strong>, whether it's a small
  feature or a large-scale application. I am constantly in awe of the power of
  code to connect people, solve problems and improve lives. I am excited to
  continue on this journey, and to see where it takes me next.
  <br />
  <br />
  <strong>If you share my passion</strong> for creating meaningful technology
  and want to connect, <strong>I would be happy to hear from you</strong>.
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

<Accordion title="Astronomy">
  <p>
    The vastness and mysteries of the universe have always fascinated me. One of
    the aspects that intrigues me the most is space exploration. The idea of
    venturing beyond our planet and exploring the cosmos ignites a sense of
    wonder and curiosity in me. I make sure to stay updated on the latest
    missions and discoveries, as they represent humanity's quest to unravel the
    secrets of the universe.
  </p>

  <p>
    Beyond the scientific aspects, astronomy also sparks profound philosophical
    questions about our existence and our place in the cosmos. Contemplating the
    vastness of space and the countless stars and galaxies raises fundamental
    questions about who we are and where we are headed, both as a species and as
    individuals. Exploring these questions generates awareness and a deeper
    understanding of ourselves and our role in the universe.
  </p>

  <p>
    I am excited to share this fascination with my passion for astronomy with my
    daughters. I plan to begin observing the night sky with a telescope, hoping
    that this experience will ignite their curiosity and inspire them to ask
    profound questions like "Who are we?" and "What lies beyond?" Encouraging
    their curiosity and nurturing their interest in astronomy can open doors to
    a world of knowledge and a lifelong journey of exploration.
  </p>

  <p>
    Observing the cosmos with a telescope not only allows us to appreciate the
    beauty of celestial objects but also serves as a reminder of our connection
    to the universe. It is a humbling experience that can spark curiosity and
    inspire a sense of responsibility to protect and preserve our planet and the
    wonders of space for future generations.
  </p>

  <p>
    By instilling a passion for astronomy in my daughters, I hope to plant the
    seeds of curiosity and wonder that will accompany them throughout their
    lives. I envision a future where they continue to explore the mysteries of
    the universe, ask meaningful questions, and seek understanding of the world
    around them. Their journey of exploration and discovery can lead to new
    insights, awareness, and a greater appreciation for the beauty and
    complexity of the cosmos.
  </p>

  <p>
    As we ponder the vastness of the universe and the questions it poses, we
    embark on a journey of self-discovery and connection to something greater
    than ourselves. It is a journey that has the potential to shape our
    perspectives and inspire a sense of wonder and awe that will forever remain
    with us, guiding our pursuit of knowledge and understanding.
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

<Accordion title="Gaming">
  <p>
    Gaming has been an important part of my life, even though I have mostly
    stepped away from it in recent times. To me, video games are not just
    trivial pastimes for children; they are a form of art. Comparable to cinema,
    but with the added dimension of interactivity, video games can be profound
    and thought-provoking experiences.
  </p>

  <p>
    Video games with compelling storylines have the power to make me reflect on
    significant themes in life, challenge my perspectives, and inspire action in
    various directions. Unfortunately, there is still a prevalent perception
    that video games are frivolous, but I firmly believe that one day they will
    be recognized as a serious and profound art form on par with cinema.
  </p>

  <p>
    Gaming has the potential to engage me emotionally and intellectually, just
    like any other art form. Those with excellent storytelling can leave a
    lasting impact and resonate deeply with me. For example, games like Hideo
    Kojima's "Metal Gear" series, the "Mass Effect" trilogy, and "The Last of
    Us" have had a profound influence on my thoughts and emotions.
  </p>

  <p>
    While I used to be a slow and deliberate gamer, often picking up titles
    years after their release, I found immense enjoyment in immersing myself in
    games with elaborate and deep narratives. The complex characters and
    thought-provoking dilemmas in these games have left a lasting impression on
    me, and I cherish the experiences they provided.
  </p>

  <p>
    Regarding "The Last of Us 2," I share my apprehension about sequels,
    especially when the first installment ended so perfectly. I can understand
    the fear of potentially tainting a masterpiece. However, there is a
    lingering hope that one day I might rediscover my passion for gaming and
    venture into new experiences, including the sequel. If I do, I'm sure it
    will be a journey filled with emotions and introspection.
  </p>

  <p>
    Gaming, in its essence, is an interactive form of art that can elicit a
    range of emotions and provoke meaningful contemplation. Despite my current
    break from gaming, its impact on my life and perspectives remains evident.
    Perhaps one day, when the time feels right, I will return to this beloved
    hobby and discover new stories and experiences that will reignite my passion
    for gaming once more.
  </p>
</Accordion>
