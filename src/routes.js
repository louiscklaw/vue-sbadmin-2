// import login from "./pages/login.vue";
// import home from "./pages/Home.vue";
import index from "./pages/index.vue"

import buttons from "./pages/buttons.vue"
import cards from './pages/cards.vue'

import colors from './pages/colors.vue'
import borders from './pages/borders.vue'
import animations from './pages/animations.vue'
import other from './pages/other.vue'

let route_config = [
  ['/', index],
  ['/Dashboard', index],

  // demo pages
  ['/buttons', buttons],
  ['/cards', cards],

  ['/colors', colors],
  ['/borders', borders],
  ['/animations', animations],
  ['/other', other]
]

let trans_route_config = route_config.map( x => {
  return {path: x[0], component:x[1] }
})

export default trans_route_config
