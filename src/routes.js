// import login from "./pages/login.vue";
// import home from "./pages/Home.vue";
import index from "./pages/index.vue"

import buttons from "./pages/buttons.vue"
import cards from './pages/cards.vue'

// custom utilities
import utilities_animation from './pages/utilities-animation.vue'
import utilities_border from './pages/utilities-border.vue'
import utilities_color from './pages/utilities-color.vue'
import utilities_other from './pages/utilities-other.vue'

// pages
import login from './pages/login.vue'
import register from './pages/register.vue'


import blank from './pages/blank.vue'
import charts from './pages/charts.vue'
import forgot_password from './pages/forgot-password.vue'


import tables from './pages/tables.vue'



let route_config = [
  ['/', index],
  ['/Dashboard', index],

  // demo pages
  ['/buttons', buttons],
  ['/cards', cards],

  // custom utilities
  ['/colors', utilities_color],
  ['/border', utilities_border],
  ['/animations', utilities_animation],
  ['/other', utilities_other],

  // pages
  ['/login', login],

  ['/blank',blank],
  ['/charts',charts],
  ['/forgot_password',forgot_password],
  ['/login',login],
  ['/register',register],
  ['/tables',tables],
  ['/utilities_animation',utilities_animation],
  ['/utilities_border',utilities_border],
  ['/utilities_color',utilities_color],
  ['/utilities_other',utilities_other],
]

let trans_route_config = route_config.map( x => {
  return {path: x[0], component:x[1] }
})

export default trans_route_config
