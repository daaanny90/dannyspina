<div></div>

<style scoped>
  div {
  width: 70px; /* control the size */
  margin: 0 auto;
  aspect-ratio: 8/5;
  --_g: no-repeat radial-gradient(#000 68%,#0000 71%);
  -webkit-mask: var(--_g),var(--_g),var(--_g);
  -webkit-mask-size: 25% 40%;
  background: var(--accent-color);
  animation: load 1s infinite;
}

@keyframes load {
  0%    {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }
  16.67%{-webkit-mask-position: 0% 100%,50% 0%  ,100% 0%  }
  33.33%{-webkit-mask-position: 0% 100%,50% 100%,100% 0%  }
  50%   {-webkit-mask-position: 0% 100%,50% 100%,100% 100%}
  66.67%{-webkit-mask-position: 0% 0%  ,50% 100%,100% 100%}
  83.33%{-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 100%}
  100%  {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }
}
</style>