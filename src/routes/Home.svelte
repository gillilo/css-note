<script>
  import { link } from "svelte-spa-router"

  const background = [
    { 
      href: '/background/1',
      name: 'CSS Only 3D Animated Skyscraper | CSS Animation Effects'
    },
    { 
      href: '/background/2', 
      name: 'CSS Only Animated Background Particles Effects | Html CSS Animation'
    },
    { 
      href: '/background/3', 
      name: 'CSS Only Clarity Glass Animation Effects'
    },
    { 
      href: '/background/4', 
      name: 'CSS Text Animation Effects | Infinite Ticker'
    },
    { 
      href: '/background/5', 
      name: 'CSS Only Animated Backgrounds Effects'
    },
    { 
      href: '/background/6', 
      name: 'CSS Animation Effects'
    },
  ]

  const interactive = [
    { 
      href: '/interactive/1', 
      name: 'How to Create Random Website Background Generator using CSS & Javascript | Anime.js'
    },
    { 
      href: '/interactive/2', 
      name: 'Happy Holi | Animation Effects using Html CSS & Javascript'
    },
    { 
      href: '/interactive/3', 
      name: 'CSS Only Cubes Hover Effects'
    },
  ]

  const scroll = [
    { 
      href: '/scroll/1', 
      name: 'Animating Clip-path using CSS and Vanilla Javascript'
    },
  ]

  const nav = [
    { 
      href: '/nav/1', 
      name: 'Javascript Menu Hover Effects | Html CSS'
    },
  ]

  const button = [
    { 
      href: '/button/1', 
      name: 'How to Make Youtube New to You Button in Html & CSS'
    },
    { 
      href: '/button/2', 
      name: 'Colorful Button Ripple Effects | Javascript'
    },
  ]

  const menus = [
    ...background,
    ...interactive,
    ...scroll,
    ...nav,
    ...button,
  ]
</script>

{#each menus as {href, name} (href)}
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