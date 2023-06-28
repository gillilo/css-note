<!-- Happy Holi | Animation Effects using Html CSS & Javascript -->
<!-- https://www.youtube.com/watch?v=bQzTUsMqagM -->
<script>

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="body" on:click={(e) => {
  const x = e.pageX - e.target.offsetLeft
  const y = e.pageY - e.target.offsetTop

  const splash = document.createElement('span')
  splash.style.left = x + 'px'
  splash.style.top = y + 'px'
  splash.style.position = 'absolute'
  splash.style.pointerEvents = 'none'
  splash.style.width = '300px'
  splash.style.height = '300px'
  splash.style.background = 'red'

  document.querySelector('.body').appendChild(splash)

  setTimeout(() => {
    splash.remove()
  }, 4000)
}}>

  <h2>Happy Holi</h2>

</div>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Belanosima&display=swap');
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #222;
    overflow: hidden;
    h2 {
      color: #fff;
      font-size: 7vw;
      z-index: 100000;
      user-select: none;
      pointer-events: none;
      text-shadow: 0 20px 30px rgba(0,0,0,0.25);
      font-family: 'Belanosima', sans-serif;
    }
  }
</style>