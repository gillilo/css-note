<!-- Happy Holi | Animation Effects using Html CSS & Javascript -->
<!-- https://www.youtube.com/watch?v=bQzTUsMqagM -->
<script>
  let images = [
    'url(/assets/ex5/png1.png)',
    'url(/assets/ex5/png2.png)',
    'url(/assets/ex5/png3.png)',
    'url(/assets/ex5/png4.png)',
    'url(/assets/ex5/png5.png)',
    'url(/assets/ex5/png6.png)',
    'url(/assets/ex5/png7.png)',
    'url(/assets/ex5/png8.png)',
    'url(/assets/ex5/png9.png)',
  ]
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="body" on:click={(e) => {
  const x = e.pageX - e.target.offsetLeft
  const y = e.pageY - e.target.offsetTop

  const splash = document.createElement('span')
  splash.style.left = (x - 250) + 'px'
  splash.style.top = (y - 250) + 'px'
  splash.style.position = 'absolute'
  splash.style.pointerEvents = 'none'
  splash.style.width = '500px'
  splash.style.height = '500px'
  splash.style.backgroundSize = 'contain'
  splash.style.backgroundRepeat = 'no-repeat'
  splash.animate(
    [
      { opacity: 1, easing: "ease-out" },
      { opacity: 0, easing: "ease-in" },
    ],
    5200
  )
  let image = images[Math.floor(Math.random() * images.length)]
  splash.style.backgroundImage = image

  document.querySelector('.body').appendChild(splash)

  setTimeout(() => {
    splash.remove()
  }, 5000)
}}>

  <h2>Click!</h2>

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