<section>
  <h1>Hi! I'm <span>Danny.</span></h1>
  <p>I am a frontend engineer with some <a href="/about">passions</a>.</p>
  <p>Currently @ <a href="http://herole.de">Herolé</a>.</p>
</section>

<style lang="scss" scoped>
  section {
    text-align: center;
  }

  h1 {
    font-size: 3rem;
  }

  span {
    color: var(--accent-color);
  }
  p {
    font-weight: lighter;
    font-size: 1.3rem;

    @media only screen and (max-width: 600px) {
      font-size: 1.1rem;
    }
  }
</style>
