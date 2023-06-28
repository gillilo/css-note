<script>
  import { link } from "svelte-spa-router"

  const menus = [
    { href: '/ex1', name: 'CSS Only 3D Animated Skyscraper | CSS Animation Effects'},
    { href: '/ex2', name: 'CSS Only Animated Background Particles Effects | Html CSS Animation'},
    { href: '/ex3', name: 'CSS Only Clarity Glass Animation Effects'},
    { href: '/ex4', name: 'How to Create Random Website Background Generator using CSS & Javascript | Anime.js'},
    { href: '/ex5', name: 'Happy Holi | Animation Effects using Html CSS & Javascript'},
    { href: '/ex6', name: 'Ex6'},
    { href: '/ex7', name: 'Ex7'},
    { href: '/ex8', name: 'Ex8'},
    { href: '/ex9', name: 'Ex9'},
    { href: '/ex10', name: 'Ex10'},
  ]
</script>

{#each menus as {href, name} (name)}
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