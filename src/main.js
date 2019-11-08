import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;

import VueRouter from "vue-router";
import Routes from "./routes";
Vue.use(VueRouter);
const router = new VueRouter({ routes: Routes, mode: "history" });

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");


// init global components
import init_components from './init_components'
init_components.initComponents()