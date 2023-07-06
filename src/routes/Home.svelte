<script>
  import { link } from "svelte-spa-router"

  const background = [
    { 
      group: 'background',
      href: '/background/1',
      name: 'CSS Only 3D Animated Skyscraper | CSS Animation Effects'
    },
    { 
      group: 'background',
      href: '/background/2', 
      name: 'CSS Only Animated Background Particles Effects | Html CSS Animation'
    },
    { 
      group: 'background',
      href: '/background/3', 
      name: 'CSS Only Clarity Glass Animation Effects'
    },
    { 
      group: 'background',
      href: '/background/4', 
      name: 'CSS Text Animation Effects | Infinite Ticker'
    },
    { 
      group: 'background',
      href: '/background/5', 
      name: 'CSS Only Animated Backgrounds Effects'
    },
    { 
      group: 'background',
      href: '/background/6', 
      name: 'CSS Animation Effects'
    },
  ]

  const interactive = [
    { 
      group: 'interactive',
      href: '/interactive/1', 
      name: 'How to Create Random Website Background Generator using CSS & Javascript | Anime.js'
    },
    { 
      group: 'interactive',
      href: '/interactive/2', 
      name: 'Happy Holi | Animation Effects using Html CSS & Javascript'
    },
    { 
      group: 'interactive',
      href: '/interactive/3', 
      name: 'CSS Only Cubes Hover Effects'
    },
  ]

  const scroll = [
    { 
      group: 'scroll',
      href: '/scroll/1', 
      name: 'Animating Clip-path using CSS and Vanilla Javascript'
    },
  ]

  const nav = [
    { 
      group: 'nav',
      href: '/nav/1', 
      name: 'Javascript Menu Hover Effects | Html CSS'
    },
  ]

  const button = [
    { 
      group: 'button',
      href: '/button/1', 
      name: 'How to Make Youtube New to You Button in Html & CSS'
    },
    { 
      group: 'button',
      href: '/button/2', 
      name: 'Colorful Button Ripple Effects | Javascript'
    },
  ]

  const page = [
    { 
      group: 'page',
      href: '/page/login/1', 
      name: 'Animated Login Form using HTML and CSS with Source Code'
    },
  ]

  const component = [
    { 
      group: 'component',
      href: '/component/1', 
      name: 'CSS Rank List UI Design with Hover Effect | Html CSS'
    },
  ]

  const menus = [
    ...background,
    ...interactive,
    ...scroll,
    ...nav,
    ...button,
    ...page,
  ]
</script>

{#each background as {href, name, group}, i (href)}
{#if i == 0}
  <h3>{group}</h3>
{/if}
<div>
  <a 
    use:link
    {href}>
    {name}
  </a>
</div>
{/each}
<br /><hr /><br />
{#each interactive as {href, name, group}, i (href)}
{#if i == 0}
  <h3>{group}</h3>
{/if}
<div>
  <a 
    use:link
    {href}>
    {name}
  </a>
</div>
{/each}
<br /><hr /><br />
{#each scroll as {href, name, group}, i (href)}
{#if i == 0}
  <h3>{group}</h3>
{/if}
<div>
  <a 
    use:link
    {href}>
    {name}
  </a>
</div>
{/each}
<br /><hr /><br />
{#each nav as {href, name, group}, i (href)}
{#if i == 0}
  <h3>{group}</h3>
{/if}
<div>
  <a 
    use:link
    {href}>
    {name}
  </a>
</div>
{/each}
<br /><hr /><br />
{#each button as {href, name, group}, i (href)}
{#if i == 0}
  <h3>{group}</h3>
{/if}
<div>
  <a 
    use:link
    {href}>
    {name}
  </a>
</div>
{/each}
<br /><hr /><br />
{#each page as {href, name, group}, i (href)}
{#if i == 0}
  <h3>{group}</h3>
{/if}
<div>
  <a 
    use:link
    {href}>
    {name}
  </a>
</div>
{/each}
<br /><hr /><br />
{#each component as {href, name, group}, i (href)}
{#if i == 0}
  <h3>{group}</h3>
{/if}
<div>
  <a 
    use:link
    {href}>
    {name}
  </a>
</div>
{/each}

<style lang="scss">

</style>