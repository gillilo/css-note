<!-- CSS Text Animation Effects | Infinite Ticker -->
<!-- https://www.youtube.com/watch?v=AYf3nhDmgzA -->
<script>
  const array = []
  for (let i = 0; i < 10; i++) {
    const d = Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100)
    const y = Math.floor(Math.random() * 700)
    array.push({d, y})
  }
</script>

<div class="body">

  <section>

    {#each array as a, i (i) }
      <div class="scroll" style={`--d:${a.d};--y:${a.y};`}>
        <div>
          <span>
            Police line do not cross - 
            Police line do not cross - 
            Police line do not cross - 
            Police line do not cross - 
            Police line do not cross - 
            Police line do not cross - 
            Police line do not cross - 
            Police line do not cross - 
            Police line do not cross - 
            Police line do not cross - 
          </span>
        </div>
        <div>
          <span>
            Police line do not cross - 
            Police line do not cross - 
            Police line do not cross - 
            Police line do not cross - 
            Police line do not cross - 
            Police line do not cross - 
            Police line do not cross - 
            Police line do not cross - 
            Police line do not cross - 
            Police line do not cross - 
          </span>
        </div>
      </div>
    {/each}

  </section>

</div>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');
  // font-family: 'Poppins', sans-serif;

  .body {
    font-family: 'Poppins', sans-serif;
    section {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background: #111;
      .scroll {
        width: calc(100% + 400px);
        left: -400px;
        display: flex;
        box-shadow: 0 15px 10px rgba(0,0,0,0.5);
        transform: rotate(calc(var(--d) * 1deg)) translateY(calc(var(--y) * 1px));
        div {
          background: #e9c804;
          color: #1d1104;
          font-size: 3em;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 600;
          white-space: nowrap;
          animation: animate 60s linear infinite;
          animation-delay: -60s;
        }
        div:nth-child(2) {
          animation: animate-two 60s linear infinite;
          animation-delay: -30s;
        }
      }
    }
    section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(transparent, transparent, #0005, #0004);
      pointer-events: none;
    }
  }

  @keyframes animate {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes animate-two {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-200%);
    }
  }
</style>