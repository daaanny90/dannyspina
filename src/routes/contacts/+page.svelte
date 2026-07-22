<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
  title="Contact"
  description="Get in touch with Danny Spina — software developer (web), Parma, Italy. Tell me what you are building, I reply within 48 hours."
/>

<p class="breadcrumb">04 &mdash; CONTACT</p>
<h1>Get in touch</h1>
<p class="lead">
  Tell me what you are building &mdash; or what stopped working. I read
  everything myself and reply within 48 hours, in Italian, German or English.
</p>

<form
  name="contact"
  method="POST"
  action="/contacts/thanks"
  data-netlify="true"
  netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <p class="bot-field" aria-hidden="true">
    <label>Leave this empty: <input name="bot-field" tabindex="-1" /></label>
  </p>

  <div class="field">
    <label for="name">YOUR NAME</label>
    <input id="name" name="name" type="text" required autocomplete="name" />
  </div>

  <div class="field">
    <label for="email">YOUR EMAIL</label>
    <input id="email" name="email" type="email" required autocomplete="email" />
  </div>

  <div class="field">
    <label for="message">THE PROBLEM</label>
    <textarea id="message" name="message" rows="7" required />
  </div>

  <button class="ds-btn" type="submit">SEND &rarr;</button>
</form>

<p class="alt">
  Prefer email? <a href="mailto:hi@dannyspina.com">hi@dannyspina.com</a>
  &nbsp;&middot;&nbsp; Code on
  <a href="https://github.com/daaanny90">GitHub</a>
</p>

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

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }

  .bot-field {
    position: absolute;
    left: -9999px;
    margin: 0;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
  }

  label {
    font-family: var(--ds-font-mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    color: var(--ds-color-ink-muted);
  }

  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid var(--ds-color-line);
    border-radius: var(--ds-radius);
    background: var(--ds-color-bg);
    color: var(--ds-color-ink);
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-s);
    padding: 12px 14px;
    transition: border-color var(--ds-motion-shutter) var(--ds-ease-mechanical);

    &:focus {
      outline: none;
      border-color: var(--ds-color-brass);
    }
  }

  textarea {
    resize: vertical;
  }

  .alt {
    margin-top: 40px;
    font-family: var(--ds-font-mono);
    font-size: var(--ds-text-s);
    color: var(--ds-color-ink-muted);
  }
</style>
