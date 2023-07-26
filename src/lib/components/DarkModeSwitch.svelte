<script lang="ts">
  function toggle(): void {
   const html = document.documentElement
   const theme = html.getAttribute("data-theme");
   const soundOn: HTMLAudioElement = document.querySelector('#switch-on');
   const soundOff: HTMLAudioElement = document.querySelector('#switch-off');

   if (theme === "light") {
    html.setAttribute("data-theme", "dark");
    soundOff.play()
   } else {
    html.setAttribute("data-theme", "light")
    soundOn.play()
   }

  const wraps = document.querySelectorAll(".icon-wrap");
    for (const wrap of wraps) {
      wrap.classList.toggle("active");
    }
  }
</script>

<audio id="switch-on" src="/sounds/switch-on.mp3"></audio>
<audio id="switch-off" src="/sounds/switch-off.mp3"></audio>

<div class="toggle">
  <div class="mask" on:click={toggle} on:keypress={() => {toggle}}>
    <div class="icon-wrap">
      <div class="icon sun" />
    </div>
    <div class="icon-wrap active">
      <svg
        copy="icon"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        ><path
          d="M187.73 151.4c0-55.24 29.34-104.19 76.27-129.72C242.21 9.81 216.56 3 188.15 3 99.15 3 36.2 70.46 36.2 151.4S98.3 299 187.33 299c28.26 0 53.87-6.82 75.69-18.69-46.48-25.31-75.29-73.8-75.29-128.91z"
          fill="#eeeeee"
        /></svg
      >
    </div>
  </div>
  <!-- <div class="bar" /> -->
</div>

<style lang="scss">
  $size: 60px;

  .toggle {
    width: $size;
    cursor: pointer;
    z-index: 252;;

    @media screen and (max-width: $breakpoint-mobile) {
      margin-right: -45px;
    }

    .mask {
      width: $size;
      height: $size;
      overflow: hidden;

      .icon-wrap {
        padding: 18px;
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

      .sun, .moon {
        background-color: var(--text-color);
      }
    }

    .bar {
      width: 40%;
      height: 5px;
      margin: 0 auto;
      background-color: var(--text-color);
      transition: all 300ms 100ms ease;
    }
  }
</style>
