import Vue from "vue";
import Topbar from "./components/Topbar.vue";
import VueRouter from "vue-router";
import {
  MdButton,
  MdContent,
  MdTabs,
  MdList
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(VueRouter);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdList);
Vue.config.productionTip = false;

const linkActiveClass = "my-link-active-class";

// pass custom class to Vue Material
Vue.material.router.linkActiveClass = linkActiveClass;

const routes = [
  {
    path: "/",
    name: "TabRouter",
    component: { template: Topbar }
  }
];
// pass custom class
const router = new VueRouter({
  routes // short for `routes: routes`,
  // linkActiveClass
});

new Vue({
  router
}).$mount("#app");
