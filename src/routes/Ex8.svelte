<!-- CSS Animation Effects -->
<!-- https://www.youtube.com/watch?v=eDO4bexiZ5g -->

<div class="body">
  <div class="container">
    <div class="box" style="--i:1"></div>
    <div class="box" style="--i:2"></div>
    <div class="box" style="--i:3"></div>
  </div>
</div>

<style lang="scss">
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #000;
    .container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 40px;
      -webkit-box-reflect: below 2px linear-gradient(transparent, #0004);
      .box {
        position: relative;
        width: 200px;
        height: 200px;
        background: 
        linear-gradient(45deg, #00f376 10%, transparent 10%, transparent 50%, #00f376 50%, #00f376 60%, transparent 60%, transparent 100%), 
        linear-gradient(135deg, #00f37666 10%, transparent 10%, transparent 50%, #00f37666 50%, #00f37666 60%, transparent 60%, transparent 100%);
        background-size: 40px 40px;
        filter: hue-rotate(calc(var(--i) * 90deg));
        transform: rotate(calc(var(--i) * 90deg));
        animation: ani 1s linear infinite;
      }
    }
  }
  @keyframes ani {
    0% {
      background-position: 40px;
    }
    100% {
      background-position: 0px;
    }
  }
</style>