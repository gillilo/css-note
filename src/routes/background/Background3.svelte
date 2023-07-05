<!-- CSS Only Clarity Glass Animation Effects -->
<!-- https://www.youtube.com/watch?v=UpWNcfag7OQ -->
<div class="body">


  <div class="circle"></div>
  <div class="glass">
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
    <div class="layer"></div>
  </div>




</div>

<style lang="scss">
  @keyframes animate {
    0%, 100% {
      transform: translateX(-700px);
    }
    50% {
      transform: translateX(700px);
    }
  }
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #161623;
    overflow: hidden;
    .circle {
      position: absolute;
      width: 400px;
      height: 400px;
      background: linear-gradient(#03a9f4, #23ff2c);
      border-radius: 50%;
      animation: animate 7s ease-in-out infinite;
    }
    .glass {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .layer {
        position: relative;
        width: 30px;
        height: 100vh;
        margin: 1px;
        box-shadow: 0 5px 25px rgba(0,0,0,0.15);
        backdrop-filter: blur(30px);
      }
      .layer:nth-child(4n+1) {
        backdrop-filter: blur(10px);
      }
      .layer:nth-child(4n+2) {
        backdrop-filter: blur(50px);
      }
      .layer:nth-child(4n+3) {
        backdrop-filter: blur(30px);
      }
      .layer:nth-child(4n+4) {
        backdrop-filter: blur(20px);
      }
    }
  }
</style>