import Home from './Home.svelte'
import Ex1 from './Ex1.svelte'
import Ex2 from './Ex2.svelte'
import Ex3 from './Ex3.svelte'
import Ex4 from './Ex4.svelte'
import Ex5 from './Ex5.svelte'
import Ex6 from './Ex6.svelte'
import Ex7 from './Ex7.svelte'
import Ex8 from './Ex8.svelte'
import Ex9 from './Ex9.svelte'
import Ex10 from './Ex10.svelte'
import NotFound from './NotFound.svelte'

export default {
  '/': Home,
  '/ex1': Ex1,
  '/ex2': Ex2,
  '/ex3': Ex3,
  '/ex4': Ex4,
  '/ex5': Ex5,
  '/ex6': Ex6,
  '/ex7': Ex7,
  '/ex8': Ex8,
  '/ex9': Ex9,
  '/ex10': Ex10,
  '*': NotFound,
}