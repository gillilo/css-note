<!-- CSS Only Animated Background Particles Effects | Html CSS Animation -->
<!-- https://www.youtube.com/watch?v=-EC9G9VKqjo -->
<script>
  const w = window.innerWidth
  const array = []
  for(let i = 0 ; i < w / 38 ; i++) {
    array.push(10 + Math.floor(Math.random() * 20))
  }
</script>
<div class="body">

  <div class="container">
    <div class="particles">
      {#each array as a, i (i)}
        <span style={`--i:${a}`}></span>
      {/each}
    </div>
  </div>

</div>

<style lang="scss">
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #09111d;
    .container {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      .particles {
        position: relative;
        display: flex;
        z-index: 1;
        // padding: 0 20px;
        span {
          position: relative;
          bottom: 30px;
          width: 30px;
          height: 30px;
          background: #4fc3dc;
          box-shadow: 
            0 0 0 10px #4fc3dc44, 
            0 0 50px #4fc3dc, 
            -100px 0 #4fc3dc44,
            100px 0 #ff2d7599;
          margin: 0 4px;
          border-radius: 50%;
          animation: animate 15s ease infinite;
          animation-duration: calc(125s / var(--i));
        }
        span:nth-child(even) {
          background: #ff2d75;
          box-shadow: 
          0 0 0 10px #ff2d7544,
          0 0 50px #ff2d75,
          -100px 0 #4fc3dc99,
          100px 0 #4fc3dc99;
        }
      }
    }
  }
  @keyframes animate {
    0% {
      transform: translateY(120vh) scale(0) rotate(0deg);
    }
    20% {
      transform: translateY(100vh) scale(1) rotate(0deg);
    }
    100% {
      transform: translateY(-50vh) scale(0.5) rotate(360deg);
    }
  }
</style>