<script>
  import { link } from "svelte-spa-router"

  const menus = [
    { href: '/ex1', name: 'CSS Only 3D Animated Skyscraper | CSS Animation Effects'},
    { href: '/ex2', name: 'CSS Only Animated Background Particles Effects | Html CSS Animation'},
    { href: '/ex3', name: 'CSS Only Clarity Glass Animation Effects'},
    { href: '/ex4', name: 'How to Create Random Website Background Generator using CSS & Javascript | Anime.js'},
    { href: '/ex5', name: 'Happy Holi | Animation Effects using Html CSS & Javascript'},
    { href: '/ex6', name: 'CSS Text Animation Effects | Infinite Ticker'},
    { href: '/ex7', name: 'Animating Clip-path using CSS and Vanilla Javascript'},
    { href: '/ex8', name: 'CSS Animation Effects'},
    { href: '/ex9', name: 'CSS Only Animated Backgrounds Effects'},
    { href: '/ex10', name: 'CSS Only Cubes Hover Effects'},
    
    { href: '/ex11', name: 'Javascript Menu Hover Effects | Html CSS'},
    { href: '/ex12', name: ''},
    { href: '/ex13', name: ''},
    { href: '/ex14', name: ''},
    { href: '/ex15', name: ''},
    { href: '/ex16', name: ''},
    { href: '/ex17', name: ''},
    { href: '/ex18', name: ''},
    { href: '/ex19', name: ''},
    { href: '/ex20', name: ''},
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