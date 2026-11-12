<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
  title="Message logged"
  description="Thanks for your message. I'll reply within 48 hours."
  noindex
/>

<p class="breadcrumb">04 &mdash; CONTACT / RECEIPT</p>
<h1>Message logged.</h1>
<p class="lead">
  I read every message myself and reply within 48 hours, usually sooner.
</p>
<a class="ds-btn" href="/">BACK TO THE BENCH &rarr;</a>

<style lang="scss" scoped>
  .breadcrumb {
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-xs);
    letter-spacing: var(--ds-tracking-label);
    color: var(--ds-color-ink-muted);
    margin: 0 0 16px 0;
  }

  h1 {
    font-size: var(--ds-text-h2);
    margin: 0 0 16px 0;
  }

  .lead {
    color: var(--ds-color-ink-muted);
    margin: 0 0 40px 0;
  }
</style>
