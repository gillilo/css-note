<!-- How to Make Youtube New to You Button in Html & CSS -->
<!-- https://www.youtube.com/watch?v=MMWXOJiC6WM -->

<div class="body">
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a href="#">
    <span>New to you</span>
  </a>
</div>

<style lang="scss">
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #0f0f0f;
    a {
      position: relative;
      text-decoration: none;
      color: white;
      background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
      padding: 14px 25px;
      border-radius: 10px;
      font-size: 1.25em;
      span {
        position: relative;
        z-index: 1;
      }
      &::before {
        content: '';
        position: absolute;
        inset: 1px;
        background: #272727;
        border-radius: 9px;
        transition: 0.5s;
      }
      &:hover::before {
        opacity: 0.7;
      }
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
        border-radius: 9px;
        transition: 0.5s;
        opacity: 0;
        filter: blur(20px);
      }
      &:hover::after {
        opacity: 1;
      }
    }
  }
</style>