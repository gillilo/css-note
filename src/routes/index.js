import Home from './Home.svelte'

import Background1 from './background/Background1.svelte'
import Background2 from './background/Background2.svelte'
import Background3 from './background/Background3.svelte'
import Background4 from './background/Background4.svelte'
import Background5 from './background/Background5.svelte'
import Background6 from './background/Background6.svelte'

import Interactive1 from './interactive/Interactive1.svelte'
import Interactive2 from './interactive/Interactive2.svelte'
import Interactive3 from './interactive/Interactive3.svelte'

import Scroll1 from './scroll/Scroll1.svelte'

import Nav1 from './nav/Nav1.svelte'

import Button1 from './button/Button1.svelte'
import Button2 from './button/Button2.svelte'

import Login1 from './page/Login1.svelte'

import Component1 from './component/Component1.svelte'

import NotFound from './NotFound.svelte'


export default {
  '/': Home,

  '/background/1': Background1,
  '/background/2': Background2,
  '/background/3': Background3,
  '/background/4': Background4,
  '/background/5': Background5,
  '/background/6': Background6,

  '/interactive/1': Interactive1,
  '/interactive/2': Interactive2,
  '/interactive/3': Interactive3,

  '/scroll/1': Scroll1,

  '/nav/1': Nav1,

  '/button/1': Button1,
  '/button/2': Button2,

  '/page/login/1': Login1,

  '/component/1': Component1,
  
  '*': NotFound,
}