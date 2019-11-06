// import login from "./pages/login.vue";
// import home from "./pages/Home.vue";
import index from "./pages/index.vue"

import button from "./pages/buttons.vue"
import cards from './pages/cards.vue'

let route_config = [
  ['/', index],

  // demo pages
  ['/button', button],
  ['/cards', cards]

]

let trans_route_config = route_config.map( x => {
  return {path: x[0], component:x[1] }
})

export default trans_route_config
