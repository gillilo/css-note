<!-- How to Create Random Website Background Generator using CSS & Javascript | Anime.js -->
<!-- https://www.youtube.com/watch?v=TR6TmT1A_uI -->
<script>
  import anime from "animejs";

  let array = []
  for (let i = 1; i <= 90 ; i++) {
    array.push(i)
  }

  let flag = true
  function generate() {
    if (flag) {
      flag = false
      const blocks = document.querySelectorAll('.block')
      blocks.forEach(block => {
        block.style.width = "50px"
        block.style.height = "50px"
      })
      document.querySelector('.text').style.display = "none"
    }
    anime({
      targets: '.block',
      translateX : function() {
        return anime.random(-1000, 1000)
      },
      translateY : function() {
        return anime.random(-800, 800)
      },
      scale: function() {
        return anime.random(2,5);
      }
    })
  }
</script>

<div class="body">

  <div class="text">Click!</div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="container" on:click={generate}>
    {#each array as item (item)}
      <div class="block"></div>
    {/each}
  </div>

</div>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Belanosima&display=swap');
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #202020;
    .text {
      color: white;
      font-size: 10em;
      font-family: 'Belanosima', sans-serif;
    }
    .container {
      overflow: hidden;
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .block {
        position: absolute;
        width: 0px;
        height: 0px;
        background: #444;
        box-shadow: 10px 10px 30px rgba(0,0,0,0.5);
        border-radius: 50%;
      }
      .block:nth-child(7n + 1) {
        background: #444;
      }
      .block:nth-child(7n + 2) {
        background: #fff;
      }
      .block:nth-child(7n + 3) {
        background: #03a9f4;
      }
      .block:nth-child(7n + 4) {
        background: #6200ff;
      }
      .block:nth-child(7n + 5) {
        background: #00df82;
      }
      .block:nth-child(7n + 6) {
        background: #e5ff00;
      }
      .block:nth-child(7n + 7) {
        background: #ff2626;
      }
    }
  }
</style>