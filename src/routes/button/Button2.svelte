<!-- Colorful Button Ripple Effects | Javascript -->
<!-- https://www.youtube.com/watch?v=jFJNR50eiXA -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="body">
  <div class="btn btn1" on:click={
    (e) => {
      let x = e.pageX - e.target.offsetLeft
      let y = e.pageY - e.target.offsetTop

      console.log(x, y)

      const ripples = document.createElement('span')
      ripples.style.left = `${x}px`
      ripples.style.top = `${y}px`
      ripples.style.position = 'absolute'
      ripples.style.border = '2px solid #fff'
      ripples.style.transform = 'translate(-50%, -50%)'
      ripples.style.pointerEvents = 'none'
      ripples.style.borderRadius = '50%'
      ripples.animate(
        [
          { 
            width: 0,
            height: 0,
          },
          { 
            width: '350px',
            height: '350px',
          },
        ],
        1200
      )
      ripples.style.borderColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16)
      ripples.style.filter = 'brightness(2)'

      document.querySelector('.btn1').appendChild(ripples)

      setTimeout(() => {
        ripples.remove()
      }, 1000)
    }
  }>Awesome</div>
</div>

<style lang="scss">
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: #222;
    gap: 20px;
    min-height: 100vh;
    .btn {
      position: relative;
      padding: 12px 40px;
      font-size: 1.05em;
      border-radius: 40px;
      background: #2f2f2f;
      color: #bbb;
      letter-spacing: 0.15em;
      text-decoration: none;
      text-transform: uppercase;
      user-select: none;
      transition: 0.5s;
      cursor: pointer;
      overflow: hidden;
      &:hover {
        color: #fff;
      }
    }
  }
</style>