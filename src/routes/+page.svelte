<section>
  <h1><span class="prefix">Hi! I'm </span><span>Danny</span></h1>
  <p>
    I am a <span class="highlight">Software Developer</span> & <span class="highlight">Design Ops</span> with some <a href="/about">passions</a
    >.
  </p>
</section>

<style lang="scss" scoped>
section {
  text-align: center;
}

h1 {
  font-size: 5rem;
  line-height: 85px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

span {
  color: var(--accent-color);
}

.point,
.highlight {
  color: var(--accent-color-inverted);
}

.point {
  margin-left: -20px;
}

.prefix {
  color: inherit;

  @media only screen and (max-width: 600px) {
    font-size: 3.5rem;
    margin: 0 auto;
    text-align: center;
  }
}

p {
  font-size: 1.5rem;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
}
</style>
