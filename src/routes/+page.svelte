<section>
  <h1>Hi! I'm <span>Danny<span class="point">.</span></span></h1>
  <p>
    I am a Frontend Engineer & Design Ops with some <a href="/about">passions</a
    >.
  </p>
  <p>Currently @ <a href="https://herole.de">Herolé</a>.</p>
</section>

<style lang="scss" scoped>
  section {
    text-align: center;
  }

  h1 {
    font-size: 5rem;
  }

  span {
    color: var(--accent-color);
  }
  .point {
    color: var(--accent-color-inverted);
  }
  p {
    font-weight: lighter;
    font-size: 2.3rem;

    @media only screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
</style>
