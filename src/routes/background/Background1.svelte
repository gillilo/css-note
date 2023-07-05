<!-- CSS Only 3D Animated Skyscraper | CSS Animation Effects -->
<!-- https://www.youtube.com/watch?v=Bdk7K7krq78 -->
<div class="body">


  <div id="city">

    <div class="skyscrapper one" style="--clr:#eee">
      <div class="top"></div>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="bottom"></div>
    </div>
    
    <div class="skyscrapper two" style="--clr:#ffd3e0">
      <div class="top"></div>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="bottom"></div>
    </div>
    
    <div class="skyscrapper three" style="--clr:#d3ffe4">
      <div class="top"></div>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="bottom"></div>
    </div>
    
    <div class="skyscrapper four" style="--clr:#d6c7ff">
      <div class="top"></div>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="bottom"></div>
    </div>
    
    <div class="skyscrapper five" style="--clr:#fdffd3">
      <div class="top"></div>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="bottom"></div>
    </div>
    
    <div class="skyscrapper six" style="--clr:#bdfff6">
      <div class="top"></div>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="bottom"></div>
    </div>
    
    <div class="skyscrapper seven" style="--clr:#feffa0">
      <div class="top"></div>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="bottom"></div>
    </div>
    
    <div class="skyscrapper eight" style="--clr:#d8e9ff">
      <div class="top"></div>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="bottom"></div>
    </div>
    
    <div class="skyscrapper nine" style="--clr:#ffe9d3">
      <div class="top"></div>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="bottom"></div>
    </div>

  </div>


</div>

<style lang="scss">
  .skyscrapper {
    --clr: #eee;
  }

  @keyframes animate {
    0% {
      transform: rotateX(-30deg) rotateY(360deg);
    }
    100% {
      transform: rotateX(-30deg) rotateY(0deg);
    }
  }
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
    background: linear-gradient(45deg, #833434, #064667);
  }
  #city {
    position: relative;
    transform-style: preserve-3d;
    animation: animate 10s linear infinite;
    .skyscrapper {
      position: relative;
      width: 200px;
      height: 600px;
      transform-style: preserve-3d;
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        span {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-shadow: inset 0 0 25px rgba(0,0,0,0.25);
          background-color: #fff;
        }
        span:nth-child(1) {
          transform: rotateY(0deg) translate3d(0,0,100px);

          background: 
          linear-gradient(to bottom, transparent 50%, var(--clr) 50%), 
          linear-gradient(to right, #999 50%, var(--clr) 50%);
          background-size: 6px 6px;
        }
        span:nth-child(2) {
          transform: rotateY(90deg) translate3d(0,0,100px);

          background: 
          linear-gradient(to right, #999 50%, var(--clr) 50%);
          background-size: 6px 6px;
        }
        span:nth-child(3) {
          transform: rotateY(180deg) translate3d(0,0,100px);

          background: 
          linear-gradient(to bottom, transparent 50%, var(--clr) 50%), 
          linear-gradient(to right, #999 50%, var(--clr) 50%);
          background-size: 6px 6px;
        }
        span:nth-child(4) {
          transform: rotateY(270deg) translate3d(0,0,100px);

          background: 
          linear-gradient(to right, #999 50%, var(--clr) 50%);
          background-size: 6px 6px;
        }
      }
      .top {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        background: var(--clr);
        transform: rotateX(90deg) translateZ(100px);
        box-shadow: inset 0 0 150px rgba(0,0,0,0.35),
        inset 0 0 0 5px rgba(0,0,0,0.25);
      }
      .bottom {
        position: absolute;
        left: -25px;
        width: 250px;
        height: 250px;
        background: var(--clr);
        transform: rotateX(90deg) translateZ(-480px);
        border: 4px solid var(--clr);
      }
    }
    .two {
      position: absolute;
      top: 0;
      left: -300px;
      transform-origin: bottom;
      transform: translateZ(-100px) scaleY(1.25);
    }
    .three {
      position: absolute;
      top: 0;
      left: -300px;
      transform-origin: bottom;
      transform: translateZ(-400px) scaleX(0.5);
    }
    .four {
      position: absolute;
      top: 0;
      left: 300px;
      transform-origin: bottom;
      transform: translateZ(50px) scaleY(1.15);
    }
    .five {
      position: absolute;
      top: 0;
      left: 100px;
      transform-origin: bottom;
      transform: translateZ(-600px) scaleY(1.75);
    }
    .six {
      position: absolute;
      top: 0;
      left: 100px;
      transform-origin: bottom;
      transform: translateZ(600px) scaleY(1.25);
    }
    .seven {
      position: absolute;
      top: 0;
      left: 500px;
      transform-origin: bottom;
      transform: translateZ(400px) scaleY(0.5);
    }
    .eight {
      position: absolute;
      top: 0;
      left: 500px;
      transform-origin: bottom;
      transform: translateZ(-400px) scaleY(2);
    }
    .nine {
      position: absolute;
      top: 0;
      left: -500px;
      transform-origin: bottom;
      transform: translateZ(450px) scaleY(2);
    }
  }
  #city::before {
    content: '';
    position: absolute;
    top: -150vh;
    left: 0;
    width: 400vh;
    height: 400vh;
    background: linear-gradient(45deg, #833434, #064667);
    transform: translate(-50%, 250px) rotateX(90deg);
  }
</style>