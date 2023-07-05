<!-- CSS Only Animated Backgrounds Effects -->
<!-- https://www.youtube.com/watch?v=o6qTxOOK4Qs -->
<script>
  import { each } from "svelte/internal";

  const array = []
  for (let i = 0 ; i < 1000 ; i++) {
    array.push(1 + Math.floor(Math.random() * 30))
  }
</script>

<div class="body">
  <section>
    {#each array as a, i (i)}
      <i style={`--i:${a};`}></i>
    {/each}
  </section>
</div>

<style lang="scss">
  .body {
    section {
      position: relative;
      height: 100vh;
      overflow: hidden;
      background-color: #111;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      i {
        position: relative;
        width: 60px;
        height: 60px;
        background: #222;
      }
      i:nth-child(5n+1) {
        animation: ani 2s linear infinite, aniBg 5s linear infinite;
        animation-delay: calc(-1s * var(--i));
      }
      i:nth-child(5n+2) {
        animation: ani 3s linear infinite, aniBg 5s linear infinite;
        animation-delay: calc(-1.5s * var(--i));
      }
      i:nth-child(5n+3) {
        animation: ani 4s linear infinite, aniBg 5s linear infinite;
        animation-delay: calc(-2s * var(--i));
      }
      i:nth-child(5n+4) {
        animation: ani 5s linear infinite, aniBg 5s linear infinite;
        animation-delay: calc(-2.5s * var(--i));
      }
      i:nth-child(5n+5) {
        animation: ani 6s linear infinite, aniBg 5s linear infinite;
        animation-delay: calc(-3s * var(--i));
      }
    }
  }
  @keyframes ani {
    0%, 20% {
      background: #222;
    }
    60% {
      background: #0f0;
    }
    80%, 100% {
      background: #222;
    }
  }
  @keyframes aniBg {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
</style>