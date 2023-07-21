<!-- Header.svelte -->
<script>
  import MenuItem from "./MenuItem.svelte";
</script>

<div class="sidebar">
  <div class="menu">
    <MenuItem isSidebar={true} link="/blog" text="Blog" />
    <MenuItem isSidebar={true} link="/books" text="Books" />
    <MenuItem isSidebar={true} link="/about" text="About" />
    <MenuItem isSidebar={true} link="/contact" text="Contact" />
  </div>
</div>

<style lang="scss" scoped>
  .sidebar {
    position: fixed;
    font-family: "JetBrains Mono", sans-serif;
    font-weight: 200;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    width: 5rem;
    flex-direction: column;
    align-items: center; 
    justify-content: space-around;

    @media screen and (max-width: 900px), screen and (max-height: 530px) {
      display: none;
    }

    .menu {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 5rem 0 5rem 0;
      height: 100%;
    }
  }
</style>
