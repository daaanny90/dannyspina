<script lang="ts">
  const socials = [
    { label: "GITHUB", href: "https://github.com/daaanny90" },
    { label: "BLUESKY", href: "https://bsky.app/profile/dannyspina.com" },
    { label: "INSTAGRAM", href: "https://www.instagram.com/danny.spina/" },
    { label: "RSS", href: "/rss.xml" },
    { label: "WORKSHOP", href: "/workshop" },
  ];
</script>

<footer>
  <div class="inner">
    <p class="ds-label section-label">04 &mdash; CONTACT</p>
    <a class="email" href="mailto:hi@dannyspina.com">hi@dannyspina.com</a>
    <div class="bottom">
      <div class="socials">
        {#each socials as social}
          <a href={social.href}>{social.label}</a>
        {/each}
      </div>
      <p class="colophon">
        Parma, Italy &middot; IT/DE/EN &middot; set in Archivo &amp; JetBrains
        Mono &middot; DS&middot;HP&middot;01 REV 05
      </p>
    </div>
  </div>
</footer>

<style lang="scss" scoped>
  footer {
    border-top: 1px solid var(--ds-color-line);
  }

  .inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 48px 48px 40px 48px;

    @media screen and (max-width: $breakpoint-mobile) {
      padding: 28px 20px;
    }
  }

  .section-label {
    margin: 0 0 12px 0;
  }

  .email {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -0.02em;
    border-bottom: none;

    @media screen and (max-width: $breakpoint-mobile) {
      font-size: 24px;
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 40px;
    gap: 24px;
    flex-wrap: wrap;

    @media screen and (max-width: $breakpoint-mobile) {
      margin-top: 20px;
    }
  }

  .socials {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    font-family: var(--ds-font-mono);
    font-size: 12px;
    color: var(--ds-color-ink-muted);

    a {
      border-bottom: none;
    }
  }

  .colophon {
    font-family: var(--ds-font-mono);
    font-size: 11.5px;
    color: var(--ds-color-ink-faint);
    margin: 0;
  }
</style>
