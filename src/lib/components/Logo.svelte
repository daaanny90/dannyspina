
<a class="logo" href="/">DS</a>

<style lang="scss" scoped>
  a {
    @include unstyledLink;

    animation: none;
    font-family: "JetBrains Mono";
    width: 5rem;
    text-align: center;
    font-size: 2rem;
    margin: 0;
    color: var(--accent-color);
    font-weight: normal;
    text-decoration: none;
    z-index: 100;

    &:visited {
      color: var(--accent-color);
    }

    @media screen and (max-width: $breakpoint-mobile) {
      padding-left: 10px;
    }
  }
</style>
