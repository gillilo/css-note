<!-- Animated Login Form using HTML and CSS with Source Code -->
<!-- https://www.youtube.com/watch?v=TbLcudv0HIY -->

<!-- svelte-ignore a11y-invalid-attribute -->
<div class="body">
  <div class="container">
    <i style="--clr:#00ff0a"></i>
    <i style="--clr:#ff0055"></i>
    <i style="--clr:#fffd44"></i>
    <div class="login">
      <h2>Login</h2>
      <div class="inputBx">
        <input type="text" placeholder="Username">
      </div>
      <div class="inputBx">
        <input type="text" placeholder="Password">
      </div>
      <div class="inputBx">
        <input type="submit" value="Sign in">
      </div>
      <div class="links">
        <a href="#">Forget Password</a>
        <a href="#">Signup</a>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #111;
    .container {
      position: relative;
      width: 500px;
      height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
      .login {
        position: absolute;
        width: 300px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        h2 {
          font-size: 2em;
          color: #fff;
        }
        .inputBx {
          position: relative;
          width: 100%;
          input {
            position: relative;
            width: 100%;
            padding: 12px 20px;
            background: transparent;
            border: 2px solid #fff;
            border-radius: 40px;
            font-size: 1.2em;
            color: #fff;
            box-shadow: none;
            outline: none;
          }
          input[type="submit"] {
            background: linear-gradient(45deg, #ff357a, #fff172);
            border: none;
            cursor: pointer;
          }
          input::placeholder {
            color: rgba(255, 255, 255, 0.75);
          }
        }
        .links {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          a {
            color: #fff;
            text-decoration: none;
          }
        }
      }
      i {
        position: absolute;
        inset: 0;
        border: 3.5px solid #fff;
        transition: 0.5s;
      }
      i:nth-child(1) {
        border-radius: 35% 65% 36% 64% / 50% 48% 52% 50%;
        animation: ani 6s linear infinite;
      }
      i:nth-child(2) {
        border-radius: 50% 50% 55% 45% / 56% 66% 34% 44%;
        animation: ani 4s linear infinite;
      }
      i:nth-child(3) {
        border-radius: 62% 38% 53% 47% / 34% 66% 34% 66%;
        animation: ani2 10s linear infinite;
      }
      &:hover i {
        border: 3.5px solid var(--clr);
        filter: drop-shadow(0 0 20px var(--clr));
      }
    }
  }
  @keyframes ani {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes ani2 {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>