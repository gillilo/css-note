<!-- Animating Clip-path using CSS and Vanilla Javascript -->
<!-- https://www.youtube.com/watch?v=3rXD3jmpq9g -->
<script>
  let y = 0;
  function scroll(y) {
    let value1 = window.scrollY + 300
    let value2 = window.scrollY + 200
    let sec1 = document.querySelector('.sec1')
    let sec2 = document.querySelector('.sec2')
    if (sec1) sec1.style.clipPath = "circle("+value1+"px at 0 0)"
    if (sec2) sec2.style.clipPath = "circle("+value2+"px at 100% 100%)"
  }
  $: scroll(y);
</script>

<svelte:window bind:scrollY={y} />

<div class="body">

  <section>
    <div class="sec sec1"><h2>Magic</h2></div>
    <div class="sec sec2"><h2>Magic</h2></div>
    <h2>Magic</h2>
  </section>

</div>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');
  // font-family: 'Poppins', sans-serif;
  .body {
    font-family: 'Poppins', sans-serif;
    min-height: 180vh;
    section {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: #333;
      .sec {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 10;
      }
      .sec1 {
        background: #b0ff54;
        clip-path: circle(300px at 0 0);
        h2 {
          color: transparent;
          -webkit-text-stroke: 5px #333;
        }
      }
      .sec2 {
        background: #03a9f4;
        clip-path: circle(200px at 100% 100%);
        h2 {
          color: #333;
          -webkit-text-stroke: 5px #fff;
        }
      }
      h2 {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 18em;
      }
    }
  }
</style>