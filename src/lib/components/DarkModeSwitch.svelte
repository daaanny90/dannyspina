<script lang="ts">
  function toggle(): void {
    const wraps = document.querySelectorAll(".icon-wrap");
    for (const wrap of wraps) {
      wrap.classList.toggle("active");
    }
    document.querySelector(".bar").classList.toggle("light-mode");
    document.querySelector("body").classList.toggle("dark-mode");
    document.querySelector(".line--1").classList.toggle("light-mode");
    document.querySelector(".line--2").classList.toggle("light-mode");
    document.querySelector(".line--3").classList.toggle("light-mode");
    document.querySelector(".mobile-menu").classList.toggle("light-mode");
    document.querySelector(".bg-container").classList.toggle("light-mode");
    document.querySelector(".blog-posts").classList.toggle("dark-mode");
  }
</script>

<div class="toggle">
  <div class="mask" on:click={toggle}>
    <div class="icon-wrap active">
      <div class="icon sun" />
    </div>
    <div class="icon-wrap">
      <svg
        copy="icon"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        ><path
          d="M187.73 151.4c0-55.24 29.34-104.19 76.27-129.72C242.21 9.81 216.56 3 188.15 3 99.15 3 36.2 70.46 36.2 151.4S98.3 299 187.33 299c28.26 0 53.87-6.82 75.69-18.69-46.48-25.31-75.29-73.8-75.29-128.91z"
          fill="#283445"
        /></svg
      >
    </div>
  </div>
  <div class="bar light-mode" />
</div>

<style lang="scss">
  $size: 60px;

  .toggle {
    position: fixed;
    top: 0;
    right: 0;
    width: $size;
    cursor: pointer;

    @media screen and (max-width: $breakpoint-mobile) {
      right: 7rem;
    }
    .mask {
      width: $size;
      height: $size;
      overflow: hidden;

      .icon-wrap {
        padding: 18px;
        margin-bottom: 5px;
        transition: all 300ms 400ms ease;

        &:last-child {
          transform: translatey(-$size);
        }
      }

      .icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }

      .active {
        transition-delay: 100ms;

        &:first-child {
          transform: translatey($size);
        }

        &:last-child {
          transform: translatey(0);
        }
      }

      .sun {
        background-color: $white;
      }

      .moon {
        background-color: $black;
      }
    }

    .bar {
      width: 40%;
      height: 5px;
      margin: 0 auto;
      background-color: $white;
      transition: all 300ms 100ms ease;

      &.light-mode {
        background-color: $black;
      }
    }
  }
</style>
