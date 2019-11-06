import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import Routes from "./routes";
Vue.use(VueRouter);
const router = new VueRouter({ routes: Routes, mode: "history" });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");


// init global components
import init_components from './init_components'
init_components.initComponents()