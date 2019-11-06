import Vue from "vue";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// bars

// components



import sidebarDivider from "./components/sidebarDivider.vue";
import sidebarHeading from "./components/sidebarHeading.vue";
import sidebarBrand from "./components/sidebarBrand.vue";
import sidebarToggler from "./components/sidebarToggler.vue";

import navitem from "./components/navitem.vue";

// modal
import logoutModal from "./components/logoutModal.vue";
import scrollToTop from './components/scrollToTop.vue';


// debug
import testComp from "./components/testComp.vue";

let component_list = {
  // bars

  // components


  "sidebar-divider": sidebarDivider,
  "sidebar-heading": sidebarHeading,
  "sidebar-brand": sidebarBrand,
  "sidebar-toggler": sidebarToggler,
  "scroll-to-top": scrollToTop,

  navitem: navitem,

  // modals
  "logout-modal": logoutModal,

  // debug
  testcomp: testComp
};

// function initFontAwesome() {
//   library.add(faUserSecret);
//   Vue.component("font-awesome-icon", FontAwesomeIcon);
// }

function initComponents() {
  for (let comp in component_list) {
    Vue.component(comp, component_list[comp]);
  }
}

export default {
  initComponents() {
    // initFontAwesome();
    initComponents();
  }
};
