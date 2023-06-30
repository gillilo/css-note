<!-- Javascript Menu Hover Effects | Html CSS -->
<!-- https://www.youtube.com/watch?v=8saYt5fc2Pc -->
<script>
  const menus = [
    { name: 'Home', href: '/#' },
    { name: 'About', href: '/#' },
    { name: 'Services', href: '/#' },
    { name: 'Team', href: '/#' },
    { name: 'Contact', href: '/#' },
  ]

  function foo() {
    menus.map((menu) => {
      const menulist = []
      const letters = menu.name.split("")
      letters.map((char, i) => {
        i++
        const delay = i / 15
        menulist.push({char, delay})
      })
      menu.nameSpanList = menulist
    })

    console.log(menus)
  }

  foo()
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<div class="body">
  <ul class="list">
    {#each menus as menu, i}
      <li>
        <a href="#">
          {#each menu.nameSpanList as n, i}
            <span>
              <span class="out" style={`--i:${n.delay}`}>
                {n.char}
              </span>
              <span class="in" style={`--i:${n.delay}`}>
                {n.char}
              </span>
            </span>
          {/each}
        </a>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@700&display=swap');
  .body {
    font-family: 'Kanit', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #222;
    .list {
      position: relative;
      display: flex;
      flex-direction: column;
      li {
        list-style: none;
        a {
          position: relative;
          display: flex;
          font-size: 4em;
          line-height: 1em;
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
          span {
            position: relative;
            transition: 0.5s;
            overflow: hidden;
            .out {
              display: inline-flex;
            }
            .in {
              position: absolute;
              left: 0;
              color: #2aa1ff;
              transform: translateY(100%);
            }
          }
        }
        a:hover {
          span {
            .out {
              transform: translateY(-100%);
            }
            .in {
              transform: translateY(0);
            }
          }
          span:nth-child(1) .out{
            transition-delay: 0s;
          }
          span:nth-child(2) .out{
            transition-delay: 0.05s;
          }
          span:nth-child(3) .out{
            transition-delay: 0.10s;
          }
          span:nth-child(4) .out{
            transition-delay: 0.15s;
          }
          span:nth-child(5) .out{
            transition-delay: 0.20s;
          }
          span:nth-child(6) .out{
            transition-delay: 0.25s;
          }
          span:nth-child(7) .out{
            transition-delay: 0.30s;
          }
          span:nth-child(8) .out{
            transition-delay: 0.35s;
          }
          span:nth-child(1) .in{
            transition-delay: 0s;
          }
          span:nth-child(2) .in{
            transition-delay: 0.05s;
          }
          span:nth-child(3) .in{
            transition-delay: 0.10s;
          }
          span:nth-child(4) .in{
            transition-delay: 0.15s;
          }
          span:nth-child(5) .in{
            transition-delay: 0.20s;
          }
          span:nth-child(6) .in{
            transition-delay: 0.25s;
          }
          span:nth-child(7) .in{
            transition-delay: 0.30s;
          }
          span:nth-child(8) .in{
            transition-delay: 0.35s;
          }
        }
      }
    }
  }
</style>