<!-- Header.svelte -->
<div class="sidebar">
  <p><a href="/">Home</a></p>
	<p><a href="/blog">Blog</a></p>
	<p><a href="/about">About</a></p>
	<p><a href="/contact">Contact</a></p>
</div>

<style lang="scss" scoped>
	.sidebar {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		display: flex;
    width: 5rem;
		flex-direction: column;
		justify-content: space-evenly;

		p {
			transform: rotate(270deg);

      a {
        text-decoration: none;
        color: #B22028;
        font-size: 2rem;
        font-weight: bold;

        &:hover {
          text-decoration: line-through;
        }
      }
		}
	}
</style>
